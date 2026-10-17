const fs = require('fs');
const cheerio = require('cheerio');

async function fetchWithTimeout(url, ms = 15000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

async function scrapeAll() {
  console.log('--- 1. Fetching Sapo JSON API for Products & Collections ---');
  let productsJson = [];
  let collectionsJson = [];
  try {
    const pRes = await fetchWithTimeout('https://dolphycafe.com/products.json?limit=250');
    if (pRes.ok) {
      const data = await pRes.json();
      productsJson = data.products || [];
      console.log(`Fetched ${productsJson.length} products from JSON API`);
    }
  } catch (e) {
    console.error('Error fetching products.json:', e.message);
  }

  try {
    const cRes = await fetchWithTimeout('https://dolphycafe.com/collections.json?limit=250');
    if (cRes.ok) {
      const data = await cRes.json();
      collectionsJson = data.collections || [];
      console.log(`Fetched ${collectionsJson.length} collections from JSON API`);
    }
  } catch (e) {
    console.error('Error fetching collections.json:', e.message);
  }

  console.log('\n--- 2. Fetching all discovered HTML pages ---');
  const urls = JSON.parse(fs.readFileSync('discovered_urls.json', 'utf8'));
  const pagesData = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] Fetching ${url}...`);
    try {
      const res = await fetchWithTimeout(url);
      if (!res.ok) {
        console.warn(`  Status ${res.status} for ${url}`);
        continue;
      }
      const html = await res.text();
      const $ = cheerio.load(html);

      // Meta info
      const title = $('title').text().trim().replace(/\s+/g, ' ');
      const metaDesc = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || '';
      const ogImage = $('meta[property="og:image"]').attr('content') || '';

      // Determine page type
      let type = 'page';
      if (url === 'https://dolphycafe.com/') type = 'home';
      else if (url.includes('/tin-tuc') || url.includes('/latte-la-gi') || url.includes('/nang-cap-chat-luong') || url.includes('/sai-gon-phat-hien') || url.includes('/series-moi-ngay')) type = 'blog';
      else if (productsJson.some(p => url.endsWith('/' + p.alias))) type = 'product';
      else if (collectionsJson.some(c => url.endsWith('/' + c.alias))) type = 'collection';
      else if (url.includes('/tuyen-dung') || url.includes('/barista') || url.includes('/quan-ly')) type = 'recruitment';
      else if (url.includes('/cua-hang') || url.includes('/chi-nhanh')) type = 'store';

      // Clean HTML from scripts, styles, etc.
      $('script, style, noscript, svg, iframe').remove();

      // Extract specific content containers
      let contentHtml = '';
      let contentText = '';

      if (type === 'home') {
        // Collect homepage specific sections
        const sections = [];
        $('.taberna-shop, .middle-banner, .social-feedback, .section-blog, .taberna-top-slider').each((_, el) => {
          sections.push($(el).html());
        });
        contentHtml = sections.join('\n<hr/>\n');
        contentText = $('body').find('.taberna-top-slider, .taberna-shop, .middle-banner, .social-feedback, .section-blog')
          .text().replace(/\n\s*\n/g, '\n').trim();
      } else if (type === 'product') {
        const descEl = $('.product-description, .rte, .tab-content, #tab-1').first();
        if (descEl.length) {
          contentHtml = descEl.html();
          contentText = descEl.text().replace(/\n\s*\n/g, '\n').trim();
        }
      } else {
        const candidateSelectors = [
          '.content-page',
          '.page-body',
          '.article-content',
          '.article-detail',
          '.blog_content',
          '.content',
          '.rte',
          '.main-container',
          'main'
        ];
        for (const sel of candidateSelectors) {
          const el = $(sel).first();
          if (el.length) {
            const txt = el.text().trim();
            if (txt.length > contentText.length) {
              contentHtml = el.html();
              contentText = txt.replace(/\n\s*\n/g, '\n').trim();
            }
          }
        }
      }

      // Fallback if contentText is too short: grab main section or body minus header/footer
      if (contentText.length < 50) {
        const clone = $('body').clone();
        clone.find('header, footer, nav, .navigation, .menu, .top-main-menu, .bottom-footer, .info-footer, .fb-customerchat').remove();
        contentText = clone.text().replace(/\n\s*\n/g, '\n').trim();
        contentHtml = clone.html() || '';
      }

      // Extract images in content
      const images = [];
      const $content = cheerio.load(contentHtml || html);
      $content('img').each((_, img) => {
        let src = $(img).attr('src') || $(img).attr('data-src') || '';
        if (src) {
          if (src.startsWith('//')) src = 'https:' + src;
          const alt = $(img).attr('alt') || '';
          if (!src.includes('facebook') && !src.includes('google') && !src.includes('analytics')) {
            images.push({ src, alt });
          }
        }
      });

      pagesData.push({
        url,
        type,
        title,
        metaDesc,
        ogImage: ogImage.startsWith('//') ? 'https:' + ogImage : ogImage,
        contentHtml,
        contentText,
        images
      });

      console.log(`  -> Title: "${title}", Content length: ${contentText.length} chars, Images: ${images.length}`);
    } catch (err) {
      console.error(`  Error scraping ${url}:`, err.message);
    }
  }

  // Save raw data
  const result = {
    scrapedAt: new Date().toISOString(),
    website: 'https://dolphycafe.com/',
    productsApi: productsJson,
    collectionsApi: collectionsJson,
    pages: pagesData
  };

  fs.writeFileSync('dolphy_scraped_raw.json', JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nFinished! Saved raw data to dolphy_scraped_raw.json (${pagesData.length} pages)`);
}

scrapeAll();

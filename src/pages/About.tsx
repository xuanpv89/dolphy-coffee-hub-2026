import React from 'react';
import { Award } from 'lucide-react';
import { brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const About: React.FC = () => {
  const { t, language } = useDolphy();

  return (
    <div className="space-y-16 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
            {t('about.tag')}
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            {t('about.title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto italic">
            {t('about.quote')}
          </p>
        </div>
      </section>

      {/* 2. Main Story & Authentic Images */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {t('about.origin_title')}
            </h2>
            <p>
              {t('about.origin_p1')}
            </p>
            <p>
              {t('about.origin_p2')}
            </p>
            <p>
              {t('about.origin_p3')}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="/images/fanpage/branch-28-thao-dien.jpg"
              alt="Dolphy Thảo Điền Corner"
              className="rounded-lg shadow border border-gray-200 dark:border-slate-800 h-60 w-full object-cover object-top"
            />
            <img
              src="/images/fanpage/academy-signature-rose-latte.jpg"
              alt="Dolphy Barista Signature Latte Art"
              className="rounded-lg shadow border border-gray-200 dark:border-slate-800 h-60 w-full object-cover mt-6"
            />
          </div>
        </div>

        {/* Magazine Award Highlight */}
        <div className="p-8 rounded-xl bg-[#f0f8ff] dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-[#f09c05] text-white flex items-center justify-center shrink-0 shadow">
            <Award size={36} />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-oswald text-xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {t('about.awards_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
              {t('about.awards_desc')}
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center text-2xl font-bold">
              ★
            </div>
            <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {t('about.mission_title')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
              {t('about.mission_desc')}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t('about.mission_sub')}
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-slate-800 text-[#f09c05] flex items-center justify-center text-2xl font-bold">
              ☀
            </div>
            <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {t('about.vision_title')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-semibold text-[#f09c05]">
              {t('about.vision_desc')}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t('about.vision_sub')}
            </p>
          </div>
        </div>

        {/* Contact info box */}
        <div id="contact" className="p-8 rounded-xl bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800">
          <h3 className="font-oswald text-xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6] mb-4">
            {t('about.contact_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            <div className="space-y-2">
              <p><strong>{language === 'vi' ? 'Đơn vị chủ quản:' : 'Operating Company:'}</strong> {t('footer.company_name')}</p>
              <p><strong>{language === 'vi' ? 'Mã số doanh nghiệp:' : 'Business Registration:'}</strong> 0313865203</p>
              <p><strong>Hotline:</strong> <a href="tel:0938084985" className="text-[#2076bd] dark:text-[#3ba0e6] font-bold">{brandInfo.hotline}</a></p>
              <p><strong>Email chính:</strong> {brandInfo.email}</p>
            </div>
            <div className="space-y-2">
              <p><strong>{language === 'vi' ? 'Trụ sở chính:' : 'Headquarters:'}</strong> {t('footer.hq_address')}</p>
              <p><strong>{language === 'vi' ? 'Học viện Dolphy Academy:' : 'Dolphy Academy:'}</strong> {language === 'vi' ? 'Trực tiếp tại quầy bar các chi nhánh Thảo Điền' : 'Live on-store bars across Thao Dien'}</p>
              <p><strong>{language === 'vi' ? 'Email tuyển dụng:' : 'Recruitment Email:'}</strong> {brandInfo.recruitmentEmail}</p>
              <p><strong>{language === 'vi' ? 'Đặt hàng online:' : 'Online Ordering:'}</strong> dolphycoffee.cukcuk.vn</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

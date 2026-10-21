import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, setIsCheckoutOpen, t, language, theme } = useDolphy();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className={`w-screen max-w-md bg-white dark:bg-[#1e293b] text-[#222222] dark:text-[#f1f5f9] shadow-2xl flex flex-col transition-colors ${
          theme === 'nordic' ? 'font-mono' :
          theme === 'vintage' ? 'font-serif bg-[#faf6f0]' :
          theme === 'roastery' ? 'font-mono bg-[#070a12]' : ''
        }`}>
          
          {/* Header */}
          <div className={`p-5 flex items-center justify-between text-white transition-colors ${
            theme === 'nordic' ? 'bg-black dark:bg-zinc-950 border-b-2 border-zinc-900 dark:border-zinc-200 text-white font-mono' :
            theme === 'vintage' ? 'bg-[#1b4d3e] border-b-2 border-[#2d6a4f] text-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'bg-[#0b1324] border-b border-cyan-500/40 text-cyan-300 font-mono shadow-[0_0_20px_rgba(2,132,199,0.2)]' :
            theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 text-white font-oswald' :
            theme === 'dark' ? 'bg-[#0F172A] border-b border-slate-700 text-[#FAEA28] font-oswald' :
            'bg-[#2076bd] border-b border-gray-100 dark:border-slate-800 text-white font-oswald'
          }`}>
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={20} className={
                theme === 'vintage' ? 'text-[#c05621]' :
                theme === 'roastery' ? 'text-cyan-400' :
                theme === 'sunset' ? 'text-amber-300' :
                theme === 'nordic' ? 'text-white' :
                'text-[#FAEA28]'
              } />
              <h2 className="text-lg font-bold uppercase tracking-wider">{t('cart.title')}</h2>
              <span className={`text-xs px-2 py-0.5 font-bold ${
                theme === 'nordic' ? 'rounded-none bg-white text-black' :
                theme === 'vintage' ? 'rounded bg-[#c05621] text-white' :
                theme === 'roastery' ? 'rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/40' :
                theme === 'dark' ? 'rounded-md bg-slate-800 text-[#FAEA28]' :
                'rounded-full bg-white/20'
              }`}>
                {cart.length} {t('cart.items_count')}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className={`w-16 h-16 mx-auto flex items-center justify-center text-3xl ${
                  theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-900 border border-zinc-900 text-black dark:text-white' :
                  theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] text-[#1b4d3e] border border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-xl bg-slate-900 text-cyan-400 border border-cyan-500/30' :
                  theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600' :
                  theme === 'dark' ? 'rounded-xl bg-slate-800 text-[#FAEA28]' :
                  'rounded-full bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  ☕
                </div>
                <h3 className="text-lg font-bold uppercase">{t('cart.empty_title')}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                  {t('cart.empty_desc')}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all ${
                    theme === 'nordic' ? 'rounded-none bg-black dark:bg-white text-white dark:text-black font-mono font-bold hover:bg-amber-600' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                    theme === 'roastery' ? 'rounded-lg bg-cyan-600 hover:bg-cyan-500 text-black font-mono font-bold' :
                    theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-oswald font-bold shadow-md' :
                    theme === 'dark' ? 'rounded bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-oswald font-bold' :
                    'rounded bg-[#2076bd] text-white font-oswald hover:bg-[#FAEA28] hover:text-slate-950'
                  }`}
                >
                  <span>{t('cart.view_shop_btn')}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.grindOption}`}
                  className={`p-3.5 flex gap-3 shadow-sm transition-colors ${
                    theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
                    theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] hover:border-[#1b4d3e] font-serif' :
                    theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] hover:border-cyan-400 font-mono' :
                    theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-white hover:border-rose-300' :
                    theme === 'dark' ? 'rounded-lg border border-slate-700 bg-slate-900/80 hover:border-[#FAEA28]' :
                    'rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:border-[#2076bd]'
                  }`}
                >
                  <img
                    src={item.product.image || item.product.images?.[0] || '/images/prod_arabica_250g.jpg'}
                    alt={item.product.name}
                    className={`w-16 h-16 object-cover bg-gray-50 dark:bg-slate-900 shrink-0 ${
                      theme === 'nordic' ? 'rounded-none border border-zinc-300 dark:border-zinc-700' :
                      theme === 'sunset' ? 'rounded-xl' :
                      theme === 'roastery' ? 'rounded-lg border border-cyan-500/20' :
                      'rounded'
                    }`}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.grindOption)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      {item.grindOption && (
                        <span className={`inline-block text-[10px] px-1.5 py-0.5 mt-0.5 font-medium ${
                          theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-mono' :
                          theme === 'vintage' ? 'rounded bg-[#f2ebe0] text-[#1b4d3e] font-sans' :
                          theme === 'roastery' ? 'rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30' :
                          theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600' :
                          theme === 'dark' ? 'rounded bg-slate-800 text-[#FAEA28]' :
                          'rounded bg-blue-50 dark:bg-slate-900 text-[#2076bd] dark:text-[#3ba0e6]'
                        }`}>
                          {item.grindOption}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-slate-800">
                      <div className={`flex items-center gap-1.5 px-1.5 py-0.5 border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1]' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/30' :
                        theme === 'sunset' ? 'rounded-full border-rose-200' :
                        'rounded border-gray-200 dark:border-slate-700'
                      }`}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.grindOption || '', item.quantity - 1)}
                          className="text-gray-400 hover:text-black dark:hover:text-white"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-xs font-bold px-1.5 min-w-[16px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.grindOption || '', item.quantity + 1)}
                          className="text-gray-400 hover:text-black dark:hover:text-white"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span className={`text-sm font-bold ${
                        theme === 'nordic' ? 'text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'text-[#1b4d3e] font-serif' :
                        theme === 'roastery' ? 'text-cyan-400 font-mono drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]' :
                        theme === 'sunset' ? 'text-rose-600 font-oswald' :
                        theme === 'dark' ? 'text-[#FAEA28] font-oswald' :
                        'text-[#2076bd] dark:text-[#3ba0e6] font-oswald'
                      }`}>
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Action */}
          {cart.length > 0 && (
            <div className={`p-5 border-t space-y-4 ${
              theme === 'nordic' ? 'border-t-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
              theme === 'vintage' ? 'border-t-2 border-[#e6ded1] bg-[#f2ebe0] font-serif' :
              theme === 'roastery' ? 'border-t border-cyan-500/30 bg-[#0b1324] font-mono' :
              theme === 'sunset' ? 'border-t border-rose-100 bg-rose-50/50' :
              theme === 'dark' ? 'border-t border-slate-700 bg-slate-900' :
              'border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900'
            }`}>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>{language === 'vi' ? 'Tạm tính:' : 'Subtotal:'}</span>
                  <span className="font-bold">{cartTotal.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>{language === 'vi' ? 'Phí giao hàng:' : 'Shipping:'}</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">{language === 'vi' ? 'Miễn phí giao nội thành' : 'Free HCMC delivery'}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-200 dark:border-slate-800">
                  <span className="uppercase">{t('cart.total_label')}</span>
                  <span className={`text-lg font-bold ${
                    theme === 'nordic' ? 'text-black dark:text-white font-mono' :
                    theme === 'vintage' ? 'text-[#1b4d3e] font-serif' :
                    theme === 'roastery' ? 'text-cyan-400 font-mono' :
                    theme === 'sunset' ? 'text-rose-600 font-oswald' :
                    theme === 'dark' ? 'text-[#FAEA28] font-oswald' :
                    'text-[#2076bd] dark:text-[#3ba0e6] font-oswald'
                  }`}>
                    {cartTotal.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className={`w-full py-3.5 text-sm uppercase tracking-wider font-semibold transition-all shadow flex items-center justify-center gap-2 ${
                  theme === 'nordic' ? 'rounded-none bg-black dark:bg-white text-white dark:text-black font-mono font-bold hover:bg-amber-600' :
                  theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                  theme === 'roastery' ? 'rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
                  theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-oswald font-bold shadow-lg shadow-rose-500/25' :
                  theme === 'dark' ? 'rounded bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-oswald font-bold' :
                  'rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald'
                }`}
              >
                <span>{t('cart.checkout_btn')}</span>
                <ArrowRight size={16} />
              </button>

              <div className="text-center text-[10px] text-gray-400 dark:text-gray-500">
                🔒 {language === 'vi' ? 'Tích hợp chuyển khoản Napas247 quét mã VietQR tiện lợi, chính xác 100%.' : 'Instant encrypted Napas247 VietQR transfer support.'}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

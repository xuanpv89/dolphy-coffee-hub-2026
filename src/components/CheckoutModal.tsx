import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, Truck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartTotal, submitOrder, t, language, theme } = useDolphy();

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    note: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'vietqr' | 'cod'>('vietqr');
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone || !formData.address) {
      alert(language === 'vi' ? 'Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng.' : 'Please fill in Name, Phone, and Shipping Address.');
      return;
    }

    const order = submitOrder({
      customerName: formData.customerName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      note: formData.note,
      items: cart,
      totalAmount: cartTotal,
      paymentMethod
    });

    setCreatedOrder(order);
  };

  const handleClose = () => {
    setCreatedOrder(null);
    setIsCheckoutOpen(false);
  };

  // VietQR generation link
  const qrUrl = `https://api.vietqr.io/image/970422-0938084985-compact2.jpg?amount=${cartTotal}&addInfo=DOLPHY%20CAFE%20ORD&accountName=DOLPHY%20CAFE`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full max-w-2xl shadow-2xl overflow-hidden my-8 transition-colors ${
        theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white rounded-none border-2 border-zinc-900 dark:border-zinc-200 font-mono' :
        theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a] rounded-lg border-2 border-[#e6ded1] font-serif' :
        theme === 'roastery' ? 'bg-[#070a12] text-white rounded-xl border border-cyan-500/40 font-mono shadow-[0_0_30px_rgba(2,132,199,0.3)]' :
        theme === 'sunset' ? 'bg-white text-[#271a17] rounded-3xl border border-rose-200 shadow-2xl' :
        'bg-white dark:bg-[#1e293b] text-[#222222] dark:text-[#f1f5f9] rounded-2xl border border-blue-100 dark:border-slate-700'
      }`}>
        
        {/* Header */}
        <div className={`px-6 py-4 flex items-center justify-between text-white transition-colors ${
          theme === 'nordic' ? 'bg-black dark:bg-zinc-900 border-b-2 border-zinc-900 dark:border-zinc-200 font-mono' :
          theme === 'vintage' ? 'bg-[#1b4d3e] border-b-2 border-[#2d6a4f] text-[#faf6f0] font-serif' :
          theme === 'roastery' ? 'bg-[#0b1324] border-b border-cyan-500/40 text-cyan-300 font-mono shadow-[0_0_20px_rgba(2,132,199,0.2)]' :
          theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 to-orange-500 font-oswald' :
          'bg-[#2076bd] font-oswald'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">☕</span>
            <h3 className="text-lg font-bold uppercase tracking-wider">
              {createdOrder 
                ? (language === 'vi' ? 'ĐẶT HÀNG THÀNH CÔNG!' : 'ORDER SUCCESSFUL!')
                : t('checkout.modal_title')}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {createdOrder ? (
            <div className="text-center py-6 space-y-5">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black rounded-none' :
                theme === 'vintage' ? 'bg-[#f2ebe0] text-[#1b4d3e]' :
                theme === 'roastery' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' :
                theme === 'sunset' ? 'bg-rose-50 text-rose-600' :
                'bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h4 className={`text-2xl font-bold uppercase ${
                  theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                  theme === 'roastery' ? 'font-oswald text-cyan-300' :
                  theme === 'sunset' ? 'font-oswald text-rose-600' :
                  theme === 'nordic' ? 'font-oswald text-black dark:text-white' :
                  'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  {t('checkout.success_title')}
                </h4>
                <p className="text-sm opacity-80 mt-1">
                  {t('checkout.success_desc')}
                </p>
                <div className={`mt-3 inline-block px-4 py-1.5 font-mono font-bold text-sm border ${
                  theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' :
                  theme === 'vintage' ? 'rounded bg-[#f2ebe0] text-[#1b4d3e] border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-lg bg-cyan-950 text-cyan-400 border-cyan-500/40' :
                  theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600 border-rose-200' :
                  'rounded-full bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] border-blue-200 dark:border-slate-700'
                }`}>
                  {t('checkout.order_id_lbl')} {createdOrder.id}
                </div>
              </div>

              {createdOrder.paymentMethod === 'vietqr' && (
                <div className={`p-5 max-w-sm mx-auto shadow-sm space-y-3 ${
                  theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 font-mono' :
                  theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-white font-serif' :
                  theme === 'roastery' ? 'rounded-xl border border-cyan-500/30 bg-[#0b1324] font-mono' :
                  theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-white' :
                  'rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-700'
                }`}>
                  <div className={`flex items-center justify-center gap-2 font-bold text-sm ${
                    theme === 'vintage' ? 'text-[#1b4d3e]' :
                    theme === 'roastery' ? 'text-cyan-400' :
                    theme === 'sunset' ? 'text-rose-600' :
                    theme === 'nordic' ? 'text-black dark:text-white' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    <QrCode size={18} />
                    <span>{t('checkout.qr_title')}</span>
                  </div>
                  <img
                    src={qrUrl}
                    alt="VietQR Code Dolphy Café"
                    className="w-56 h-56 mx-auto rounded-lg border border-gray-200 dark:border-slate-700 bg-white"
                  />
                  <div className={`text-xs space-y-1 text-left p-3 border ${
                    theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white' :
                    theme === 'vintage' ? 'rounded-lg border-[#e6ded1] bg-[#f2ebe0] text-[#221e1a]' :
                    theme === 'roastery' ? 'rounded-lg border-cyan-500/20 bg-slate-900 text-slate-300' :
                    theme === 'sunset' ? 'rounded-2xl border-rose-100 bg-rose-50/50 text-[#271a17]' :
                    'rounded-lg bg-gray-50 dark:bg-slate-800/80 border-gray-100 dark:border-slate-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    <div>{t('checkout.bank_name')}</div>
                    <div>{t('checkout.bank_acc')}</div>
                    <div>{t('checkout.bank_owner')}</div>
                    <div>{language === 'vi' ? 'Số tiền:' : 'Amount:'} <strong className={
                      theme === 'vintage' ? 'text-[#1b4d3e]' :
                      theme === 'roastery' ? 'text-cyan-400' :
                      theme === 'sunset' ? 'text-rose-600' :
                      'text-[#2076bd] dark:text-[#3ba0e6]'
                    }>{createdOrder.totalAmount.toLocaleString('vi-VN')} ₫</strong></div>
                    <div>{language === 'vi' ? 'Nội dung:' : 'Reference:'} <strong>{createdOrder.id}</strong></div>
                  </div>
                  <p className="text-[11px] opacity-70 italic">
                    {language === 'vi' 
                      ? 'Sau khi quét mã thanh toán, nhân viên Dolphy sẽ gọi điện xác nhận và giao hàng trong vòng 1-2 ngày làm việc.'
                      : 'After scanning to pay, Dolphy staff will call to confirm and deliver within 1-2 business days.'}
                  </p>
                </div>
              )}

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleClose}
                  className={`px-6 py-2.5 font-bold text-sm transition-all ${
                    theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono hover:bg-amber-600' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                    theme === 'roastery' ? 'rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                    theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-oswald shadow-md' :
                    'rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white'
                  }`}
                >
                  {t('checkout.done_btn')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Items Summary Preview */}
              <div className={`p-4 space-y-2 border ${
                theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 font-mono' :
                theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-white font-serif' :
                theme === 'roastery' ? 'rounded-xl border border-cyan-500/30 bg-[#0b1324] font-mono' :
                theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-white shadow-xs' :
                'rounded-xl bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700'
              }`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider ${
                  theme === 'vintage' ? 'text-[#1b4d3e]' :
                  theme === 'roastery' ? 'text-cyan-400' :
                  theme === 'sunset' ? 'text-rose-600' :
                  theme === 'nordic' ? 'text-black dark:text-white' :
                  'text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  {t('checkout.summary_title')} ({cart.length} {t('cart.items_count')}):
                </h4>
                <div className="space-y-2 max-h-36 overflow-y-auto divide-y divide-gray-100 dark:divide-slate-800">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.grindOption}`} className="pt-1.5 flex justify-between text-xs">
                      <div>
                        <span className="font-semibold">{item.product.name}</span>
                        <span className="opacity-70 block text-[11px]">{item.grindOption} x {item.quantity}</span>
                      </div>
                      <span className={`font-bold ${
                        theme === 'vintage' ? 'text-[#1b4d3e]' :
                        theme === 'roastery' ? 'text-cyan-400' :
                        theme === 'sunset' ? 'text-rose-600' :
                        'text-[#2076bd] dark:text-[#3ba0e6]'
                      }`}>
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')} ₫
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-slate-700 flex justify-between text-sm font-bold">
                  <span>{t('cart.total_label')}</span>
                  <span className={`text-base font-bold ${
                    theme === 'vintage' ? 'text-[#1b4d3e]' :
                    theme === 'roastery' ? 'text-cyan-400' :
                    theme === 'sunset' ? 'text-rose-600' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>{cartTotal.toLocaleString('vi-VN')} ₫</span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-4">
                <h4 className={`text-sm font-bold flex items-center gap-1.5 ${
                  theme === 'vintage' ? 'text-[#1b4d3e] font-serif' :
                  theme === 'roastery' ? 'text-cyan-400 font-mono' :
                  theme === 'sunset' ? 'text-rose-600 font-oswald' :
                  theme === 'nordic' ? 'text-black dark:text-white font-mono' :
                  'text-[#2076bd] dark:text-[#3ba0e6] font-oswald'
                }`}>
                  <span>{t('checkout.customer_header')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold opacity-80 mb-1">
                      {t('checkout.name_label')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                        theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                        'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-[#2076bd]'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold opacity-80 mb-1">
                      {t('checkout.phone_label')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0938 xxx xxx"
                      className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                        theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                        'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-[#2076bd]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold opacity-80 mb-1">
                    {t('checkout.email_label')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                      theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                      theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif' :
                      theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                      theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                      'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-[#2076bd]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold opacity-80 mb-1">
                    {t('checkout.address_label')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder={language === 'vi' ? 'Số nhà, tên đường, phường, quận, TP...' : 'Street address, ward, district, city...'}
                    className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                      theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                      theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif' :
                      theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                      theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                      'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-[#2076bd]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold opacity-80 mb-1">
                    {t('checkout.note_label')}
                  </label>
                  <input
                    type="text"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder={language === 'vi' ? 'Giao giờ hành chính, gọi trước khi giao...' : 'Office hours delivery, call before arrival...'}
                    className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                      theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                      theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif' :
                      theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                      theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                      'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-[#2076bd]'
                    }`}
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <h4 className={`text-sm font-bold ${
                  theme === 'vintage' ? 'text-[#1b4d3e] font-serif' :
                  theme === 'roastery' ? 'text-cyan-400 font-mono' :
                  theme === 'sunset' ? 'text-rose-600 font-oswald' :
                  theme === 'nordic' ? 'text-black dark:text-white font-mono' :
                  'text-[#2076bd] dark:text-[#3ba0e6] font-oswald'
                }`}>
                  {t('checkout.payment_header')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setPaymentMethod('vietqr')}
                    className={`cursor-pointer p-3.5 border flex items-center gap-3 transition-all ${
                      theme === 'nordic' ? 'rounded-none' :
                      theme === 'vintage' ? 'rounded-lg' :
                      theme === 'roastery' ? 'rounded-xl' :
                      theme === 'sunset' ? 'rounded-2xl' : 'rounded-xl'
                    } ${
                      paymentMethod === 'vietqr'
                        ? (theme === 'nordic' ? 'border-black dark:border-white ring-2 ring-black dark:ring-white bg-zinc-100 dark:bg-zinc-800' :
                           theme === 'vintage' ? 'border-[#1b4d3e] ring-2 ring-[#1b4d3e] bg-[#f2ebe0]' :
                           theme === 'roastery' ? 'border-cyan-400 ring-2 ring-cyan-400 bg-slate-900' :
                           theme === 'sunset' ? 'border-rose-500 ring-2 ring-rose-500 bg-rose-50' :
                           'border-[#2076bd] bg-blue-50/50 dark:bg-slate-800 ring-2 ring-[#2076bd]')
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'vietqr'}
                      onChange={() => setPaymentMethod('vietqr')}
                      className="accent-[#2076bd]"
                    />
                    <div>
                      <div className="font-bold text-xs flex items-center gap-1.5">
                        <QrCode size={16} className={
                          theme === 'vintage' ? 'text-[#1b4d3e]' :
                          theme === 'roastery' ? 'text-cyan-400' :
                          theme === 'sunset' ? 'text-rose-600' :
                          'text-[#2076bd] dark:text-[#3ba0e6]'
                        } />
                        <span>{t('checkout.pay_vietqr')}</span>
                      </div>
                      <div className="text-[11px] opacity-70">{t('checkout.pay_vietqr_sub')}</div>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`cursor-pointer p-3.5 border flex items-center gap-3 transition-all ${
                      theme === 'nordic' ? 'rounded-none' :
                      theme === 'vintage' ? 'rounded-lg' :
                      theme === 'roastery' ? 'rounded-xl' :
                      theme === 'sunset' ? 'rounded-2xl' : 'rounded-xl'
                    } ${
                      paymentMethod === 'cod'
                        ? (theme === 'nordic' ? 'border-black dark:border-white ring-2 ring-black dark:ring-white bg-zinc-100 dark:bg-zinc-800' :
                           theme === 'vintage' ? 'border-[#1b4d3e] ring-2 ring-[#1b4d3e] bg-[#f2ebe0]' :
                           theme === 'roastery' ? 'border-cyan-400 ring-2 ring-cyan-400 bg-slate-900' :
                           theme === 'sunset' ? 'border-rose-500 ring-2 ring-rose-500 bg-rose-50' :
                           'border-[#2076bd] bg-blue-50/50 dark:bg-slate-800 ring-2 ring-[#2076bd]')
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-[#2076bd]"
                    />
                    <div>
                      <div className="font-bold text-xs flex items-center gap-1.5">
                        <Truck size={16} className={
                          theme === 'vintage' ? 'text-[#1b4d3e]' :
                          theme === 'roastery' ? 'text-cyan-400' :
                          theme === 'sunset' ? 'text-rose-600' :
                          'text-[#2076bd] dark:text-[#3ba0e6]'
                        } />
                        <span>{t('checkout.pay_cod')}</span>
                      </div>
                      <div className="text-[11px] opacity-70">{t('checkout.pay_cod_sub')}</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 text-sm uppercase tracking-wider font-semibold shadow-lg transition-all ${
                    theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono font-bold hover:bg-amber-600' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                    theme === 'roastery' ? 'rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
                    theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-oswald shadow-lg shadow-rose-500/25' :
                    'rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald'
                  }`}
                >
                  {t('checkout.submit_btn')} ({cartTotal.toLocaleString('vi-VN')} ₫)
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

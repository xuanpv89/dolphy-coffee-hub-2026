import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, Truck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartTotal, submitOrder, t, language } = useDolphy();

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
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1e293b] text-[#222222] dark:text-[#f1f5f9] rounded-2xl shadow-2xl overflow-hidden border border-blue-100 dark:border-slate-700 my-8 transition-colors">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#2076bd] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">☕</span>
            <h3 className="font-oswald text-lg font-bold uppercase tracking-wider">
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
              <div className="w-16 h-16 bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h4 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {t('checkout.success_title')}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {t('checkout.success_desc')}
                </p>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] font-mono font-bold text-sm border border-blue-200 dark:border-slate-700">
                  {t('checkout.order_id_lbl')} {createdOrder.id}
                </div>
              </div>

              {createdOrder.paymentMethod === 'vietqr' && (
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-700 max-w-sm mx-auto shadow-sm space-y-3">
                  <div className="flex items-center justify-center gap-2 font-bold text-sm text-[#2076bd] dark:text-[#3ba0e6]">
                    <QrCode size={18} />
                    <span>{t('checkout.qr_title')}</span>
                  </div>
                  <img
                    src={qrUrl}
                    alt="VietQR Code Dolphy Café"
                    className="w-56 h-56 mx-auto rounded-lg border border-gray-200 dark:border-slate-700 bg-white"
                  />
                  <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1 text-left bg-gray-50 dark:bg-slate-800/80 p-3 rounded-lg border border-gray-100 dark:border-slate-700">
                    <div>{t('checkout.bank_name')}</div>
                    <div>{t('checkout.bank_acc')}</div>
                    <div>{t('checkout.bank_owner')}</div>
                    <div>{language === 'vi' ? 'Số tiền:' : 'Amount:'} <strong className="text-[#857200] dark:text-[#FAEA28]">{createdOrder.totalAmount.toLocaleString('vi-VN')} ₫</strong></div>
                    <div>{language === 'vi' ? 'Nội dung:' : 'Reference:'} <strong>{createdOrder.id}</strong></div>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 italic">
                    {language === 'vi' 
                      ? 'Sau khi quét mã thanh toán, nhân viên Dolphy sẽ gọi điện xác nhận và giao hàng trong vòng 1-2 ngày làm việc.'
                      : 'After scanning to pay, Dolphy staff will call to confirm and deliver within 1-2 business days.'}
                  </p>
                </div>
              )}

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#2076bd] text-white font-bold text-sm hover:bg-[#165b94]"
                >
                  {t('checkout.done_btn')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Items Summary Preview */}
              <div className="bg-white dark:bg-slate-800/60 p-4 rounded-xl border border-gray-200 dark:border-slate-700 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                  {t('checkout.summary_title')} ({cart.length} {t('cart.items_count')}):
                </h4>
                <div className="space-y-2 max-h-36 overflow-y-auto divide-y divide-gray-100 dark:divide-slate-700">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.grindOption}`} className="pt-1.5 flex justify-between text-xs">
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{item.product.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 block text-[11px]">{item.grindOption} x {item.quantity}</span>
                      </div>
                      <span className="font-bold text-[#c88232]">
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')} ₫
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-slate-700 flex justify-between text-sm font-bold text-gray-900 dark:text-white">
                  <span>{t('cart.total_label')}</span>
                  <span className="text-[#c88232] text-base">{cartTotal.toLocaleString('vi-VN')} ₫</span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#2076bd] dark:text-[#3ba0e6] flex items-center gap-1.5">
                  <span>{t('checkout.customer_header')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('checkout.name_label')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('checkout.phone_label')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0938 xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('checkout.email_label')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('checkout.address_label')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder={language === 'vi' ? 'Số nhà, tên đường, phường, quận, TP...' : 'Street address, ward, district, city...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('checkout.note_label')}
                  </label>
                  <input
                    type="text"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder={language === 'vi' ? 'Giao giờ hành chính, gọi trước khi giao...' : 'Office hours delivery, call before arrival...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                  {t('checkout.payment_header')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setPaymentMethod('vietqr')}
                    className={`cursor-pointer p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      paymentMethod === 'vietqr'
                        ? 'border-[#2076bd] bg-blue-50/50 dark:bg-slate-800 ring-2 ring-[#2076bd]'
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'vietqr'}
                      onChange={() => setPaymentMethod('vietqr')}
                      className="text-[#2076bd] focus:ring-[#2076bd]"
                    />
                    <div>
                      <div className="font-bold text-xs text-gray-900 dark:text-white flex items-center gap-1.5">
                        <QrCode size={16} className="text-[#2076bd] dark:text-[#3ba0e6]" />
                        <span>{t('checkout.pay_vietqr')}</span>
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400">{t('checkout.pay_vietqr_sub')}</div>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`cursor-pointer p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#2076bd] bg-blue-50/50 dark:bg-slate-800 ring-2 ring-[#2076bd]'
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#2076bd] focus:ring-[#2076bd]"
                    />
                    <div>
                      <div className="font-bold text-xs text-gray-900 dark:text-white flex items-center gap-1.5">
                        <Truck size={16} className="text-[#2076bd] dark:text-[#3ba0e6]" />
                        <span>{t('checkout.pay_cod')}</span>
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400">{t('checkout.pay_cod_sub')}</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#2076bd] hover:bg-[#c88232] text-white font-oswald text-sm uppercase tracking-wider font-semibold shadow-lg transition-colors"
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

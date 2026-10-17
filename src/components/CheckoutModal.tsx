import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartTotal, submitOrder } = useDolphy();

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
      alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng.');
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
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-2xl shadow-2xl overflow-hidden border border-[#D4A373]/30 my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#24140A] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">☕</span>
            <h3 className="font-display text-lg font-bold">
              {createdOrder ? 'Đặt Hàng Thành Công!' : 'Xác Nhận Đặt Hàng & Thanh Toán'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {createdOrder ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-[#24140A]">Cảm Ơn Quý Khách!</h4>
                <p className="text-sm text-[#7A6E68] mt-1">
                  Đơn hàng của bạn đã được ghi nhận trên hệ thống Dolphy Coffee Hub.
                </p>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-[#FAEDCD] text-[#4A2C11] font-mono font-bold text-sm">
                  Mã Đơn Hàng: {createdOrder.id}
                </div>
              </div>

              {createdOrder.paymentMethod === 'vietqr' && (
                <div className="p-5 rounded-xl bg-white border border-[#E8E0D5] max-w-sm mx-auto shadow-sm space-y-3">
                  <div className="flex items-center justify-center gap-2 font-bold text-sm text-[#4A2C11]">
                    <QrCode size={18} />
                    <span>Mã Quét Thanh Toán VietQR</span>
                  </div>
                  <img
                    src={qrUrl}
                    alt="VietQR Code Dolphy Cafe"
                    className="w-56 h-56 mx-auto rounded-lg border border-gray-200"
                  />
                  <div className="text-xs text-gray-600 space-y-1 text-left bg-gray-50 p-3 rounded-lg">
                    <div>Ngân hàng: <strong>MB Bank (Quân Đội)</strong></div>
                    <div>Số tài khoản: <strong>0938084985</strong></div>
                    <div>Chủ tài khoản: <strong>DOLPHY CAFE</strong></div>
                    <div>Số tiền: <strong className="text-[#C0392B]">{createdOrder.totalAmount.toLocaleString('vi-VN')} ₫</strong></div>
                    <div>Nội dung: <strong>{createdOrder.id}</strong></div>
                  </div>
                  <p className="text-[11px] text-gray-500 italic">
                    Sau khi quét mã thanh toán, nhân viên Dolphy sẽ gọi điện xác nhận và giao hàng trong vòng 1-2 ngày làm việc.
                  </p>
                </div>
              )}

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#4A2C11] text-white font-bold text-sm hover:bg-[#7A4E27]"
                >
                  Hoàn Tất & Tiếp Tục Mua Sắm
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Items Summary Preview */}
              <div className="bg-white p-4 rounded-xl border border-[#E8E0D5] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5329]">
                  Sản phẩm đặt mua ({cart.length} loại):
                </h4>
                <div className="space-y-2 max-h-36 overflow-y-auto divide-y divide-gray-100">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.grindOption}`} className="pt-1.5 flex justify-between text-xs">
                      <div>
                        <span className="font-semibold text-gray-800">{item.product.name}</span>
                        <span className="text-gray-500 block text-[11px]">{item.grindOption} x {item.quantity}</span>
                      </div>
                      <span className="font-bold text-[#C0392B]">
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')} ₫
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-200 flex justify-between text-sm font-bold text-[#24140A]">
                  <span>Tổng thanh toán:</span>
                  <span className="text-[#C0392B] text-base">{cartTotal.toLocaleString('vi-VN')} ₫</span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#24140A] flex items-center gap-1.5">
                  <span>👤 Thông tin người nhận hàng</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0938 xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email nhận hóa đơn & cập nhật đơn hàng
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Địa chỉ giao hàng chi tiết *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Số nhà, tên đường, phường, quận, TP..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Ghi chú đơn hàng (Tùy chọn)
                  </label>
                  <input
                    type="text"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Giao giờ hành chính, gọi trước khi giao..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#24140A]">
                  💳 Phương thức thanh toán
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setPaymentMethod('vietqr')}
                    className={`cursor-pointer p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      paymentMethod === 'vietqr'
                        ? 'border-[#4A2C11] bg-[#FAEDCD]/30 ring-2 ring-[#4A2C11]'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'vietqr'}
                      onChange={() => setPaymentMethod('vietqr')}
                      className="text-[#4A2C11] focus:ring-[#4A2C11]"
                    />
                    <div>
                      <div className="font-bold text-xs text-[#24140A] flex items-center gap-1.5">
                        <QrCode size={16} className="text-[#8C5329]" />
                        <span>Chuyển Khoản VietQR</span>
                      </div>
                      <div className="text-[11px] text-gray-500">Quét mã tiện lợi, tự động điền tiền</div>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`cursor-pointer p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#4A2C11] bg-[#FAEDCD]/30 ring-2 ring-[#4A2C11]'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#4A2C11] focus:ring-[#4A2C11]"
                    />
                    <div>
                      <div className="font-bold text-xs text-[#24140A] flex items-center gap-1.5">
                        <Truck size={16} className="text-[#8C5329]" />
                        <span>Thanh Toán Khi Nhận (COD)</span>
                      </div>
                      <div className="text-[11px] text-gray-500">Nhận hàng kiểm tra rồi trả tiền</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4A2C11] to-[#8C5329] text-white font-bold text-base hover:brightness-110 shadow-lg active:scale-98 transition-all"
                >
                  Xác Nhận Đặt Hàng ({cartTotal.toLocaleString('vi-VN')} ₫)
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

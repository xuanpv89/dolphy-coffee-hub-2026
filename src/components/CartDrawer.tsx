import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, setIsCheckoutOpen } = useDolphy();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 bg-[#2076bd] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={20} className="text-[#f09c05]" />
              <h2 className="font-oswald text-lg font-bold uppercase tracking-wider">GIỎ HÀNG CỦA BẠN</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 font-oswald font-bold">
                {cart.length} món
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-[#2076bd] flex items-center justify-center text-3xl">
                  ☕
                </div>
                <h3 className="font-oswald text-lg font-bold text-[#222222] uppercase">Giỏ hàng đang trống</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Hãy khám phá các dòng cà phê hạt Arabica, Robusta hoặc combo quà tặng cao cấp của Dolphy nhé!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#2076bd] text-white text-xs font-oswald font-semibold uppercase tracking-wider hover:bg-[#f09c05] transition-colors"
                >
                  <span>XEM SẢN PHẨM NGAY</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.grindOption}`}
                  className="p-3.5 rounded-lg border border-gray-200 bg-white flex gap-3 shadow-sm hover:border-[#2076bd] transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded bg-gray-50 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-oswald text-xs font-bold text-[#222222] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.grindOption)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
                          title="Xóa món"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      {item.grindOption && (
                        <span className="inline-block text-[10px] text-[#2076bd] bg-blue-50 px-1.5 py-0.5 rounded mt-0.5 font-medium">
                          {item.grindOption}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                      <div className="flex items-center gap-1.5 border border-gray-200 rounded px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.grindOption)}
                          className="text-gray-400 hover:text-[#222222]"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-xs font-oswald font-bold px-1.5 min-w-[16px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.grindOption)}
                          className="text-gray-400 hover:text-[#222222]"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span className="font-oswald text-sm font-bold text-[#2076bd]">
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>Tạm tính:</span>
                  <span className="font-oswald font-bold">{cartTotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Phí giao hàng:</span>
                  <span className="text-green-600 font-medium">Miễn phí giao nội thành</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#222222] pt-2 border-t border-gray-200">
                  <span className="font-oswald uppercase">Tổng cộng:</span>
                  <span className="font-oswald text-lg text-[#2076bd]">
                    {cartTotal.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-sm uppercase tracking-wider font-semibold transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>TIẾN HÀNH THANH TOÁN (VIETQR)</span>
                <ArrowRight size={16} />
              </button>

              <div className="text-center text-[10px] text-gray-400">
                🔒 Tích hợp chuyển khoản Napas247 quét mã VietQR tiện lợi, chính xác 100%.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

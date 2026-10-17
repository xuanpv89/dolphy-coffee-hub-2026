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
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-[#D4A373]/20 bg-[#24140A] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="text-[#D4A373]" size={22} />
              <h2 className="font-display text-lg font-bold">Giỏ Hàng Của Bạn</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 font-mono">
                {cart.length} món
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#E5DED7] flex items-center justify-center text-3xl">
                  ☕
                </div>
                <h3 className="font-display text-lg font-bold text-[#4A2C11]">Giỏ hàng đang trống</h3>
                <p className="text-sm text-[#7A6E68] max-w-xs mx-auto">
                  Hãy khám phá các dòng cà phê hạt Arabica, Robusta hoặc combo quà tặng cao cấp của Dolphy nhé!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A2C11] text-white text-sm font-semibold hover:bg-[#7A4E27]"
                >
                  <span>Xem Sản Phẩm Ngay</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.grindOption}`}
                  className="flex gap-4 p-3.5 rounded-xl bg-white border border-[#E8E0D5] shadow-sm relative group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0] || '/images/image10.jpg'}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-[#F0EBE4] shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#24140A] truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-[#8C5329] font-medium mt-0.5">
                      {item.grindOption}
                    </div>
                    <div className="text-sm font-bold text-[#C0392B] mt-1">
                      {item.product.price.toLocaleString('vi-VN')} ₫
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#D5C9BE] rounded-lg bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.grindOption, item.quantity - 1)}
                          className="p-1 hover:bg-[#EAE4DC] text-[#4A2C11]"
                          aria-label="Giảm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#24140A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.grindOption, item.quantity + 1)}
                          className="p-1 hover:bg-[#EAE4DC] text-[#4A2C11]"
                          aria-label="Tăng"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.grindOption)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors ml-auto"
                        title="Xóa sản phẩm"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#D4A373]/20 bg-white space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm text-[#7A6E68]">
                  <span>Tạm tính:</span>
                  <span className="font-semibold text-[#24140A]">
                    {cartTotal.toLocaleString('vi-VN')} ₫
                  </span>
                </div>
                <div className="flex justify-between text-sm text-[#7A6E68]">
                  <span>Phí giao hàng:</span>
                  <span className="text-[#27AE60] font-medium">Miễn phí ship nội thành từ 300k</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#24140A] pt-2 border-t border-gray-100">
                  <span>Tổng thanh toán:</span>
                  <span className="text-xl text-[#C0392B]">
                    {cartTotal.toLocaleString('vi-VN')} ₫
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4A2C11] via-[#7A4E27] to-[#8C5329] text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-98 transition-all"
              >
                <span>Tiến Hành Đặt Hàng & Thanh Toán</span>
                <ArrowRight size={18} />
              </button>

              <div className="text-[11px] text-center text-[#8C5329]">
                🔒 Hỗ trợ thanh toán quét mã QR VietQR tự động hoặc COD khi nhận hàng.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

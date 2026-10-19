import React, { useState } from 'react';
import { X, ShoppingBag, User, Phone, MapPin, Plus, Trash2, CheckCircle2, DollarSign } from 'lucide-react';
import { productsData } from '../../data/dolphyData';
import { Order, CartItem, Product } from '../../types';

interface AddOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (order: Omit<Order, 'id' | 'createdAt' | 'status'> & { initialStatus?: Order['status'] }) => void;
  language: 'vi' | 'en';
}

export const AddOrderModal: React.FC<AddOrderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  language
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'vietqr' | 'cod'>('vietqr');
  const [orderStatus, setOrderStatus] = useState<Order['status']>('confirmed');

  // Line items state
  const [selectedItems, setSelectedItems] = useState<Array<{
    productId: string | number;
    quantity: number;
    grindOption: CartItem['grindOption'];
  }>>([
    {
      productId: productsData[0]?.id || 1,
      quantity: 1,
      grindOption: 'Hạt nguyên chất (Whole Bean)'
    }
  ]);

  if (!isOpen) return null;

  const addItemRow = () => {
    setSelectedItems(prev => [
      ...prev,
      {
        productId: productsData[0]?.id || 1,
        quantity: 1,
        grindOption: 'Hạt nguyên chất (Whole Bean)'
      }
    ]);
  };

  const removeItemRow = (index: number) => {
    if (selectedItems.length <= 1) return;
    setSelectedItems(prev => prev.filter((_, idx) => idx !== index));
  };

  const updateItemRow = (index: number, field: string, value: any) => {
    setSelectedItems(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  // Calculate order total
  const totalAmount = selectedItems.reduce((sum, item) => {
    const prod = productsData.find(p => String(p.id) === String(item.productId));
    return sum + (prod ? prod.price * item.quantity : 0);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      alert(language === 'vi' ? 'Vui lòng điền đầy đủ tên khách hàng, số điện thoại và địa chỉ giao hàng!' : 'Please fill in customer name, phone, and delivery address!');
      return;
    }

    // Build CartItems
    const cartItems: CartItem[] = selectedItems.map(item => {
      const prod = productsData.find(p => String(p.id) === String(item.productId)) || productsData[0];
      return {
        product: prod,
        quantity: item.quantity,
        grindOption: item.grindOption
      };
    });

    onSubmit({
      customerName: customerName.trim(),
      phone: phone.trim(),
      email: `${phone.trim()}@customer.dolphy.vn`,
      address: address.trim(),
      note: notes.trim(),
      items: cartItems,
      totalAmount,
      paymentMethod,
      initialStatus: orderStatus
    });

    // Reset
    setCustomerName('');
    setPhone('');
    setAddress('');
    setNotes('');
    setSelectedItems([{
      productId: productsData[0]?.id || 1,
      quantity: 1,
      grindOption: 'Hạt nguyên chất (Whole Bean)'
    }]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="font-oswald text-lg font-bold uppercase text-gray-900 dark:text-white leading-tight">
                {language === 'vi' ? 'Tạo Đơn Hàng Tại Chỗ / Qua Điện Thoại' : 'Create Order (Manual / Phone)'}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Nhập đơn hàng cà phê mộc, đồ uống hoặc combo cho khách đặt trực tiếp' : 'Input manual orders for walk-ins, phone or B2B requests'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
          
          {/* Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Tên Khách Hàng *' : 'Customer Name *'}
              </label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder={language === 'vi' ? 'Ví dụ: Anh Tuấn (Thảo Điền)' : 'e.g. David Miller'}
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Số Điện Thoại Nhận Hàng *' : 'Phone Number *'}
              </label>
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="09xx xxx xxx"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {language === 'vi' ? 'Địa Chỉ Giao Hàng hoặc Điểm Nhận *' : 'Delivery Address *'}
            </label>
            <div className="relative">
              <MapPin size={14} className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                required
                placeholder={language === 'vi' ? 'Số nhà, đường, phường, quận...' : 'Street address, district, city...'}
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
            </div>
          </div>

          {/* Product Items Selection */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-oswald uppercase tracking-wider font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <ShoppingBag size={14} className="text-[#2076bd]" />
                <span>{language === 'vi' ? 'Danh Sách Món Đặt Hàng' : 'Order Line Items'}</span>
              </span>
              <button
                type="button"
                onClick={addItemRow}
                className="px-2.5 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] text-[11px] font-bold flex items-center gap-1 transition-colors"
              >
                <Plus size={12} />
                <span>{language === 'vi' ? 'Thêm Món' : 'Add Item'}</span>
              </button>
            </div>

            <div className="space-y-2">
              {selectedItems.map((item, idx) => {
                const prod = productsData.find(p => String(p.id) === String(item.productId)) || productsData[0];
                return (
                  <div key={idx} className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 text-xs">
                    
                    {/* Product Selector */}
                    <select
                      value={item.productId}
                      onChange={e => updateItemRow(idx, 'productId', e.target.value)}
                      className="flex-1 px-2.5 py-1.5 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-[#2076bd]"
                    >
                      {productsData.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {p.price.toLocaleString('vi-VN')}₫
                        </option>
                      ))}
                    </select>

                    {/* Quantity */}
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400 text-[11px]">SL:</span>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                        onChange={e => updateItemRow(idx, 'quantity', Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-14 px-2 py-1.5 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-center font-bold text-gray-900 dark:text-white focus:outline-none"
                      />
                    </div>

                    {/* Grind Option */}
                    <select
                      value={item.grindOption}
                      onChange={e => updateItemRow(idx, 'grindOption', e.target.value)}
                      className="px-2 py-1.5 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[11px] text-gray-700 dark:text-gray-300 focus:outline-none"
                    >
                      <option value="Hạt nguyên chất (Whole Bean)">Hạt nguyên chất (Bean)</option>
                      <option value="Xay máy Espresso (Fine)">Xay Espresso (Fine)</option>
                      <option value="Xay pha Phin (Medium)">Xay Phin (Medium)</option>
                      <option value="Xay Cold Brew (Coarse)">Xay Cold Brew (Coarse)</option>
                    </select>

                    {/* Subtotal */}
                    <div className="font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6] min-w-[70px] text-right">
                      {(prod.price * item.quantity).toLocaleString('vi-VN')}₫
                    </div>

                    {/* Delete Row */}
                    {selectedItems.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItemRow(idx)}
                        className="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                        title="Xóa món này"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Total calculation banner */}
            <div className="pt-2 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-600 dark:text-gray-400">
                {language === 'vi' ? 'Tổng Tiền Đơn Hàng:' : 'Order Total:'}
              </span>
              <span className="font-mono text-base font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">
                {totalAmount.toLocaleString('vi-VN')} ₫
              </span>
            </div>
          </div>

          {/* Payment Method & Initial Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Phương Thức Thanh Toán' : 'Payment Method'}
              </label>
              <select
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value as any)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="vietqr">VietQR (Chuyển khoản MB Bank 0938084985)</option>
                <option value="cod">COD (Tiền mặt khi giao hàng)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Trạng Thái Khởi Tạo' : 'Initial Order Status'}
              </label>
              <select
                value={orderStatus}
                onChange={e => setOrderStatus(e.target.value as any)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="confirmed">{language === 'vi' ? 'Đã xác nhận (Confirmed)' : 'Confirmed'}</option>
                <option value="shipping">{language === 'vi' ? 'Đang giao hàng (Shipping)' : 'Shipping'}</option>
                <option value="completed">{language === 'vi' ? 'Hoàn thành (Đã thanh toán & giao)' : 'Completed'}</option>
                <option value="pending">{language === 'vi' ? 'Chờ xác nhận (Pending)' : 'Pending'}</option>
              </select>
            </div>
          </div>

          {/* Order Notes */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {language === 'vi' ? 'Ghi Chú Giao Hàng & Lưu Ý' : 'Delivery Notes'}
            </label>
            <input
              type="text"
              placeholder={language === 'vi' ? 'Ví dụ: Giao giờ hành chính, gọi trước 15 phút...' : 'e.g. Call before delivery...'}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {language === 'vi' ? 'Hủy Bỏ' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              <CheckCircle2 size={14} />
              <span>{language === 'vi' ? 'Lưu Đơn Hàng' : 'Create Order'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

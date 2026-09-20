import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Check, ShieldCheck, Sparkles, Trash2 } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: Product | null;
}

interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProduct ? preselectedProduct.id : FEATURED_PRODUCTS[0].id
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [itemsError, setItemsError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedProductId(preselectedProduct ? preselectedProduct.id : FEATURED_PRODUCTS[0].id);
      setQuantity(1);
      setOrderItems([]);
      setItemsError('');
    }
  }, [isOpen, preselectedProduct]);

  if (!isOpen) return null;

  const activeProduct =
    FEATURED_PRODUCTS.find((p) => p.id === selectedProductId) || FEATURED_PRODUCTS[0];
  const totalPrice = orderItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleAddToOrder = () => {
    setOrderItems((items) => [
      ...items,
      {
        id: `${activeProduct.id}-${Date.now()}`,
        product: activeProduct,
        quantity,
      },
    ]);
    setSelectedProductId(FEATURED_PRODUCTS[0].id);
    setQuantity(1);
    setItemsError('');
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((items) => items.filter((item) => item.id !== itemId));
  };

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderItems.length === 0) {
      setItemsError('Please add at least one jar to your order before continuing.');
      return;
    }

    const itemSummary = orderItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name} (${item.product.weight}) x ${item.quantity} - ₹${
            item.product.price * item.quantity
          }`
      )
      .join('\n');
    const orderDetails = encodeURIComponent(
      `*New Supravya Order Inquiry*\n\n*Order Items:*\n${itemSummary}\n\n*Grand Total:* ₹${totalPrice}\n*Name:* ${
        customerName || 'Customer'
      }\n*City/Pincode:* ${deliveryCity || 'Not specified'}\n*Special Notes:* ${
        specialInstructions || 'None'
      }\n\nPlease confirm availability and dispatch schedule!`
    );

    window.open(`https://wa.me/919818083505?text=${orderDetails}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF2E2] rounded-3xl border-2 border-[#B48448] shadow-[0_25px_60px_rgba(0,0,0,0.5)] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#8E2929] hover:bg-[#8E2929]/15 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <div className="badge-bounce inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B48448]/20 border border-[#B48448] text-xs font-sans font-bold text-[#8E2929]">
            <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
            <span className="tracking-wider uppercase">Direct Kitchen Dispatch</span>
          </div>
          <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#8E2929] tracking-tight">
            Order Fresh Jars
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#24140D]/80 font-medium">
            Packed with love in glass jars and cushioned safely for pan-India delivery.
          </p>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSendWhatsAppOrder} className="space-y-4 font-sans">
          {/* Select Product */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#8E2929] uppercase tracking-wider block">
              Choose Handcrafted Jar
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-semibold"
            >
              {FEATURED_PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.weight}) — ₹{p.price}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#B48448]/20 border-2 border-[#B48448]/40">
            <div>
              <span className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">Quantity:</span>
              <span className="text-[11.5px] text-[#24140D]/80 font-medium">Standard glass jars</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-white border-2 border-[#B48448] font-bold text-sm text-[#8E2929] flex items-center justify-center cursor-pointer hover:bg-[#FAF2E2] active:scale-95 shadow-xs"
              >
                -
              </button>
              <span className="font-bold text-base text-[#8E2929] w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-white border-2 border-[#B48448] font-bold text-sm text-[#8E2929] flex items-center justify-center cursor-pointer hover:bg-[#FAF2E2] active:scale-95 shadow-xs"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToOrder}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#B48448]/20 hover:bg-[#B48448]/35 text-[#8E2929] font-sans font-bold text-xs tracking-[0.14em] uppercase transition-colors border-2 border-[#B48448]/70 cursor-pointer"
          >
            <span>+ Add to Order</span>
          </button>

          {orderItems.length > 0 && (
            <div className="space-y-2 rounded-2xl bg-white/60 border-2 border-[#B48448]/50 p-3">
              <h3 className="text-xs font-bold text-[#8E2929] uppercase tracking-wider">Your Order</h3>
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 rounded-xl bg-[#FAF2E2] border border-[#B48448]/40 px-3 py-2">
                  <p className="min-w-0 text-xs font-sans text-[#24140D] leading-relaxed">
                    <span className="font-bold">{item.product.name}</span>{' '}
                    <span className="text-[#24140D]/70">({item.product.weight}) x {item.quantity}</span>
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-[#8E2929]">₹{item.product.price * item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 rounded-full text-[#8E2929] hover:bg-[#8E2929]/15 cursor-pointer"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {itemsError && (
            <p className="text-xs font-semibold text-[#8E2929]" role="alert">
              {itemsError}
            </p>
          )}

          {/* Customer info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-medium"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">City / Pincode</label>
              <input
                type="text"
                required
                placeholder="e.g. New Delhi - 110001"
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-medium"
              />
            </div>
          </div>

          {/* Special Notes */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">
              Special Notes / Spice Preference (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Extra spicy / gift packaging for Diwali"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-medium"
            />
          </div>

          {/* Price Breakdown */}
          <div className="p-4 rounded-2xl bg-[#FAF2E2] border-2 border-[#B48448] flex items-center justify-between shadow-xs">
            <div className="flex flex-col">
              <span className="text-xs text-[#24140D] font-bold">Estimated Total:</span>
              <span className="text-[11px] text-[#B48448] font-medium">Includes safe transit packaging</span>
            </div>
            <div className="text-right">
              <span className="font-fraunces text-2xl font-bold text-[#8E2929]">
                ₹{totalPrice}
              </span>
            </div>
          </div>

          {/* Trust points */}
          <div className="flex items-center justify-between text-[11.5px] text-[#24140D]/85 pt-1 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B48448]" /> Safe Glass Packaging
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#B48448]" /> UPI / NetBanking / COD
            </span>
          </div>

          {/* Order CTA: opens WhatsApp with pre-filled message */}
          <div className="pt-2">
            <button
              type="submit"
              id="submit-whatsapp-order-btn"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-sm tracking-[0.14em] uppercase shadow-[0_12px_25px_rgba(142,41,41,0.35)] hover:shadow-[0_16px_35px_rgba(142,41,41,0.45)] transition-all duration-200 border-2 border-[#B48448] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm & Order on WhatsApp (+91 9818083505)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

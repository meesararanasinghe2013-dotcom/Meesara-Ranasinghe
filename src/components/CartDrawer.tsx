import React from 'react';
import { X, Trash2, MessageCircle, Phone, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { FACTORY_INFO } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalPairs = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let msg = `Hello Mango Slippers (MANGO INDUSTRY),\n\nI would like to place an order for the following items:\n\n`;
    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name}\n   Size: UK ${item.selectedSize} | Color: ${item.selectedColor}\n   Qty: ${item.quantity} x LKR ${item.product.price} = LKR ${item.quantity * item.product.price}\n\n`;
    });
    msg += `Total Quantity: ${totalPairs} pair(s)\nOrder Total: LKR ${subtotal.toLocaleString()}.00\n\nPlease confirm order confirmation, payment options, and delivery to my address.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* DRAWER HEADER */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-bold text-gray-900">Your Footwear Bag</h3>
            <span className="text-xs bg-gray-100 text-gray-700 font-mono px-2 py-0.5 rounded-full font-bold">
              {totalPairs}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            aria-label="Close Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-gray-800">Your bag is empty</h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Explore our Mango Classic, vibrant colors, and slide series from Giriulla to start your order.
              </p>
              <a
                href="#collection"
                onClick={onClose}
                className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs uppercase"
              >
                Browse Catalog
              </a>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                className="flex gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 items-center"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover border border-gray-200 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 truncate">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 font-mono mt-0.5">
                    <span>UK {item.selectedSize}</span>
                    <span>•</span>
                    <span className="truncate">{item.selectedColor}</span>
                  </div>
                  <div className="text-xs font-black text-[#ea580c] mt-1 font-mono">
                    LKR {(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white px-1 py-0.5">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      className="w-5 h-5 text-gray-600 hover:text-gray-900 flex items-center justify-center font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-bold font-mono text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      className="w-5 h-5 text-gray-600 hover:text-gray-900 flex items-center justify-center font-bold text-xs"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-200"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* DRAWER FOOTER */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-[#fafaf8] space-y-4">
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Total Items:</span>
                <span className="text-gray-900 font-bold">{totalPairs} pair(s)</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Factory Location:</span>
                <span className="text-emerald-700 font-bold">MANGO INDUSTRY Giriulla</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                <span className="font-bold text-gray-900">Estimated Total:</span>
                <span className="font-black text-xl text-[#ea580c]">
                  LKR {subtotal.toLocaleString()}.00
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Checkout via WhatsApp</span>
              </a>

              <a
                href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`}
                className="w-full py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Confirm Order ({FACTORY_INFO.customerPhone})</span>
              </a>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-gray-400 hover:text-gray-600 font-medium pt-1"
              >
                Clear Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

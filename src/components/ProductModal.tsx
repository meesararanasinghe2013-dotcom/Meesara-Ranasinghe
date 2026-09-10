import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Check, ShieldCheck, Factory, Ruler } from 'lucide-react';
import { Product } from '../types';
import { FACTORY_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: number, color: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].name);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 900);
  };

  const whatsappOrderUrl = `https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=${encodeURIComponent(
    `Hello Mango Slippers,\n\nI would like to place an order for:\n- Product: ${product.name}\n- UK Size: ${selectedSize}\n- Color: ${selectedColor}\n- Quantity: ${quantity} pair(s)\n- Total Price: ${product.currency} ${(product.price * quantity).toLocaleString()}\n\nPlease confirm availability and payment/delivery details.`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE PREVIEW */}
        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6 relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-gray-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
            {product.photoLabel}
          </div>
          <div className="absolute top-3 right-12 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            Giriulla Factory Stock
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase font-mono tracking-wider">
                {product.category.toUpperCase()} FOOTWEAR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-0.5">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                {product.subtitle}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-[#ea580c]">
                {product.currency} {(product.price * quantity).toLocaleString()}.00
              </span>
              {quantity > 1 && (
                <span className="text-xs text-gray-400 block font-mono">
                  ({product.currency} {product.price} each)
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* SIZES */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700 font-mono flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-amber-500" /> Choose UK Size
              </span>
              <span className="text-xs text-gray-500 font-mono">Selected: UK {selectedSize}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-11 h-10 rounded-xl font-bold text-xs transition-all ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white ring-2 ring-amber-400 shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* COLORS */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700 font-mono block mb-2">
              Color Option: <span className="text-gray-900">{selectedColor}</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(c.name)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    selectedColor === c.name
                      ? 'border-gray-900 bg-gray-50 ring-1 ring-gray-900'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/20"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FACTORY SPEC SHEET BOX */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between text-gray-700">
              <span className="font-semibold text-gray-900">Compound:</span>
              <span>{product.specs.material}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="font-semibold text-gray-900">Sole Dimension:</span>
              <span>{product.specs.sole}</span>
            </div>
            <div className="flex justify-between text-emerald-800">
              <span className="font-bold flex items-center gap-1">
                <Factory className="w-3 h-3 text-emerald-700" /> Origin:
              </span>
              <span className="font-bold">{product.specs.origin}</span>
            </div>
          </div>

          {/* QUANTITY PICKER & ACTIONS */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 px-2 py-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg hover:bg-gray-200 text-gray-800 font-bold flex items-center justify-center text-sm"
              >
                -
              </button>
              <span className="w-10 text-center font-bold text-sm font-mono text-gray-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg hover:bg-gray-200 text-gray-800 font-bold flex items-center justify-center text-sm"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Order Bag
                </>
              )}
            </button>

            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

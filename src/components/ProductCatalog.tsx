import React, { useState } from 'react';
import { Eye, ShoppingBag, MessageCircle, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, FACTORY_INFO } from '../data/products';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: number, color: string) => void;
  activeCategoryFilter?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  activeCategoryFilter,
}) => {
  const [activeTab, setActiveTab] = useState<string>(activeCategoryFilter || 'all');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({
    'mango-classic': 8,
    'mango-color-collection': 7,
    'mango-new-collection': 6,
  });
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'mango-classic': 'Mango Yellow & Black',
    'mango-color-collection': 'Ocean Sky Blue',
    'mango-new-collection': 'Coral Suede Buckle',
  });
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  const tabs = [
    { id: 'all', label: 'All Footwear' },
    { id: 'men', label: "Men's Classic" },
    { id: 'women', label: "Women's & Slides" },
    { id: 'kids', label: "Kids' Colors" },
  ];

  const filteredProducts = activeTab === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeTab || (activeTab === 'women' && p.category === 'new'));

  const handleSizeSelect = (productId: string, size: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

  const handleQuickAdd = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const color = selectedColors[product.id] || product.colors[0].name;
    onAddToCart(product, size, color);

    setAddedAnimation(product.id);
    setTimeout(() => {
      setAddedAnimation(null);
    }, 1500);
  };

  return (
    <section id="collection" className="py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-mono">
              Authentic Footwear Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-1">
              Mango Slippers Collection
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">
              Featuring our official photographs from MANGO INDUSTRY. Explore classic two-tone, vibrant hues, and the new season slide lineup.
            </p>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];
            const currentColor = selectedColors[product.id] || product.colors[0].name;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* PHOTO CONTAINER */}
                <div 
                  className="relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.photoLabel}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                    {product.photoLabel}
                  </div>

                  {/* QUICK VIEW HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow flex items-center gap-1.5">
                      <Eye className="w-4 h-4" /> Quick View
                    </span>
                  </div>
                </div>

                {/* DETAILS CONTAINER */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2 font-medium">
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {product.category.toUpperCase()}
                      </span>
                      <span className="font-mono text-[11px]">
                        Sizes: {product.sizes[0]} - {product.sizes[product.sizes.length - 1]}
                      </span>
                    </div>

                    <h3 
                      className="text-xl font-bold text-gray-900 mb-1.5 cursor-pointer hover:text-[#ea580c] transition-colors"
                      onClick={() => onSelectProduct(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 font-medium">
                      {product.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* COLOR SELECTOR */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">
                        Colorway: <span className="text-gray-800 font-semibold">{currentColor}</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => handleColorSelect(product.id, c.name)}
                            className={`w-6 h-6 rounded-full border-2 transition-transform ${
                              currentColor === c.name 
                                ? 'scale-110 border-gray-900 ring-2 ring-amber-400' 
                                : 'border-gray-200 hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>

                    {/* SIZE SELECTOR CHIPS */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">
                        Select UK Size
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => handleSizeSelect(product.id, s)}
                            className={`w-9 h-8 rounded-lg text-xs font-bold transition-all ${
                              currentSize === s
                                ? 'bg-gray-900 text-white ring-2 ring-amber-400'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* PRICE & BUTTONS */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-gray-500 block font-mono">Retail Price</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-gray-900">
                            {product.currency} {product.price.toLocaleString()}.00
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {product.currency} {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded-md border border-emerald-100">
                        In Stock • Giriulla
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => handleQuickAdd(product)}
                        className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                          addedAnimation === product.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gradient-to-r from-amber-500 to-[#ea580c] hover:from-amber-600 hover:to-orange-700 text-white'
                        }`}
                      >
                        {addedAnimation === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added!
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
                          </>
                        )}
                      </button>
                    </div>

                    {/* DIRECT WHATSAPP INSTANT ORDER */}
                    <a
                      href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=${encodeURIComponent(
                        `Hello Mango Slippers, I would like to order: ${product.name} (Size: ${currentSize}, Color: ${currentColor}) for LKR ${product.price}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Order on WhatsApp (Instant)</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

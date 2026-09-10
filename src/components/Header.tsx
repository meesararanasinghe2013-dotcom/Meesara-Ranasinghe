import React, { useState } from 'react';
import { Phone, Star, MessageCircle, ShoppingBag, Menu, X, Factory, ShieldCheck, MapPin } from 'lucide-react';
import { FACTORY_INFO, OFFICIAL_IMAGES } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory?: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'MEN', href: '#categories', filter: 'men' },
    { name: 'WOMEN', href: '#categories', filter: 'women' },
    { name: 'KIDS', href: '#categories', filter: 'kids' },
    { name: 'PRODUCTS', href: '#collection' },
    { name: 'MANGO INDUSTRY', href: '#factory', highlight: true },
    { name: 'WHOLESALE', href: '#wholesale' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.filter && onSelectCategory) {
      onSelectCategory(link.filter);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div id="top-announcement" className="bg-[#111827] text-white text-xs font-medium py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
            <span className="font-mono text-[11px] tracking-wide text-gray-200">
              MANGO INDUSTRY • Official Footwear Factory, Giriulla, Sri Lanka 🇱🇰
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-gray-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Customer:</span>
              <a href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`} className="hover:text-white font-semibold text-amber-300">
                {FACTORY_INFO.customerPhone}
              </a>
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Factory className="w-3.5 h-3.5 text-emerald-400" />
              <span>Factory:</span>
              <a href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                {FACTORY_INFO.factoryPhone}
              </a>
            </span>
            <span className="hidden lg:inline text-gray-700">|</span>
            <a 
              href="#reviews" 
              className="hidden lg:flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{FACTORY_INFO.rating.toFixed(1)} ({FACTORY_INFO.reviewCount} Google Reviews)</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN STICKY NAVIGATION */}
      <header className="sticky top-0 z-40 glass-nav border-b border-gray-200/90 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* BRAND LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={OFFICIAL_IMAGES.logo} 
              alt="Mango Slippers Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs font-bold text-gray-700 tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className={`transition-colors py-1 ${
                  link.highlight 
                    ? 'text-emerald-700 hover:text-emerald-800 font-extrabold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200' 
                    : 'hover:text-[#ea580c]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WHATSAPP ACTION */}
            <a
              href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=Hello%20Mango%20Slippers,%20I%20would%20like%20to%20inquire%20about%20your%20footwear%20collection`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide uppercase shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* CART / BAG BUTTON */}
            <button
              id="cart-toggle-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors flex items-center justify-center"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ea580c] text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* SHOP NOW PRIMARY CTA */}
            <a
              href="#collection"
              className="hidden md:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-[#ea580c] hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Shop Now</span>
            </a>

            {/* MOBILE MENU TOGGLE */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU ACCORDION / DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[115px] z-30 bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-3 font-bold text-sm text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className={`py-2 px-3 rounded-lg transition-colors ${
                  link.highlight
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-200 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=Hello%20Mango%20Slippers`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({FACTORY_INFO.customerPhone})</span>
              </a>
              <a
                href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white font-bold text-xs uppercase"
              >
                <Factory className="w-4 h-4" />
                <span>Call Factory ({FACTORY_INFO.factoryPhone})</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

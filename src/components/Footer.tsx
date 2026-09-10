import React from 'react';
import { Phone, Factory, MapPin, MessageCircle, Facebook, Instagram, ExternalLink, Heart } from 'lucide-react';
import { FACTORY_INFO, OFFICIAL_IMAGES } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src={OFFICIAL_IMAGES.logo}
              alt="Mango Slippers Logo"
              className="h-11 w-auto object-contain brightness-0 invert"
            />
            <h4 className="text-base font-bold text-white tracking-wide font-mono">
              {FACTORY_INFO.name}
            </h4>
            <p className="text-xs text-gray-400 font-mono">
              {FACTORY_INFO.businessType}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed font-mono">
              Address: {FACTORY_INFO.googlePlusCode}<br />
              {FACTORY_INFO.address}
            </p>
            <div className="pt-2 text-xs text-gray-300 space-y-1.5 font-mono">
              <p>
                Customer Desk: <a href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`} className="text-amber-400 font-semibold hover:underline">{FACTORY_INFO.customerPhone}</a>
              </p>
              <p>
                Factory Operations: <a href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`} className="text-emerald-400 font-semibold hover:underline">{FACTORY_INFO.factoryPhone}</a>
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About MANGO INDUSTRY</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Men's Slippers</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Women's Slippers & Slides</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Kids' Slippers</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Products Catalog</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">Factory Origin (Giriulla)</a></li>
              <li><a href="#wholesale" className="hover:text-white transition-colors">Wholesale & B2B Orders</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* SOCIAL & LOCATION */}
          <div className="lg:col-span-5 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Connect & Map
            </h5>
            <p className="text-xs text-gray-400">
              Find us on official communication channels or navigate directly to our factory via Google Maps.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-white text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-700/60 hover:bg-blue-700 text-white text-xs font-semibold"
              >
                <Facebook className="w-3.5 h-3.5" /> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-pink-700/60 hover:bg-pink-700 text-white text-xs font-semibold"
              >
                <Instagram className="w-3.5 h-3.5" /> Instagram
              </a>
              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-amber-400 text-xs font-semibold border border-gray-700"
              >
                <MapPin className="w-3.5 h-3.5" /> Google Maps
              </a>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/80 border border-gray-700 text-xs text-gray-300">
              <p className="font-bold text-white mb-0.5">MANGO SLIPPERS</p>
              <p className="italic text-amber-300">
                “Comfort. Quality. Style. Proudly Made in Sri Lanka 🇱🇰”
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Mango Slippers. All Rights Reserved. Manufactured by MANGO INDUSTRY, Giriulla, Sri Lanka.</p>
          <p className="text-gray-400 font-semibold flex items-center gap-1">
            Comfort • Quality • Style
          </p>
        </div>
      </div>
    </footer>
  );
};

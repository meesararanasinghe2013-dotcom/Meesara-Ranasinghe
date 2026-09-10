import React from 'react';
import { PhoneCall, Compass, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { FACTORY_INFO } from '../data/products';

export const MadeInGiriullaSection: React.FC = () => {
  return (
    <section id="factory" className="py-16 bg-gradient-to-r from-emerald-950 via-emerald-900 to-[#0f3922] text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
            <span>Factory Origin & Manufacturing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Made in Giriulla, Sri Lanka 🇱🇰
          </h2>

          <p className="text-emerald-100/90 text-base sm:text-lg mt-4 leading-relaxed">
            Crafted in Ihala Narangamuwa, Giriulla. MANGO INDUSTRY brings together authentic Sri Lankan raw rubber, durable injection molding, and disciplined footwear fabrication to serve customers, retailers, and wholesale partners nationwide.
          </p>

          {/* Quick Technical Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="text-xs text-amber-300 font-mono block">Plant Facility</span>
              <p className="text-sm font-bold text-white mt-0.5">Ihala Narangamuwa</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="text-xs text-amber-300 font-mono block">Material Grade</span>
              <p className="text-sm font-bold text-white mt-0.5">Natural Ceylon Rubber</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="text-xs text-amber-300 font-mono block">Factory Phone</span>
              <p className="text-sm font-bold text-white mt-0.5">{FACTORY_INFO.factoryPhone}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Factory Directly</span>
            </a>
            <a
              href="#map"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider border border-emerald-600/60 transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Directions to Giriulla</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Navigation2, Phone, Map, MapPin } from 'lucide-react';
import { FACTORY_INFO } from '../data/products';

export const GoogleMapsSection: React.FC = () => {
  return (
    <section id="map" className="py-20 bg-[#fafaf8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-mono">
            Factory Coordinates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-1">
            Find Mango Industry
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Visit the real footwear manufacturing center in Giriulla, Sri Lanka.
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
          {/* Interactive Embed */}
          <div className="w-full h-[460px] relative bg-slate-100">
            <iframe
              title="MANGO INDUSTRY Google Maps Location"
              src="https://maps.google.com/maps?q=84M5%2B33Q%2C%20Giriulla%2C%20Sri%20Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Info Overlay Card */}
            <div className="absolute top-6 left-6 max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 status-pulse"></span>
                <span className="text-xs font-bold uppercase text-gray-600 font-mono">Active Shoe Factory</span>
              </div>
              <h3 className="text-base font-extrabold text-gray-900">{FACTORY_INFO.name}</h3>
              <p className="text-xs text-gray-600">{FACTORY_INFO.businessType}</p>
              <p className="text-xs font-medium text-gray-800 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                {FACTORY_INFO.googlePlusCode}
              </p>
            </div>
          </div>

          {/* DETAILS & ACTION BUTTONS STRIP */}
          <div className="p-6 sm:p-8 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900">{FACTORY_INFO.name}</h4>
              <p className="text-xs text-gray-600 font-mono">
                {FACTORY_INFO.businessType} • {FACTORY_INFO.googlePlusCode}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ea580c] hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow"
              >
                <Navigation2 className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow"
              >
                <Phone className="w-4 h-4" />
                <span>CALL FACTORY</span>
              </a>

              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Map className="w-4 h-4" />
                <span>VIEW ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

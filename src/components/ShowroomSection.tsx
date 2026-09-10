import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { FACTORY_INFO, OFFICIAL_IMAGES } from '../data/products';

export const ShowroomSection: React.FC = () => {
  return (
    <section id="showroom" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#fafaf8] border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT TEXT & ACTIONS */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-mono">
                Direct Retail & Sampling
              </span>
              <h2 className="text-3xl font-extrabold text-[#111827]">
                Visit Our Flagship Showroom
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Step into our Giriulla showroom to feel the premium Sri Lankan rubber density, test your fit, and explore our newest seasonal collections in person. Retail buyers, local families, and wholesale partners are warmly welcome.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold text-gray-900">Ihala Narangamuwa</p>
                    <p className="text-gray-600">Giriulla, Sri Lanka (Google Code: {FACTORY_INFO.googlePlusCode})</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold text-gray-900">Customer Care & Showroom Desk</p>
                    <a
                      href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      {FACTORY_INFO.customerPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=Hello%20Mango%20Slippers,%20I%20am%20planning%20to%20visit%20your%20Giriulla%20Showroom`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP US</span>
                </a>

                <a
                  href={FACTORY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#ea580c]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* SHOWROOM PHOTO FEATURE (PHOTO 3) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative aspect-[4/3] group">
                <img
                  src={OFFICIAL_IMAGES.photo3}
                  alt="Mango Slippers Showroom Display in Giriulla"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-900 shadow border border-gray-100">
                  Showroom Display Table • Photo 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

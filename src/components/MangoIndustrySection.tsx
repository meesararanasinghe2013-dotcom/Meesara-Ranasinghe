import React, { useState } from 'react';
import { Building2, Star, MapPin, Phone, ExternalLink, ImagePlus, CheckCircle2, Shield } from 'lucide-react';
import { FACTORY_INFO, OFFICIAL_IMAGES } from '../data/products';

export const MangoIndustrySection: React.FC = () => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT TEXT INFO */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>Registered Footwear Manufacturer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              MANGO INDUSTRY
            </h2>
            <p className="text-base font-semibold text-[#ea580c] font-mono">
              Shoe Factory in Giriulla
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              MANGO INDUSTRY is an authentic footwear manufacturing business located in Giriulla, Sri Lanka. 
              We take pride in formulating durable vulcanized rubber, comfortable slippers, and slides for everyday island living and wholesale supply nationwide.
            </p>

            {/* VERIFIED GOOGLE RATING BOX */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide font-mono">
                  Google Verified Business
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Official Rating
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-900">
                  {FACTORY_INFO.rating.toFixed(1)}
                </span>
                <div className="space-y-0.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-700 font-mono">
                    ★★★★★ {FACTORY_INFO.reviewCount} Google Reviews
                  </p>
                </div>
              </div>
            </div>

            {/* DIRECT CONTACT STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <span className="text-xs text-gray-500 block mb-1 font-mono">Factory Location Code</span>
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
                  {FACTORY_INFO.googlePlusCode}
                </span>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <span className="text-xs text-gray-500 block mb-1 font-mono">Factory Direct Telephone</span>
                <a
                  href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`}
                  className="text-sm font-bold text-emerald-800 hover:text-emerald-600 flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  {FACTORY_INFO.factoryPhone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>VIEW ON GOOGLE MAPS</span>
              </a>
              <a
                href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Factory Directly</span>
              </a>
            </div>
          </div>

          {/* RIGHT FACTORY PLACEHOLDER / SHOWROOM DISPLAY */}
          <div className="lg:col-span-6">
            {customPhotoUrl ? (
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl aspect-[4/3]">
                <img
                  src={customPhotoUrl}
                  alt="Uploaded MANGO INDUSTRY Factory Photo"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCustomPhotoUrl(null)}
                  className="absolute top-4 right-4 bg-gray-900/80 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-gray-900"
                >
                  Reset Photo
                </button>
              </div>
            ) : (
              <div className="p-8 sm:p-10 rounded-3xl bg-[#fafaf8] border-2 border-dashed border-gray-300 relative text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-inner">
                  <ImagePlus className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    MANGO INDUSTRY Production Facility
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 max-w-md mx-auto leading-relaxed">
                    Clean interactive photo module ready for authentic workshop and production floor photographs from Giriulla.
                  </p>
                </div>

                <div className="pt-2">
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-300 hover:border-amber-400 text-gray-800 text-xs font-bold cursor-pointer shadow-sm hover:shadow transition-all">
                    <ImagePlus className="w-4 h-4 text-amber-500" />
                    <span>Upload Factory Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="pt-3 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" /> Authentic Giriulla Manufacturing Facility
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

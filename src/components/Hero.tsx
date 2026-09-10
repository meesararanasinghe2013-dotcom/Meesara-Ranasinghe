import React from 'react';
import { ArrowRight, MapPin, Award, Star, ShieldCheck, Tag } from 'lucide-react';
import { FACTORY_INFO, OFFICIAL_IMAGES } from '../data/products';

interface HeroProps {
  onQuickViewPhoto1: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickViewPhoto1 }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-[#fafaf9] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-200 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-emerald-100 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* HERO COPY */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-700/20 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>🇱🇰 PROUDLY MADE IN SRI LANKA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span className="text-gray-700 font-semibold">MANGO INDUSTRY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
              Comfort Made in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-[#ea580c] to-amber-600">
                Sri Lanka.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
              Discover Mango Slippers — quality footwear designed for everyday comfort, style and durability. Direct from our shoe factory in Giriulla.
            </p>

            {/* CTAS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#collection" 
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#showroom" 
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-[#ea580c]" />
                <span>VISIT OUR SHOWROOM</span>
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Original Quality</p>
                  <p className="text-[11px] text-gray-600">Authentic Factory</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Star className="w-5 h-5 fill-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">5.0 ★ Rating</p>
                  <p className="text-[11px] text-gray-600">3 Google Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Giriulla Craft</p>
                  <p className="text-[11px] text-gray-600">Made in Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE (PHOTO 1) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative backdrop rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-[#ea580c]/20 to-emerald-600/20 blur-xl opacity-70"></div>

              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-gray-100">
                <div 
                  className="overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100 relative group cursor-pointer"
                  onClick={onQuickViewPhoto1}
                >
                  <img
                    src={OFFICIAL_IMAGES.photo1}
                    alt="Authentic Mango Slippers - Black and vibrant yellow footwear with official branding"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating Authentic Tag */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                      100%
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Mango Classic Flagship</div>
                      <div className="text-[10px] text-gray-600">Pure Rubber Footbed & Custom Grip</div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-gray-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    <span>Official Product Photo 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

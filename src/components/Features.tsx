import React from 'react';
import { Sparkles, Feather, Shield, MapPin } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: Sparkles,
      iconBg: 'bg-amber-100 text-amber-700',
      title: 'PREMIUM QUALITY',
      desc: 'High-grade natural rubber compound ensuring maximum flexibility, lightweight feel, and resilient vulcanized build.',
    },
    {
      icon: Feather,
      iconBg: 'bg-orange-100 text-[#ea580c]',
      title: 'COMFORTABLE DESIGNS',
      desc: 'Anatomically molded arch support and soft anti-chafing straps designed for all-day effortless tropical comfort.',
    },
    {
      icon: Shield,
      iconBg: 'bg-blue-100 text-blue-700',
      title: 'DURABLE MATERIALS',
      desc: 'Wave-tread anti-slip outsoles that stand up to wet tropical terrain, tile flooring, gravel, and everyday chores.',
    },
    {
      icon: MapPin,
      iconBg: 'bg-emerald-100 text-emerald-700',
      title: 'PROUDLY MADE IN SRI LANKA 🇱🇰',
      desc: 'Manufactured directly at MANGO INDUSTRY shoe factory in Giriulla, empowering authentic local industry and craftsmanship.',
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ea580c] mb-2 font-mono">
            Our Craftsmanship Promise
          </h2>
          <h3 className="text-3xl font-extrabold text-[#111827]">
            Why Choose Mango Slippers?
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Engineered with precision at MANGO INDUSTRY in Giriulla for long-lasting daily wear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafaf8] border border-gray-200/70 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

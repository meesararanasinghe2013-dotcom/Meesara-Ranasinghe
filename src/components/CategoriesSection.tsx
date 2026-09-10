import React from 'react';
import { Check } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data/products';

interface CategoriesSectionProps {
  onSelectCategoryFilter: (category: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategoryFilter,
}) => {
  const categories = [
    {
      id: 'men',
      title: "MEN'S SLIPPERS",
      tag: "Men's Edition",
      tagBg: 'bg-gray-900/90 text-white',
      image: OFFICIAL_IMAGES.photo1,
      imageAlt: "Men's Slippers by Mango Industry",
      desc: 'Comfortable and durable slippers designed for everyday use. Heavy-duty traction sole, durable toe-posts, and bold two-tone styling.',
      bullets: [
        'High-density shock absorption footbed',
        'Weatherproof Sri Lankan natural rubber',
        'Available up to UK Size 11',
      ],
      buttonText: "VIEW MEN'S STYLES",
    },
    {
      id: 'women',
      title: "WOMEN'S SLIPPERS",
      tag: "Women's Edition",
      tagBg: 'bg-[#ea580c] text-white',
      image: OFFICIAL_IMAGES.photo3,
      imageAlt: "Women's Slippers and Slides by Mango Industry",
      desc: 'Modern designs combining comfort and style. Ergonomic arch balance, elegant color combinations, and fashionable strap details.',
      bullets: [
        'Lightweight feather-step footbed',
        'Pastel, nautical and bright tropical palettes',
        'Elegant slide and buckle options',
      ],
      buttonText: "VIEW WOMEN'S STYLES",
    },
    {
      id: 'kids',
      title: "KIDS' SLIPPERS",
      tag: "Kids' Edition",
      tagBg: 'bg-emerald-700 text-white',
      image: OFFICIAL_IMAGES.photo2,
      imageAlt: "Kids' Slippers by Mango Industry",
      desc: 'Comfortable and durable footwear for children. Non-slip grooved safety tread, skin-gentle rubber straps, and fun vibrant colors.',
      bullets: [
        'Extra-grip safety wave soles',
        'Bright purple, sky blue, and pink hues',
        'Easy-wash durable materials',
      ],
      buttonText: "VIEW KIDS' STYLES",
    },
  ];

  return (
    <section id="categories" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-mono">
            Tailored Footwear Lines
          </span>
          <h2 className="text-3xl font-extrabold text-[#111827] mt-1">
            Footwear For Every Member of the Family
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Manufactured using authentic Sri Lankan rubber and skin-friendly materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#fafaf8] rounded-3xl p-6 border border-gray-200/80 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="rounded-2xl overflow-hidden aspect-video bg-neutral-200 mb-5 relative">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute bottom-3 left-3 ${cat.tagBg} text-xs font-bold px-3 py-1 rounded-md shadow`}>
                    {cat.tag}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <ul className="text-xs text-gray-700 space-y-2 mb-6">
                  {cat.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#collection"
                onClick={() => onSelectCategoryFilter(cat.id)}
                className="block text-center py-2.5 rounded-xl border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {cat.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

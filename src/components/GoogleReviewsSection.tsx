import React from 'react';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';
import { FACTORY_INFO, REVIEWS } from '../data/products';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Google Reviews
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Displaying our verified public Google Business profile record from MANGO INDUSTRY Giriulla.
          </p>

          {/* MAIN SUMMARY BADGE */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#fafaf8] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-[#ea580c] text-white flex items-center justify-center font-black text-2xl shadow-md">
                M
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">{FACTORY_INFO.name}</h3>
                <p className="text-xs text-gray-600 font-mono">{FACTORY_INFO.businessType}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900 font-mono">5.0</span>
                  <span className="text-xs text-gray-600">({FACTORY_INFO.reviewCount} Google Reviews)</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=mango+industry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>READ GOOGLE REVIEWS</span>
            </a>
          </div>
        </div>

        {/* REVIEW CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#fafaf8] border border-gray-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono">{rev.date}</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-900">{rev.author}</p>
                  {rev.location && (
                    <p className="text-[11px] text-gray-500">{rev.location}</p>
                  )}
                </div>
                {rev.verified && (
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

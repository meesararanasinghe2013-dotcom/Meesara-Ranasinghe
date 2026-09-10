import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Calculator, Package, Percent, Truck } from 'lucide-react';
import { FACTORY_INFO } from '../data/products';

export const WholesaleSection: React.FC = () => {
  const [pairsCount, setPairsCount] = useState<number>(100);
  const [selectedModel, setSelectedModel] = useState<string>('Mango Classic Collection');

  // Wholesale pricing tiers
  const getWholesaleRate = (qty: number) => {
    if (qty >= 500) return 620;
    if (qty >= 200) return 670;
    if (qty >= 100) return 720;
    return 760;
  };

  const ratePerPair = getWholesaleRate(pairsCount);
  const totalWholesaleEstimate = pairsCount * ratePerPair;
  const retailEquivalent = pairsCount * 950;
  const savings = retailEquivalent - totalWholesaleEstimate;

  const whatsappWholesaleUrl = `https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=${encodeURIComponent(
    `Hello MANGO INDUSTRY Wholesale Desk,\n\nI am inquiring about a bulk footwear order:\n- Model: ${selectedModel}\n- Quantity: ${pairsCount} pairs\n- Estimated Rate: LKR ${ratePerPair}/pair (Total ~LKR ${totalWholesaleEstimate.toLocaleString()})\n\nPlease provide your official wholesale proforma invoice and dispatch timeline for Giriulla factory delivery.`
  )}`;

  return (
    <section id="wholesale" className="py-20 bg-gradient-to-b from-[#fafaf8] to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#111827] to-[#1f2937] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
                B2B & Distribution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
                Looking for Slippers in Bulk?
              </h2>
              <p className="text-gray-300 text-base mt-4 leading-relaxed">
                Contact Mango Slippers for wholesale and business enquiries. Direct factory pricing, reliable distribution timelines, and customizable bulk batches directly from MANGO INDUSTRY in Giriulla.
              </p>

              {/* B2B HIGHLIGHTS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Package className="w-5 h-5 text-amber-400 mb-1" />
                  <p className="text-xs font-bold text-white">Bulk Batches</p>
                  <p className="text-[11px] text-gray-400">50 to 5,000+ pairs</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Percent className="w-5 h-5 text-emerald-400 mb-1" />
                  <p className="text-xs font-bold text-white">Direct Factory Rates</p>
                  <p className="text-[11px] text-gray-400">Up to 35% margin</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Truck className="w-5 h-5 text-sky-400 mb-1" />
                  <p className="text-xs font-bold text-white">Islandwide Dispatch</p>
                  <p className="text-[11px] text-gray-400">Prompt delivery</p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WHOLESALE ENQUIRY ({FACTORY_INFO.customerPhone})</span>
                </a>
                <a
                  href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=Hello%20MANGO%20INDUSTRY,%20I%20am%20inquiring%20about%20Wholesale%20and%20Bulk%20Slippers%20orders`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp B2B Desk</span>
                </a>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE WHOLESALE ESTIMATOR */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">
                      Instant Wholesale Estimator
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    Tiered Discounts
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Select Footwear Model
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="Mango Classic Collection">Mango Classic Collection (Black & Yellow)</option>
                    <option value="Mango Color Collection">Mango Color Collection (4 Hues)</option>
                    <option value="Mango New Collection">Mango New Collection (Slides & Buckles)</option>
                    <option value="Mixed Assorted Retail Carton">Mixed Assorted Retail Carton</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
                    <span>Order Quantity</span>
                    <span className="text-amber-400 font-bold font-mono">{pairsCount} Pairs</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={pairsCount}
                    onChange={(e) => setPairsCount(parseInt(e.target.value))}
                    className="w-full accent-amber-500 h-2 bg-gray-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                    <span>50 pairs</span>
                    <span>250 pairs</span>
                    <span>500 pairs</span>
                    <span>1,000+ pairs</span>
                  </div>
                </div>

                {/* CALCULATION SUMMARY */}
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-700 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-gray-300">
                    <span>Estimated Factory Rate:</span>
                    <span className="text-white font-bold">LKR {ratePerPair}.00 / pair</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Estimated Total:</span>
                    <span className="text-amber-400 font-bold text-sm">
                      LKR {totalWholesaleEstimate.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="flex justify-between text-emerald-400 text-[11px] border-t border-gray-800 pt-2">
                    <span>Estimated Retail Margin:</span>
                    <span>Save ~LKR {savings.toLocaleString()}</span>
                  </div>
                </div>

                <a
                  href={whatsappWholesaleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Proforma via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

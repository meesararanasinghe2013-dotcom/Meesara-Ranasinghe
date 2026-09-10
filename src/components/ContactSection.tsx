import React, { useState } from 'react';
import { Phone, Factory, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { FACTORY_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Retail Purchase',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'Retail Purchase',
        message: '',
      });
    }, 6000);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Mango Slippers,\n\nName: ${formData.name || 'Customer'}\nPhone: ${formData.phone}\nType: ${formData.inquiryType}\nMessage: ${formData.message || 'I would like to inquire about your footwear.'}`;
    window.open(`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CONTACT INFO */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-mono">
              Direct Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
              Get in Touch with Mango Slippers
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have a question about our collections, sizing, retail availability, or factory production? Reach out to our Giriulla team today.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#fafaf8] border border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide block font-mono">
                  Customer / Brand Contact
                </span>
                <a
                  href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`}
                  className="text-lg font-extrabold text-gray-900 hover:text-[#ea580c] flex items-center gap-2 mt-1"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  {FACTORY_INFO.customerPhone}
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-[#fafaf8] border border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide block font-mono">
                  Factory Operations Contact
                </span>
                <a
                  href={`tel:${FACTORY_INFO.factoryPhone.replace(/\s+/g, '')}`}
                  className="text-lg font-extrabold text-gray-900 hover:text-emerald-700 flex items-center gap-2 mt-1"
                >
                  <Factory className="w-4 h-4 text-emerald-700 shrink-0" />
                  {FACTORY_INFO.factoryPhone}
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-[#fafaf8] border border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide block font-mono">
                  Physical Address & Location
                </span>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Ihala Narangamuwa, Giriulla, Sri Lanka
                </p>
                <p className="text-xs text-gray-600 mt-0.5 font-mono">
                  Google Plus Code: {FACTORY_INFO.googlePlusCode}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${FACTORY_INFO.customerPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider shadow"
              >
                <Phone className="w-3.5 h-3.5" /> CALL NOW
              </a>
              <a
                href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=Hello%20Mango%20Slippers`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WHATSAPP
              </a>
              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" /> GET DIRECTIONS
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#fafaf8] border border-gray-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Send an Enquiry</h3>
              <p className="text-xs text-gray-600 mb-6">
                Fill in your details and our Giriulla factory desk will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1 font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Perera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. kasun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1 font-mono">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
                  >
                    <option value="Retail Purchase">Retail Footwear Purchase</option>
                    <option value="Wholesale / B2B">Wholesale / Bulk Retail Supply</option>
                    <option value="Showroom Visit">Showroom Visit & Fitting</option>
                    <option value="Factory Operations">Factory Operations & Logistics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1 font-mono">
                    Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Inquire about retail purchase, wholesale, sizes or showroom visits..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#ea580c] hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>SUBMIT VIA WHATSAPP</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-semibold text-center border border-emerald-300 animate-in fade-in flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Thank you! Your enquiry has been recorded. Our Giriulla desk will contact you shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

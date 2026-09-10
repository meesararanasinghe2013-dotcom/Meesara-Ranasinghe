import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FACTORY_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      <a
        href={`https://wa.me/${FACTORY_INFO.customerPhoneRaw}?text=Hello%20Mango%20Slippers,%20I%20would%20like%20to%20chat%20with%20you`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 ring-4 ring-white/50"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="tracking-wide">Chat With Us</span>
      </a>
    </aside>
  );
};

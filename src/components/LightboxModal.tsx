import React, { useEffect } from 'react';
import { X, Tag, ExternalLink } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b0f17]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="max-w-4xl w-full text-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-black/40 border border-gray-800 shadow-2xl">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>

        <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-800 text-left max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-400 font-bold uppercase font-mono flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> {photo.photoTag}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs text-gray-400 uppercase font-mono">MANGO INDUSTRY Giriulla</span>
            </div>
            <h4 className="text-base font-bold text-white mt-0.5">{photo.title}</h4>
            <p className="text-xs text-gray-300 mt-0.5">{photo.caption}</p>
          </div>

          <a
            href={photo.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold whitespace-nowrap"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Original</span>
          </a>
        </div>
      </div>
    </div>
  );
};

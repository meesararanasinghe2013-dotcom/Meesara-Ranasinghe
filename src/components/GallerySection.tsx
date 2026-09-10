import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/products';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'men' | 'women' | 'kids' | 'new'>('all');

  const filterOptions: { id: 'all' | 'men' | 'women' | 'kids' | 'new'; label: string }[] = [
    { id: 'all', label: 'ALL' },
    { id: 'men', label: 'MEN' },
    { id: 'women', label: 'WOMEN' },
    { id: 'kids', label: 'KIDS' },
    { id: 'new', label: 'NEW COLLECTION' },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Visual Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Mango Slippers Gallery
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-lg">
              Official photography direct from our showroom and factory studio. Click any photo to view full resolution.
            </p>
          </div>

          {/* GALLERY FILTERS */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeFilter === opt.id
                    ? 'bg-amber-500 text-gray-950 shadow-lg'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-800 cursor-pointer border border-gray-700 hover:border-amber-400 transition-all duration-300"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase font-mono">
                    {photo.photoTag}
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {photo.title}
                  </p>
                  <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-gray-700">
                {photo.photoTag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

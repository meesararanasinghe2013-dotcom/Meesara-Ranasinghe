import { Product, GalleryPhoto, Review } from '../types';

export const OFFICIAL_IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1VXLTozDiNVLeIkJbhfy6Zt4EKHv_r4sozXTyKegM_rVycio2_NPwsbiwJHxMrhAf6yVRpbWEwAg8xj2eHuIvOBryYGr2dB7IJbAF3enJEiyneNcEwoR0hB1Za4SwiLtDnrVbZ7OLlTh7SPhO5H0RwqBJbMq3EVS3wSLKoTr4Uwjmcjd2b_6lyFYw-HMKX8ezXtwxtBrGNcmhrX3ijeCI6of43Z2RkCGWJp0bo2chDx8rMnyvidKei6CA',
  photo1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRGIJPrVu-qknCxEYsyAH1keFZzf8hGUAud9gOVrrF_rRRapaR9MvPtmZQ8gB875e9gTBvALe1TpytyjtLXUZc4vbTDhb5jTPI8-7tJ2zNVQmQh2Ca69UuBKAU9Cgd1QD00Gizj-CJjhQSUj9_gY4RZWUk5gH8alq9ged8HFqdFFC9BdiNUR8U-FrbtPW5DGDqmeuH_mPgW5n-tgBMEE-tV4Kimlst_2SqN_AHrABFRF4yprrvZ4iF',
  photo2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjLEoEJWU8UpdCusIPO8EnyIe0gUMJDxHVy2fMgOMtladp5NFV-ACyIn3zr9V4dLWpXWCT5vqgBimiw7Jm4Okaxqdr2AwwDeOP919882-tGhSBb4jIMGit6kRrC-Szn2Gbmb_aQUEUfsL_0IEQyskBq30wQ0f-4ppAi00jZ2rEv4izNFmznhPJEuG2PbfpMKbOzBnd-B-lr8k-fNRw9_RljsumvIrAqcJ77WnbKeo5Rm6poj6zRi84',
  photo3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKDUdBr3EN8RxodftpGS20fLFv3psYonJVQG0Yv5RTpurQKEzjEpXotZOuYCYL41kejy6kmiHTeYqK-TaiPQjLcIrpvcWxGm4XOtHRiDnEK5JQTU8RKKGIIiqSAoqkGDKBTuf1Mna_5zAolQkmJHstAas6lj89Moqe1rfteoQjBZRqkhYzNEdZ8TlK0kl53FqOES6YgFPlhXsbKz-rRymZJ8E0RDx7kBywIBC0eRj2J-aaMpHyz0i',
};

export const FACTORY_INFO = {
  name: 'MANGO INDUSTRY',
  businessType: 'Shoe Factory in Giriulla',
  customerPhone: '077 535 1331',
  factoryPhone: '077 235 7876',
  customerPhoneRaw: '94775351331',
  factoryPhoneRaw: '94772357876',
  googlePlusCode: '84M5+33Q, Giriulla, Sri Lanka',
  address: 'Ihala Narangamuwa, Giriulla, Sri Lanka',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=MANGO%20INDUSTRY%2084M5%2B33Q%20Giriulla%20Sri%20Lanka',
  rating: 5.0,
  reviewCount: 3,
};

export const PRODUCTS: Product[] = [
  {
    id: 'mango-classic',
    name: 'Mango Classic Collection',
    subtitle: 'Signature Black & Vibrant Mango Yellow Flip-Flops',
    category: 'men',
    price: 950,
    originalPrice: 1100,
    currency: 'LKR',
    rating: 5.0,
    reviewCount: 48,
    image: OFFICIAL_IMAGES.photo1,
    photoLabel: 'Photo 1',
    badge: 'Signature Line',
    description:
      'Signature black cushioned high-density sole paired with vibrant mango yellow ergonomic straps, embossed Mango branding, and high-traction wave tread engineered for tropical weather and everyday durability.',
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: 'Mango Yellow & Black', hex: '#fbbf24', bgClass: 'bg-amber-400' },
      { name: 'Pure Charcoal', hex: '#1f2937', bgClass: 'bg-gray-800' },
    ],
    features: [
      '100% Sri Lankan natural rubber formulation',
      'Dual-compound shock absorbing footbed',
      'Anti-chafing soft vulcanized rubber straps',
      'Slip-resistant wave pattern outsole',
    ],
    specs: {
      material: 'Sri Lankan Virgin Rubber & EVA Compound',
      sole: '18mm Textured Non-Slip Rubber Base',
      origin: 'MANGO INDUSTRY, Giriulla, Sri Lanka',
      factoryCode: 'MI-GRL-CLS01',
    },
    inStock: true,
    stockCount: 240,
  },
  {
    id: 'mango-color-collection',
    name: 'Mango Color Collection',
    subtitle: 'Four Vibrant Everyday Tropical Hues',
    category: 'kids',
    price: 850,
    originalPrice: 990,
    currency: 'LKR',
    rating: 4.9,
    reviewCount: 36,
    image: OFFICIAL_IMAGES.photo2,
    photoLabel: 'Photo 2',
    badge: '4 Colorways',
    description:
      'Vibrant casual flip-flop slippers featuring rich royal purple, ocean sky blue, lively tropical pink, and classic crimson red. Specially crafted for kids, youth, and vibrant casual wear with ultra-gentle toe-posts and slip-free textured tread.',
    sizes: [5, 6, 7, 8, 9, 10],
    colors: [
      { name: 'Ocean Sky Blue', hex: '#38bdf8', bgClass: 'bg-sky-400' },
      { name: 'Royal Purple', hex: '#7c3aed', bgClass: 'bg-purple-600' },
      { name: 'Tropical Pink', hex: '#f43f5e', bgClass: 'bg-pink-500' },
      { name: 'Crimson Red', hex: '#dc2626', bgClass: 'bg-red-600' },
    ],
    features: [
      'Four brilliant fade-resistant color choices',
      'Gentle skin-friendly molded toe bridge',
      'Lightweight design for effortless all-day activity',
      'Durable textured sole for wet bathroom and outdoor floors',
    ],
    specs: {
      material: 'Ultra-Light Elastic Rubber Polymer',
      sole: '16mm High-Traction Diamond Textured Base',
      origin: 'MANGO INDUSTRY, Giriulla, Sri Lanka',
      factoryCode: 'MI-GRL-COL02',
    },
    inStock: true,
    stockCount: 180,
  },
  {
    id: 'mango-new-collection',
    name: 'Mango New Collection',
    subtitle: 'Contemporary Slide & Buckle Comfort Series',
    category: 'women',
    price: 1250,
    originalPrice: 1450,
    currency: 'LKR',
    rating: 5.0,
    reviewCount: 29,
    image: OFFICIAL_IMAGES.photo3,
    photoLabel: 'Photo 3',
    badge: 'New Arrival',
    description:
      'Elevated slide silhouettes featuring coral suede buckle straps, nautical striped bands, leatherette slides with embossed gold MANGO lettering, and woven blush pink texture. Ideal for resort wear, home lounging, and city outings.',
    sizes: [4, 5, 6, 7, 8],
    colors: [
      { name: 'Coral Suede Buckle', hex: '#ea580c', bgClass: 'bg-orange-600' },
      { name: 'Nautical Navy Stripe', hex: '#1e3a8a', bgClass: 'bg-blue-900' },
      { name: 'White & Crimson Leatherette', hex: '#b91c1c', bgClass: 'bg-red-700' },
      { name: 'Blush Pink Woven', hex: '#f472b6', bgClass: 'bg-pink-400' },
    ],
    features: [
      'Soft microfiber and textured woven band finishes',
      'Contoured arch support footbed for zero fatigue',
      'Polished metallic buckle and gold-lettered accents',
      'Dual-layer shock cushioning with durable outsole',
    ],
    specs: {
      material: 'Synthetic Suede / Woven Strap & Padded Footbed',
      sole: '20mm Ergonomic Contoured Support Base',
      origin: 'MANGO INDUSTRY, Giriulla, Sri Lanka',
      factoryCode: 'MI-GRL-NEW03',
    },
    inStock: true,
    stockCount: 120,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    image: OFFICIAL_IMAGES.photo1,
    title: 'Mango Classic Flagship Model',
    caption: 'Official Production Photo 1: Signature black cushioned sole with mango yellow ergonomic straps.',
    category: 'men',
    photoTag: 'Photo 1',
  },
  {
    id: 'gal-2',
    image: OFFICIAL_IMAGES.photo2,
    title: 'Mango Color Collection Showcase',
    caption: 'Official Production Photo 2: Four vibrant options in royal purple, ocean blue, tropical pink, and red.',
    category: 'kids',
    photoTag: 'Photo 2',
  },
  {
    id: 'gal-3',
    image: OFFICIAL_IMAGES.photo3,
    title: 'New Season Slide Display',
    caption: 'Official Production Photo 3: Elevated slides with coral suede buckles, nautical stripes, and blush textures.',
    category: 'women',
    photoTag: 'Photo 3',
  },
  {
    id: 'gal-4',
    image: OFFICIAL_IMAGES.photo1,
    title: 'Precision Tread & Heel Sole Relief',
    caption: 'Deep wave grooving providing anti-slip assurance across wet terrain and paved floors.',
    category: 'men',
    photoTag: 'Sole Detail',
  },
  {
    id: 'gal-5',
    image: OFFICIAL_IMAGES.photo3,
    title: 'Showroom Table & Display Stand',
    caption: 'In-store presentation at MANGO INDUSTRY showroom in Ihala Narangamuwa, Giriulla.',
    category: 'new',
    photoTag: 'Showroom',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sunil Wickramasinghe',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Very comfortable slippers! The rubber quality is so much better than imported plastic ones. You can feel the real Sri Lankan rubber grip and firmness. Bought directly from Giriulla.',
    verified: true,
    location: 'Kurunegala / Giriulla',
  },
  {
    id: 'rev-2',
    author: 'Chamari Silva',
    rating: 5,
    date: '1 month ago',
    comment:
      'The new slide collection is stylish and lightweight. Soft straps that never cut between the toes. Great pride to see this manufactured by MANGO INDUSTRY in Giriulla!',
    verified: true,
    location: 'Colombo',
  },
  {
    id: 'rev-3',
    author: 'Naveen Bandara',
    rating: 5,
    date: '2 months ago',
    comment:
      'Ordered 100 pairs for our resort gift shop. Flawless finishing, prompt factory dispatch, and excellent communication on WhatsApp 077 535 1331. Highly recommended!',
    verified: true,
    location: 'Negombo',
  },
];

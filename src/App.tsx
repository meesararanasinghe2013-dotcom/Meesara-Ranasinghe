import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductCatalog } from './components/ProductCatalog';
import { CategoriesSection } from './components/CategoriesSection';
import { GallerySection } from './components/GallerySection';
import { MangoIndustrySection } from './components/MangoIndustrySection';
import { MadeInGiriullaSection } from './components/MadeInGiriullaSection';
import { ShowroomSection } from './components/ShowroomSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { WholesaleSection } from './components/WholesaleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { LightboxModal } from './components/LightboxModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS } from './data/products';
import { Product, CartItem, GalleryPhoto } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, size: number, color: string, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (i) =>
          i.product.id === product.id &&
          i.selectedSize === size &&
          i.selectedColor === color
      );

      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { product, selectedSize: size, selectedColor: color, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleQuickViewPhoto1 = () => {
    const classic = PRODUCTS.find((p) => p.id === 'mango-classic');
    if (classic) {
      setSelectedProduct(classic);
    }
  };

  const handleSelectCategory = (cat: string) => {
    setCategoryFilter(cat);
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#111c2d] selection:bg-amber-400 selection:text-slate-900">
      {/* HEADER */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1">
        {/* HERO SECTION */}
        <Hero onQuickViewPhoto1={handleQuickViewPhoto1} />

        {/* WHY CHOOSE MANGO SLIPPERS */}
        <Features />

        {/* PRODUCT SHOWCASE (CATALOG) */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          activeCategoryFilter={categoryFilter}
        />

        {/* PRODUCT CATEGORIES (MEN, WOMEN, KIDS) */}
        <CategoriesSection onSelectCategoryFilter={handleSelectCategory} />

        {/* PRODUCT GALLERY WITH LIGHTBOX */}
        <GallerySection onOpenLightbox={(photo) => setSelectedGalleryPhoto(photo)} />

        {/* ABOUT MANGO INDUSTRY */}
        <MangoIndustrySection />

        {/* MADE IN GIRIULLA SECTION */}
        <MadeInGiriullaSection />

        {/* FLAGSHIP SHOWROOM */}
        <ShowroomSection />

        {/* INTERACTIVE REAL GOOGLE MAPS SECTION */}
        <GoogleMapsSection />

        {/* GOOGLE REVIEWS SECTION (VERIFIED ONLY) */}
        <GoogleReviewsSection />

        {/* WHOLESALE & B2B SECTION */}
        <WholesaleSection />

        {/* CONTACT SECTION & FORM */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />

      {/* PRODUCT DETAIL MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* GALLERY LIGHTBOX MODAL */}
      <LightboxModal
        photo={selectedGalleryPhoto}
        onClose={() => setSelectedGalleryPhoto(null)}
      />

      {/* CART & INQUIRY DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

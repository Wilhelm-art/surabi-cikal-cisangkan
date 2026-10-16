import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularDishes } from './components/PopularDishes';
import { Features } from './components/Features';
import { MenuSection } from './components/MenuSection';
import { SpecialBanner } from './components/SpecialBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingCart } from './components/FloatingCart';
import { TableQrModal } from './components/TableQrModal';

export default function App() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-bg-warm text-text-primary overflow-x-hidden selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <PopularDishes />
          <Features />
          <MenuSection />
          <SpecialBanner />
          <ReviewsSection />
          <LocationSection onOpenQrModal={() => setIsQrModalOpen(true)} />
        </main>
        <Footer onOpenQrModal={() => setIsQrModalOpen(true)} />
        <FloatingCart />
        <TableQrModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
      </div>
    </CartProvider>
  );
}

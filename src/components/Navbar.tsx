import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { scrollToSection, toSectionId } from '../utils/scroll';
import { getBusinessStatus } from '../utils/businessHours';
import { useCart } from '../context/CartContext';
import { BrandLogo } from './BrandLogo';

const NAV_ITEMS = ['Beranda', 'Menu', 'Ulasan', 'Lokasi'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const status = getBusinessStatus();
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    scrollToSection(toSectionId(label), () => setIsMobileMenuOpen(false));
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 px-3 sm:py-3 sm:px-4' : 'py-4 px-3 sm:py-5 sm:px-4'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-md border border-stone-200' : 'bg-transparent border border-transparent'
      }`}>
        {/* Brand Logo & Live Status */}
        <div className="flex items-center gap-3">
          <div 
            className="font-display font-bold text-xl text-primary flex items-center gap-2.5 cursor-pointer active:scale-95 transition-transform" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            aria-label="Kembali ke atas beranda"
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 rounded-full bg-amber-50/90 flex items-center justify-center border border-amber-200 shadow-xs">
              <BrandLogo size={24} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base sm:text-lg text-text-primary tracking-tight">
                Surabi <span className="text-primary font-bold">Cikal</span>
              </span>
              <span className="text-[10px] font-mono text-stone-600 tracking-wider uppercase font-semibold">
                Cisangkan
              </span>
            </div>
          </div>

          {/* Real-Time Live Status Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border bg-white shadow-xs border-stone-200">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600 animate-ping' : 'bg-amber-600'}`} />
            <span className={status.isOpen ? 'text-emerald-800' : 'text-amber-900'}>
              {status.badgeText}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-stone-700 hover:text-primary text-sm font-semibold transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}

          {/* Cart Counter Trigger if items exist */}
          {totalCount > 0 && (
            <button
              onClick={() => scrollToSection('menu')}
              aria-label={`Keranjang belanja berisi ${totalCount} porsi`}
              className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold border border-primary/20 hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{totalCount}</span>
            </button>
          )}

          <motion.a 
            href={BUSINESS_INFO.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-xs px-5 py-2.5 rounded-full font-bold inline-flex items-center gap-2 shadow-md shadow-primary/20 hover:bg-primary-hover active:scale-[0.98] transition-all"
          >
            <span>Pesan Sekarang</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </motion.a>
        </div>

        {/* Mobile Hamburger & Status */}
        <div className="flex md:hidden items-center gap-2">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border bg-white border-stone-200">
            <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-600' : 'bg-amber-600'}`} />
            <span className={status.isOpen ? 'text-emerald-800' : 'text-amber-900'}>
              {status.badgeText}
            </span>
          </div>

          <button 
            className="text-text-primary p-2 cursor-pointer focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu navigasi"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 max-w-6xl mx-auto bg-surface border border-stone-200 rounded-3xl shadow-xl p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              <div className="p-3 bg-stone-50 rounded-2xl mb-2 flex items-center justify-between text-xs">
                <span className="text-text-secondary font-medium">Status Warung:</span>
                <span className={`font-bold ${status.isOpen ? 'text-emerald-700' : 'text-amber-800'}`}>
                  {status.statusText}
                </span>
              </div>

              {NAV_ITEMS.map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="w-full text-left py-3 px-4 text-stone-700 hover:text-primary font-semibold hover:bg-stone-50 rounded-xl transition-all cursor-pointer min-h-[44px]"
                >
                  {item}
                </button>
              ))}
              <a 
                href={BUSINESS_INFO.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-3.5 rounded-xl font-bold text-center w-full flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-2 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" /> Pesan Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

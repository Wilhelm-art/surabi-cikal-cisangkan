import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Image as ImageIcon, X, Check } from 'lucide-react';
import { MENU_ASIN, MENU_MANIS } from '../data/menu';
import { useCart } from '../context/CartContext';

type MenuTab = 'semua' | 'asin' | 'manis';

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuTab>('semua');
  const [showOriginalMenuModal, setShowOriginalMenuModal] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();

  const currentMenu = useMemo(() => {
    if (activeTab === 'semua') {
      return [...MENU_ASIN, ...MENU_MANIS];
    }
    return activeTab === 'asin' ? MENU_ASIN : MENU_MANIS;
  }, [activeTab]);

  return (
    <section id="menu" className="py-24 bg-surface/40 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">
            Daftar Rasa Lengkap (32 Varian)
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Daftar Menu Warung
          </h2>
          <p className="text-text-secondary max-w-md mx-auto text-sm sm:text-base mb-6 mt-2">
            Pilih varian rasa surabi kegemaran Anda. Klik tanda tambah untuk memasukkan ke keranjang WhatsApp.
          </p>

          {/* Quick Action: View Original Printed Menu Banner */}
          <div className="mb-8">
            <button
              onClick={() => setShowOriginalMenuModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200/80 text-text-primary text-xs font-semibold border border-stone-300/80 transition-all cursor-pointer shadow-sm"
            >
              <ImageIcon className="w-3.5 h-3.5 text-primary" />
              <span>Lihat Banner Menu Cetak Asli</span>
            </button>
          </div>
          
          {/* Tab Filter Controls */}
          <div className="inline-flex p-1 bg-stone-100 rounded-full border border-stone-200 max-w-full overflow-x-auto">
            <button 
              onClick={() => setActiveTab('semua')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'semua' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Semua ({MENU_ASIN.length + MENU_MANIS.length})
            </button>
            <button 
              onClick={() => setActiveTab('asin')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'asin' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Surabi Asin ({MENU_ASIN.length})
            </button>
            <button 
              onClick={() => setActiveTab('manis')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'manis' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Surabi Manis ({MENU_MANIS.length})
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentMenu.map((item) => {
              const qty = cart[item.id]?.quantity || 0;

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className={`p-2 bg-surface border rounded-[2rem] transition-all flex flex-col justify-between group overflow-hidden ${
                    qty > 0 ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-stone-200/60 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-bold text-text-primary text-base group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-bold text-secondary font-mono text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-text-secondary text-xs mt-2.5 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  
                  <div className="px-6 pb-6 flex items-center justify-between mt-4">
                    {item.tag ? (
                      <span className="text-[10px] bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-2.5 py-1 font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    ) : <div />}
                    
                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(item)}
                        className="text-xs bg-stone-100 hover:bg-primary hover:text-white text-text-primary px-3.5 py-2 rounded-full flex items-center gap-1.5 font-semibold transition-all cursor-pointer border border-stone-200 hover:border-primary shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pilih</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-white hover:bg-stone-100 text-primary flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer"
                          aria-label="Kurangi porsi"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-xs text-primary font-mono px-1">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer"
                          aria-label="Tambah porsi"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal Original Printed Menu */}
        <AnimatePresence>
          {showOriginalMenuModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setShowOriginalMenuModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-lg text-text-primary">
                      Banner Daftar Menu Asli
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                      100% Halal
                    </span>
                  </div>
                  <button 
                    onClick={() => setShowOriginalMenuModal(false)}
                    className="p-1 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                    aria-label="Tutup modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50">
                  <img 
                    src="/menu-asli.webp" 
                    alt="Daftar Menu Asli Surabi Cikal Cisangkan Cimahi" 
                    className="w-full h-auto object-contain"
                    width={1400}
                    height={1875}
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-secondary">
                  <span>Menerima Pesanan: 0896-5646-1483 / 0859-6309-8349</span>
                  <a 
                    href="/menu-asli.webp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Buka Gambar Penuh
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Image as ImageIcon, X, Search, Sparkles, Flame, Heart, Award } from 'lucide-react';
import { MENU_ASIN, MENU_MANIS } from '../data/menu';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

type CuratedCollection = 'semua' | 'wajib-coba' | 'gurih-pedas' | 'manis-anak' | 'ekonomis';
type MenuTab = 'semua' | 'asin' | 'manis';

const COLLECTIONS: { id: CuratedCollection; label: string; badge: string; desc: string }[] = [
  { id: 'semua', label: 'Semua 32 Menu', badge: '32 Varian', desc: 'Daftar lengkap rasa asin dan manis' },
  { id: 'wajib-coba', label: 'Wajib Coba', badge: 'Signature', desc: 'Varian paling legendaris bagi pembeli baru' },
  { id: 'gurih-pedas', label: 'Gurih & Pedas', badge: 'Nampol', desc: 'Paduan oncom gurih, telur, dan cabai segar' },
  { id: 'manis-anak', label: 'Manis & Coklat', badge: 'Favorit', desc: 'Lumeran coklat, keju gurih, dan kinca aren' },
  { id: 'ekonomis', label: 'Otentik Rp 3.000', badge: 'Hemat', desc: 'Sarapan otentik ramah kantong mulai Rp 3.000' }
];

export function MenuSection() {
  const [activeCollection, setActiveCollection] = useState<CuratedCollection>('semua');
  const [activeTab, setActiveTab] = useState<MenuTab>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOriginalMenuModal, setShowOriginalMenuModal] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();

  const allMenus = useMemo(() => [...MENU_ASIN, ...MENU_MANIS], []);

  const isCuratedMatch = (item: MenuItem, filter: CuratedCollection): boolean => {
    const name = item.name.toLowerCase();
    if (filter === 'semua') return true;
    if (filter === 'wajib-coba') {
      return (
        name.includes('surabi oncom') ||
        name.includes('kinca') ||
        name.includes('coklat keju') ||
        name.includes('telor oncom') ||
        name.includes('spesial')
      );
    }
    if (filter === 'gurih-pedas') {
      return item.category === 'asin' && (name.includes('oncom') || name.includes('pedas') || name.includes('telor') || name.includes('sosis') || name.includes('abon'));
    }
    if (filter === 'manis-anak') {
      return item.category === 'manis' && (name.includes('coklat') || name.includes('keju') || name.includes('oreo') || name.includes('pisang') || name.includes('strawberry'));
    }
    if (filter === 'ekonomis') {
      return item.priceNum <= 6000;
    }
    return true;
  };

  const filteredMenu = useMemo(() => {
    let list = allMenus;

    // Filter by curated collection first
    list = list.filter((item) => isCuratedMatch(item, activeCollection));

    // Then filter by category tab (if user specifies asin or manis)
    if (activeTab === 'asin') {
      list = list.filter((item) => item.category === 'asin');
    } else if (activeTab === 'manis') {
      list = list.filter((item) => item.category === 'manis');
    }

    // Then filter by search query
    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase().trim();
    return list.filter(
      (m) =>
        m.name.toLowerCase().includes(query) ||
        (m.desc && m.desc.toLowerCase().includes(query)) ||
        (m.tag && m.tag.toLowerCase().includes(query))
    );
  }, [activeCollection, activeTab, searchQuery, allMenus]);

  return (
    <section id="menu" className="py-24 bg-surface/40 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">
            Daftar Rasa Lengkap (32 Varian Otentik)
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Pilihan Menu Warung
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mt-2 font-medium">
            Setiap surabi dibuat hangat dari santan murni dan dibakar di atas tungku tanah liat. Harga resmi mulai Rp 3.000.
          </p>

          {/* Quick Action: View Original Printed Menu Banner */}
          <div className="mt-4">
            <button
              onClick={() => setShowOriginalMenuModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold border border-stone-300 transition-all cursor-pointer shadow-xs min-h-[44px]"
            >
              <ImageIcon className="w-4 h-4 text-primary" />
              <span>Lihat Banner Menu Cetak Asli Warung</span>
            </button>
          </div>
        </div>

        {/* Rekomendasi 1: Curated Taste Collections */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
              Pilihan Rasa Populer (Klik untuk Panduan Cepat):
            </p>
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {COLLECTIONS.map((col) => {
              const active = activeCollection === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => {
                    setActiveCollection(col.id);
                    setActiveTab('semua');
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer flex flex-col items-start gap-0.5 border min-h-[48px] ${
                    active
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.02]'
                      : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.label}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono ${
                      active ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {col.badge}
                    </span>
                  </div>
                  <span className={`text-[10px] font-normal leading-none ${active ? 'text-white/85' : 'text-stone-500'}`}>
                    {col.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Sub-Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Live Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari rasa: kinca, oncom, keju, telur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm pl-10 pr-9 py-3 rounded-full bg-white border border-stone-300 focus:outline-none focus:border-primary shadow-xs transition-colors text-stone-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-900 min-w-[32px] min-h-[32px] flex items-center justify-center"
                aria-label="Hapus kata kunci pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sub-Filter: Semua / Asin / Manis */}
          <div className="inline-flex p-1 bg-stone-100 rounded-full border border-stone-300 w-full sm:w-auto overflow-x-auto justify-center">
            <button 
              onClick={() => setActiveTab('semua')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                activeTab === 'semua' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Semua Kategori
            </button>
            <button 
              onClick={() => setActiveTab('asin')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                activeTab === 'asin' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Gurih Asin
            </button>
            <button 
              onClick={() => setActiveTab('manis')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                activeTab === 'manis' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Manis Legit
            </button>
          </div>
        </div>

        {/* Empty Search State */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-300 max-w-md mx-auto p-6">
            <p className="text-sm font-bold text-text-primary">
              Menu tidak ditemukan
            </p>
            <p className="text-xs text-text-secondary mt-1 font-medium">
              Coba ganti filter atau ketik kata kunci lain:
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('semua'); setActiveCollection('semua'); }}
              className="mt-4 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold cursor-pointer min-h-[44px]"
            >
              Reset ke Semua 32 Menu
            </button>
          </div>
        )}

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => {
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
                    qty > 0 ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-stone-300 hover:border-primary/50 hover:shadow-md'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-bold text-stone-900 text-base group-hover:text-primary transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-bold text-amber-950 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300 font-mono text-xs whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-stone-700 text-xs mt-2.5 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  
                  <div className="px-6 pb-6 flex items-center justify-between mt-2 pt-3 border-t border-stone-200">
                    <div>
                      {item.tag ? (
                        <span className="text-[10px] bg-amber-100 text-amber-950 border border-amber-300 rounded-full px-2.5 py-1 font-bold uppercase tracking-wider">
                          {item.tag}
                        </span>
                      ) : (
                        <span className="text-[11px] text-stone-700 font-medium capitalize">
                          {item.category === 'asin' ? 'Gurih Asin' : 'Manis Legit'}
                        </span>
                      )}
                    </div>
                    
                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(item)}
                        className="text-xs bg-stone-100 hover:bg-primary hover:text-white text-stone-900 px-4 py-2 rounded-full flex items-center gap-1.5 font-bold transition-all cursor-pointer border border-stone-300 hover:border-primary shadow-xs min-h-[44px]"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Pilih</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-2 py-1 min-h-[44px]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-white hover:bg-stone-100 text-primary flex items-center justify-center font-bold text-xs shadow-xs cursor-pointer min-w-[28px]"
                          aria-label={`Kurangi porsi ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-xs text-primary font-mono px-1">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center font-bold text-xs shadow-xs cursor-pointer min-w-[28px]"
                          aria-label={`Tambah porsi ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
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
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
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
                      Banner Daftar Menu Asli Warung
                    </h3>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                      100% Halal
                    </span>
                  </div>
                  <button 
                    onClick={() => setShowOriginalMenuModal(false)}
                    className="p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Tutup modal banner menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50">
                  <img 
                    src="/menu-asli.webp" 
                    alt="Daftar Menu Asli Surabi Cikal Cisangkan Cimahi Milik Bapak Asep Saepudin" 
                    className="w-full h-auto object-contain"
                    width={1400}
                    height={1875}
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-secondary font-medium">
                  <span>Menerima Pesanan: 0896-5646-1483 / 0859-6309-8349</span>
                  <a 
                    href="/menu-asli.webp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-bold py-2 min-h-[44px] inline-flex items-center"
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

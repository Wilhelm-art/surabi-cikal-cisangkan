import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, 
  ChefHat, HeartHandshake, Wallet, Star,
  MessageCircle, ExternalLink, Flame,
  ArrowRight, Sparkles, Compass, ChevronLeft, ChevronRight
} from 'lucide-react';

const WA_LINK = "https://wa.me/6289656461483";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Surabi+Cikal+Cisangkan+Padasuka+Cimahi";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tag?: string;
  img?: string;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'semua' | 'asin' | 'manis'>('semua');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  const toSectionId = (label: string) => label.toLowerCase().replace(/ /g, '-');

  const menuAsin: MenuItem[] = [
    { name: "Surabi Oncom", price: "Rp 2.500", desc: "Favorit tradisional Sunda dengan taburan oncom pedas gurih panggang.", tag: "Terlaris", img: "/surabi-oncom.png" },
    { name: "Surabi Telor Polos", price: "Rp 5.000", desc: "Adonan surabi kelapa lembut berpadu dengan telur ayam segar." },
    { name: "Surabi Sosis", price: "Rp 5.000", desc: "Topping irisan sosis ayam berkualitas dengan saus spesial.", img: "/surabi-1.jpg" },
    { name: "Surabi Oncom Keju", price: "Rp 6.000", desc: "Kombinasi oncom pedas dengan gurihnya keju cheddar parut." },
    { name: "Surabi Oncom Sosis", price: "Rp 6.000", desc: "Dua rasa favorit: pedasnya oncom dan potongan sosis." },
    { name: "Surabi Oncom Abon", price: "Rp 6.000", desc: "Oncom gurih panggang diselimuti taburan abon sapi melimpah." },
    { name: "Surabi Telor Oncom", price: "Rp 6.000", desc: "Double protein tradisional: telur panggang plus oncom Cisangkan." },
    { name: "Surabi Telor Sosis", price: "Rp 6.000", desc: "Telur ayam kocok menyatu dengan sosis di atas bara tungku." },
    { name: "Surabi Telor Abon", price: "Rp 6.000", desc: "Telur panggang lembut diselimuti gurihnya abon sapi pilihan." },
    { name: "Surabi Telor Keju", price: "Rp 7.000", desc: "Gurihnya telur ayam panggang menyatu dengan keju meleleh." },
    { name: "Surabi Sosis Keju", price: "Rp 7.000", desc: "Irisan sosis gurih dengan taburan keju cheddar panggang." },
    { name: "Surabi Telor Oncom Keju", price: "Rp 8.000", desc: "Kombinasi lengkap telur, oncom pedas, dan parutan keju." },
    { name: "Surabi Telor Sosis Keju", price: "Rp 8.000", desc: "Varian premium asin terfavorit dengan isian serba lengkap." }
  ];

  const menuManis: MenuItem[] = [
    { name: "Surabi Kinca / Polos", price: "Rp 2.500", desc: "Polos hangat disiram kuah kinca dari gula aren murni pilihan.", tag: "Favorit", img: "/surabi-kinca.png" },
    { name: "Surabi Coklat", price: "Rp 5.000", desc: "Sajian manis berlimpah meses coklat premium lumer hangat.", img: "/surabi-2.jpg" },
    { name: "Surabi Keju", price: "Rp 5.000", desc: "Parutan keju cheddar melimpah gurih di atas surabi susu manis." },
    { name: "Surabi Oreo", price: "Rp 5.000", desc: "Remahan biskuit oreo manis gurih di atas adonan kelapa gurih." },
    { name: "Surabi Pisang", price: "Rp 5.000", desc: "Irisan pisang manis terpanggang harum di dalam adonan surabi." },
    { name: "Surabi Coklat Keju", price: "Rp 7.000", desc: "Kombinasi klasik legendaris meses manis dan parutan keju gurih." },
    { name: "Surabi Coklat Oreo", price: "Rp 7.000", desc: "Sensasi coklat lumer hangat berpadu renyahnya biskuit oreo." },
    { name: "Surabi Keju Oreo", price: "Rp 7.000", desc: "Perpaduan gurih keju parut melimpah dan manis oreo." },
    { name: "Surabi Pisang Keju", price: "Rp 7.000", desc: "Pisang manis panggang diselimuti gurihnya parutan keju." },
    { name: "Surabi Pisang Coklat", price: "Rp 7.000", desc: "Kombinasi pisang harum panggang dan meses coklat hangat." },
    { name: "Surabi Coklat Oreo Keju", price: "Rp 9.000", desc: "Kombinasi komplit manis, gurih, dan renyah meses, oreo, keju." },
    { name: "Surabi Pisang Coklat Keju", price: "Rp 9.000", desc: "Varian manis premium terlengkap dengan irisan pisang legit." }
  ];

  const currentMenu = activeTab === 'semua' 
    ? [...menuAsin.slice(0, 6), ...menuManis.slice(0, 6)] 
    : (activeTab === 'asin' ? menuAsin : menuManis);

  return (
    <div className="min-h-screen bg-bg-warm text-text-primary overflow-x-hidden selection:bg-primary selection:text-white">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 px-3 sm:py-3 sm:px-4' : 'py-4 px-3 sm:py-5 sm:px-4'
        }`}
      >
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-lg shadow-sm border border-stone-200/60' : 'bg-transparent border border-transparent'
        }`}>
          <div 
            className="font-display font-bold text-xl text-primary flex items-center gap-2 cursor-pointer active:scale-95 transition-transform" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Flame className="text-primary w-5 h-5 animate-pulse" />
            </div>
            <span className="font-display text-text-primary tracking-tight">Surabi <span className="text-primary font-bold">Cikal</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Beranda', 'Menu', 'Ulasan', 'Lokasi'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(toSectionId(item))}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            <motion.a 
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-xs px-5 py-2.5 rounded-full font-semibold inline-flex items-center gap-2 shadow-md shadow-primary/10 hover:bg-primary/95 active:scale-[0.98] transition-all"
            >
              <span>Pesan Sekarang</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </motion.a>
          </div>

          <button 
            className="md:hidden text-text-primary p-1 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 max-w-6xl mx-auto bg-surface border border-stone-200/60 rounded-3xl shadow-lg p-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {['Beranda', 'Menu', 'Ulasan', 'Lokasi'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(toSectionId(item))}
                    className="w-full text-left py-3 px-4 text-text-secondary hover:text-text-primary font-medium hover:bg-stone-50 rounded-xl transition-all"
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white py-3.5 rounded-xl font-semibold text-center w-full flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-2"
                >
                  <MessageCircle className="w-5 h-5" /> Pesan Sekarang
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section (Dribbble Orbit Style) */}
      <section id="beranda" className="relative min-h-[100dvh] pt-28 pb-16 flex items-center max-w-6xl mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span>Warung Surabi Paling Rekomended di Cimahi</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary"
            >
              Kami Sajikan <span className="text-primary">Rasa</span> <br />yang Anda Suka 🥞
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Nikmati kelezatan surabi tradisional Sunda yang dibuat dengan parutan kelapa matang dan santan kental segar, dibakar hangat langsung dari tungku Paman Edi.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('menu')}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/10 hover:bg-primary/95 transition-all text-center w-full sm:w-auto cursor-pointer"
              >
                Pesan Sekarang
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('menu')}
                className="bg-white hover:bg-stone-50 text-text-primary border border-stone-200 px-8 py-4 rounded-full font-semibold transition-all w-full sm:w-auto shadow-sm"
              >
                Cari Menu
              </motion.button>
            </motion.div>
          </div>

          {/* Right Plate (Orbital Dribbble Visual) */}
          <div className="lg:col-span-6 flex justify-center items-center relative w-full aspect-square max-w-[480px] mx-auto">
            {/* Spinning background outline circle */}
            <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-stone-200 animate-[spin_80s_linear_infinite]" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-stone-100" />
            
            {/* Main Center Food Plate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[65%] aspect-square rounded-full border-8 border-white shadow-2xl overflow-hidden bg-bg-warm"
            >
              <img 
                src="/surabi-kinca.png" 
                alt="Signature Surabi Kinca" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Food Pills (Concentric Tags) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute right-0 flex flex-col gap-3.5 z-10"
            >
              {[
                { label: "Kinca Aren 🍯", color: "bg-amber-50 text-amber-800 border-amber-200" },
                { label: "Oncom Pedas 🌶️", color: "bg-red-50 text-red-800 border-red-200" },
                { label: "Coklat Keju 🍫", color: "bg-orange-50 text-orange-800 border-orange-200" },
                { label: "Oreo Susu 🥛", color: "bg-blue-50 text-blue-800 border-blue-200" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`px-4 py-2 rounded-full border shadow-sm text-xs font-semibold flex items-center gap-2 bg-white ${item.color}`}
                >
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Popular Dishes Section (Varian Terfavorit) */}
      <section className="py-24 border-t border-stone-200/60 bg-surface/40">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">Menu Spesial</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">Varian Terfavorit</h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button 
                onClick={() => scrollToSection('menu')}
                className="w-10 h-10 rounded-full border border-stone-200 hover:border-primary flex items-center justify-center text-text-secondary hover:text-primary transition-all cursor-pointer bg-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="w-10 h-10 rounded-full border border-stone-200 hover:border-primary flex items-center justify-center text-text-secondary hover:text-primary transition-all cursor-pointer bg-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {[
              { name: "Surabi Kinca", price: "Rp 2.500", rating: 5, desc: "Kuah gula aren pandan asli melimpah.", img: "/surabi-kinca.png" },
              { name: "Surabi Oncom", price: "Rp 2.500", rating: 5, desc: "Bumbu tumis oncom pedas gurih kemangi.", img: "/surabi-oncom.png" },
              { name: "Surabi Sosis", price: "Rp 5.000", rating: 4, desc: "Irisan sosis sapi tebal dipadu saus sambal.", img: "/surabi-1.jpg" },
              { name: "Surabi Coklat Keju", price: "Rp 7.000", rating: 5, desc: "Meses coklat lumer dengan keju parut.", img: "/surabi-2.jpg" }
            ].map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-surface rounded-[2rem] p-6 pt-16 border border-stone-200/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center mt-12 group"
              >
                {/* Circular image overlapping the card top */}
                <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-bg-warm">
                  <img 
                    src={dish.img} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Rating */}
                <div className="flex text-secondary gap-0.5 mb-2.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`w-3.5 h-3.5 ${idx < dish.rating ? 'fill-current text-secondary' : 'text-stone-200'}`} />
                  ))}
                </div>

                <h3 className="font-display font-bold text-lg text-text-primary mb-1">{dish.name}</h3>
                <p className="text-text-secondary text-xs leading-relaxed max-w-[180px] mb-6 min-h-[32px]">{dish.desc}</p>

                {/* Price and Cart order */}
                <div className="flex justify-between items-center w-full border-t border-stone-100 pt-4 mt-auto">
                  <span className="font-bold text-text-primary text-sm sm:text-base font-mono">{dish.price}</span>
                  <a 
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-primary/20"
                    title="Pesan via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section (Keunggulan Kami) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left chef cut-out circle */}
          <div className="lg:col-span-5 flex justify-center w-full relative">
            <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-stone-200" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-[360px] aspect-square rounded-full border-8 border-white shadow-xl overflow-hidden relative"
            >
              <img 
                src="/surabi-4.jpg" 
                alt="Paman Edi preparing surabi" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right features list */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">Keunggulan</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">Lebih Dari Sekadar Warung Biasa 🥞</h2>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
              Kami menyajikan surabi otentik dengan menjaga kualitas proses pembuatan tradisional demi menghasilkan rasa manis dan gurih terbaik.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <Flame className="w-5 h-5 text-primary" />, title: "Panggang Tungku", desc: "Kematangan adonan merata dengan pinggiran garing beraroma khas." },
                { icon: <Compass className="w-5 h-5 text-accent" />, title: "Bahan Kelapa Alami", desc: "Tepung beras pilihan bercampur parutan kelapa matang segar." },
                { icon: <ChefHat className="w-5 h-5 text-primary" />, title: "Higienis & Bersih", desc: "Proses meracik adonan yang senantiasa dijaga kebersihannya." },
                { icon: <Clock className="w-5 h-5 text-secondary" />, title: "Resep Sejak 2012", desc: "Cita rasa otentik khas Pasundan yang teruji belasan tahun." },
                { icon: <HeartHandshake className="w-5 h-5 text-primary" />, title: "Pelayanan Ramah", desc: "Disambut langsung oleh Paman Edi dengan senyum hangat." },
                { icon: <Wallet className="w-5 h-5 text-secondary" />, title: "Harga Merakyat", desc: "Cemilan lezat mengenyangkan yang ramah untuk semua kalangan." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-bg-warm flex items-center justify-center shrink-0 border border-stone-200/50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm sm:text-base">{item.title}</h4>
                    <p className="text-text-secondary text-xs leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Regular Menu Pack Section */}
      <section id="menu" className="py-24 bg-surface/40 border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">Daftar Rasa</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">Daftar Menu Warung</h2>
            <p className="text-text-secondary max-w-md mx-auto text-sm sm:text-base mb-8 mt-2">Pilih varian rasa surabi kegemaran Anda dari bara tungku tradisional kami.</p>
            
            {/* Tabs */}
            <div className="inline-flex p-1 bg-stone-100 rounded-full border border-stone-200">
              <button 
                onClick={() => setActiveTab('semua')}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'semua' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Semua
              </button>
              <button 
                onClick={() => setActiveTab('asin')}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'asin' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Surabi Asin
              </button>
              <button 
                onClick={() => setActiveTab('manis')}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'manis' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Surabi Manis
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {currentMenu.map((item, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={item.name}
                  className="p-2 bg-surface border border-stone-200/60 rounded-[2rem] hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-bold text-text-primary text-base group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="font-bold text-secondary font-mono text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-text-secondary text-xs mt-2.5 leading-relaxed">{item.desc}</p>}
                  </div>
                  
                  <div className="px-6 pb-6 flex items-center justify-between mt-4">
                    {item.tag ? (
                      <span className="text-[10px] bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-2.5 py-1 font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    ) : <div />}
                    
                    <a 
                      href={WA_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-text-secondary group-hover:text-text-primary flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                    >
                      <span>Pesan</span> <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-[#b85b20] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            <div className="space-y-6 max-w-xl text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Mau Nikmati Surabi Hangat Pagi Ini?</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Hubungi kami terlebih dahulu via WhatsApp untuk pemesanan rombongan atau takeaway dalam jumlah banyak guna menghindari antrian panjang.
              </p>
              
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-primary px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-secondary fill-current" />
                <span>Pesan via WhatsApp</span>
              </motion.a>
            </div>

            {/* Circular Plate on the right */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-8 border-white/20 overflow-hidden shadow-2xl shrink-0">
              <img 
                src="/surabi-3.jpg" 
                alt="Hot fresh surabi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="ulasan" className="py-24 border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">Testimoni</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">Ulasan Pelanggan</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-secondary">
                  {[1,2,3,4,5].map(k => <Star key={k} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-text-primary">4.0 / 5.0 di Google Maps</span>
              </div>
            </div>
            <a 
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold text-sm hover:underline mt-4 md:mt-0 flex items-center gap-1.5"
            >
              <span>Lihat Semua Ulasan</span> <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Nur Aliyah", rating: 5, quote: "Surabi terenak di cimahi 🥰", en: "The most delicious surabi in Cimahi" },
              { name: "Puji Yati", rating: 5, quote: "Trimakasih atas pelayanan nya yg sangat baik p ugan edi", en: "Thank you for the very good service from Uncle Edi" },
              { name: "sarah nabilah", rating: 4, quote: "surabinya enak dan murah di kantong", en: "The surabi is delicious and affordable" },
              { name: "Adit Hardiansyah", rating: 5, quote: "Makanannya murah sama enak", en: "Food is cheap and delicious" }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-1.5 bg-surface border border-stone-200/60 rounded-[2rem] shadow-sm flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex text-secondary mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'text-stone-200'}`} />
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg font-medium text-text-primary mb-2">“{review.quote}”</blockquote>
                  <p className="text-xs sm:text-sm text-text-secondary italic mb-6">“{review.en}”</p>
                  
                  <div className="font-semibold text-text-primary flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-sm">{review.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Maps */}
      <section id="lokasi" className="py-24 border-t border-stone-200/60 max-w-6xl mx-auto px-6">
        <div className="p-1.5 bg-white border border-stone-200/60 rounded-[2.5rem] shadow-xl overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
          
          <div className="grid lg:grid-cols-5 gap-12 p-8 sm:p-12 relative z-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Lokasi Warung Kami</h2>
                <p className="text-text-secondary text-sm leading-relaxed">Kami berlokasi di area strategis Cisangkan. Nyaman untuk antrian bungkus maupun sarapan hangat.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-primary/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm sm:text-base">Warung Surabi Cikal</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                      Jl. Kyai H. Usman Dhomiri, Padasuka (Sebelah Toko YANTI), Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40625
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-primary/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm sm:text-base">Jam Operasional</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-1">
                      Setiap Hari (Senin - Minggu)<br/>
                      06.00 WIB - 10.00 WIB (Pagi)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-primary/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm sm:text-base">WhatsApp / Reservasi</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-1 font-semibold text-primary">
                      0896-5646-1483
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 h-full min-h-[300px] bg-stone-900 rounded-3xl p-8 border border-stone-200/60 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <img 
                src="/surabi-5.jpg" 
                alt="Map view background" 
                className="absolute inset-0 w-full h-full object-cover opacity-15 transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-950/85"></div>
              
              <div className="relative z-10 space-y-6 text-white">
                <div className="w-16 h-16 bg-primary/15 border border-primary/30 rounded-full flex items-center justify-center mx-auto text-primary">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Petunjuk Arah Google Maps</h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">Klik tombol di bawah ini untuk membuka lokasi warung di Google Maps.</p>
                
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all inline-flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Buka Google Maps</span> <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-stone-950 py-16 text-stone-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5 space-y-4">
              <div className="font-display font-bold text-xl text-primary flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                  <Flame className="text-primary w-4 h-4" />
                </div>
                <span className="text-white">Surabi Cikal</span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                Mendedikasikan rasa jajanan pasar khas Sunda tradisional yang dipanggang dari tungku kehangatan warga Cimahi.
              </p>
            </div>
            
            <div className="md:col-span-3 lg:col-start-7">
              <h4 className="font-bold text-white text-sm mb-4">Menu</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {['Beranda', 'Menu', 'Ulasan', 'Lokasi'].map((item) => (
                   <li key={item}>
                     <button onClick={() => scrollToSection(toSectionId(item))} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                       {item}
                     </button>
                   </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-bold text-white text-sm mb-4">Hubungi Kami</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
                 <li>WhatsApp: 0896-5646-1483</li>
                 <li>Lokasi: Sebelah Toko YANTI, Cisangkan, Cimahi</li>
                 <li>Jam Buka: 06.00 - 10.00 WIB (Pagi)</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Surabi Cikal Cisangkan. Hak Cipta Dilindungi.</p>
            <p>Dibuat dengan ❤️ di Cimahi</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

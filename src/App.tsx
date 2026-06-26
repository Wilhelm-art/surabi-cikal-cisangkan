import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, 
  ChefHat, HeartHandshake, Wallet, Star,
  MessageCircle, ExternalLink, Flame,
  ArrowRight, Sparkles, Compass
} from 'lucide-react';

const WA_LINK = "https://wa.me/6289656461483";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Surabi+Cikal+Cisangkan+Padasuka+Cimahi";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tag?: string;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'asin' | 'manis'>('asin');

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
    { name: "Surabi Oncom", price: "Rp 2.500", desc: "Favorit tradisional dengan taburan oncom pedas gurih.", tag: "Terlaris" },
    { name: "Surabi Telor Polos", price: "Rp 5.000", desc: "Adonan surabi panggang menyatu dengan telur ayam segar." },
    { name: "Surabi Sosis", price: "Rp 5.000", desc: "Topping irisan sosis berkualitas dengan saus spesial." },
    { name: "Surabi Oncom Keju", price: "Rp 6.000", desc: "Kombinasi oncom tradisional dengan parutan keju gurih." },
    { name: "Surabi Oncom Sosis", price: "Rp 6.000", desc: "Perpaduan oncom khas Cimahi dan sosis panggang." },
    { name: "Surabi Oncom Abon", price: "Rp 6.000", desc: "Oncom gurih dengan taburan abon sapi yang melimpah." },
    { name: "Surabi Telor Oncom", price: "Rp 6.000", desc: "Double protein tradisional: telur panggang plus oncom." },
    { name: "Surabi Telor Sosis", price: "Rp 6.000", desc: "Telur ayam dadar menyatu dengan sosis di atas tungku." },
    { name: "Surabi Telor Abon", price: "Rp 6.000", desc: "Telur panggang lembut diselimuti gurihnya abon sapi." },
    { name: "Surabi Telor Keju", price: "Rp 7.000", desc: "Gurihnya telur panggang menyatu dengan keju meleleh." },
    { name: "Surabi Sosis Keju", price: "Rp 7.000", desc: "Sosis gurih dengan taburan keju cheddar panggang." },
    { name: "Surabi Telor Oncom Keju", price: "Rp 8.000", desc: "Kombinasi lengkap telur, oncom pedas, dan keju gurih." },
    { name: "Surabi Telor Sosis Keju", price: "Rp 8.000", desc: "Varian premium asin terfavorit dengan isian serba ada." }
  ];

  const menuManis: MenuItem[] = [
    { name: "Surabi Kinca / Polos", price: "Rp 2.500", desc: "Surabi polos hangat disiram kuah kinca gula aren kelapa.", tag: "Favorit" },
    { name: "Surabi Coklat", price: "Rp 5.000", desc: "Sajian manis dengan taburan meses coklat premium." },
    { name: "Surabi Keju", price: "Rp 5.000", desc: "Parutan keju cheddar melimpah di atas surabi susu." },
    { name: "Surabi Oreo", price: "Rp 5.000", desc: "Remahan biskuit oreo manis gurih di atas adonan hangat." },
    { name: "Surabi Pisang", price: "Rp 5.000", desc: "Irisan pisang manis terpanggang harum di dalam adonan." },
    { name: "Surabi Coklat Keju", price: "Rp 7.000", desc: "Perpaduan klasik meses manis dan parutan keju gurih." },
    { name: "Surabi Coklat Oreo", price: "Rp 7.000", desc: "Sensasi coklat lumer dengan kerenyahan biskuit oreo." },
    { name: "Surabi Keju Oreo", price: "Rp 7.000", desc: "Perpaduan gurihnya keju parut dan manisnya oreo." },
    { name: "Surabi Pisang Keju", price: "Rp 7.000", desc: "Pisang manis panggang dengan selimut keju cheddar." },
    { name: "Surabi Pisang Coklat", price: "Rp 7.000", desc: "Kombinasi pisang harum dan lelehan meses coklat hangat." },
    { name: "Surabi Coklat Oreo Keju", price: "Rp 9.000", desc: "Perpaduan tiga rasa manis, gurih, dan renyah berlimpah." },
    { name: "Surabi Pisang Coklat Keju", price: "Rp 9.000", desc: "Varian manis premium terlengkap yang paling dicari." }
  ];

  const currentMenu = activeTab === 'asin' ? menuAsin : menuManis;

  return (
    <div className="min-h-screen bg-bg-warm text-text-primary overflow-x-hidden selection:bg-primary selection:text-white">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 px-4' : 'py-5 px-4'
        }`}
      >
        <div className={`max-w-6xl mx-auto px-6 py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-lg shadow-xl border border-white/5' : 'bg-transparent border border-transparent'
        }`}>
          <div 
            className="font-display font-bold text-xl text-primary flex items-center gap-2 cursor-pointer active:scale-95 transition-transform" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Flame className="text-secondary w-5 h-5" />
            </div>
            <span>Surabi Cikal</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
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
              className="bg-primary text-white text-sm px-5 py-2 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/95 active:scale-[0.98] transition-all"
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
              className="md:hidden mt-2 max-w-6xl mx-auto bg-surface border border-white/5 rounded-3xl shadow-2xl p-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {['Beranda', 'Menu', 'Ulasan', 'Lokasi'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(toSectionId(item))}
                    className="w-full text-left py-3 px-4 text-text-secondary hover:text-text-primary font-medium hover:bg-white/5 rounded-xl transition-all"
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

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-[100dvh] pt-28 pb-16 flex items-center max-w-6xl mx-auto px-6">
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-surface/50 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-text-primary mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span>⭐ 4.0 di Google Maps — Surabi Legendaris Cimahi</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary mb-6"
            >
              Cita Rasa Surabi Sunda <span className="text-primary block lg:inline">Otentik Tungku</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Rasakan kelembutan adonan tepung beras dan gurihnya parutan kelapa asli yang dipanggang tradisional langsung di atas bara tungku hangat.
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
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all text-center w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Jelajahi Menu</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface hover:bg-surface-hover text-text-primary border border-white/10 px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-secondary" />
                <span>Pesan Cepat</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Hero Image Card (Double-Bezel) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[400px] p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="aspect-[4/5] rounded-[calc(2.5rem-0.5rem)] overflow-hidden relative group">
                <img 
                  src="/surabi-1.jpg" 
                  alt="Surabi Cikal Cisangkan" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-warm via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Micro-Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-text-primary">Surabi Oncom Telur</h3>
                    <p className="text-xs text-text-secondary mt-0.5">Warisan Kuliner Sunda Pilihan</p>
                  </div>
                  <div className="bg-primary/20 text-primary font-bold text-xs px-3 py-1.5 rounded-full">
                    Rp 6.000
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Bento Grid */}
      <section className="py-24 border-t border-white/5 bg-surface/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1 (Large - 2 columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-xl flex flex-col justify-between overflow-hidden relative group min-h-[300px]"
            >
              <div className="absolute right-0 bottom-0 w-1/2 h-full hidden sm:block overflow-hidden rounded-r-[calc(2.5rem-0.5rem)]">
                <img 
                  src="/surabi-3.jpg" 
                  alt="Baking traditional surabi" 
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 relative z-10 max-w-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-primary mb-3">Tungku Tradisional</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Setiap surabi dipanggang merata di atas tungku tanah liat menggunakan kompor gas terkontrol, menjaga kelembutan bagian dalam dengan pinggiran yang tetap renyah.
                  </p>
                </div>
                <div className="mt-8 text-xs font-mono text-secondary flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> PEMBUATAN HARIAN HIGIENIS
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2 (Standard) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-xl flex flex-col justify-between"
            >
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary mb-3">Bahan Pilihan Sunda</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Kami menggunakan adonan murni kelapa parut matang, santan kelapa kental segar, dan tepung beras pilihan tanpa pengawet.
                  </p>
                </div>
                <div className="mt-8 text-xs font-semibold text-accent">100% ALAMI & HALAL</div>
              </div>
            </motion.div>

            {/* Bento Card 3 (Standard) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-xl flex flex-col justify-between"
            >
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <Wallet className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary mb-3">Harga Merakyat</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Nikmati kuliner tradisi istimewa tanpa menguras dompet. Tersedia pilihan porsi hemat mulai dari harga Rp 2.500 saja.
                  </p>
                </div>
                <div className="mt-8 text-xs font-semibold text-secondary">MULAI DARI RP 2.500</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Plates (Featured Mockups) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Varian Bintang Warung Kami</h2>
          <p className="text-text-secondary max-w-lg mx-auto text-sm sm:text-base">Dua citarasa surabi andalan dengan rasa khas yang tak tertandingi.</p>
        </div>

        <div className="space-y-16">
          {/* Sweet Signature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-xs font-mono text-secondary uppercase tracking-[0.2em] font-semibold">Tungku Manis</span>
              <h3 className="font-display text-3xl font-bold text-text-primary">Surabi Kinca Aren Asli</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Surabi kelapa hangat tradisional disiram dengan racikan kuah manis gurih yang terbuat dari rebusan gula aren asli murni pilihan dan daun pandan wangi segar. Nikmat disantap sebagai menu pembuka pagi.
              </p>
              <ul className="space-y-2.5 text-sm text-text-primary font-medium">
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span>100% Gula Aren Murni Tanpa Campuran</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span>Disajikan hangat langsung dari tungku</span>
                </li>
              </ul>
              <motion.a 
                whileHover={{ x: 4 }}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm"
              >
                <span>Pesan Surabi Kinca</span> <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center"
            >
              <img 
                src="/surabi-kinca.png" 
                alt="Premium Surabi Kinca" 
                className="w-full h-full object-cover rounded-[calc(2.5rem-0.5rem)] hover:scale-102 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Savory Signature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center md:order-1 order-2"
            >
              <img 
                src="/surabi-oncom.png" 
                alt="Premium Surabi Oncom" 
                className="w-full h-full object-cover rounded-[calc(2.5rem-0.5rem)] hover:scale-102 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:order-2 order-1"
            >
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">Tungku Asin</span>
              <h3 className="font-display text-3xl font-bold text-text-primary">Surabi Oncom Tradisional</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Varian surabi legendaris warisan leluhur Sunda. Adonan surabi kelapa gurih ditaburi parutan oncom tumis pedas rempah beraroma kemangi khas Cisangkan yang dibakar perlahan hingga garing merata.
              </p>
              <ul className="space-y-2.5 text-sm text-text-primary font-medium">
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Oncom pilihan dengan bumbu pedas rempah gurih</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Harum daun kemangi panggang yang menggoda</span>
                </li>
              </ul>
              <motion.a 
                whileHover={{ x: 4 }}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-bold text-sm"
              >
                <span>Pesan Surabi Oncom</span> <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Tabs */}
      <section id="menu" className="py-24 bg-surface/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Daftar Menu Warung</h2>
            <p className="text-text-secondary max-w-md mx-auto text-sm sm:text-base mb-8">Pilih tipe citarasa surabi favorit Anda dari bara tungku kami.</p>
            
            {/* Tabs */}
            <div className="inline-flex p-1.5 bg-stone-900 rounded-full border border-white/5">
              <button 
                onClick={() => setActiveTab('asin')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'asin' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Surabi Asin / Gurih
              </button>
              <button 
                onClick={() => setActiveTab('manis')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'manis' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Surabi Manis / Legit
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
                  className="p-2 bg-white/5 border border-white/10 rounded-3xl hover:border-primary/30 transition-all flex flex-col justify-between group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-bold text-text-primary text-base sm:text-lg group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="font-bold text-secondary font-mono text-sm sm:text-base whitespace-nowrap">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-text-secondary text-xs sm:text-sm mt-2.5 leading-relaxed">{item.desc}</p>}
                  </div>
                  
                  <div className="px-6 pb-6 flex items-center justify-between mt-4">
                    {item.tag ? (
                      <span className="text-[10px] bg-secondary/20 text-secondary border border-secondary/20 rounded-full px-2.5 py-1 font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    ) : <div />}
                    
                    <a 
                      href={WA_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-text-secondary group-hover:text-text-primary flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
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

      {/* Customer Reviews */}
      <section id="ulasan" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Ulasan Penikmat Surabi</h2>
              <div className="flex items-center gap-2">
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
                className="p-1.5 bg-white/5 border border-white/10 rounded-[2rem] shadow-sm flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex text-secondary mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'text-stone-700'}`} />
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

      {/* Brand Story (Legacy & Craft) */}
      <section className="py-24 bg-surface/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">Kisah Kami</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">Dedikasi Tradisi Paman Edi</h2>
              <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
                <p>
                  Surabi Sunda adalah warisan kuliner turun temurun yang mengajarkan kesabaran. Di warung <strong>Surabi Cikal Cisangkan</strong>, kami merawat warisan budaya ini semenjak tahun 2012.
                </p>
                <p>
                  Setiap adonan dibuat secara higienis oleh Paman Edi (Ugan Edi) menggunakan racikan tepung beras pilihan berkualitas tinggi. Setiap pemesanan disajikan langsung dalam kondisi hangat dari bara tungku.
                </p>
                <div className="bg-primary/5 p-5 rounded-2xl border-l-2 border-primary mt-6">
                  <p className="font-medium text-text-primary text-sm sm:text-base">
                    Kami buka setiap pagi mulai jam 06.00 hingga 10.00 WIB. Porsi pas yang sangat tepat menemani hangatnya kopi pagi Anda di kota Cimahi.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[400px] p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              >
                <div className="aspect-[4/5] rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
                  <img 
                    src="/surabi-4.jpg" 
                    alt="Authentic traditional baking process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Location and Maps */}
      <section id="lokasi" className="py-24 border-t border-white/5 max-w-6xl mx-auto px-6">
        <div className="p-1.5 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
          
          <div className="grid lg:grid-cols-5 gap-12 p-8 sm:p-12 relative z-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Kunjungi Warung Kami</h2>
                <p className="text-text-secondary text-sm leading-relaxed">Kami berlokasi di area strategis Cisangkan. Nyaman untuk antrian bungkus maupun sarapan di lokasi.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary">
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
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary">
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
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm sm:text-base">WhatsApp / Reservasi</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-1 font-semibold text-secondary">
                      0896-5646-1483
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 h-full min-h-[300px] bg-stone-900/60 rounded-3xl p-8 border border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <img 
                src="/surabi-5.jpg" 
                alt="Map view background" 
                className="absolute inset-0 w-full h-full object-cover opacity-15 transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-950/80"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">Petunjuk Arah Google Maps</h3>
                <p className="text-text-secondary text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">Klik tombol di bawah ini untuk membuka lokasi warung di Google Maps.</p>
                
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

      {/* Banner Order Call to Action */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-[#b85b20] rounded-[2.5rem] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Mau Nikmati Surabi Hangat Pagi Ini?</h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Hubungi kami terlebih dahulu via WhatsApp untuk pemesanan takeaway dalam jumlah banyak guna menghindari antrian panjang.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-primary px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 text-secondary fill-current" />
              <span>Chat WhatsApp Kami</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-stone-950 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5 space-y-4">
              <div className="font-display font-bold text-xl text-primary flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                  <Flame className="text-secondary w-4 h-4" />
                </div>
                <span>Surabi Cikal</span>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-xs">
                Mendedikasikan rasa jajanan pasar khas Sunda tradisional yang dipanggang dari tungku kehangatan warga Cimahi.
              </p>
            </div>
            
            <div className="md:col-span-3 lg:col-start-7">
              <h4 className="font-bold text-text-primary text-sm mb-4">Menu</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {['Beranda', 'Menu', 'Ulasan', 'Lokasi'].map((item) => (
                   <li key={item}>
                     <button onClick={() => scrollToSection(toSectionId(item))} className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                       {item}
                     </button>
                   </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-bold text-text-primary text-sm mb-4">Hubungi Kami</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                 <li>WhatsApp: 0896-5646-1483</li>
                 <li>Lokasi: Sebelah Toko YANTI, Cisangkan, Cimahi</li>
                 <li>Jam Buka: 06.00 - 10.00 WIB (Pagi)</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
            <p>© {new Date().getFullYear()} Surabi Cikal Cisangkan. Hak Cipta Dilindungi.</p>
            <p>Dibuat dengan ❤️ di Cimahi</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

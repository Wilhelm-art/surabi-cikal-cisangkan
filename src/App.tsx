import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, 
  ChefHat, HeartHandshake, Wallet, Star,
  MessageCircle, ExternalLink, Flame
} from 'lucide-react';

const WA_LINK = "https://wa.me/6289656461483";
const MAPS_LINK = "https://maps.app.goo.gl/search?q=Surabi+Cikal+Cisangkan+Cimahi";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen font-sans bg-bg-warm text-text-primary overflow-x-hidden">

      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="font-display font-bold text-2xl text-primary flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Flame className="text-secondary w-6 h-6" />
            Surabi Cikal
          </div>


          <div className="hidden md:flex items-center space-x-8">
            {['Beranda', 'Menu', 'Ulasan', 'Lokasi', 'Hubungi Kami'].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-text-secondary hover:text-primary font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            <motion.a 
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-surface px-6 py-2.5 rounded-full font-medium inline-flex items-center gap-2 shadow-[0_4px_14px_0_rgba(200,103,42,0.39)] hover:bg-primary/90 transition-all"
            >
              Pesan Sekarang
            </motion.a>
          </div>


          <button 
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>


        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-surface border-t border-bg-warm overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4 flex flex-col">
                {['Beranda', 'Menu', 'Ulasan', 'Lokasi', 'Hubungi Kami'].map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-left py-2 text-text-primary font-medium border-b border-bg-warm border-opacity-50"
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-surface px-4 py-3 rounded-xl font-medium text-center w-full mt-2 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Pesan Sekarang
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


      <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/15 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-primary/20 shadow-sm text-sm font-medium text-text-primary mb-6"
          >
            <span className="text-secondary text-lg">⭐</span> 4.0 — Surabi Terenak di Cimahi
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-6"
          >
            <motion.span variants={fadeInUp} className="block">Surabi Otentik Cimahi,</motion.span>
            <motion.span variants={fadeInUp} className="block text-primary">Cita Rasa Langsung</motion.span>
            <motion.span variants={fadeInUp} className="block">dari Tungku Tradisional</motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg lg:text-xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Nikmati kelezatan surabi legendaris dengan resep warisan Sunda. Harga bersahabat, disajikan hangat langsung dari tungku tanah liat.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('menu')}
              className="cursor-pointer bg-primary text-surface px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all text-center"
            >
              Lihat Menu
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-primary border-2 border-primary/20 px-8 py-3.5 rounded-xl font-semibold hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-lg relative"
        >

           <div className="relative w-full aspect-square bg-gradient-to-br from-primary/10 to-secondary/20 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-inner border border-white/50">
             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle at center, var(--color-primary) 2px, transparent 2px)',
                backgroundSize: '40px 40px'
              }}
             />
             <div className="relative z-10 w-48 h-48 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 text-surface p-10">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                  <path d="M10 70 Q 50 100 90 70 L 85 85 Q 50 110 15 85 Z" fill="currentColor" opacity="0.8"/>
                  <path d="M15 65 Q 50 90 85 65 C 85 45 65 30 50 30 C 35 30 15 45 15 65 Z" fill="currentColor"/>
                  <circle cx="50" cy="55" r="15" fill="var(--color-bg-warm)" opacity="0.2"/>
                  <circle cx="45" cy="50" r="4" fill="var(--color-bg-warm)"/>
                  <circle cx="60" cy="58" r="3" fill="var(--color-bg-warm)"/>
                  <circle cx="52" cy="65" r="5" fill="var(--color-bg-warm)"/>
                  <path d="M30 40 Q 40 20 50 10 Q 60 20 70 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
                  <path d="M40 45 Q 45 25 50 15 Q 55 25 60 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                </svg>
             </div>
           </div>
        </motion.div>
      </section>


      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <ChefHat className="w-8 h-8 text-primary" />,
                title: "Resep Otentik",
                desc: "Dibuat dengan teknik tradisional Sunda menggunakan tungku tanah liat. Menghasilkan aroma dan tekstur yang khas."
              },
              {
                icon: <Wallet className="w-8 h-8 text-primary" />,
                title: "Harga Terjangkau",
                desc: "Porsi pas dengan harga yang ramah di kantong semua kalangan. Mulai dari Rp 2.000 saja per porsi."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-primary" />,
                title: "Pelayanan Ramah",
                desc: "Disambut langsung dengan kehangatan Paman Edi (Ugan Edi). Sensasi jajan yang bikin kangen."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-bg-warm p-8 rounded-2xl border border-secondary/10 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section id="menu" className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Menu Surabi Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Varian lezat yang siap memanjakan lidah Anda. Cocok untuk sarapan ringan atau camilan santai.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { name: "Surabi Original", desc: "Surabi polos dengan kelapa parut dan gula merah", price: "Rp 2.000", tag: "Klasik" },
            { name: "Surabi Oncom", desc: "Topping oncom pedas khas Sunda", price: "Rp 3.000", tag: "Favorit" },
            { name: "Surabi Keju", desc: "Topping keju leleh gurih", price: "Rp 4.000" },
            { name: "Surabi Coklat", desc: "Topping coklat manis untuk si kecil", price: "Rp 4.000" },
            { name: "Surabi Kacang", desc: "Topping kacang tanah sangrai", price: "Rp 3.500" },
            { name: "Paket Hemat 5 pcs", desc: "Pilihan 5 surabi bebas topping", price: "Rp 12.000", bg: "bg-surface border-secondary", highlight: true }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl flex flex-col justify-between h-full shadow-sm border
                ${item.highlight ? 'bg-gradient-to-br from-surface to-secondary/10 border-secondary' : 'bg-surface border-neutral-100'}
              `}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-text-primary pr-4">{item.name}</h3>
                  {item.tag && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent whitespace-nowrap">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">{item.desc}</p>
              </div>
              <div className="flex justify-between items-end mt-auto border-t border-dashed border-gray-200 pt-4">
                <span className="text-sm text-text-secondary">Harga</span>
                <span className="font-bold text-xl text-primary">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      <section id="ulasan" className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Ulasan Pelanggan</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-secondary">
                  {[1,2,3,4].map(k => <Star key={k} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-medium text-text-primary">4.0 / 5.0 di Google Maps</span>
              </div>
            </div>
          </div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             variants={staggerContainer}
             className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "Adit Hardiansyah", rating: 5, quote: "Makanannya murah sama enak", en: "Food is cheap and delicious" },
              { name: "Puji Yati", rating: 5, quote: "Trimakasih atas pelayanan nya yg sangat baik p ugan edi", en: "Thank you for the very good service from Uncle Edi" },
              { name: "sarah nabilah", rating: 4, quote: "surabinya enak dan murah di kantong", en: "The surabi is delicious and affordable" },
              { name: "Nur Aliyah", rating: 5, quote: "Surabi terenak di cimahi 🥰", en: "The most delicious surabi in Cimahi" }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                className="bg-surface p-6 sm:p-8 rounded-2xl shadow-sm border border-neutral-100"
              >
                <div className="flex text-secondary mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <blockquote className="text-lg font-medium text-text-primary mb-2">"{review.quote}"</blockquote>
                <p className="text-sm text-text-secondary italic mb-6">"{review.en}"</p>
                <div className="font-semibold text-text-primary flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  {review.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">Cerita di Balik Tungku</h2>
            <div className="space-y-6 text-lg text-text-secondary">
              <p>
                Surabi (atau serabi) adalah jajanan pasar tradisional yang mengakar kuat di budaya Sunda. Terbuat dari adonan sederhana tepung beras dan santan kelapa, rahasia kelezatannya terletak pada proses pembuatannya.
              </p>
              <p>
                Di <strong>Surabi Cikal Cisangkan</strong>, kami menjaga tradisi tersebut dengan memasak setiap porsi di atas tungku tanah liat kecil. Panas alami dari tungku memberikan aroma 'smoky' dan tekstur renyah di pinggir, namun tetap lembut di tengah.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-r-2xl border-l-4 border-primary">
                <p className="font-medium text-text-primary">
                  Berlokasi di dalam Toko YANTI, kami hadir setiap hari Selasa–Minggu mulai pukul 06.00 pagi. Siap menemani pagi Anda dengan sarapan yang hangat dan penuh kenangan.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-md aspect-[4/3] bg-surface rounded-[2rem] shadow-xl border border-bg-warm relative overflow-hidden flex items-center justify-center p-8">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-tr-full -z-10" />
               <svg viewBox="0 0 200 200" className="w-full h-full text-text-primary/10" fill="currentColor">
                 <path d="M40 160 L160 160 L140 100 Q100 80 60 100 Z" />
                 <rect x="80" y="100" width="40" height="30" rx="10" fill="var(--color-primary)" opacity="0.8"/>
                 <path d="M90 90 Q100 50 110 90" stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round" fill="none" className="animate-pulse"/>
                 <path d="M75 80 Q85 40 95 80" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5"/>
                 <path d="M105 80 Q115 40 125 80" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5"/>
                 <circle cx="100" cy="180" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
               </svg>
               <div className="absolute inset-0 flex items-center justify-center flex-col z-10 text-center">
                 <ChefHat className="w-16 h-16 text-primary mb-4" />
                 <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Resep Turun Temurun</h3>
                 <p className="text-text-secondary text-sm px-8">Komitmen untuk menyajikan rasa asli Sunda di setiap gigitan.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="lokasi" className="py-20 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 bg-bg-warm rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:col-span-2 space-y-8 relative z-10"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Mampir ke Warung Kami</h2>
                <p className="text-text-secondary">Berada di dalam Toko YANTI. Area yang nyaman untuk dine-in santai atau sekadar antri menunggu pesanan bungkus.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 bg-surface rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">Alamat</h4>
                    <p className="text-text-secondary leading-relaxed mt-1">
                      Jl. Kyai H. Usman Dhomiri, Padasuka, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40625<br/>
                      <span className="text-xs font-mono mt-2 inline-block bg-white px-2 py-1 rounded">4GFJ+XP Padasuka</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 bg-surface rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">Jam Buka</h4>
                    <p className="text-text-secondary leading-relaxed mt-1">
                      Senin: <span className="text-red-500 font-medium">Tutup</span><br/>
                      Selasa - Minggu: 06.00 WIB - Habis
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 bg-surface rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">Telepon / Reservasi</h4>
                    <p className="text-text-secondary leading-relaxed mt-1 font-medium">0896-5646-1483</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="lg:col-span-3 h-full min-h-[300px] bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center items-center text-center relative z-10 border border-neutral-100"
            >
              <MapPin className="w-16 h-16 text-primary/30 mb-6" />
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">Temukan di Google Maps</h3>
              <p className="text-text-secondary mb-8 max-w-sm">Dapatkan petunjuk arah navigasi langsung ke lokasi Surabi Cikal Cisangkan.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-surface px-8 py-3.5 rounded-xl font-semibold shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Buka di Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="hubungi-kami" className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-gradient-to-br from-primary to-[#b85b20] rounded-[2.5rem] p-10 md:p-16 text-center text-surface shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl mix-blend-overlay"></div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 relative z-10">Mau Makan Surabi Sekarang?</h2>
            <p className="text-primary-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 relative z-10">
              Hubungi kami via WhatsApp untuk pesanan takeaway atau langsung datang ke Toko YANTI di Cimahi. Kami tunggu kedatangannya!
            </p>
            
            <motion.a 
              animate={{ 
                boxShadow: ["0px 0px 0px 0px rgba(255,255,255,0.4)", "0px 0px 0px 15px rgba(255,255,255,0)", "0px 0px 0px 0px rgba(255,255,255,0)"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-surface text-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative z-10"
            >
              <MessageCircle className="w-6 h-6" />
              Chat WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>


      <footer className="bg-surface border-t border-bg-warm pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="md:col-span-5 lg:col-span-4">
               <div className="font-display font-bold text-2xl text-primary flex items-center gap-2 mb-4">
                <Flame className="text-secondary w-6 h-6" />
                Surabi Cikal
              </div>
              <p className="text-text-secondary mb-6 max-w-sm">
                Menyajikan surabi tradisional dengan kehangatan khas Pasundan. Jajanan lokal kualitas rasanya maksimal.
              </p>
            </div>
            
            <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
              <h4 className="font-bold text-text-primary mb-4">Menu Cepat</h4>
              <ul className="space-y-3">
                {['Beranda', 'Menu', 'Ulasan'].map((item) => (
                   <li key={item}>
                     <button onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} className="text-text-secondary hover:text-primary transition-colors">
                       {item}
                     </button>
                   </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="font-bold text-text-primary mb-4">Informasi</h4>
              <ul className="space-y-3">
                 <li>
                   <button onClick={() => scrollToSection('lokasi')} className="text-text-secondary hover:text-primary transition-colors">
                     Lokasi & Jam Buka
                   </button>
                 </li>
                 <li>
                   <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                     Google Maps
                   </a>
                 </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-bg-warm pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
            <p>© 2025 Surabi Cikal Cisangkan. All rights reserved.</p>
            <p>Dibuat dengan ❤️ di Cimahi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


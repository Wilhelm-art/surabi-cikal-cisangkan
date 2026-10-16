import { motion } from 'motion/react';
import { Flame, ArrowRight, ShieldCheck, Sparkles, ChefHat } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { scrollToSection } from '../utils/scroll';
import { getBusinessStatus } from '../utils/businessHours';

const FLAVOR_PILLS = [
  { label: "Kinca Gula Aren Asli", desc: "Manis legit harum pandan", tag: "Manis", color: "bg-amber-50 text-amber-900 border-amber-200" },
  { label: "Oncom Pedas Gurih", desc: "Bumbu tumis khas Sunda", tag: "Asin", color: "bg-orange-50 text-orange-900 border-orange-200" },
  { label: "Coklat Lumer & Keju", desc: "Favorit anak muda", tag: "Manis", color: "bg-stone-50 text-stone-900 border-stone-200" },
  { label: "Telor Sosis Gurih", desc: "Sarapan padat protein", tag: "Asin", color: "bg-emerald-50 text-emerald-900 border-emerald-200" }
];

export function Hero() {
  const status = getBusinessStatus();

  return (
    <section id="beranda" className="relative min-h-[92dvh] pt-32 pb-20 flex items-center max-w-6xl mx-auto px-6 overflow-hidden">
      
      {/* Ambient Warm Glow (Natural Clay Ember) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Status & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            {/* Live Operational Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border shadow-xs transition-colors ${
              status.isOpen 
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200/80' 
                : 'bg-amber-50 text-amber-900 border-amber-200/80'
            }`}>
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span>{status.isOpen ? "Buka Sekarang (06.00 – 10.00 WIB)" : "Buka Pukul 06.00 WIB Pagi"}</span>
            </div>

            {/* Halal Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>100% Halal</span>
            </div>

            {/* Artisan Tradition Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
              <ChefHat className="w-3.5 h-3.5 text-primary" />
              <span>Bakar Tungku Tradisional</span>
            </div>
          </motion.div>
          
          {/* Main Editorial Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12] text-text-primary"
          >
            Cita Rasa Surabi Asli <br />
            dari <span className="text-primary italic font-serif">Bara Tungku</span> Tanah Liat
          </motion.h1>
          
          {/* Narrative Body Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Nikmati kelezatan jajanan pasar khas Sunda yang diracik dari tepung beras pilihan dan perasan santan kelapa murni, dipanggang hangat langsung setiap pagi oleh{' '}
            <strong className="text-text-primary font-semibold">{BUSINESS_INFO.owner}</strong> di Cisangkan, Cimahi Tengah.
          </motion.p>
          
          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2"
          >
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={BUSINESS_INFO.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/95 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/20 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>Pesan via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('menu')}
              className="bg-white hover:bg-stone-50 text-text-primary border border-stone-200 px-8 py-4 rounded-full font-semibold transition-all shadow-xs cursor-pointer text-sm sm:text-base"
            >
              Lihat 32 Pilihan Menu
            </motion.button>
          </motion.div>

          {/* Quick Value Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-text-secondary border-t border-stone-200/60 max-w-md mx-auto lg:mx-0"
          >
            <div>
              <p className="font-bold text-text-primary font-mono text-sm sm:text-base">Rp 3.000</p>
              <p className="text-[11px]">Harga Mulai</p>
            </div>
            <div className="w-px h-7 bg-stone-200" />
            <div>
              <p className="font-bold text-text-primary font-mono text-sm sm:text-base">32 Varian</p>
              <p className="text-[11px]">Asin & Manis</p>
            </div>
            <div className="w-px h-7 bg-stone-200" />
            <div>
              <p className="font-bold text-text-primary font-mono text-sm sm:text-base">4.0 ★</p>
              <p className="text-[11px]">Google Maps</p>
            </div>
          </motion.div>

        </div>

        {/* Right Plate Column (Artisan Handcrafted Visual) */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          
          {/* Main Food Showcase with warm frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[380px] aspect-square rounded-[2.5rem] p-3 bg-gradient-to-br from-amber-100/50 via-white to-orange-100/40 border border-stone-200/80 shadow-2xl overflow-hidden group"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-stone-100">
              <img 
                src="/surabi-kinca.webp" 
                alt="Signature Surabi Kinca Gula Aren Asli" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                width={380}
                height={380}
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Image Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 font-semibold">
                  Sajian Ikonik
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Surabi Kinca Gula Aren
                </h3>
                <p className="text-[11px] text-stone-200">
                  Adonan kelapa gurih disiram kuah kinca aren murni
                </p>
              </div>
            </div>
          </motion.div>

          {/* Flavor Chips Grid below plate */}
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-[380px] mt-4">
            {FLAVOR_PILLS.map((pill, idx) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className={`p-3 rounded-2xl border ${pill.color} shadow-xs text-left`}
              >
                <span className="text-[9px] font-mono uppercase tracking-wider font-bold opacity-75">
                  {pill.tag}
                </span>
                <h4 className="font-bold text-xs leading-tight mt-0.5">
                  {pill.label}
                </h4>
                <p className="text-[10px] opacity-75 mt-0.5 leading-tight">
                  {pill.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

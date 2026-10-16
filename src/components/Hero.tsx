import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, ChefHat, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { scrollToSection } from '../utils/scroll';
import { getBusinessStatus } from '../utils/businessHours';

const FLAVOR_PILLS = [
  { label: "Kinca Gula Aren Asli", desc: "Manis legit harum pandan", tag: "Manis", color: "bg-amber-100/70 text-amber-950 border-amber-300" },
  { label: "Oncom Pedas Gurih", desc: "Bumbu tumis khas Sunda", tag: "Asin", color: "bg-orange-100/70 text-orange-950 border-orange-300" },
  { label: "Coklat Lumer & Keju", desc: "Favorit sarapan anak muda", tag: "Manis", color: "bg-stone-100 text-stone-900 border-stone-300" },
  { label: "Telor Sosis Spesial", desc: "Sarapan gurih padat energi", tag: "Asin", color: "bg-emerald-100/70 text-emerald-950 border-emerald-300" }
];

export function Hero() {
  const status = getBusinessStatus();

  return (
    <section id="beranda" className="relative min-h-[92dvh] pt-32 pb-20 flex items-center max-w-6xl mx-auto px-6 overflow-hidden">
      
      {/* Ambient Warm Culinary Glow */}
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
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-xs transition-colors ${
              status.isOpen 
                ? 'bg-emerald-50 text-emerald-900 border-emerald-300' 
                : 'bg-amber-50 text-amber-950 border-amber-300'
            }`}>
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`} />
              <span>{status.isOpen ? "Buka Sekarang (06.00 – 10.00 WIB)" : "Buka Besok 06.00 WIB"}</span>
            </div>

            {/* Halal Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-stone-100 text-stone-900 border border-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>100% Halal</span>
            </div>

            {/* Artisan Tradition Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-stone-100 text-stone-900 border border-stone-300">
              <ChefHat className="w-3.5 h-3.5 text-primary" />
              <span>Tungku Tanah Liat Asli</span>
            </div>
          </motion.div>
          
          {/* Main Editorial Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.14] text-text-primary"
          >
            Gurih Wangi Arang, <br />
            Manis Legit <span className="text-primary italic font-serif">Gula Aren Asli</span>
          </motion.h1>
          
          {/* Narrative Body Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
          >
            Sarapan legendaris warga Cimahi sejak pukul 06.00 WIB. Setiap porsi diaduk dari santan kelapa murni dan tepung beras pilihan, dipanggang hangat satu per satu di atas tungku tanah liat oleh <strong className="text-text-primary font-bold">{BUSINESS_INFO.owner}</strong>. Kerak bawahnya renyah garing, bagian dalamnya lembut bersarang meleleh di lidah.
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
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base min-h-[48px]"
            >
              <span>Pesan via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('menu')}
              className="bg-white hover:bg-stone-50 text-text-primary border border-stone-300 px-8 py-4 rounded-full font-bold transition-all shadow-xs cursor-pointer text-sm sm:text-base min-h-[48px]"
            >
              Lihat 32 Pilihan Rasa
            </motion.button>
          </motion.div>

          {/* Quick Value Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-text-secondary border-t border-stone-200 max-w-md mx-auto lg:mx-0 font-medium"
          >
            <div>
              <p className="font-bold text-text-primary font-mono text-base">Rp 3.000</p>
              <p className="text-[11px] text-stone-600">Harga Mulai</p>
            </div>
            <div className="w-px h-7 bg-stone-300" />
            <div>
              <p className="font-bold text-text-primary font-mono text-base">32 Varian</p>
              <p className="text-[11px] text-stone-600">Manis & Gurih</p>
            </div>
            <div className="w-px h-7 bg-stone-300" />
            <div>
              <p className="font-bold text-text-primary font-mono text-base">Setiap Hari</p>
              <p className="text-[11px] text-stone-600">06.00 – 10.00 WIB</p>
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
            className="relative w-full max-w-[380px] aspect-square rounded-[2.5rem] p-3 bg-gradient-to-br from-amber-100/60 via-white to-orange-100/50 border border-stone-300 shadow-2xl overflow-hidden group"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-stone-100">
              <img 
                src="/surabi-kinca.webp" 
                alt="Sajian Surabi Kinca Gula Aren Asli khas Bapak Asep Saepudin di Cisangkan" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                width={380}
                height={380}
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
              
              {/* Image Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 font-bold">
                  Sajian Paling Laris
                </span>
                <p className="font-display font-bold text-xl text-white mt-0.5">
                  Surabi Kinca Gula Aren
                </p>
                <p className="text-xs text-stone-200 font-medium">
                  Adonan kelapa gurih disiram kinca aren kental harum
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
                className={`p-3 rounded-2xl border ${pill.color} shadow-2xs text-left`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold opacity-80">
                  {pill.tag}
                </span>
                <p className="font-bold text-xs leading-tight mt-0.5 text-stone-900">
                  {pill.label}
                </p>
                <p className="text-[10px] text-stone-700 mt-0.5 leading-tight font-medium">
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

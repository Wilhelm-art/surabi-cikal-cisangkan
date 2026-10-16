import { motion } from 'motion/react';
import { Sparkles, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { scrollToSection } from '../utils/scroll';
import { getBusinessStatus } from '../utils/businessHours';

const FLAVOR_PILLS = [
  { label: "Kinca Aren 🍯", color: "bg-amber-50 text-amber-800 border-amber-200" },
  { label: "Oncom Pedas 🌶️", color: "bg-red-50 text-red-800 border-red-200" },
  { label: "Coklat Keju 🍫", color: "bg-orange-50 text-orange-800 border-orange-200" },
  { label: "Oreo Susu 🥛", color: "bg-blue-50 text-blue-800 border-blue-200" }
];

export function Hero() {
  const status = getBusinessStatus();

  return (
    <section id="beranda" className="relative min-h-[100dvh] pt-28 pb-16 flex items-center max-w-6xl mx-auto px-6 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-6 text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span>{BUSINESS_INFO.tagline}</span>
            </div>

            {/* Live Operating Status Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-xs ${
              status.isOpen 
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                : 'bg-amber-50 text-amber-900 border-amber-200'
            }`}>
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
              <span>{status.isOpen ? "Buka Sekarang (06.00 – 10.00 WIB)" : "Buka Setiap Pagi 06.00 WIB (Bisa Pre-Order)"}</span>
            </div>
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
            {BUSINESS_INFO.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={BUSINESS_INFO.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/10 hover:bg-primary/95 transition-all text-center w-full sm:w-auto cursor-pointer"
            >
              Pesan Sekarang
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('menu')}
              className="bg-white hover:bg-stone-50 text-text-primary border border-stone-200 px-8 py-4 rounded-full font-semibold transition-all w-full sm:w-auto shadow-sm cursor-pointer"
            >
              Lihat 32 Menu
            </motion.button>
          </motion.div>
        </div>

        {/* Right Orbit Plate Column */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full aspect-square max-w-[480px] mx-auto">
          {/* Rotating dashed ring */}
          <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-stone-200 animate-[spin_80s_linear_infinite]" />
          <div className="absolute w-[70%] h-[70%] rounded-full border border-stone-100" />
          
          {/* Center Plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[65%] aspect-square rounded-full border-8 border-white shadow-2xl overflow-hidden bg-bg-warm"
          >
            <img 
              src="/surabi-kinca.webp" 
              alt="Signature Surabi Kinca Aren" 
              className="w-full h-full object-cover"
              width={400}
              height={400}
              loading="eager"
              decoding="async"
            />
          </motion.div>

          {/* Floating Flavor Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute right-0 flex flex-col gap-3.5 z-10"
          >
            {FLAVOR_PILLS.map((item, i) => (
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
  );
}

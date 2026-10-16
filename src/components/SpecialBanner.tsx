import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export function SpecialBanner() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary via-[#B0451F] to-[#7A280E] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="space-y-5 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-200 font-semibold">
              Pesanan Khusus & Rombongan
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Mau Nikmati Surabi Hangat Bersama Keluarga atau Kantor?
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Hubungi kami via WhatsApp untuk pemesanan sarapan kantor, hajatan, atau takeaway dalam jumlah banyak guna menghindari antrian panjang di pagi hari.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={BUSINESS_INFO.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-primary px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>Hubungi WhatsApp Bapak Asep</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.a>
          </div>

          {/* Photo Showcase with warm frame */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] border-4 border-white/25 overflow-hidden shadow-2xl shrink-0 bg-stone-900">
            <img 
              src="/surabi-3.webp" 
              alt="Sajian surabi hangat siap santap" 
              className="w-full h-full object-cover"
              width={224}
              height={224}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

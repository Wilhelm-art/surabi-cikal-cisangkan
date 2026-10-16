import { motion } from 'motion/react';
import { Flame, Compass, ChefHat, Clock, HeartHandshake, Wallet } from 'lucide-react';
import { STORE_FEATURES } from '../data/features';

const ICON_MAP = {
  Flame: <Flame className="w-5 h-5 text-primary" />,
  Compass: <Compass className="w-5 h-5 text-accent" />,
  ChefHat: <ChefHat className="w-5 h-5 text-primary" />,
  Clock: <Clock className="w-5 h-5 text-secondary" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-primary" />,
  Wallet: <Wallet className="w-5 h-5 text-secondary" />
};

export function Features() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Chef / Tungku Photo */}
        <div className="lg:col-span-5 flex justify-center w-full relative">
          <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-stone-200" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[360px] aspect-square rounded-full border-8 border-white shadow-xl overflow-hidden relative"
          >
            <img 
              src="/surabi-4.webp" 
              alt="Proses pemanggangan surabi di atas tungku tanah liat" 
              className="w-full h-full object-cover"
              width={360}
              height={360}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Right Feature Details */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">
            Keunggulan
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
            Lebih Dari Sekadar Warung Biasa 🥞
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
            Kami menyajikan surabi otentik dengan menjaga kualitas proses pembuatan tradisional demi menghasilkan rasa manis dan gurih terbaik.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {STORE_FEATURES.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-warm flex items-center justify-center shrink-0 border border-stone-200/50">
                  {ICON_MAP[item.iconName]}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

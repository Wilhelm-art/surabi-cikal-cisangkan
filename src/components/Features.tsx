import { motion } from 'motion/react';
import { Flame, Compass, ChefHat, Clock, HeartHandshake, Wallet } from 'lucide-react';
import { STORE_FEATURES } from '../data/features';
import { BUSINESS_INFO } from '../data/business';

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
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[360px] aspect-square rounded-[2.5rem] border-4 border-white shadow-xl overflow-hidden relative bg-stone-100"
          >
            <img 
              src="/surabi-4.webp" 
              alt={`Proses pemanggangan surabi di atas tungku tanah liat oleh ${BUSINESS_INFO.owner}`} 
              className="w-full h-full object-cover"
              width={360}
              height={360}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-amber-300">
                Panggang Tradisional
              </span>
              <p className="text-xs text-stone-200 mt-0.5">
                Bara arang & cetakan tanah liat alami
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Feature Details */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">
            Keunggulan Warung
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
            Komitmen Mutu & Tradisi Pasundan
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
            Kami menjaga keotentikan rasa dengan mempertahankan metode pembuatan leluhur sejak 2012 demi menghasilkan aroma khas dan tekstur surabi lembut berserat.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {STORE_FEATURES.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-warm flex items-center justify-center shrink-0 border border-stone-200/60 shadow-2xs">
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

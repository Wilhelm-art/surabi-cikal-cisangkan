import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { BUSINESS_INFO } from '../data/business';

export function ReviewsSection() {
  return (
    <section id="ulasan" className="py-24 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">
              Kata Pelanggan Setia
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">
              Ulasan Pelanggan
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-amber-500" aria-label="Rating 5 bintang">
                {[1, 2, 3, 4, 5].map((k) => (
                  <Star key={k} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-text-primary">
                {BUSINESS_INFO.rating.toFixed(1)} / 5.0 di Google Maps
              </span>
            </div>
          </div>
          <a 
            href={BUSINESS_INFO.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-hover font-bold text-sm hover:underline flex items-center gap-1.5 min-h-[44px]"
          >
            <span>Lihat Semua Ulasan di Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-1.5 bg-surface border border-stone-300 rounded-[2rem] shadow-sm flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="flex text-amber-500 mb-4" aria-label={`Rating ${review.rating} dari 5 bintang`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current text-amber-500' : 'text-stone-300'}`} 
                    />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg font-semibold text-text-primary mb-2 leading-snug">
                  “{review.quote}”
                </blockquote>
                {review.quoteEn && (
                  <p className="text-xs sm:text-sm text-stone-600 italic mb-6 font-medium">
                    “{review.quoteEn}”
                  </p>
                )}
                
                <div className="font-bold text-text-primary flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm">{review.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

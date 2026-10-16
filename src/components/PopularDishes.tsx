import { motion } from 'motion/react';
import { Star, Plus, ArrowRight, Check } from 'lucide-react';
import { POPULAR_DISHES } from '../data/menu';
import { useCart } from '../context/CartContext';
import { scrollToSection } from '../utils/scroll';
import { MenuItem } from '../types';

export function PopularDishes() {
  const { cart, addToCart } = useCart();

  const handleAdd = (dish: typeof POPULAR_DISHES[number]) => {
    const item: MenuItem = {
      id: dish.name.toLowerCase().replace(/[\/ ]+/g, '-'),
      name: dish.name,
      price: dish.price,
      priceNum: parseInt(dish.price.replace(/[^0-9]/g, ''), 10),
      category: dish.name.includes('Kinca') || dish.name.includes('Coklat') ? 'manis' : 'asin',
      desc: dish.desc,
      img: dish.img
    };
    addToCart(item);
  };

  return (
    <section className="py-24 border-t border-stone-200/60 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-semibold">
              Pilihan Paling Disukai Pelanggan
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-2">
              Varian Terfavorit
            </h2>
          </div>
          <button 
            onClick={() => scrollToSection('menu')}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer self-start sm:self-auto min-h-[44px]"
          >
            <span>Lihat Semua 32 Varian</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {POPULAR_DISHES.map((dish, i) => {
            const dishItemId = dish.name.toLowerCase().replace(/[\/ ]+/g, '-');
            const qty = cart[dishItemId]?.quantity || 0;

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-surface rounded-[2rem] p-6 pt-16 border border-stone-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center mt-12 group"
              >
                {/* Circular image overlapping card top */}
                <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-bg-warm">
                  <img 
                    src={dish.img} 
                    alt={`Sajian lezat ${dish.name} hangat`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Rating Stars without prohibited aria on div */}
                <div className="flex text-amber-600 gap-0.5 mb-2.5">
                  <span className="sr-only">Rating {dish.rating} dari 5 bintang</span>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`w-3.5 h-3.5 ${idx < dish.rating ? 'fill-current text-amber-500' : 'text-stone-300'}`} 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <h3 className="font-display font-bold text-lg text-text-primary mb-1">
                  {dish.name}
                </h3>
                <p className="text-stone-700 text-xs leading-relaxed max-w-[200px] mb-6 min-h-[32px] font-medium">
                  {dish.desc}
                </p>

                {/* Price and Cart Add Button */}
                <div className="flex justify-between items-center w-full border-t border-stone-200 pt-4 mt-auto">
                  <span className="font-bold text-stone-900 text-base font-mono">
                    {dish.price}
                  </span>
                  <button 
                    onClick={() => handleAdd(dish)}
                    className={`min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      qty > 0 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/25'
                    }`}
                    aria-label={`Tambahkan ${dish.name} ke pesanan`}
                  >
                    {qty > 0 ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, Send, MessageCircle, Sparkles } from 'lucide-react';
import { useCart, CartItem, formatRupiah } from '../context/CartContext';

const QUICK_NOTES = [
  'Kuah Kinca Dipisah',
  'Pedas Sedang',
  'Pedas Nampol (Banyak Cabai)',
  'Bungkus Daun Pisang',
  'Ambil Jam 07.00 WIB',
  'Kirim via GoSend / Grab'
];

export function FloatingCart() {
  const { cart, totalCount, totalPrice, updateQuantity, removeFromCart, clearCart, getCheckoutWhatsAppUrl } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('Ambil Sendiri di Warung');
  const [notes, setNotes] = useState('');

  if (totalCount === 0) return null;

  const items = Object.values(cart) as CartItem[];

  const handleCheckout = () => {
    const url = getCheckoutWhatsAppUrl(customerName, deliveryMethod, notes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleQuickNote = (chip: string) => {
    setNotes((prev) => {
      const list = prev
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      if (list.includes(chip)) {
        return list.filter((s) => s !== chip).join(', ');
      } else {
        return [...list, chip].join(', ');
      }
    });
  };

  const isChipActive = (chip: string) => {
    return notes
      .split(',')
      .map((s) => s.trim())
      .includes(chip);
  };

  return (
    <>
      {/* Floating Bottom Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-0 right-0 z-40 px-4 pointer-events-none"
      >
        <div className="max-w-xl mx-auto pointer-events-auto">
          <div className="bg-stone-900/95 backdrop-blur-md text-white p-3 sm:p-4 rounded-full shadow-2xl border border-stone-700/60 flex items-center justify-between gap-3">
            <div 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 pl-2 cursor-pointer flex-1"
              role="button"
              tabIndex={0}
              aria-label="Buka rincian keranjang pesanan"
              onKeyDown={(e) => {
                if (e.key === 'Enter') setIsOpen(true);
              }}
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-300 font-medium">
                  {totalCount} Porsi Surabi Dipilih
                </p>
                <p className="text-sm sm:text-base font-bold text-white font-mono">
                  Rp {formatRupiah(totalPrice)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={clearCart}
                className="p-2 text-stone-400 hover:text-red-400 transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-stone-800"
                title="Batal & kosongkan keranjang"
                aria-label="Batal dan kosongkan keranjang"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-primary hover:bg-primary-hover active:scale-95 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-primary/20 min-h-[44px]"
              >
                <span>Edit / Pesan</span>
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cart Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[88vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-stone-200 flex justify-between items-center bg-stone-50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-base">
                      Keranjang Pesanan Surabi
                    </h3>
                    <p className="text-[11px] text-text-secondary font-medium">
                      {totalCount} porsi siap dipesan ke Bapak Asep
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Tutup keranjang"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="p-5 overflow-y-auto space-y-4 flex-1 divide-y divide-stone-100">
                {items.map((entry) => (
                  <div key={entry.item.id} className="pt-3.5 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-stone-900 text-sm truncate">
                        {entry.item.name}
                      </p>
                      <p className="text-xs text-stone-600 font-mono">
                        {entry.item.price} x {entry.quantity} ={' '}
                        <span className="font-bold text-primary">
                          Rp {formatRupiah(entry.item.priceNum * entry.quantity)}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => updateQuantity(entry.item.id, -1)}
                        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center cursor-pointer transition-colors"
                        aria-label={`Kurangi jumlah ${entry.item.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-sm text-stone-900 w-6 text-center font-mono">
                        {entry.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(entry.item.id, 1)}
                        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center cursor-pointer transition-colors"
                        aria-label={`Tambah jumlah ${entry.item.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeFromCart(entry.item.id)}
                        className="p-1.5 text-stone-400 hover:text-red-600 transition-colors cursor-pointer ml-1 min-w-[32px] min-h-[32px] flex items-center justify-center"
                        aria-label={`Hapus ${entry.item.name} dari keranjang`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Additional Order Form */}
                <div className="pt-4 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-stone-900 mb-1">
                      Nama Pemesan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Ibu Rina / Kang Adit"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-primary text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-900 mb-1">
                      Metode Pengambilan
                    </label>
                    <select
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-primary bg-white cursor-pointer text-stone-900"
                    >
                      <option value="Ambil Sendiri di Warung">Ambil Sendiri di Warung (Hangat)</option>
                      <option value="Kirim via Gosend / Grab (Ongkir ditanggung pembeli)">
                        Kirim via Gosend / Grab (Ongkir pembeli)
                      </option>
                      <option value="Pre-Order untuk Sarapan Besok Pagi">
                        Pre-Order untuk Sarapan Besok Pagi
                      </option>
                    </select>
                  </div>

                  {/* Rekomendasi 4: Quick-Chips Catatan Pesanan */}
                  <div>
                    <label className="block text-xs font-bold text-stone-900 mb-1.5">
                      Catatan Pesanan Khusus
                    </label>
                    <p className="text-[11px] text-stone-600 mb-2">
                      Klik opsi cepat di bawah atau ketik manual:
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {QUICK_NOTES.map((chip) => {
                        const active = isChipActive(chip);
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => toggleQuickNote(chip)}
                            className={`text-[11px] px-2.5 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                              active
                                ? 'bg-primary text-white border-primary shadow-xs'
                                : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300'
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                    <input
                      type="text"
                      placeholder="Contoh: Kuah kinca dipisah, oncom agak pedas..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-primary text-stone-900"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-700 font-semibold">Total Pesanan:</span>
                  <span className="font-display font-bold text-lg text-primary font-mono">
                    Rp {formatRupiah(totalPrice)}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    className="px-4 py-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-200/80 text-xs font-bold transition-colors cursor-pointer min-h-[44px]"
                  >
                    Kosongkan
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 transition-all cursor-pointer min-h-[44px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesanan ke WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

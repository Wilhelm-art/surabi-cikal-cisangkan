import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, QrCode, Star, Flame, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface TableQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TableQrModal({ isOpen, onClose }: TableQrModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header controls (not printed) */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-200 print:hidden">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <QrCode className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-text-primary text-base">
                  Kartu Meja QR Siap Cetak
                </h3>
                <p className="text-[11px] text-text-secondary">
                  Bisa dilaminating / ditaruh di standing akrilik meja warung fisik
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/95 transition-all shadow-md shadow-primary/20 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Card Area */}
          <div 
            id="printable-table-card" 
            className="border-2 border-primary/30 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30 text-center relative overflow-hidden shadow-inner"
          >
            {/* Top decorative accent */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-xs">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary font-bold">
              Kuliner Tradisional Cimahi
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mt-1">
              Surabi Cikal Cisangkan
            </h2>
            <p className="text-xs text-text-secondary mt-1 max-w-sm mx-auto font-medium">
              Dipanggang hangat langsung di atas tungku tanah liat oleh{' '}
              <span className="text-text-primary font-semibold">{BUSINESS_INFO.owner}</span>
            </p>

            <div className="my-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
              <span>حلال</span>
              <span>100% Halal • Buka Setiap Hari (06.00 – 10.00 WIB)</span>
            </div>

            {/* Two QR Codes Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 my-6 pt-4 border-t border-stone-200">
              {/* QR 1: Website Menu */}
              <div className="flex flex-col items-center bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center border border-stone-100">
                  <img
                    src="/qr-menu.png"
                    alt="QR Code Menu Surabi Cikal"
                    className="w-full h-full object-contain"
                    width={128}
                    height={128}
                  />
                </div>
                <h4 className="font-bold text-xs text-text-primary mt-2">
                  Buka Menu di HP
                </h4>
                <p className="text-[10px] text-text-secondary leading-tight mt-0.5 max-w-[120px]">
                  Lihat 32 foto varian rasa & pesan cepat via WhatsApp
                </p>
                <span className="text-[9px] font-mono text-primary font-semibold mt-1">
                  {BUSINESS_INFO.domainDisplay}
                </span>
              </div>

              {/* QR 2: Google Maps Review */}
              <div className="flex flex-col items-center bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center border border-stone-100">
                  <img
                    src="/qr-maps.png"
                    alt="QR Code Google Maps Review"
                    className="w-full h-full object-contain"
                    width={128}
                    height={128}
                  />
                </div>
                <h4 className="font-bold text-xs text-text-primary mt-2 flex items-center gap-1">
                  <span>Beri Bintang 5</span>
                  <Star className="w-3 h-3 fill-current text-secondary" />
                </h4>
                <p className="text-[10px] text-text-secondary leading-tight mt-0.5 max-w-[120px]">
                  Bantu dukung UMKM lokal dengan review di Google Maps
                </p>
                <span className="text-[9px] font-mono text-secondary font-semibold mt-1">
                  Google Maps Review
                </span>
              </div>
            </div>

            {/* Table Number Placeholder & Footer */}
            <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-xs text-text-secondary">
              <span className="font-semibold text-text-primary">
                Nomor Meja: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]
              </span>
              <span className="font-mono text-[11px] text-primary font-semibold">
                WA: {BUSINESS_INFO.phoneDisplay}
              </span>
            </div>
            <p className="text-[9px] text-stone-400 mt-2">
              Lokasi: {BUSINESS_INFO.landmark} • Cimahi
            </p>
          </div>

          {/* Quick instructions (not printed) */}
          <div className="mt-4 text-center print:hidden">
            <p className="text-xs text-text-secondary">
              💡 <span className="font-medium">Tips:</span> Tekan tombol{' '}
              <strong className="text-text-primary">Cetak / PDF</strong> di atas, pilih ukuran kertas A5/A6, lalu masukkan lembar ke holder akrilik meja.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

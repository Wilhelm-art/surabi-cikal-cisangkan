import { Flame, QrCode } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { scrollToSection, toSectionId } from '../utils/scroll';

interface FooterProps {
  onOpenQrModal?: () => void;
}

const FOOTER_NAV = ['Beranda', 'Menu', 'Ulasan', 'Lokasi'];

export function Footer({ onOpenQrModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-stone-950 py-16 text-stone-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                <Flame className="text-primary w-4 h-4" />
              </div>
              <span className="text-white">Surabi Cikal</span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              Mendedikasikan cita rasa jajanan pasar tradisional Sunda yang dipanggang hangat dari tungku tanah liat oleh {BUSINESS_INFO.owner} untuk warga Cimahi dan sekitarnya.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-600/30 text-emerald-400 text-xs font-semibold">
                <span>حلال</span>
                <span>100% Halal</span>
              </div>
              {onOpenQrModal && (
                <button
                  onClick={onOpenQrModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-primary/50 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-primary" />
                  <span>Cetak Stand Meja QR</span>
                </button>
              )}
            </div>
          </div>
          
          {/* Menu Links */}
          <div className="md:col-span-3 lg:col-start-7">
            <h4 className="font-bold text-white text-sm mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(toSectionId(item))} 
                    className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white text-sm mb-4">Kontak & Lokasi</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>Pengelola: {BUSINESS_INFO.owner}</li>
              <li>Domain: <span className="text-primary font-mono">{BUSINESS_INFO.domainDisplay}</span></li>
              <li>
                WhatsApp:{" "}
                <a 
                  href={BUSINESS_INFO.waLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>{" "}
                /{" "}
                <a 
                  href={BUSINESS_INFO.waLinkSecondary} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-primary transition-colors"
                >
                  {BUSINESS_INFO.phoneSecondary}
                </a>
              </li>
              <li>Lokasi: {BUSINESS_INFO.landmark}</li>
              <li>Jam Buka: {BUSINESS_INFO.operatingHours.days}, {BUSINESS_INFO.operatingHours.hours}</li>
              <li className="text-emerald-400 font-medium">✨ {BUSINESS_INFO.operatingHours.note}</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {currentYear} {BUSINESS_INFO.name}. Hak Cipta Dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk UMKM Tradisional di Cimahi ({BUSINESS_INFO.domainDisplay})</p>
        </div>
      </div>
    </footer>
  );
}

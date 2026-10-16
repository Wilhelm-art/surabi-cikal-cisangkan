import { QrCode } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { scrollToSection, toSectionId } from '../utils/scroll';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenQrModal?: () => void;
}

const FOOTER_NAV = ['Beranda', 'Menu', 'Ulasan', 'Lokasi'];

export function Footer({ onOpenQrModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-stone-950 py-16 text-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display font-bold text-xl text-amber-400 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shadow-inner">
                <BrandLogo size={24} />
              </div>
              <span className="text-white">Surabi Cikal Cisangkan</span>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
              Mendedikasikan cita rasa jajanan pasar tradisional Sunda yang dipanggang hangat dari tungku tanah liat oleh {BUSINESS_INFO.owner} untuk warga Cimahi dan sekitarnya.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                <span>حلال</span>
                <span>100% Halal</span>
              </div>
              {onOpenQrModal && (
                <button
                  onClick={onOpenQrModal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-700 text-stone-200 hover:text-white hover:border-amber-400 text-xs font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <QrCode className="w-4 h-4 text-amber-400" />
                  <span>Cetak Stand Meja QR</span>
                </button>
              )}
            </div>
          </div>
          
          {/* Menu Links */}
          <div className="md:col-span-3 lg:col-start-7">
            <h3 className="font-bold text-white text-sm mb-4">Navigasi Cepat</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(toSectionId(item))} 
                    className="text-stone-300 hover:text-white transition-colors cursor-pointer py-1.5 block min-h-[44px] flex items-center"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="font-bold text-white text-sm mb-4">Kontak & Lokasi</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>Pengelola: <strong className="text-white font-bold">{BUSINESS_INFO.owner}</strong></li>
              <li>Domain Resmi: <span className="text-amber-400 font-mono font-bold">{BUSINESS_INFO.domainDisplay}</span></li>
              <li className="flex flex-wrap gap-1.5 items-center">
                <span>WhatsApp:</span>
                <a 
                  href={BUSINESS_INFO.waLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 hover:underline font-bold"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <span>/</span>
                <a 
                  href={BUSINESS_INFO.waLinkSecondary} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-300 transition-colors"
                >
                  {BUSINESS_INFO.phoneSecondary}
                </a>
              </li>
              <li>Lokasi: {BUSINESS_INFO.landmark}</li>
              <li>Jam Buka: {BUSINESS_INFO.operatingHours.days}, {BUSINESS_INFO.operatingHours.hours}</li>
              <li className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{BUSINESS_INFO.operatingHours.note}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-300">
          <p>© {currentYear} {BUSINESS_INFO.name}. Hak Cipta Dilindungi.</p>
          <p>Warung Tradisional Pasundan • Cimahi, Jawa Barat ({BUSINESS_INFO.domainDisplay})</p>
        </div>
      </div>
    </footer>
  );
}

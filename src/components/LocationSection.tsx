import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, ExternalLink, Copy, Check, QrCode } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface LocationSectionProps {
  onOpenQrModal?: () => void;
}

export function LocationSection({ onOpenQrModal }: LocationSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const textToCopy = `${BUSINESS_INFO.name} (${BUSINESS_INFO.owner} - ${BUSINESS_INFO.phoneDisplay}), ${BUSINESS_INFO.address}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="lokasi" className="py-24 border-t border-stone-200/60 max-w-6xl mx-auto px-6">
      <div className="p-1.5 bg-white border border-stone-200/60 rounded-[2.5rem] shadow-xl overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="grid lg:grid-cols-5 gap-12 p-8 sm:p-12 relative z-10">
          {/* Info Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                Lokasi Warung Kami
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Kami berlokasi di area strategis Cisangkan. Nyaman untuk antrian bungkus maupun sarapan hangat di tempat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-primary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-text-primary text-sm sm:text-base">
                    {BUSINESS_INFO.name}
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-text-secondary mt-1 font-medium">
                    Pengelola: <span className="font-semibold text-text-primary">{BUSINESS_INFO.owner}</span>
                  </p>

                  {/* Action Buttons: Copy Address for Ojol & Open Table QR */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200/80 text-text-primary border border-stone-300/70 transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Alamat Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-primary" />
                          <span>Salin Alamat untuk Gosend / Grab</span>
                        </>
                      )}
                    </button>

                    {onOpenQrModal && (
                      <button
                        onClick={onOpenQrModal}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 transition-all cursor-pointer"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        <span>Cetak QR Meja Warung</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-primary/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm sm:text-base">
                    Jam Operasional
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1">
                    {BUSINESS_INFO.operatingHours.days}<br />
                    {BUSINESS_INFO.operatingHours.hours}
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{BUSINESS_INFO.operatingHours.note}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-primary/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm sm:text-base">
                    WhatsApp / Pemesanan
                  </h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm">
                    <a 
                      href={BUSINESS_INFO.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <a 
                      href={BUSINESS_INFO.waLinkSecondary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      {BUSINESS_INFO.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="lg:col-span-3 h-full min-h-[300px] bg-stone-900 rounded-3xl p-8 border border-stone-200/60 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <img 
              src="/surabi-5.webp" 
              alt="Suasana area warung surabi cisangkan" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 transform group-hover:scale-105 transition-transform duration-700"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-stone-950/80" />
            
            <div className="relative z-10 space-y-6 text-white">
              <div className="w-16 h-16 bg-primary/15 border border-primary/30 rounded-full flex items-center justify-center mx-auto text-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Petunjuk Arah Google Maps
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
                Buka navigasi GPS Google Maps untuk rute perjalanan langsung ke warung kami di Cisangkan.
              </p>
              
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all inline-flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  badgeText: string;
  subText: string;
}

/**
 * Menghitung status buka/tutup warung secara real-time berdasarkan zona waktu WIB (UTC+7).
 * Jam Operasional: Setiap Hari, pukul 06.00 - 10.00 WIB.
 */
export function getBusinessStatus(): BusinessStatus {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  
  const hour = wibDate.getHours();
  const minute = wibDate.getMinutes();
  const currentMinutes = hour * 60 + minute;
  
  const openMinutes = 6 * 60;    // 06:00 WIB
  const closeMinutes = 10 * 60;  // 10:00 WIB
  
  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  
  if (isOpen) {
    return {
      isOpen: true,
      badgeText: "Buka Sekarang",
      statusText: "Buka Sekarang (06.00 – 10.00 WIB)",
      subText: "Tungku sedang membara, siap dipanggang hangat!"
    };
  }
  
  return {
    isOpen: false,
    badgeText: "Warung Tutup",
    statusText: "Buka Setiap Pagi (06.00 – 10.00 WIB)",
    subText: "Bisa Pre-Order via WhatsApp untuk sarapan besok pagi"
  };
}

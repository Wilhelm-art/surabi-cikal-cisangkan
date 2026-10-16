export const BUSINESS_INFO = {
  name: "Surabi Cikal Cisangkan",
  tagline: "Warung Surabi Paling Rekomended di Cimahi",
  headline: "Kami Sajikan Rasa yang Anda Suka 🥞",
  description: "Nikmati kelezatan surabi tradisional Sunda yang dibuat dengan tepung beras pilihan, parutan kelapa matang, dan santan segar, dibakar hangat langsung dari tungku tanah liat oleh Bapak Asep Saepudin.",
  owner: "Bapak Asep Saepudin",
  phone: "0896-5646-1483",
  phoneDisplay: "0896-5646-1483",
  phoneSecondary: "0859-6309-8349",
  waNumber: "6289656461483",
  waNumberSecondary: "6285963098349",
  waLink: "https://wa.me/6289656461483",
  waLinkSecondary: "https://wa.me/6285963098349",
  domain: "https://surabi-cikal.web.id",
  domainDisplay: "surabi-cikal.web.id",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Surabi+Cikal+Cisangkan+Padasuka+Cimahi",
  address: "Jl. Kyai H. Usman Dhomiri, Padasuka (Sebelah Toko YANTI), Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40625",
  landmark: "Sebelah Toko YANTI, Cisangkan, Cimahi",
  operatingHours: {
    days: "Setiap Hari (Senin – Minggu)",
    hours: "06.00 – 10.00 WIB (Pagi sampai habis)",
    note: "Buka Setiap Hari Tanpa Libur",
  },
  rating: 4.0,
  startingPrice: "Rp 3.000",
  isHalal: true,
} as const;

export const createWaOrderUrl = (itemName?: string): string => {
  if (!itemName) {
    return BUSINESS_INFO.waLink;
  }
  const text = encodeURIComponent(`Halo Bapak Asep (Surabi Cikal Cisangkan), saya ingin memesan ${itemName}. Apakah masih tersedia?`);
  return `https://wa.me/${BUSINESS_INFO.waNumber}?text=${text}`;
};

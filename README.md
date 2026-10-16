# 🥞 Surabi Cikal Cisangkan

Website resmi: **[surabi-cikal.web.id](https://surabi-cikal.web.id)**

Landing page modern dan cepat untuk **Surabi Cikal Cisangkan** — warung surabi tradisional Sunda yang berlokasi di Padasuka, Cimahi Tengah, Jawa Barat. Dibangun dengan React 19, Vite 6, Tailwind CSS v4, dan Framer Motion (`motion/react`).

---

## Tentang Proyek

Landing page ini dibuat untuk membantu usaha kuliner tradisional **Surabi Cikal Cisangkan** milik **Bapak Asep Saepudin** yang diracik dan dipanggang langsung di atas tungku tanah liat tradisional khas Pasundan agar mudah ditemukan secara online oleh penikmat kuliner.

Tujuannya straightforward: menampilkan 32 varian rasa menu lengkap, sertifikasi halal, ulasan Google Maps asli, panduan rute lokasi, jam operasional tanpa libur, keranjang belanja WhatsApp multi-item, tombol salin alamat kurir ojol, serta kartu meja QR siap cetak untuk warung fisik.

### Fitur Utama

- **Live Status Operasional**: Indikator real-time zona WIB (*Buka Sekarang 06.00 – 10.00 WIB* vs *Pre-Order Sarapan Besok*).
- **Keranjang WhatsApp Multi-Item**: Pemilihan banyak varian porsi sekaligus dengan kalkulator harga instan dan format pesanan terstruktur ke WhatsApp Bapak Asep.
- **Salin Alamat 1-Klik**: Tombol salin patokan lokasi akurat khusus kurir Gosend / GrabExpress.
- **Kartu Meja QR Siap Cetak (O2O)**: Template kartu meja akrilik warung fisik dengan dual QR code (Menu Digital & Review Google Maps).
- **Daftar Menu 32 Varian**: Tab filter interaktif (*Semua*, *Surabi Asin: 18 varian*, *Surabi Manis: 14 varian*) lengkap dengan modal pratinjau banner menu asli.
- **Progressive Web App (PWA)**: Dapat dipasang langsung (*Add to Home Screen*) di Android dan iOS.
- **Keunggulan Warung**: Nilai jual otentik (panggang tungku tanah liat, santan alami, higienis & 100% halal).
- **SEO, GEO & Social Share**: Schema.org `Restaurant`, Open Graph (1200x630), Twitter Cards, `robots.txt`, dan `sitemap.xml` di bawah domain `https://surabi-cikal.web.id/`.
- **Aset Terkompresi**: Format WebP modern hemat kuota dengan pengurangan ukuran aset hingga ~85%.

---

## Tech Stack

| Teknologi | Versi | Keterangan |
|---|---|---|
| React | 19 | UI Component Library |
| Vite | 6 | Build Tool & High-speed Dev Server |
| Tailwind CSS | 4 | Modern `@theme` Styling via `@tailwindcss/vite` |
| Motion | 12 (`motion/react`) | Fluid UI & Scroll Transitions |
| TypeScript | ~5.8 | Type Safety & Strict Domain Types |
| Lucide React | ^0.546 | Crisp Feather/Lucide SVG Icons |

---

## Menjalankan Secara Lokal

**Prasyarat:** Node.js versi 18 ke atas.

```bash
# Clone repository
git clone https://github.com/Wilhelm-art/surabi-cikal-cisangkan.git
cd surabi-cikal-cisangkan

# Install dependencies
npm install

# Jalankan dev server (port 3000)
npm run dev
```

Buka `http://localhost:3000` di browser.

---

## Scripts

```bash
npm run dev      # Dev server dengan hot reload
npm run build    # Build produksi teroptimasi
npm run preview  # Preview hasil build lokal
npm run lint     # Validasi type safety via TypeScript
```

---

## Struktur Project Modular

```
surabi-cikal-cisangkan/
├── public/
│   ├── manifest.json      # PWA App Manifest
│   ├── menu-asli.webp     # Pratinjau banner menu cetak resmi warung
│   ├── qr-menu.png        # QR Code menuju website https://surabi-cikal.web.id
│   ├── qr-maps.png        # QR Code menuju ulasan Google Maps
│   ├── og-image.jpg       # Open Graph social sharing card (1200x630)
│   ├── robots.txt         # Aturan perayapan mesin pencari
│   ├── sitemap.xml        # Peta situs terindeks
│   └── *.webp             # Aset foto terkompresi (WebP)
├── src/
│   ├── components/        # Komponen UI modular
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── PopularDishes.tsx
│   │   ├── Features.tsx
│   │   ├── MenuSection.tsx
│   │   ├── SpecialBanner.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingCart.tsx
│   │   └── TableQrModal.tsx
│   ├── context/           # State keranjang belanja multi-item
│   │   └── CartContext.tsx
│   ├── data/              # Sumber data bisnis, menu, dan ulasan
│   │   ├── business.ts
│   │   ├── features.ts
│   │   ├── menu.ts
│   │   └── reviews.ts
│   ├── types/             # Kontrak tipe TypeScript
│   │   └── index.ts
│   ├── utils/             # Helper scrolling, jam operasional & format
│   │   ├── businessHours.ts
│   │   └── scroll.ts
│   ├── App.tsx            # Root orchestrator bersih
│   ├── index.css          # Tailwind CSS v4 setup & print styles
│   └── main.tsx           # Entry point aplikasi
├── index.html             # Dokumen HTML dengan SEO & JSON-LD
├── tsconfig.json
└── vite.config.ts
```

---

## Info Warung

| Parameter | Keterangan |
|---|---|
| **Nama** | Surabi Cikal Cisangkan |
| **Domain Resmi** | [surabi-cikal.web.id](https://surabi-cikal.web.id) |
| **Pengelola** | Bapak Asep Saepudin |
| **Lokasi** | Sebelah Toko YANTI, Jl. KH. Usman Dhomiri, Padasuka, Cimahi Tengah |
| **Jam Buka** | Setiap Hari (Senin – Minggu), 06.00 – 10.00 WIB (Pagi sampai habis) |
| **Hari Libur** | **Buka Setiap Hari (Tanpa Libur)** |
| **WhatsApp Utama** | [0896-5646-1483](https://wa.me/6289656461483) |
| **WhatsApp Kedua** | [0859-6309-8349](https://wa.me/6285963098349) |
| **Harga Mulai** | Rp 3.000 / porsi |
| **Status Halal** | 100% Halal |

---

## Lisensi

Kode ini bebas digunakan dan dimodifikasi untuk pengembangan website UMKM kuliner lokal.

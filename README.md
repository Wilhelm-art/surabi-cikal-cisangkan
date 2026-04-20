# 🥞 Surabi Cikal Cisangkan

Landing page untuk **Surabi Cikal Cisangkan** — warung surabi tradisional Sunda yang berlokasi di Cimahi, Jawa Barat. Dibangun dengan React + Vite, Tailwind CSS v4, dan Framer Motion.

---

## Tentang Proyek

Ini adalah landing page sederhana yang saya buat untuk membantu usaha surabi milik Paman Edi (Ugan Edi) agar lebih mudah ditemukan secara online. Warung ini sudah berdiri cukup lama dan punya pelanggan setia di sekitar Cisangkan, tapi belum punya kehadiran digital sama sekali.

Tujuannya straightforward: tampilkan menu, lokasi, jam buka, dan nomor WhatsApp — semuanya dalam satu halaman yang cepat dimuat dan nyaman dilihat di HP.

### Fitur

- **Hero section** dengan animasi scroll dan CTA WhatsApp
- **Daftar menu** lengkap dengan harga terkini
- **Ulasan pelanggan** dari Google Maps (asli, bukan fiktif)
- **Info lokasi & jam buka** — termasuk hari tutup
- **Tombol WhatsApp** untuk pemesanan langsung
- Responsive di semua ukuran layar, dari HP hingga desktop

---

## Tech Stack

| Teknologi | Versi | Keterangan |
|---|---|---|
| React | 19 | UI library |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 4 | Styling via `@tailwindcss/vite` |
| Framer Motion | 12 (`motion`) | Animasi |
| TypeScript | ~5.8 | Type safety |
| Lucide React | latest | Icon set |

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

### Environment Variables

Salin `.env.example` ke `.env.local`, lalu isi nilai yang diperlukan:

```bash
cp .env.example .env.local
```

| Variable | Keterangan |
|---|---|
| `GEMINI_API_KEY` | API key dari Google AI Studio (opsional) |

---

## Scripts

```bash
npm run dev      # Dev server dengan hot reload
npm run build    # Build untuk produksi
npm run preview  # Preview hasil build
npm run lint     # Type check via TypeScript
```

---

## Struktur Project

```
surabi-cikal-cisangkan/
├── src/
│   ├── App.tsx        # Komponen utama (semua section ada di sini)
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles & Tailwind setup
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Info Warung

| | |
|---|---|
| **Nama** | Surabi Cikal Cisangkan |
| **Lokasi** | Toko YANTI, Jl. KH. Usman Dhomiri, Padasuka, Cimahi Tengah |
| **Jam Buka** | Selasa – Minggu, mulai pukul 06.00 WIB (sampai habis) |
| **Tutup** | Senin |
| **WhatsApp** | [0896-5646-1483](https://wa.me/6289656461483) |
| **Harga mulai** | Rp 2.000 / porsi |

---

## Lisensi

Kode ini bebas dipakai dan dimodifikasi. Kalau mau fork untuk keperluan serupa (UMKM lokal, warung, dll), silakan saja.

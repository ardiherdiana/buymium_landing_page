# Buymium Landing Page (Next.js Version)

Landing page premium untuk platform jual beli akun Instagram, Buymium. Telah dimigrasikan dari React (Vite) ke Next.js App Router.

## Fitur Utama
- **Desain Premium**: Tampilan modern dengan palet warna biru profesional.
- **Responsif**: Tampilan optimal di desktop, tablet, dan mobile.
- **Pricelist Section**: Daftar paket harga dengan desain kartu interaktif.
- **WhatsApp Integration**: Tombol CTA yang terhubung langsung ke WhatsApp CS.
- **Optimasi**: Menggunakan `next/image` dan font `next/font` untuk performa tinggi.

## Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: Native CSS (CSS Modules & Global CSS)
- **Icons**: Font Awesome 6
- **Font**: Google Fonts (Outfit)

## Struktur Project
File sumber utama (komponen, assets) berada di folder `src/` untuk memudahkan pengelolaan, sedangkan routing dan layout berada di `app/`.

```
buymium_landing_page/
├── app/                    # App Router files
│   ├── layout.tsx          # Root layout & Metadata
│   ├── page.tsx            # Main entry point (renders App)
│   └── icon.png            # Favicon
├── src/
│   ├── components/         # React components (Navbar, Hero, etc.)
│   ├── assets/             # Images & Logos
│   ├── App.tsx             # Main Application Component
│   └── index.css           # Global Styles & Animations
└── public/                 # Static assets
```

## Cara Menjalankan (Local)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

3. **Buka Browser**
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## Cara Hosting (Deploy)

Cara termudah dan terbaik untuk men-deploy aplikasi Next.js adalah menggunakan **Vercel** (pembuat Next.js).

### Opsi 1: Deploy dengan Vercel (Rekomendasi)

1. **Push ke GitHub/GitLab/Bitbucket**
   - Pastikan kode Anda sudah di-push ke repository git.

2. **Daftar/Login ke Vercel**
   - Buka [vercel.com](https://vercel.com) dan login.

3. **Import Project**
   - Klik tombol **"Add New..."** -> **"Project"**.
   - Cari repository `buymium_landing_page` Anda dan klik **Import**.

4. **Konfigurasi**
   - **Framework Preset**: Next.js (biasanya otomatis terdeteksi).
   - **Root Directory**: Jika repository Anda menyatukan 2 project, pastikan memilih folder `buymium_landing_page` sebagai root. Jika repository hanya berisi folder ini, biarkan default `./`.

5. **Deploy**
   - Klik **Deploy**. Tunggu beberapa saat hingga proses build selesai.
   - Website Anda akan live dengan domain `*.vercel.app`.

### Opsi 2: Deploy ke VPS / Node.js Hosting

Jika Anda ingin hosting di server sendiri (seperti DigitalOcean, atau hosting cPanel yang support Node.js):

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Start Server**
   ```bash
   npm start
   ```
   Aplikasi akan berjalan di port 3000. Anda perlu setup Reverse Proxy (Nginx/Apache) untuk mengarahkan domain Anda ke port tersebut.

---

&copy; 2026 Buymium. All rights reserved.

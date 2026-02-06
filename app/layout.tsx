import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/index.css";

import "../src/components/Navbar.css";
import "../src/components/Hero.css";
import "../src/components/Stats.css";
import "../src/components/Features.css";
import "../src/components/HowItWorks.css";
import "../src/components/FAQ.css";
import "../src/components/Footer.css";
import "../src/components/Pricelist.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://buymium.id'),
  title: {
    default: "Jual Akun Instagram & Followers Real Indonesia Terpercaya | Buymium",
    template: "%s | Buymium"
  },
  description: "Platform jual beli akun Instagram terpercaya di Indonesia. Tersedia akun IG aged, followers real human, garansi login, dan transaksi aman. Solusi instan untuk branding bisnis Anda.",
  keywords: ["jual akun instagram", "beli akun instagram", "jual beli akun ig", "akun instagram murah", "followers real indonesia", "jasa tambah followers", "buymium", "jual akun ig terpercaya"],
  authors: [{ name: "Buymium Team" }],
  creator: "Buymium",
  publisher: "Buymium",
  icons: {
    icon: '/buymium_logo.png',
    shortcut: '/buymium_logo.png',
    apple: '/buymium_logo.png',
  },
  openGraph: {
    title: "Buymium - Pusat Jual Beli Akun Instagram Terpercaya",
    description: "Cari akun Instagram siap pakai untuk bisnis? Buymium solusinya! Akun aged, followers aktif Indonesia, dan bergaransi. Cek stok sekarang!",
    url: 'https://buymium.id',
    siteName: 'Buymium',
    images: [
      {
        url: '/buymium_logo.png', // Ideally should be a wider banner 1200x630, but logo works for now
        width: 800,
        height: 600,
        alt: 'Buymium Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Buymium - Jual Akun Instagram Followers Real",
    description: "Akun Instagram berkualitas untuk bisnis Anda. Proses cepat, aman, dan bergaransi.",
    images: ['/buymium_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Placeholder, user needs to add real token if available
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://buymium.id/#organization",
      "name": "Buymium",
      "url": "https://buymium.id",
      "logo": "https://buymium.id/buymium_logo.png",
      "sameAs": [
        "https://instagram.com/buymium.store",
        "https://www.shopee.co.id/buymium.store"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+62-856-9268-9599",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": "Indonesian"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://buymium.id/#website",
      "url": "https://buymium.id",
      "name": "Buymium",
      "description": "Platform Jual Beli Akun Instagram Terpercaya di Indonesia",
      "publisher": {
        "@id": "https://buymium.id/#organization"
      },
      "inLanguage": "id-ID"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/buymium_logo.png" />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17917226798" strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17917226798');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

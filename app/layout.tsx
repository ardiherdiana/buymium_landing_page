import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/index.css";
import "../src/App.css";
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
  title: "Buymium - Jual Beli Akun Instagram Terpercaya",
  description: "Platform jual beli akun Instagram terpercaya di Indonesia. Aman, cepat, dan berkualitas.",
  icons: {
    icon: '/buymium_logo.png',
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

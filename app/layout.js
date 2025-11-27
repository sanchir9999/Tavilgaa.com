// app/layout.tsx эсвэл app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Tavilgaa.com - Оффис Тавилга, Gaming Сандал, Ширээ | Монголын #1 Тавилгын Дэлгүүр",
    template: "%s | Tavilgaa.com"
  },
  description: "🏢 Оффис тавилга, gaming сандал, ширээ, компьютерын ширээ сандал Монголд. Эргономик дизайн, чанартай материал, хямд үнэ. Улаанбаатарт 24 цагт хүргэлт. ☎️ Захиалах: 7777-7777",
  keywords: [
    "оффис тавилга",
    "оффис сандал",
    "оффис ширээ",
    "gaming сандал",
    "компьютерын сандал",
    "эргономик сандал",
    "ажлын ширээ",
    "компьютерын ширээ",
    "тавилга монгол",
    "тавилга улаанбаатар",
    "сандал худалдаа",
    "ширээ сандал",
    "оффисын тавилга",
    "гэрийн тавилга",
    "тавилгын дэлгүүр",
    "тавилга захиалга",
    "хямд тавилга",
    "чанартай сандал",
    "эргономик ширээ сандал",
    "зочны сандал",
    "сургалтын сандал"
  ].join(", "),
  authors: [{ name: "Tavilgaa.com" }],
  creator: "Tavilgaa.com",
  publisher: "Tavilgaa.com",
  openGraph: {
    title: "Tavilgaa.com - Оффис Тавилга, Gaming Сандал, Ширээ | Монголын #1 Тавилгын Дэлгүүр",
    description: "🏢 Оффис тавилга, gaming сандал, ширээ, компьютерын ширээ сандал Монголд. Эргономик дизайн, чанартай материал, хямд үнэ. Улаанбаатарт 24 цагт хүргэлт.",
    url: "https://tavilgaa.com",
    siteName: "Tavilgaa.com - Монголын Тавилгын Дэлгүүр",
    images: [
      {
        url: "https://tavilgaa.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tavilgaa.com - Оффис Тавилга, Gaming Сандал, Ширээ",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavilgaa.com - Оффис Тавилга, Gaming Сандал, Ширээ",
    description: "🏢 Оффис тавилга, gaming сандал, ширээ Монголд. Эргономик дизайн, чанартай материал, хямд үнэ.",
    images: ["https://tavilgaa.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "Tavilgaa.com",
    statusBarStyle: "default",
  },
  mobileWebApp: {
    capable: true,
    title: "Tavilgaa.com",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "https://tavilgaa.com",
    languages: {
      'mn-MN': "https://tavilgaa.com",
    },
  },
  verification: {
    google: "your-google-verification-code-here", // Google Search Console-оос авна
    yandex: "yandex-verification-code",
    bing: "bing-site-verification-code",
  },
  other: {
    'google-site-verification': 'your-google-verification-code-here', // Нэмэлт
  },
  category: "furniture",
  classification: "Оффис тавилга, Gaming сандал, Ширээ, Тавилгын дэлгүүр",
};

// Шинэ шаардлагын дагуу viewport ба themeColor-ийг энд тусад нь дамжуулна
export const generateViewport = () => {
  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
    themeColor: "#001a55", // таны хүссэн өнгөADSFDSA
  };
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "Tavilgaa.com",
    "description": "Оффис тавилга, gaming сандал, ширээ сандал Монголд",
    "url": "https://tavilgaa.com",
    "logo": "https://tavilgaa.com/logo.png",
    "image": "https://tavilgaa.com/og-image.png",
    "telephone": "+976-7777-7777",
    "email": "info@tavilgaa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Улаанбаатар хот",
      "addressLocality": "Улаанбаатар",
      "addressCountry": "MN"
    },
    "priceRange": "₮₮₮",
    "sameAs": [
      "https://www.facebook.com/tavilgaa",
      "https://www.instagram.com/tavilgaa"
    ]
  };

  return (
    <html lang="mn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200`}>
        <ThemeProvider>
          <Navbar />
          {/* Add top padding to offset the fixed navbar height */}
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Analytics />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

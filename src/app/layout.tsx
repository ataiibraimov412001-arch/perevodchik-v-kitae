import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BASE_URL, SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const title = "Переводчик в Китае — устный перевод с китайского на русский";
const description =
  "Устный перевод и сопровождение в Китае: переговоры, выставки, инспекция фабрик. Гуанчжоу, Шанхай, Пекин. +86 157 1280 6041";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE.name,
    url: "/",
    title,
    description,
    images: [{ url: "/logo.png", width: 1832, height: 859, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE.name,
      url: BASE_URL,
      inLanguage: "ru",
    },
    {
      "@type": "ProfessionalService",
      name: SITE.name,
      description,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/logo.png`,
      telephone: SITE.phoneRaw,
      priceRange: "$165-$350",
      slogan: "Устный перевод с китайского на русский",
      areaServed: [
        { "@type": "City", name: "Гуанчжоу" },
        { "@type": "City", name: "Шанхай" },
        { "@type": "City", name: "Пекин" },
        { "@type": "Country", name: "Китай" },
      ],
      address: { "@type": "PostalAddress", addressCountry: "CN" },
      sameAs: [SITE.telegram],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

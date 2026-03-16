import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { siteUrl, siteName, defaultDescription } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
});

export const viewport: Viewport = {
  themeColor: "#0f1729",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Chartered Accountants Ahmedabad, Gujarat – Tax, Audit & NRI CA India`,
    template: `%s`,
  },
  description: defaultDescription,
  keywords: [
    "chartered accountant Ahmedabad",
    "CA firm Gujarat",
    "CA firm India",
    "tax consultant Ahmedabad",
    "tax consultant Gujarat",
    "GST registration Gujarat",
    "GST registration India",
    "income tax return Ahmedabad",
    "audit services Gujarat",
    "company registration Ahmedabad",
    "NRI tax consultant India",
    "NRI tax consultant Gujarat",
    "NRI CA Ahmedabad",
    "CA for NRI",
    "NRI income tax return",
    "15CA 15CB certificate",
    "NRI property sale TDS",
    "Maninagar Ahmedabad",
    "Gujarat CA",
    "best CA in Ahmedabad",
    "chartered accountant Gujarat",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: `${siteName} | CA Ahmedabad, Gujarat – Tax, Audit & NRI Consultant India`,
    description: defaultDescription,
    // Add public/og.png (1200×630) for rich link previews
  },
  twitter: {
    card: "summary",
    title: `${siteName} | CA Ahmedabad, Gujarat – Tax, Audit & NRI Consultant India`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  verification: {
    // Uncomment and set when you have them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "professional services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <main id="main-content" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Topbar from "@/components/common/topbar";
import Footer from "@/components/common/footer";
import ClientLayout from "@/components/layout/ClientLayout";
import { Suspense } from "react";
import ToastProvider from "@/components/common/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://client.cargologisticscompany.com"),
  title: {
    default: "Samudera Traffic Co., Ltd.s Group | Global Freight Forwarding & Supply Chain Solutions",
    template: "%s | Samudera Traffic Co., Ltd.s Group",
  },
  description:
    "Samudera Traffic Co., Ltd.s Group provides global freight forwarding, warehousing, customs clearance, and end-to-end supply chain solutions.",
  applicationName: "Samudera Traffic Co., Ltd.s Group",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Samudera Traffic Co., Ltd.s",
    "freight forwarding",
    "international shipping",
    "air freight",
    "sea freight",
    "customs clearance",
    "warehouse management",
    "supply chain solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Samudera Traffic Co., Ltd.s Group",
    title: "Samudera Traffic Co., Ltd.s Group | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "Samudera Traffic Co., Ltd.s Group provides global freight forwarding, warehousing, customs clearance, and end-to-end supply chain solutions.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd.s Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samudera Traffic Co., Ltd.s Group | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "Global freight forwarding, warehousing, and supply chain services by Samudera Traffic Co., Ltd.s Group.",
    images: ["/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
            <Suspense>
                <ToastProvider />
              </Suspense>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
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
    default: "Cargo Logistics Group | Global Freight Forwarding & Supply Chain Solutions",
    template: "%s | Cargo Logistics Group",
  },
  description:
    "Cargo Logistics Group provides global freight forwarding, warehousing, customs clearance, and end-to-end supply chain solutions.",
  applicationName: "Cargo Logistics Group",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "cargo logistics",
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
    siteName: "Cargo Logistics Group",
    title: "Cargo Logistics Group | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "Cargo Logistics Group provides global freight forwarding, warehousing, customs clearance, and end-to-end supply chain solutions.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Cargo Logistics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cargo Logistics Group | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "Global freight forwarding, warehousing, and supply chain services by Cargo Logistics Group.",
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
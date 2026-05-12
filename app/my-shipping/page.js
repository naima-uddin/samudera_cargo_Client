import ToastProvider from "@/components/common/ToastProvider";
import ShipmentsPage from "@/components/myShipping/myShipping";
import React, { Suspense } from "react";

// 🔹 SEO metadata for My Shipments
export const metadata = {
  title: "My Shipments | Samudera Traffic Co., Ltd. Group",
  description:
    "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View real-time shipment status, track packages, monitor transit progress, and manage your logistics operations from one dashboard.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "My Shipments",
    "Track Shipment",
    "Shipment Tracking",
    "Package Tracking",
    "Freight Tracking",
    "Cargo Tracking",
    "Logistics Dashboard",
    "Shipment Status",
    "Real-time Tracking",
  ],
  alternates: {
    canonical: "https://samuderathai.com/shipments",
  },
  openGraph: {
    title: "My Shipments | Samudera Traffic Co., Ltd. Group",
    description:
      "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View real-time shipment status, track packages, monitor transit progress, and manage your logistics operations from one dashboard.",
    url: "https://samuderathai.com/shipments",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-shipments.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - My Shipments",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Shipments | Samudera Traffic Co., Ltd. Group",
    description:
      "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View real-time shipment status and track packages.",
    images: ["/og-shipments.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Suspense>
          <ToastProvider />
        </Suspense>
      <ShipmentsPage />

      {/* 🔹 Schema Markup for Shipments Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Shipments Dashboard",
            description:
              "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View real-time shipment status, track packages, monitor transit progress, and manage your logistics operations.",
            url: "https://samuderathai.com/shipments",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "https://samuderathai.com",
              logo: "https://samuderathai.com/logo.png",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Customer Shipments",
              description: "List of all customer shipments with tracking information",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Shipments */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://samuderathai.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Customer Dashboard",
                item: "https://samuderathai.com/customer/dashboard",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Shipments",
                item: "https://samuderathai.com/shipments",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Shipments */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Samudera Traffic Co., Ltd. Group",
            url: "https://client.cargologisticscompany.com",
            logo: "https://client.cargologisticscompany.com/logo.png",
            description: "Leading logistics and supply chain solutions provider",
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66977830395",
              contactType: "customer support",
              email: "info@samuderathai.com",
              availableLanguage: ["English"],
            },
          }),
        }}
      />
    </>
  );
}
import CustomerBookingsPage from "@/components/booking/myBooking";
import React from "react";

// 🔹 SEO metadata for My Shipments
export const metadata = {
  title: "My Shipments | Samudera Traffic Co., Ltd.s Group",
  description:
    "Track and manage your shipments with Samudera Traffic Co., Ltd.s Group. View booking details, track real-time status, accept/reject quotes, download invoices, and manage your logistics operations.",
  keywords: [
    "Samudera Traffic Co., Ltd.s",
    "My Shipments",
    "Track Shipment",
    "Booking Management",
    "Shipment Tracking",
    "Logistics Dashboard",
    "Freight Tracking",
    "Cargo Status",
    "Delivery Tracking",
    "Shipment History",
  ],
  alternates: {
    canonical: "https://client.cargologisticscompany.com/bookings/my_bookings",
  },
  openGraph: {
    title: "My Shipments | Samudera Traffic Co., Ltd.s Group",
    description:
      "Track and manage your shipments with Samudera Traffic Co., Ltd.s Group. View booking details, track real-time status, accept/reject quotes, download invoices, and manage your logistics operations.",
    url: "https://client.cargologisticscompany.com/bookings/my_bookings",
    siteName: "Samudera Traffic Co., Ltd.s Group",
    images: [
      {
        url: "/og-my-bookings.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd.s Group - My Shipments",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Shipments | Samudera Traffic Co., Ltd.s Group",
    description:
      "Track and manage your shipments with Samudera Traffic Co., Ltd.s Group. View booking details, track real-time status, and manage your logistics operations.",
    images: ["/og-my-bookings.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <CustomerBookingsPage />

      {/* 🔹 Schema Markup for My Shipments Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Shipments Dashboard",
            description:
              "Track and manage your shipments with Samudera Traffic Co., Ltd.s Group. View booking details, track real-time status, accept/reject quotes, download invoices, and manage your logistics operations.",
            url: "https://client.cargologisticscompany.com/bookings/my_bookings",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd.s Group",
              url: "https://client.cargologisticscompany.com",
              logo: "https://client.cargologisticscompany.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Shipments Dashboard",
              description: "Customer dashboard for tracking and managing logistics shipments",
            },
            potentialAction: {
              "@type": "Action",
              name: "Manage Shipments",
              description: "View, track, and manage all logistics shipments",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://client.cargologisticscompany.com/bookings/my_bookings",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for My Shipments */}
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
                item: "https://client.cargologisticscompany.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Bookings",
                item: "https://client.cargologisticscompany.com/bookings",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Shipments",
                item: "https://client.cargologisticscompany.com/bookings/my_bookings",
              },
            ],
          }),
        }}
      />
    </>
  );
}
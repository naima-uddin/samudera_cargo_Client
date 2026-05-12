import CreateBooking from "@/components/booking/createBooking";

import React from "react";

// 🔹 SEO metadata for Create Booking
export const metadata = {
  title: "Create Booking | Samudera Traffic Co., Ltd. Group",
  description:
    "Create a new shipping booking with Samudera Traffic Co., Ltd. Group. Book sea freight, air freight, inland trucking, or multimodal shipping. Get competitive rates with real-time tracking.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Create Booking",
    "Shipping Booking",
    "Sea Freight Booking",
    "Air Freight Booking",
    "Inland Trucking",
    "Multimodal Shipping",
    "Logistics Booking",
    "Freight Booking",
    "Shipment Booking",
  ],
  alternates: {
    canonical: "https://samuderathai.com/create-booking",
  },
  openGraph: {
    title: "Create Booking | Samudera Traffic Co., Ltd. Group",
    description:
      "Create a new shipping booking with Samudera Traffic Co., Ltd. Group. Book sea freight, air freight, inland trucking, or multimodal shipping. Get competitive rates with real-time tracking.",
    url: "https://samuderathai.com/create-booking",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-create-booking.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Create Booking",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Booking | Samudera Traffic Co., Ltd. Group",
    description:
      "Create a new shipping booking with Samudera Traffic Co., Ltd. Group. Book sea freight, air freight, inland trucking, or multimodal shipping.",
    images: ["/og-create-booking.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <CreateBooking />

      {/* 🔹 Schema Markup for Create Booking Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Create Shipping Booking",
            description:
              "Create a new shipping booking with Samudera Traffic Co., Ltd. Group. Book sea freight, air freight, inland trucking, or multimodal shipping with competitive rates.",
            url: "https://samuderathai.com/create-booking",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "https://samuderathai.com",
              logo: "https://samuderathai.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Booking Form",
              description: "Multi-step booking form for shipping and logistics services",
            },
            potentialAction: {
              "@type": "Action",
              name: "Create Booking",
              description: "Book shipping services including sea freight, air freight, and inland trucking",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://samuderathai.com/create-booking",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Create Booking */}
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
                name: "Bookings",
                item: "https://samuderathai.com/bookings",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Create Booking",
                item: "https://samuderathai.com/create-booking",
              },
            ],
          }),
        }}
      />
    </>
  );
}
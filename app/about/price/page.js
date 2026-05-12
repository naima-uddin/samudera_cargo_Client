import Price from "@/components/about/price";
import React from "react";

// 🔹 SEO metadata for Pricing
export const metadata = {
  title: "Pricing Table | Samudera Traffic Co., Ltd. Group",
  description:
    "Explore our competitive pricing plans for logistics, supply chain management, warehousing, and cargo services. Find the right solution for your business needs at Samudera Traffic Co., Ltd. Group.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Pricing Table",
    "Logistics Pricing",
    "Shipping Rates",
    "Warehouse Pricing",
    "Supply Chain Cost",
    "Cargo Rates",
    "Freight Pricing",
    "Transportation Cost",
    "Logistics Plans",
  ],
  alternates: {
    canonical: "https://samuderathai.com/pricing",
  },
  openGraph: {
    title: "Pricing Table | Samudera Traffic Co., Ltd. Group",
    description:
      "Explore our competitive pricing plans for logistics, supply chain management, warehousing, and cargo services. Find the right solution for your business needs at Samudera Traffic Co., Ltd. Group.",
    url: "https://samuderathai.com/pricing",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Pricing Table",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Table | Samudera Traffic Co., Ltd. Group",
    description:
      "Explore our competitive pricing plans for logistics, supply chain management, warehousing, and cargo services.",
    images: ["/og-pricing.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Price />

      {/* 🔹 Schema Markup for Pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Logistics Services",
            description:
              "Competitive pricing plans for logistics, supply chain management, warehousing, and cargo services.",
            brand: {
              "@type": "Brand",
              name: "Samudera Traffic Co., Ltd. Group",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              offerCount: "4",
              description: "Various pricing plans for different logistics needs",
            },
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "https://samuderathai.com",
              logo: "https://samuderathai.com/logo.png",
            },
          }),
        }}
      />
    </>
  );
}
import OurCompany from "@/components/about/company";
import React from "react";

// 🔹 SEO metadata for Our Company
export const metadata = {
  title: "Our Company | Samudera Traffic Co., Ltd. Group",
  description:
    "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Our Company",
    "Logistics Company",
    "Supply Chain Management",
    "Warehouse Solutions",
    "Cargo Services",
    "Freight Forwarding",
    "Transportation Services",
    "Logistics Partner",
  ],
  alternates: {
    canonical: "https://samuderathai.com/our-company",
  },
  openGraph: {
    title: "Our Company | Samudera Traffic Co., Ltd. Group",
    description:
      "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
    url: "https://samuderathai.com/our-company",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-our-company.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Our Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Company | Samudera Traffic Co., Ltd. Group",
    description:
      "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
    images: ["/og-our-company.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <OurCompany />

      {/* 🔹 Schema Markup for Our Company */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Company",
            url: "https://samuderathai.com/our-company",
            description:
              "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
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
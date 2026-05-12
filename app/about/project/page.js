import ProjectTabs from "@/components/about/project";
import React from "react";

// 🔹 SEO metadata for Our Projects
export const metadata = {
  title: "Our Projects | Samudera Traffic Co., Ltd. Group",
  description:
    "Explore our latest projects in logistics, supply chain management, customs clearance, freight solutions, and smart warehousing. Discover how Samudera Traffic Co., Ltd. Group delivers innovation across industries.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Our Projects",
    "Logistics Projects",
    "Customs Clearance",
    "Freight Solutions",
    "Supply Chain Projects",
    "Smart Warehousing",
    "Shipment Tracking",
    "Industrial Logistics",
    "Cross Border Shipping",
  ],
  alternates: {
    canonical: "https://samuderathai.com/projects",
  },
  openGraph: {
    title: "Our Projects | Samudera Traffic Co., Ltd. Group",
    description:
      "Explore our latest projects in logistics, supply chain management, customs clearance, freight solutions, and smart warehousing. Discover how Samudera Traffic Co., Ltd. Group delivers innovation across industries.",
    url: "https://samuderathai.com/projects",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Our Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Samudera Traffic Co., Ltd. Group",
    description:
      "Explore our latest projects in logistics, supply chain management, customs clearance, freight solutions, and smart warehousing.",
    images: ["/og-projects.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <ProjectTabs />

      {/* 🔹 Schema Markup for Our Projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Logistics Projects",
            description:
              "Explore our latest projects in logistics, supply chain management, customs clearance, freight solutions, and smart warehousing.",
            brand: {
              "@type": "Brand",
              name: "Samudera Traffic Co., Ltd. Group",
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
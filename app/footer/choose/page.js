import WhyChooseUs from "@/components/industriesDetails/choose";
import React from "react";

// 🔹 SEO metadata for Why Choose Us
export const metadata = {
  title: "Why Choose Us | Samudera Traffic Co., Ltd. Group",
  description:
    "Discover why Samudera Traffic Co., Ltd. Group is the right choice for your shipping needs. We offer precision timing, end-to-end visibility, advanced technology, and a reliable global network for unmatched logistics performance.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Why Choose Us",
    "Logistics Services",
    "Precision Timing",
    "End-to-End Visibility",
    "Advanced Technology",
    "Reliable Network",
    "Shipping Solutions",
    "Supply Chain Management",
    "Freight Services",
  ],
  alternates: {
    canonical: "https://samuderathai.com/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Us | Samudera Traffic Co., Ltd. Group",
    description:
      "Discover why Samudera Traffic Co., Ltd. Group is the right choice for your shipping needs. We offer precision timing, end-to-end visibility, advanced technology, and a reliable global network.",
    url: "https://samuderathai.com/why-choose-us",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-why-choose-us.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Why Choose Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Us | Samudera Traffic Co., Ltd. Group",
    description:
      "Discover why Samudera Traffic Co., Ltd. Group is the right choice for your shipping needs. We offer precision timing, end-to-end visibility, advanced technology, and a reliable global network.",
    images: ["/og-why-choose-us.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WhyChooseUs />;
}
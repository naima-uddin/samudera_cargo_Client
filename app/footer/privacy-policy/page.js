import PrivacyPolicy from "@/components/footer/policy";
import React from "react";

// 🔹 SEO metadata for Privacy Policy
export const metadata = {
  title: "Privacy Policy | Samudera Traffic Co., Ltd.s Group",
  description:
    "Read our Privacy Policy to understand how Samudera Traffic Co., Ltd.s Group collects, uses, and protects your personal information. Learn about data security, your rights, and our commitment to privacy.",
  keywords: [
    "Samudera Traffic Co., Ltd.s",
    "Privacy Policy",
    "Data Protection",
    "Information Security",
    "Privacy Statement",
    "Data Privacy",
    "GDPR Compliance",
    "Personal Data",
    "Cookie Policy",
    "Privacy Rights",
  ],
  alternates: {
    canonical: "https://client.cargologisticscompany.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Samudera Traffic Co., Ltd.s Group",
    description:
      "Read our Privacy Policy to understand how Samudera Traffic Co., Ltd.s Group collects, uses, and protects your personal information. Learn about data security and your privacy rights.",
    url: "https://client.cargologisticscompany.com/privacy-policy",
    siteName: "Samudera Traffic Co., Ltd.s Group",
    images: [
      {
        url: "/og-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd.s Group - Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Samudera Traffic Co., Ltd.s Group",
    description:
      "Read our Privacy Policy to understand how Samudera Traffic Co., Ltd.s Group collects, uses, and protects your personal information.",
    images: ["/og-privacy-policy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <PrivacyPolicy />

      {/* 🔹 Schema Markup for Privacy Policy Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Read our Privacy Policy to understand how Samudera Traffic Co., Ltd.s Group collects, uses, and protects your personal information. Learn about data security, your rights, and our commitment to privacy.",
            url: "https://client.cargologisticscompany.com/privacy-policy",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd.s Group",
              url: "https://client.cargologisticscompany.com",
              logo: "https://client.cargologisticscompany.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Privacy Policy Document",
              description: "Comprehensive privacy policy outlining data collection, usage, and protection practices",
            },
            dateModified: "2026-03-10",
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Privacy Policy */}
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
                name: "Privacy Policy",
                item: "https://client.cargologisticscompany.com/privacy-policy",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Legal Info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Samudera Traffic Co., Ltd.s Group",
            url: "https://client.cargologisticscompany.com",
            logo: "https://client.cargologisticscompany.com/logo.png",
            description: "Leading logistics and supply chain solutions provider",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Green Tower, 9th floor, 3656/27-28 Rama IV Road",
              addressLocality: "Columbia",
              addressRegion: "MD",
              postalCode: "21045",
              addressCountry: "USA",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-647-362-7735",
              contactType: "privacy",
              email: "info@cargologisticscompany.com",
              availableLanguage: ["English"],
            },
            legalName: "Samudera Traffic Co., Ltd.s Group",
            foundingDate: "2009",
            privacyPolicy: "https://client.cargologisticscompany.com/privacy-policy",
          }),
        }}
      />

      {/* 🔹 Privacy Policy Schema (Legal Document) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Privacy Policy of Samudera Traffic Co., Ltd.s Group",
            description:
              "This Privacy Policy describes how Samudera Traffic Co., Ltd.s Group collects, uses, and protects personal information of its customers and website visitors.",
            url: "https://client.cargologisticscompany.com/privacy-policy",
            lastReviewed: "2026-03-10",
            inLanguage: "en-US",
            jurisdiction: "USA",
            legislation: ["GDPR", "CCPA"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-647-362-7735",
              email: "info@cargologisticscompany.com",
              contactType: "privacy officer",
            },
          }),
        }}
      />
    </>
  );
}
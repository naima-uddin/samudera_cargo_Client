import MyInvoicesPage from "@/components/profile/invoice";
import React from "react";

// 🔹 SEO metadata for My Invoices
export const metadata = {
  title: "My Invoices | Samudera Traffic Co., Ltd. Group",
  description:
    "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status, download PDF copies, view payment history, and manage your logistics billing online.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "My Invoices",
    "Shipping Invoices",
    "Logistics Billing",
    "Invoice Management",
    "Payment History",
    "Freight Invoices",
    "Cargo Billing",
    "Transportation Invoices",
    "Logistics Payments",
  ],
  alternates: {
    canonical: "https://samuderathai.com/invoices",
  },
  openGraph: {
    title: "My Invoices | Samudera Traffic Co., Ltd. Group",
    description:
      "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status, download PDF copies, view payment history, and manage your logistics billing online.",
    url: "https://samuderathai.com/invoices",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-invoices.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - My Invoices",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Invoices | Samudera Traffic Co., Ltd. Group",
    description:
      "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status and download PDF copies.",
    images: ["/og-invoices.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <MyInvoicesPage />

      {/* 🔹 Schema Markup for My Invoices Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Invoices",
            description:
              "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status, download PDF copies, view payment history, and manage your logistics billing online.",
            url: "https://samuderathai.com/invoices",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "https://samuderathai.com",
              logo: "https://samuderathai.com/logo.png",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Customer Invoices",
              description: "List of invoices for shipping and logistics services",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for My Invoices */}
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
                name: "My Invoices",
                item: "https://samuderathai.com/invoices",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Invoices */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Samudera Traffic Co., Ltd. Group",
            url: "https://samuderathai.com",
            logo: "https://samuderathai.com/logo.png",
            description: "Leading logistics and supply chain solutions provider",
            paymentAccepted: ["Credit Card", "Bank Transfer", "Wire Transfer"],
            priceRange: "$$",
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66977830395",
              contactType: "billing support",
              email: "billing@samuderathai.com",
              availableLanguage: ["English"],
            },
          }),
        }}
      />
    </>
  );
}
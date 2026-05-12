import LoginPage from "@/components/auth/login/page";
import React from "react";

// 🔹 SEO metadata for Login
export const metadata = {
  title: "Customer Login | Samudera Traffic Co., Ltd. Group",
  description:
    "Login to your Samudera Traffic Co., Ltd. Group customer account. Track shipments in real-time, manage your logistics operations, access digital documents, and enjoy seamless supply chain management.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Customer Login",
    "Login Portal",
    "Logistics Account",
    "Shipment Tracking",
    "Supply Chain Login",
    "Cargo Management",
    "Digital Logistics",
    "Account Access",
    "Real-time Tracking",
  ],
  alternates: {
    canonical: "https://samuderathai.com/auth/login",
  },
  openGraph: {
    title: "Customer Login | Samudera Traffic Co., Ltd. Group",
    description:
      "Login to your Samudera Traffic Co., Ltd. Group customer account. Track shipments in real-time, manage your logistics operations, access digital documents, and enjoy seamless supply chain management.",
    url: "https://samuderathai.com/auth/login",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-login.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Customer Login",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Login | Samudera Traffic Co., Ltd. Group",
    description:
      "Login to your Samudera Traffic Co., Ltd. Group customer account. Track shipments in real-time and manage your logistics operations.",
    images: ["/og-login.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <LoginPage />

      {/* 🔹 Schema Markup for Login Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Customer Login",
            description:
              "Login to your Samudera Traffic Co., Ltd. Group customer account. Track shipments in real-time, manage your logistics operations, access digital documents, and enjoy seamless supply chain management.",
            url: "https://samuderathai.com/auth/login",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "https://samuderathai.com",
              logo: "https://samuderathai.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Login Form",
              description: "Secure customer login portal with email and password authentication",
            },
            potentialAction: {
              "@type": "Action",
              name: "Login",
              description: "Customer authentication for logistics account access",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://samuderathai.com/auth/login",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Login */}
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
                name: "Authentication",
                item: "https://samuderathai.com/auth",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Customer Login",
                item: "https://samuderathai.com/auth/login",
              },
            ],
          }),
        }}
      />
    </>
  );
}
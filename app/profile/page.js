import ToastProvider from "@/components/common/ToastProvider";
import ProfilePage from "@/components/profile/profile";
import React, { Suspense } from "react";

// 🔹 SEO metadata for Profile
export const metadata = {
  title: "My Profile | Samudera Traffic Co., Ltd. Group",
  description:
    "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, manage preferences, and access security settings for your logistics account.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "My Profile",
    "Profile Settings",
    "Account Management",
    "User Profile",
    "Logistics Account",
    "Profile Update",
    "Account Settings",
    "Personal Information",
    "Business Profile",
  ],
  alternates: {
    canonical: "https://samuderathai.com/profile",
  },
  openGraph: {
    title: "My Profile | Samudera Traffic Co., Ltd. Group",
    description:
      "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, manage preferences, and access security settings for your logistics account.",
    url: "https://samuderathai.com/profile",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - My Profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile | Samudera Traffic Co., Ltd. Group",
    description:
      "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, and manage preferences.",
    images: ["/og-profile.jpg"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Suspense>
          <ToastProvider />
        </Suspense>
      <ProfilePage />

      {/* 🔹 Schema Markup for Profile Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "User Profile",
            description:
              "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, manage preferences, and access security settings.",
            url: "https://samuderathai.com/profile",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "https://samuderathai.com",
              logo: "https://samuderathai.com/logo.png",
            },
            mainEntity: {
              "@type": "ProfilePage",
              name: "Customer Profile",
              description: "User profile management for logistics account",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Profile */}
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
                name: "My Profile",
                item: "https://samuderathai.com/profile",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Person Schema for Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Samudera Traffic Co., Ltd. Customer",
            url: "https://samuderathai.com/profile",
            email: "customer@samuderathai.com",
            telephone: "+66977830395",
            worksFor: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
            },
            knowsAbout: [
              "Logistics Management",
              "Supply Chain",
              "Freight Shipping",
              "Warehousing",
            ],
          }),
        }}
      />
    </>
  );
}
import ToastProvider from "@/components/common/ToastProvider";
import ProfilePage from "@/components/profile/profile";
import React, { Suspense } from "react";

// 🔹 SEO metadata for Profile
export const metadata = {
  title: "My Profile | Samudera Traffic Co., Ltd.s Group",
  description:
    "Manage your Samudera Traffic Co., Ltd.s Group profile. Update personal information, view business details, manage preferences, and access security settings for your logistics account.",
  keywords: [
    "Samudera Traffic Co., Ltd.s",
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
    canonical: "https://client.cargologisticscompany.com/profile",
  },
  openGraph: {
    title: "My Profile | Samudera Traffic Co., Ltd.s Group",
    description:
      "Manage your Samudera Traffic Co., Ltd.s Group profile. Update personal information, view business details, manage preferences, and access security settings for your logistics account.",
    url: "https://client.cargologisticscompany.com/profile",
    siteName: "Samudera Traffic Co., Ltd.s Group",
    images: [
      {
        url: "/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd.s Group - My Profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile | Samudera Traffic Co., Ltd.s Group",
    description:
      "Manage your Samudera Traffic Co., Ltd.s Group profile. Update personal information, view business details, and manage preferences.",
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
              "Manage your Samudera Traffic Co., Ltd.s Group profile. Update personal information, view business details, manage preferences, and access security settings.",
            url: "https://client.cargologisticscompany.com/profile",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd.s Group",
              url: "https://client.cargologisticscompany.com",
              logo: "https://client.cargologisticscompany.com/logo.png",
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
                item: "https://client.cargologisticscompany.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Customer Dashboard",
                item: "https://client.cargologisticscompany.com/customer/dashboard",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Profile",
                item: "https://client.cargologisticscompany.com/profile",
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
            name: "Samudera Traffic Co., Ltd.s Customer",
            url: "https://client.cargologisticscompany.com/profile",
            email: "customer@cargologisticscompany.com",
            telephone: "+1-647-362-7735",
            worksFor: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd.s Group",
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
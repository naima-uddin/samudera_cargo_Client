"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["All", "Customs", "Freights", "Industries", "Shipments", "Stores"];

const projects = [
  {
    title: "Smart Customs Clearance",
    category: "Customs",
    image: "/images/project (1).jpg",
    description: "AI-powered customs documentation and clearance system with real-time tracking",
    location: "Singapore Hub",
    year: "2024"
  },
  {
    title: "Global Freight Solutions",
    category: "Freights",
    image: "/images/project (2).jpg",
    description: "End-to-end freight management with predictive analytics",
    location: "Rotterdam Port",
    year: "2024"
  },
  {
    title: "Express Cargo Handling",
    category: "Industries",
    image: "/images/project (3).jpg",
    description: "Automated cargo sorting and handling system",
    location: "Dubai Airport",
    year: "2023"
  },
  {
    title: "Industrial Supply Chain Hub",
    category: "Industries",
    image: "/images/project (4).jpg",
    description: "Smart warehouse with IoT integration",
    location: "Shanghai Port",
    year: "2024"
  },
  {
    title: "Smart Manufacturing Logistics",
    category: "Shipments",
    image: "/images/project (5).jpg",
    description: "Just-in-time delivery optimization system",
    location: "Tokyo Factory",
    year: "2023"
  },
  {
    title: "Real-Time Shipment Tracking",
    category: "Shipments",
    image: "/images/project (6).jpg",
    description: "Blockchain-based shipment verification",
    location: "Hamburg Terminal",
    year: "2024"
  },
  {
    title: "Cross-Border Shipping Network",
    category: "Stores",
    image: "/images/project (7).jpg",
    description: "Multi-country shipping consolidation",
    location: "LA Logistics Center",
    year: "2023"
  },
  {
    title: "Next-Gen Warehousing Facility",
    category: "Freights",
    image: "/images/project (8).jpg",
    description: "Automated storage and retrieval system",
    location: "Amsterdam Hub",
    year: "2024"
  },
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(209,0,0,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(29,45,82,0.08),transparent_28%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <p className="text-[#d10000] text-xs uppercase tracking-[0.4em]">Our work</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#1D2D52]">Projects delivered with speed and clarity.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Browse recent logistics, warehousing, and freight transformation work that powers modern supply chains.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeTab === tab
                  ? "bg-[#d10000] text-white shadow-[0_12px_30px_rgba(209,0,0,0.12)]"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#d10000] hover:text-[#d10000]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#d10000] px-3 py-1 text-xs font-semibold text-white">{item.category}</span>
                </div>
                <div className="px-6 py-3">
                  <h3 className="text-xl font-semibold text-[#1D2D52] pt-serif-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-2 text-slate-600">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                    <span>{item.location}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

       
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car, ShoppingBag, Factory, HeartPulse, Cpu, Package,
  Zap, Rocket, Coffee, Fuel, FlaskConical, Building2,
  Users, Globe, TrendingUp
} from "lucide-react";

const industries = [
  { id: 1, name: "Automotive", icon: Car, image: "/images/automotive.jpg", description: "EV components, autonomous systems and smart manufacturing.", stats: { projects: "150+", clients: "45+", growth: "28%" } },
  { id: 2, name: "Retail", icon: ShoppingBag, image: "/images/retail.jpg", description: "Omnichannel platforms and inventory intelligence.", stats: { projects: "200+", clients: "80+", growth: "35%" } },
  { id: 3, name: "Manufacturing", icon: Factory, image: "/images/manufacturing.jpg", description: "Industry 4.0, predictive maintenance and optimization.", stats: { projects: "180+", clients: "60+", growth: "42%" } },
  { id: 4, name: "Healthcare", icon: HeartPulse, image: "/images/healthcare.jpg", description: "Telemedicine, EHR and imaging AI solutions.", stats: { projects: "120+", clients: "35+", growth: "52%" } },
  { id: 5, name: "Technology", icon: Cpu, image: "/images/technology.jpg", description: "Cloud platforms, IoT and enterprise software.", stats: { projects: "250+", clients: "95+", growth: "45%" } },
  { id: 6, name: "Consumer Goods", icon: Package, image: "/images/goods.jpg", description: "Supply chain visibility and D2C platforms.", stats: { projects: "140+", clients: "55+", growth: "31%" } },
  { id: 7, name: "Energy", icon: Zap, image: "/images/energy.jpg", description: "Smart grid and renewable optimization.", stats: { projects: "90+", clients: "25+", growth: "38%" } },
  { id: 8, name: "Aerospace", icon: Rocket, image: "/images/aerospace.jpg", description: "Flight systems, maintenance and simulation.", stats: { projects: "75+", clients: "20+", growth: "33%" } },
  { id: 9, name: "Food & Beverage", icon: Coffee, image: "/images/foods.jpg", description: "Traceability and quality-control systems.", stats: { projects: "110+", clients: "40+", growth: "29%" } },
  { id: 10, name: "Oil & Gas", icon: Fuel, image: "/images/oil gas.jpg", description: "Exploration analytics and pipeline monitoring.", stats: { projects: "85+", clients: "22+", growth: "24%" } },
  { id: 11, name: "Chemicals", icon: FlaskConical, image: "/images/chemical.jpg", description: "Process optimization and safety compliance.", stats: { projects: "95+", clients: "30+", growth: "27%" } },
  { id: 12, name: "Building", icon: Building2, image: "/images/building.jpg", description: "Smart building automation and construction tech.", stats: { projects: "130+", clients: "48+", growth: "36%" } },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(industries[0].name);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });
    const el = document.getElementById("industries-section");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeData = useMemo(() => industries.find(i => i.name === active) || industries[0], [active]);

  return (
    <section id="industries-section" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* Left: vertical nav */}
          <div className="w-full lg:w-1/3">
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider text-[#0E2047]">Our Expertise</h3>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#122652]">Industries We Serve</h2>
              <p className="text-sm text-gray-600 mt-2">Select an industry to view dedicated solutions, case highlights and quick stats.</p>
            </div>

            <div className="space-y-2 max-h-[420px] overflow-auto pr-2">
              {industries.map((it) => {
                const Icon = it.icon;
                const isActive = it.name === active;
                return (
                  <button
                    key={it.id}
                    onClick={() => setActive(it.name)}
                    className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#d10000] to-[#1D2D52] text-white shadow-lg' : 'bg-gray-50 hover:bg-white hover:shadow-sm'}`}
                  >
                    <div className={`p-2 rounded-md ${isActive ? 'bg-white/20' : 'bg-white'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#1D2D52]'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${isActive ? 'text-white' : 'text-[#0E2047]'}`}>{it.name}</div>
                      <div className={`text-xs ${isActive ? 'text-white/90' : 'text-gray-500'}`}>{it.stats.projects}</div>
                    </div>
                    <div className={`text-xs font-mono ${isActive ? 'text-white/90' : 'text-gray-400'}`}>{it.stats.projects}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: detail card */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {visible && (
                <motion.div
                  key={activeData.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
                >
                  <div className="relative h-72 sm:h-80 lg:h-96">
                    <Image
                      src={activeData.image}
                      alt={activeData.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute left-6 bottom-6 text-white z-10">
                      <h3 className="text-2xl font-bold">{activeData.name}</h3>
                      <p className="text-sm max-w-xl mt-1 text-white/90">{activeData.description}</p>
                      <div className="mt-4 flex gap-3">
                        {(() => {
                          const slug = activeData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                          return (
                            <>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Clients</div>
                        <div className="text-lg font-bold text-[#122652]">{activeData.stats.clients}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Projects</div>
                        <div className="text-lg font-bold text-[#122652]">{activeData.stats.projects}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Growth</div>
                        <div className="text-lg font-bold text-[#122652]">{activeData.stats.growth}</div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-[#f1f5fb] text-[#0E2047] rounded-full text-sm">AI Solutions</span>
                      <span className="px-3 py-1 bg-[#f1f5fb] text-[#0E2047] rounded-full text-sm">Analytics</span>
                      <span className="px-3 py-1 bg-[#f1f5fb] text-[#0E2047] rounded-full text-sm">Cloud</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

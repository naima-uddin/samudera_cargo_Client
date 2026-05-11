"use client";

import {
  HiCalendar,
  HiGlobeAlt,
  HiTruck,
  HiUserGroup,
  HiSparkles,
  HiPaperAirplane,
  HiUsers,
  HiBadgeCheck,
} from "react-icons/hi";

const milestonesData = [
  {
    year: "1984",
    title: "Founded as a Local Carrier",
    subtitle: "The first truck rolls out",
    desc: "Started with a single route and a promise to deliver every shipment with care.",
    icon: HiTruck,
    accent: "from-[#d10000] to-[#1D2D52]",
  },
  {
    year: "1992",
    title: "Expanded into Air Freight",
    subtitle: "Connecting markets faster",
    desc: "Our air logistics offering opened new possibilities for global commerce.",
    icon: HiPaperAirplane,
    accent: "from-[#1D2D52] to-[#0E2047]",
  },
  {
    year: "1998",
    title: "First Global Hub",
    subtitle: "A network built for scale",
    desc: "We established an international hub to support cross-border shipping and storage.",
    icon: HiGlobeAlt,
    accent: "from-[#d10000] to-[#1D2D52]",
  },
  {
    year: "2006",
    title: "10,000+ Strong Team",
    subtitle: "People powering every shipment",
    desc: "Our team grew to support strategy, operations, and customer excellence worldwide.",
    icon: HiUserGroup,
    accent: "from-[#1D2D52] to-[#0E2047]",
  },
  {
    year: "2014",
    title: "Award-Winning Reliability",
    subtitle: "Recognized for excellence",
    desc: "Industry honors confirmed our culture of accuracy, safety, and speed.",
    icon: HiSparkles,
    accent: "from-[#d10000] to-[#1D2D52]",
  },
  {
    year: "2024",
    title: "500M+ Packages Delivered",
    subtitle: "The logistics partner businesses trust",
    desc: "We now move cargo across land, sea, and air with powerful visibility and control.",
    icon: HiBadgeCheck,
    accent: "from-[#1D2D52] to-[#0E2047]",
  },
];

const statsData = [
  { number: "40+", label: "Years in Logistics", icon: HiCalendar },
  { number: "100+", label: "Countries Served", icon: HiGlobeAlt },
  { number: "10K+", label: "Global Team", icon: HiUsers },
  { number: "99%", label: "Customer Satisfaction", icon: HiBadgeCheck },
];

export default function History() {
  return (
    <div className="bg-white text-[#1D2D52]">
      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(209,0,0,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(29,45,82,0.08),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_0.95fr] lg:items-start">
            <div className="space-y-10">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <p className="text-[#d10000] text-sm uppercase tracking-[0.3em]">Cargo milestones</p>
                <h2 className="mt-4 text-4xl font-semibold text-[#1D2D52]">Proven logistics progress.</h2>
                <p className="mt-5 text-slate-600 leading-7">
                  Every milestone reflects how we’ve grown smarter, faster, and more resilient for our clients.
                </p>
              </div>

              <div className="space-y-6">
                {milestonesData.map((item, index) => (
                  <div key={item.year} className="grid gap-6 lg:grid-cols-[84px_minmax(0,1fr)]">
                    <div className="relative flex flex-col items-center text-center">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}>
                        <item.icon className="h-7 w-7" />
                      </div>
                      {index < milestonesData.length - 1 ? <div className="mt-4 h-full w-px bg-slate-200" /> : null}
                    </div>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
                      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#d10000]">
                        <span>{item.year}</span>
                        <span className="h-px flex-1 bg-slate-200" />
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-[#1D2D52]">{item.title}</h3>
                      <p className="mt-2 text-slate-600">{item.subtitle}</p>
                      <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-semibold text-[#1D2D52]">Impact at a glance</h3>
                <div className="mt-8 grid gap-4">
                  {statsData.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d10000] to-[#1D2D52] text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-semibold text-[#1D2D52]">{stat.number}</p>
                          <p className="text-sm text-slate-600">{stat.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d10000]">Our promise</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#1D2D52]">Logistics built around trust</h3>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#d10000]" />
                    Real-time tracking and transparent delivery status.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#d10000]" />
                    Dedicated customs and warehousing support for global freight.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#d10000]" />
                    Premium 24/7 assistance for customers and shipments.
                  </li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-semibold text-[#1D2D52]">Delivering cargo solutions that scale.</h3>
                <p className="mt-4 text-slate-600 leading-8">
                  We combine deep logistics experience, global connectivity, and agile operations to keep freight moving with precision and speed.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

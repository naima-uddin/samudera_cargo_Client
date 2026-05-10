"use client";

import Image from "next/image";
import Link from "next/link";
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
    desc: "We began with one truck, one warehouse, and one promise: to deliver every shipment on time and with care.",
    icon: HiTruck,
    accent: "bg-[#FD5621]",
  },
  {
    year: "1992",
    title: "Expanded into Air Freight",
    subtitle: "Connecting markets faster",
    desc: "Our air logistics service opened doorways to international trade and gave customers a speed advantage.",
    icon: HiPaperAirplane,
    accent: "bg-[#3B82F6]",
  },
  {
    year: "1998",
    title: "First Global Hub",
    subtitle: "A network built for scale",
    desc: "We established our first overseas hub, enabling cross-border logistics and smarter supply chain routes.",
    icon: HiGlobeAlt,
    accent: "bg-[#10B981]",
  },
  {
    year: "2006",
    title: "10,000+ Strong Team",
    subtitle: "People powering every shipment",
    desc: "A dedicated workforce of logistics experts, planners, and operators grew with the business.",
    icon: HiUserGroup,
    accent: "bg-[#8B5CF6]",
  },
  {
    year: "2014",
    title: "Award-Winning Reliability",
    subtitle: "Recognized for excellence",
    desc: "Industry awards validated our systems, transparency, and commitment to customer success.",
    icon: HiSparkles,
    accent: "bg-[#F59E0B]",
  },
  {
    year: "2024",
    title: "500M+ Packages Delivered",
    subtitle: "The logistics partner businesses trust",
    desc: "Today we move cargo across land, sea, and air with modern tracking and personalized service.",
    icon: HiBadgeCheck,
    accent: "bg-[#0F172A]",
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
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/aboutBanner.jpg"
            alt="Cargo and logistics operations"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-[#FD5621] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Logistics history
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Built for cargo, grown for global trade.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From the first shipment to a worldwide freight network, our history is defined by reliability, high-performance systems, and a customer-first approach.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#FD5621] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#FD5621]/20 transition hover:bg-[#f14f18]"
            >
              Talk to our team
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="space-y-10">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Cargo milestones</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">Proven logistics progress</h2>
                <p className="mt-4 text-slate-600 leading-7">
                  Every milestone strengthened our logistics capabilities, added new routes, and improved how we move freight for customers worldwide.
                </p>
              </div>

              <div className="space-y-8">
                {milestonesData.map((item, index) => (
                  <div key={item.year} className="grid gap-6 lg:grid-cols-[80px_minmax(0,1fr)]">
                    <div className="relative flex flex-col items-center text-center">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-3xl text-white shadow-lg shadow-black/30 ${item.accent}`}>
                        <item.icon className="h-7 w-7" />
                      </div>
                      {index < milestonesData.length - 1 ? <div className="mt-4 h-full w-px bg-slate-700" /> : null}
                    </div>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
                      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#FD5621]">
                        <span>{item.year}</span>
                        <span className="h-px flex-1 bg-slate-200" />
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-slate-600">{item.subtitle}</p>
                      <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
                <h3 className="text-xl font-semibold text-slate-950">Impact at a glance</h3>
                <div className="mt-8 grid gap-4">
                  {statsData.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FD5621] text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-semibold text-slate-950">{stat.number}</p>
                          <p className="text-sm text-slate-600">{stat.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Our promise</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">Logistics built around trust</h3>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#FD5621]" />
                    Real-time tracking and transparent delivery status.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#FD5621]" />
                    Dedicated customs and warehousing support for global freight.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#FD5621]" />
                    Premium 24/7 assistance for customers and shipments.
                  </li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
                <h3 className="text-xl font-semibold text-slate-950">Delivering cargo solutions that scale.</h3>
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

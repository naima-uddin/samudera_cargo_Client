"use client";
import Image from "next/image";
import { FaHeadset, FaShieldAlt, FaDollarSign, FaCogs } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

const features = [
  {
    id: "01",
    title: "Advanced Technology",
    desc: "Real-time tracking, automation, and intelligent routing for every shipment.",
    icon: <FaCogs />,
  },
  {
    id: "02",
    title: "Experts Support",
    desc: "Dedicated logistics specialists available around the clock for every client.",
    icon: <FaHeadset />,
  },
  {
    id: "03",
    title: "Cost-Effective",
    desc: "Lean operations and smarter planning cut transit costs without compromise.",
    icon: <FaDollarSign />,
  },
  {
    id: "04",
    title: "Commitment to Safety",
    desc: "Secure handling, compliant warehousing, and trusted cargo protection.",
    icon: <FaShieldAlt />,
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(209,0,0,0.12),transparent_38%),radial-gradient(circle_at_top_right,rgba(29,45,82,0.08),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="space-y-3">
            <p className="text-[#d10000] font-semibold uppercase tracking-[0.4em] text-xs">Why choose us</p>
            <h2 className="text-3xl font-semibold text-[#1D2D52] sm:text-4xl">Smarter logistics, clearer outcomes.</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Live tracking, responsive support, and secure industry workflows make every shipment feel easier.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Live visibility</p>
                <p className="mt-3 text-xl font-semibold text-[#1D2D52]">Real-time shipment tracking</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Stay ahead with a dashboard that updates every mile.</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Trusted by partners</p>
                <p className="mt-3 text-xl font-semibold text-[#1D2D52]">Consistent global delivery</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Secure, compliant handling for every route and cargo type.</p>
              </div>
            </div>

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {features.slice(0, 2).map((item) => (
                <FeatureCard key={item.id} item={item} compact />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-lg">
              <Image src="/images/about1.jpg" alt="Cargo ship" width={760} height={160} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#1D2D52] shadow-sm">
                Live Monitoring
              </div>
            </div>
            
          </div>
        </div>

        
      </div>
    </section>
  );
}

function FeatureCard({ item, compact }) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white ${compact ? 'p-6' : 'p-8'} shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(29,45,82,0.12)]`}>
      <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d10000] to-[#1D2D52] text-white shadow-lg ${compact ? '' : ''}`}>
        {item.icon}
      </div>
      <div className="mt-6 flex items-center justify-between gap-6">
        <h3 className={`font-semibold text-[#1D2D52] ${compact ? 'text-lg' : 'text-xl'}`}>{item.title}</h3>
        <span className="rounded-2xl bg-[#d10000]/10 px-4 py-2 text-sm font-semibold text-[#d10000]">{item.id}</span>
      </div>
      <p className={`mt-4 text-slate-600 leading-7 ${compact ? 'text-sm' : ''}`}>{item.desc}</p>
    </div>
  );
}

const InterestingFacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const facts = [
    {
      id: 1,
      title: 'WAREHOUSE SPACE',
      numericValue: 400,
      unit: 'k ft²',
      description: 'Strategic storage space across high-value logistics hubs.',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
    },
    {
      id: 2,
      title: 'ON-TIME DELIVERY',
      numericValue: 98,
      unit: '%',
      description: 'Precision delivery that keeps your schedules on track.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(209,0,0,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(29,45,82,0.08),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-[#d10000] font-semibold uppercase tracking-[0.35em] text-xs">Fast facts</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1D2D52]">Performance metrics that speak for themselves.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Every number reflects the efficiency, scale, and reliability built into our logistics network.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.id} className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(29,45,82,0.12)]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#d10000]/5" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d10000] to-[#1D2D52] text-white shadow-xl">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={fact.icon} /></svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{fact.title}</p>
                    <p className="mt-3 text-3xl font-bold text-[#1D2D52]"><span className="bg-gradient-to-r from-[#d10000] to-[#1D2D52] bg-clip-text text-transparent">{fact.numericValue}</span>{fact.unit}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      image: "/images/team (1).jpg",
      name: "John Doe",
      role: "CEO, Company Inc.",
      title: "Excellent Service!",
      content: "They provided outstanding logistics support for our global supply chain. Highly reliable and professional.",
    },
    {
      image: "/images/team (2).jpg",
      name: "Jane Smith",
      role: "Operations Manager",
      title: "Smooth & Efficient",
      content: "The team handled everything seamlessly. We saved time and costs with their expertise.",
    },
    {
      image: "/images/team (3).jpg",
      name: "Mike Johnson",
      role: "Supply Chain Lead",
      title: "Trusted Partner",
      content: "We've worked together for years. They consistently deliver excellence.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const active = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top_right,rgba(209,0,0,0.08),transparent_30%),radial-gradient(circle_at_top_left,rgba(29,45,82,0.08),transparent_32%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-[#d10000] font-semibold uppercase tracking-[0.36em] text-xs">What clients say</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1D2D52]">Stories from teams who rely on our service.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Clean presentation, thoughtful detail, and a calm visual rhythm make it easy to scan the message.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_65px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{active.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1D2D52]">{active.title}</h3>
                </div>
                <div className="h-14 w-14 overflow-hidden rounded-full border border-slate-200">
                  <Image src={active.image} alt={active.name} width={56} height={56} className="h-full w-full object-cover" />
                </div>
              </div>
              <p className="mt-6 text-slate-600 leading-8">{active.content}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-[#d10000]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="block h-2.5 w-2.5 rounded-full bg-[#d10000]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#1D2D52]">{active.name}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-10 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#d10000]' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function OurCompany() {
  return (
    <div className="bg-white text-[#1D2D52] ">
      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-cover bg-center bg-no-repeat bg-[url('/images/aboutBannerimg.jpeg')]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/15 via-transparent to-[#1D2D52]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-8">
              <p className="text-[#d10000] font-semibold uppercase tracking-[0.4em] text-sm -mt-16">About Us</p>
              <h1 className="max-w-3xl text-4xl sm:text-5xl font-bold leading-tight text-[#ffffff] pt-serif-bold">Modern cargo logistics, simplified for global teams.</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 ">
                We combine intelligence, flexibility, and trusted execution to reduce complexity and move more freight with confidence.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Years</p>
                  <p className="mt-3 text-3xl font-bold text-[#d10000]">40+</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Countries</p>
                  <p className="mt-3 text-3xl font-bold text-[#1D2D52]">100+</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">On-time</p>
                  <p className="mt-3 text-3xl font-bold text-[#d10000]">98%</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 items-stretch">
              <div className="rounded-[12px]  p-0 shadow-[0_20px_60px_rgba(15,23,42,0.08)] h-full">
                <div className="grid h-full grid-rows-[1fr_1fr] gap-6 overflow-hidden rounded-xl">
                  <div className="relative h-full overflow-hidden">
                    <Image src="/images/about1.jpg" alt="Cargo Ship" fill className="object-cover" />
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image src="/images/supplychain.webp" alt="Cargo Terminal" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[22px] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                  <div className="relative h-40 overflow-hidden rounded-[22px]">
                    <Image src="/images/about2.jpg" alt="Workers" fill className="object-cover" />
                  </div>
                </div>
                <div className="rounded-[32px] bg-[#F8FAFC] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                  <p className="text-sm uppercase tracking-[0.32em] text-[#d10000]">Precision delivery</p>
                  <h2 className="mt-4 text-2xl font-semibold text-[#1D2D52] pt-serif-bold">A modern logistics partner for complex supply chains.</h2>
                  <p className="mt-4 text-slate-600 leading-7">
                    Our customer-first process helps businesses move faster, reduce risk, and stay in control from pickup to final mile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <InterestingFacts />
      <TestimonialsSection />
    </div>
  )}
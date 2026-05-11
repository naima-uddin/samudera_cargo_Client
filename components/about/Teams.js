"use client"
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

function Teams() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const teamMembers = [
    {
      name: "Leo George",
      title: "CHIEF EXECUTIVE OFFICER",
      image: "/images/team (1).jpg",
      email: "leo.george@cargologisticscompany.com",
      experience: "15+ years",
    },
    {
      name: "Benjamin Ebenezer",
      title: "LOGISTICS MANAGER",
      image: "/images/team (2).jpg",
      email: "benjamin.ebenezer@cargologisticscompany.com",
      experience: "12+ years",
    },
    {
      name: "Sophia Luna",
      title: "CLIENT RELATIONS SPECIALIST",
      image: "/images/team (3).jpg",
      email: "sophia.luna@cargologisticscompany.com",
      experience: "8+ years",
    },
    {
      name: "Michael Chen",
      title: "OPERATIONS DIRECTOR",
      image: "/images/team (4).jpg",
      email: "michael.chen@cargologisticscompany.com",
      experience: "10+ years",
    },
    {
      name: "Sarah Williams",
      title: "FINANCE MANAGER",
      image: "/images/team (5).jpg",
      email: "sarah.williams@cargologisticscompany.com",
      experience: "9+ years",
    },
    {
      name: "David Rodriguez",
      title: "FLEET SUPERVISOR",
      image: "/images/team (6).jpg",
      email: "david.rodriguez@cargologisticscompany.com",
      experience: "7+ years",
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top_left,rgba(209,0,0,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(29,45,82,0.08),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d10000] text-xs uppercase tracking-[0.4em]">Leadership</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#1D2D52]">The team steering your cargo with confidence.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(29,45,82,0.12)]">
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-[#d10000]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#d10000]">{member.experience}</div>
                  <h3 className="mt-4 text-xl font-semibold text-[#1D2D52]">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">{member.title}</p>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="h-4 w-4 text-[#d10000]" />
                      <a href={`mailto:${member.email}`} className="hover:text-[#d10000] transition-colors">{member.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={ref} className="mt-16 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value={inView ? 50 : 0} suffix="+" label="Team Members" />
              <StatCard value={inView ? 15 : 0} suffix="+" label="Years Experience" />
              <StatCard value={inView ? 500 : 0} suffix="+" label="Projects Done" />
              <StatCard value={inView ? 24 : 0} suffix="/7" label="Support" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({ value, suffix, label }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 text-center">
      <p className="text-4xl font-bold text-[#d10000]">{value}{suffix}</p>
      <p className="mt-3 text-sm text-slate-600">{label}</p>
    </div>
  )
}

export default Teams

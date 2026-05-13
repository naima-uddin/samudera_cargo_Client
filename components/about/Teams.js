"use client"
import React from 'react'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  {
    name: "Anong Kittisak",
    title: "Client Relations Specialist",
    image: "/images/team (3).jpg",
    email: "anongkittisak@samuderathai.com",
    experience: "15+ years",
  },
  {
    name: "Nattapong Wattanakul",
    title: "Operations Director",
    image: "/images/team (5).jpg",
    email: "nattapongwattanakul@samuderathai.com",
    experience: "8+ years",
  },
  {
    name: "Suda Chaiyakul",
    title: "Logistics Coordinator",
    image: "/images/team (2).jpg",
    email: "sudachaiyakul@samuderathai.com",
    experience: "10+ years",
  },
  
]

const ceo = {
  name: 'Mr. Pinit',
  title: 'Chief Executive Officer',
  image: '/images/team (1).jpg',
  email: 'pinit@samuderathai.com',
}

const stats = [
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Projects Done', value: 500, suffix: '+' },
  { label: 'Support', value: 24, suffix: '/7' },
]

export default function Teams() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top_left,rgba(209,0,0,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(29,45,82,0.08),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6">
            <p className="text-[#d10000] text-xs uppercase tracking-[0.45em] font-semibold">Leadership</p>
            <h2 className="text-3xl font-black text-[#1D2D52] md:text-4xl pt-serif-bold">The team steering your cargo with confidence.</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              A high-impact leadership section with real people, authentic visuals, and clear operational strength.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              <StatTile label="Trusted operators" value="100+" />
              <StatTile label="Customer success" value="98%" />
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-8 shadow-[0_25px_75px_rgba(15,23,42,0.08)]">
            <div className="relative flex h-64 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg">
              <Image src="/images/team (1).jpg" alt="Executive team" width={720} height={480} className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1D2D52]/90 via-[#1D2D52]/60 to-transparent p-5 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/75">Leadership</p>
                <h3 className="mt-2 text-2xl font-semibold">{ceo.name}</h3>
                <p className="text-sm text-white/80">{ceo.title}</p>
                <a href={`mailto:${ceo.email}`} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white">
                  <FaEnvelope />
                  <span>{ceo.email}</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-[#d10000]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#d10000]">{member.experience}</span>
                <h3 className="mt-4 text-xl font-semibold text-[#1D2D52]">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#d10000]"
                >
                  <FaEnvelope className="text-[#d10000]" />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatTile({ label, value }) {
  return (
    <div className="rounded-[24px] bg-white p-6 shadow-sm border border-slate-200">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{label}</p>
      <p className="mt-4 text-3xl font-bold text-[#1D2D52]">{value}</p>
    </div>
  )
}

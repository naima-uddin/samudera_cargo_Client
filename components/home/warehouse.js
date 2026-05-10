'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const colors = {
    primary: '#d10000',
    secondary: '#1D2D52',
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      rating: 5,
      title: '“Great Work!”',
      content:
        'I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!',
      name: 'Anna Ingrosso',
      role: 'CLIENT OF COMPANY',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      rating: 5,
      title: '“Perfect Results!”',
      content:
        'I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!',
      name: 'Tomm Skywalker',
      role: 'CLIENT OF COMPANY',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      rating: 5,
      title: '“Excellent Support”',
      content:
        'The team at Unicoach goes above and beyond. Their courses are top-notch and the support is incredible. I highly recommend them to anyone looking to advance their career.',
      name: 'Maria Chen',
      role: 'PRODUCT MANAGER',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      rating: 5,
      title: '“Highly Effective”',
      content:
        'I was skeptical at first, but the results speak for themselves. The methodologies taught here have transformed our team’s productivity.',
      name: 'David Kim',
      role: 'TEAM LEAD',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      rating: 5,
      title: '“Life-changing”',
      content:
        'Not only did I gain new skills, but I also gained confidence. The instructors are mentors who truly care about your growth.',
      name: 'Sophia Rodriguez',
      role: 'MARKETING DIRECTOR',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      rating: 5,
      title: '“Worth every penny”',
      content:
        'The depth of content and the practical exercises make this stand out from any other platform. Already recommended to five colleagues!',
      name: 'James Wright',
      role: 'ENGINEERING MANAGER',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    
    touchStartX.current = null;
  };

  const active = testimonials[activeIndex];

  return (
    <div className="w-full relative overflow-hidden py-6 sm:py-10 lg:py-14 bg-white">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 18% 18%, ${colors.primary}10 0, transparent 28%), radial-gradient(circle at 78% 28%, ${colors.secondary}08 0, transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,1))` }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-4 lg:gap-6 items-stretch">
          {/* Left intro panel */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-red-600">
              Testimonials
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight text-[#122652]">
              A cleaner way to read real client feedback.
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base leading-7 text-slate-600">
              This version keeps everything bright, modern and easy to scan, with a softer editorial rhythm and clearer separation between stories.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Rating</div>
                <div className="mt-2 text-2xl font-extrabold text-[#c51a03]">5.0</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Stories</div>
                <div className="mt-2 text-2xl font-extrabold text-[#cf210a]">6</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Trust</div>
                <div className="mt-2 text-2xl font-extrabold text-[#cf210a]">100%</div>
              </div>
            </div>
          </div>

          {/* Right testimonial board */}
          <div
            ref={containerRef}
            className="relative rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute left-6 right-6 top-4 h-1 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-300" style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%`, background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[190px_1fr] items-stretch">
              {/* Vertical list */}
              <div className="order-2 xl:order-1 flex xl:flex-col gap-3 overflow-auto xl:max-h-[420px] pb-1 xl:pr-1">
                {testimonials.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.name}
                      onClick={() => goToTestimonial(index)}
                      className={`group relative flex-none w-[156px] xl:w-full rounded-2xl border p-3 text-left transition-all duration-300 ${isActive ? 'border-[#d10000]/20 bg-gradient-to-r from-[#fff7f7] to-white shadow-md -translate-y-0.5' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Image src={item.image} alt={item.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover border-2 border-white shadow-sm" />
                        <div className="min-w-0">
                          <div className={`truncate text-sm font-semibold ${isActive ? 'text-[#122652]' : 'text-slate-700'}`}>{item.name}</div>
                          <div className="truncate text-[11px] text-slate-500">{item.role}</div>
                        </div>
                      </div>
                      <div className="mt-3 text-xs line-clamp-2 text-slate-500">{item.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Main testimonial */}
              <div className="order-1 xl:order-2 relative overflow-hidden rounded-[28px] bg-[#fafafa] border border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(209,0,0,0.06),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(29,45,82,0.06),_transparent_28%)]" />
                <div
                  key={activeIndex}
                  className="relative z-10 h-full p-6 sm:p-8 xl:p-10"
                  style={{ animation: 'fadeInUp 0.45s ease-out' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4" fill={i < active.rating ? colors.primary : 'none'} stroke={colors.primary} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-4xl sm:text-5xl font-serif text-[#1D2D52]/15 leading-none">&ldquo;</div>
                    </div>

                    <div className="hidden sm:block rounded-full bg-white p-1 shadow-sm border border-slate-200">
                      <Image src={active.image} alt={active.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-black text-[#122652]">{active.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-600">
                    {active.content}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
                      <Image src={active.image} alt={active.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#122652]">{active.name}</div>
                      <div className="text-xs font-semibold tracking-[0.18em] text-[#d10000] mt-1">{active.role}</div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>

          
          </div>
        </div>
      </div>

      {/* Add keyframe animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
// app/page.tsx or components/InterestingFacts.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const InterestingFacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const animationStarted = useRef(false);
  
  const facts = [
    {
      id: 1,
      title: 'WAREHOUSE',
      value: 400,
      displayValue: '400k',
      unit: 'ft²',
      description: 'Strategic storage & distribution network',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
    },
    {
      id: 2,
      title: 'ON-TIME',
      value: 98,
      displayValue: '98',
      unit: '%',
      description: 'Precision delivery performance',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 3,
      title: 'WEEKLY',
      value: 5,
      displayValue: '5K',
      unit: '',
      description: 'Shipments processed & tracked',
      icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
    },
    {
      id: 4,
      title: 'AWARDS',
      value: 25,
      displayValue: '25',
      unit: '',
      description: 'Industry recognition & excellence',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
    }
  ];

  // Counter animation function (smooth rAF easing)
  const animateCounter = () => {
    if (animationStarted.current) return;
    animationStarted.current = true;

    const duration = 1800; // ms
    const start = performance.now();
    const targets = facts.map((f) => f.value);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = Math.min(now - start, duration);
      const progress = easeOutCubic(elapsed / duration);

      const next = targets.map((t, i) => Math.floor(t * progress));
      setCounters(next);

      if (elapsed < duration) requestAnimationFrame(step);
      else setCounters(targets);
    };

    requestAnimationFrame(step);
  };

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Format counter value with K suffix and commas
  const formatCounterValue = (index) => {
    const fact = facts[index];
    if (fact.displayValue.includes('K')) {
      const baseValue = counters[index];
      if (baseValue >= 400) return '400k';
      if (baseValue > 0) return `${baseValue}k`;
      return '0k';
    }
    const n = counters[index] || 0;
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section ref={sectionRef} className="relative  py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0 -z-20">
        <Image src="/images/on-road_bg.jpg" alt="Background road" fill className="object-cover opacity-80" priority />
      </div>
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-black/10" />
      {/* Decorative gradient accent */}
      <div className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#d10000]/10 to-[#1D2D52]/8 opacity-60 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 8 }}
              transition={{ delay: 0.06 * index, duration: 0.5 }}
              className="relative  p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#ff2a2a] to-[#521801] text-white shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={fact.icon} /></svg>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-xl text-white uppercase tracking-wider pt-serif-regular">{fact.title}</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <div className="md:text-4xl text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#d10000] to-[#a12402]">
                      {fact.displayValue.includes('K') ? formatCounterValue(index) : counters[index]}
                    </div>
                    {fact.unit && <div className="text-sm text-white">{fact.unit}</div>}
                  </div>

                
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestingFacts;
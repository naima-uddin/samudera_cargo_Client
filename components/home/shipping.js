"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { ArrowBigUp } from "lucide-react";

const steps = [
  { number: '01', title: 'Request a Quote', desc: 'Tell us what you need and receive a tailored quote quickly.', align: 'top', left: '8%', dotY: 120 },
  { number: '02', title: 'Book Your Shipment', desc: 'Confirm dates, select services and lock in pricing.', align: 'bottom', left: '28%', dotY: 90 },
  { number: '03', title: 'Pickup & Consolidation', desc: 'We collect cargo and consolidate for efficient transit.', align: 'top', left: '46%', dotY: 140 },
  { number: '04', title: 'Customs Clearance', desc: 'Expert handling of paperwork and regulatory processes.', align: 'bottom', left: '62%', dotY: 110 },
  { number: '05', title: 'Track in Real-Time', desc: 'Live updates and ETA notifications at every stage.', align: 'top', left: '78%', dotY: 170 },
  { number: '06', title: 'Delivery & Confirmation', desc: 'Safe delivery with digital proof of receipt and follow-up.', align: 'bottom', left: '92%', dotY: 140 },
];

export default function ShippingProcess() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % steps.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f7f9fc] to-[#f1f5fb] pb-8 pt-16 overflow-hidden ">

      {/* Watermark */}
      <h1 className="absolute bottom-10 left-0 text-[120px] font-black text-gray-200 opacity-20 select-none pointer-events-none hidden lg:block">
        WORK
      </h1>

      {/* Right side image */}
      <img
        src="/images/shipping.png"
        className="absolute top-0 right-0 w-[48%] hidden lg:block"
        alt="Shipping"
      />

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-[#FD5621] font-semibold tracking-widest text-sm">
            HOW WE WORK
          </p>
          <h2 className="text-5xl font-extrabold text-[#122652] mt-3 mb-50 pt-serif-bold">
            Simple Shipping Process
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block h-[480px] ">

          {/* Static Zigzag Connector Path (box-style movement) */}
          <svg className="absolute left-[10%] top-[100px]" width="1100" height="260" viewBox="0 0 1100 260" fill="none">
            <path
              d="M20 60 L180 60 L260 140 L420 140 L560 40 L640 40 L800 100 L940 100 L1020 180 L1080 180"
              stroke="#e6eef7"
              strokeWidth="4"
              strokeDasharray="10 8"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>

          {/* Steps */}
          {steps.map((step, i) => {
            const isTop = step.align === 'top';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, x: -40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: i * 0.14, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute group"
                style={{ left: step.left, top: step.dotY }}
              >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#d10000] to-[#ff2a2a] text-white font-bold flex items-center justify-center shadow-2xl transition-transform duration-300 z-20 relative ring-4 ring-white">
                    <div className="text-sm tracking-widest">{step.number}</div>
                  </div>

                    {/* connector from dot to card */}
                    <div className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'top-[40px]' : 'bottom-[40px]'} w-0 h-10`}> 
                      <div className="w-[2px] h-full bg-gradient-to-b from-transparent to-[#c43b1a] mx-auto rounded" />
                    </div>

                <div className={`absolute w-[320px] ${isTop ? 'top-[84px]' : 'bottom-[84px]'} left-1/2 -translate-x-1/2`}>
                  <motion.div
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="relative bg-white/95 backdrop-blur-sm border border-gray-100 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-300"
                  >
                    <div className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 ${isTop ? '-top-2.5' : '-bottom-2.5'}`} />

                    <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#d10000] to-[#ff2a2a] rounded-l-md" />

                    <div className="pl-4">
                      <h3 className="font-bold text-[#0E2047] mb-2 text-lg">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Traveler box: hops from step to step (desktop only) */}
          <motion.div
            aria-hidden
            className="absolute z-30 lg:block hidden"
            initial={false}
            animate={{ left: steps[current].left, top: `${steps[current].dotY}px` }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{ width: 56, height: 56 }}
          >
            
            <ArrowBigUp className="text-black" />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-[#FD5621] text-white flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-[#122652] text-lg">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
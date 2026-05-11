"use client";

import React from 'react';
import Link from 'next/link';

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '950+', label: 'Satisfied Clients' },
  { value: '30M+', label: 'Shipments Delivered' },
];

const Banner = () => {
  return (
    <section className="bg-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-16 lg:pb-20">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-5 z-10 pt-2 lg:pt-4">
              <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-primary font-semibold mb-4 sm:mb-5">
                Welcome to Samudera Cargo
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-third pt-serif-bold">
                Get Your Load
                to Market
                Faster
              </h1>

              <p className="text-sm sm:text-xl text-slate-600 max-w-md  pt-serif-regular">
                Reliable cargo and freight operations with end-to-end support,
                helping your shipments move safely and on schedule.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-3 sm:mt-4">
                <Link
                  href="/Bookings"
                  className="inline-flex items-center justify-center rounded-full bg-third text-white px-5 sm:px-6 py-2.5 text-sm font-medium hover:bg-fourth transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center rounded-full border-2 border-third text-third px-5 sm:px-6 py-2.5 text-sm font-medium hover:bg-third hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[220px] sm:h-[300px] lg:h-[480px] z-0">
              <img
                src="/banner/container1.png"
                alt="Cargo container"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>

          <div className="relative -mt-12 sm:-mt-16 lg:-mt-36 z-0 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/banner/ship.jpg"
              alt="Cargo ship"
              className="w-full h-[200px] sm:h-[360px] lg:h-[400px] object-cover"
            />
          </div>

          <div className="relative lg:absolute lg:bottom-0 mt-6 lg:mt-0 lg:translate-y-1/2 w-auto bg-primary text-white overflow-hidden shadow-2xl z-0">
            <div className="grid grid-cols-3 divide-x divide-white/20">
              {stats.map((item) => (
                <div key={item.label} className="px-4 sm:px-6 py-4 sm:py-2 text-center">
                  <div className="text-3xl sm:text-2xl lg:text-4xl font-black leading-none pt-serif-bold">{item.value}</div>
                  <div className="text-xs sm:text-sm mt-2 sm:mt-1 text-white/95 pt-serif-regular">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

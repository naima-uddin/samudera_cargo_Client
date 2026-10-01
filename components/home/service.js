'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ServicesSection = () => {

  const allServices = [
    {
      id: 1,
      title: 'Air Freight',
      description: 'We provide air freight with the competence and service in the sphere of urgent, valuable, time cargo we ensure.',
      image: 'https://samudera-cargo-server.vercel.app/uploads/images/service2.jpg',
      features: [
        '100% Satisfaction Guarantee',
        'Highly Professional Staff',
        'Quality Control System',
      ]
    },
    {
      id: 2,
      title: 'Ocean Freight',
      description: 'We provide with the best types of basic conditions international sea transportation is implemented by our partners.',
      image: 'https://samudera-cargo-server.vercel.app/uploads/images/service1.jpg',
      features: [
        'Accurate Testing Processes',
        'Professional and Qualified',
        'Unrivalled workmanship',
      ]
    },
    {
      id: 3,
      title: 'Road Freight',
      description: 'We provide a wide range of services including quality international road transportation services including goods & service.',
      image: 'https://samudera-cargo-server.vercel.app/uploads/images/service3.jpg',
      features: [
        'Commercial expertise',
        'Logistical expertise',
        'Sustainability goals',
      ]
    },
    {
      id: 4,
      title: 'Warehousing',
      description: 'We provide with the best types of basic conditions international sea transportation is implemented by our partners.',
      image: 'https://samudera-cargo-server.vercel.app/uploads/images/project (4).jpg',
      features: [
        '100% Satisfaction Guarantee',
        'Highly Professional Staff',
        'Quality Control System',
      ]
    },
    {
      id: 5,
      title: 'Supply Chain',
      description: 'We provide with the best types of basic conditions international sea transportation is implemented by our partners.',
      image: 'https://samudera-cargo-server.vercel.app/uploads/images/supplychain.webp',
      features: [
        'Accurate Testing Processes',
        'Professional and Qualified',
        'Unrivalled workmanship',
      ]
    },
    {
      id: 6,
      title: 'Packaging',
      description: 'We provide with the best types of basic conditions international sea transportation is implemented by our partners.',
      image: 'https://samudera-cargo-server.vercel.app/uploads/images/packaging.jpg',
      features: [
        'Commercial expertise',
        'Logistical expertise',
        'Sustainability goals',
      ]
    },
  ];

  // Split services: 4 for main grid, all 6 for slider (infinite loop)
  const mainServices = allServices.slice(0, 4);
  const sliderServices = allServices; // All 6 services for infinite loop

  // Pagination for main grid (shows 4 at a time, 2 pages)
  const [gridPage, setGridPage] = useState(0);
  const servicesPerPage = 4;
  const totalPages = 2; // Only 2 pages: (1,2,3,4) and (5,6,1,2)
  
  // Get visible services - only 2 pages cycling
  const visibleServices = gridPage === 0 
    ? allServices.slice(0, 4) // Cards 1,2,3,4
    : [allServices[4], allServices[5], allServices[0], allServices[1]]; // Cards 5,6,1,2

  // Auto-play grid slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGridPage((prev) => (prev + 1) % totalPages);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleGridPrev = () => {
    setGridPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleGridNext = () => {
    setGridPage((prev) => (prev + 1) % totalPages);
  };

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-[240px] overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-third mb-3 pt-serif-bold">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features with Red Checkmarks */}
        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="text-primary mt-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" />
                  <path d="M6 10l2 2 6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-sm text-slate-700 font-medium pt-serif-normal">{feature}</span>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold text-sm mb-2">Safe & Reliable Cargo Solutions!</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 pt-serif-bold">
            Managing Logistics For World's
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 pt-serif-bold">
            Multinational Companies.
          </h3>
        </div>

        {/* Main Grid - 4 Services Slider */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-in-out">
            {visibleServices.map((service) => (
              <div
                key={service.id}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Left and Right */}
          <button
            onClick={handleGridPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleGridNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

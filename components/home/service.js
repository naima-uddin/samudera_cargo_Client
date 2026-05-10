// components/ServicesSection.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Sea Freight',
      subtitle: 'Global Reach, Reliable Sea Freight Solutions',
      image: '/images/service1.avif',
      stats: { shipments: '10K+', countries: '50+', satisfaction: '98%' },
    },
    {
      id: 2,
      title: 'Air Freight',
      subtitle: 'Move High-Value Items Swiftly with Air Freight',
      image: '/images/service2.avif',
      stats: { shipments: '5K+', countries: '30+', satisfaction: '96%' },
    },
    {
      id: 3,
      title: 'Road Freight',
      subtitle: 'Ship Quickly Nationwide with Road Freight',
      image: '/images/service3.avif',
      stats: { shipments: '15K+', countries: '80+', satisfaction: '97%' },
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-10 px-4 md:px-8 lg:px-16 min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FD5621]/10 via-purple-600/10 to-blue-600/10 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>

        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-emerald-600/10 blur-3xl"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
            transform: 'translate(50%, 50%)',
          }}
        ></div>

        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#FD5621' : i % 3 === 1 ? '#0EA5E9' : '#06B6D4',
              opacity: 0.2,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-6 relative">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FD5621] to-transparent"></div>
            <span className="text-sm tracking-[0.3em] text-third font-light">OUR SERVICES</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FD5621] to-transparent"></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary via-gray-300 to-third bg-clip-text text-transparent">
              Explore Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FD5621] via-orange-500 to-[#FD5621] bg-clip-text text-transparent">
              Premium Services
            </span>
          </h1>

          <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transmax is the world's driving worldwide coordinations provider — 
            we uphold industry and exchange the worldwide exchange of merchandise through land transport.
          </p>

          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-18 h-18  md:w-32 md:h-32">
            <div className="absolute inset-0 border-2 border-[#FD5621]/20 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-4 border-2 border-blue-500/20 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-slate-900/10 bg-slate-900 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-[350px] md:h-[450px] xl:h-[550px] ">
                <Image
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/35"></div>

                <div className="absolute inset-x-0 top-4 px-5">
                  <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white w-fit">
                    {service.title}
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5 space-y-2">
                  <p className="text-xl md:text-2xl font-medium text-white leading-6">
                    {service.subtitle}
                  </p>
                  <div className="rounded-[24px] bg-gradient-to-r from-blue-500/20 to-blue-900/20 p-4 backdrop-blur-xl border border-blue-300/10">
                    <div className="grid grid-cols-3 gap-3 text-center text-white">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.75s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;

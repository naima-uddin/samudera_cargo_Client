"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const StylishPartnerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const sliderRef = useRef(null);

  const scrollToSlide = (index) => {
    const node = sliderRef.current;
    if (node && node.children[index]) {
      node.scrollTo({
        left: node.children[index].offsetLeft,
        behavior: "smooth",
      });
    }
  };


  const partners = [
    {
      id: 1,
      category: "DAILY NEWS",
      title: "New Generation",
      image: "/images/partner1 (1).png",
      activeImage: "/images/partner1 (1).png",
      color: "#FD5621",
    },
    {
      id: 2,
      category: "TECHNOLOGY",
      title: "HIGH PERFORMANCE",
      image: "/images/partner1 (2).png",
      activeImage: "/images/partner1 (2).png",
      color: "#122652",
    },
    {
      id: 3,
      category: "FURTURATECH",
      title: "INNOVATIVE SOLUTION",
      image: "/images/partner1 (3).png",
      activeImage: "/images/partner1 (3).png",
      color: "#FD5621",
    },
    {
      id: 4,
      category: "CYBERTECH",
      title: "SECURITY MADE SIMPLE",
      image: "/images/partner1 (4).png",
      activeImage: "/images/partner1 (4).png",
      color: "#122652",
    },
    {
      id: 5,
      category: "ART STUDIO",
      title: "STYLISH, MODERN",
      image: "/images/partner1 (5).png",
      activeImage: "/images/partner1 (5).png",
      color: "#FD5621",
    },
    {
      id: 6,
      category: "MORIOX",
      title: "High Performance",
      image: "/images/partner1 (6).png",
      activeImage: "/images/partner1 (6).png",
      color: "#122652",
    },
    {
      id: 7,
      category: "MORIOX",
      title: "High Performance",
      image: "/images/partner1 (7).png",
      activeImage: "/images/partner1 (7).png",
      color: "#FD5621",
    },
    {
      id: 8,
      category: "MORIOX",
      title: "High Performance",
      image: "/images/partner1 (8).png",
      activeImage: "/images/partner1 (8).png",
      color: "#122652",
    },
    {
      id: 9,
      category: "MORIOX",
      title: "High Performance",
      image: "/images/partner1 (9).png",
      activeImage: "/images/partner1 (9).png",
      color: "#FD5621",
    },
    {
      id: 10,
      category: "MORIOX",
      title: "High Performance",
      image: "/images/partner1 (10).png",
      activeImage: "/images/partner1 (10).png",
      color: "#122652",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % partners.length;
        scrollToSlide(next);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + partners.length) % partners.length;
      scrollToSlide(next);
      return next;
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % partners.length;
      scrollToSlide(next);
      return next;
    });
  };

  const activePartner = partners[currentSlide];

  return (
    <>
    <div className=" mb-8">


    <div className="max-w-7xl mx-auto px-4 ">
      <div className="bg-white relative p-6 sm:p-8 rounded-2xl shadow-[0_30px_90px_rgba(13,30,63,0.06)] border border-slate-100">
        {/* Header - Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
          <div className="space-y-2">
            <p className="md:text-3xl text-xl uppercase  text-[#0E2047] pt-serif-bold">
              Collaborating & Partnering with <span className="  font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#d10000] to-[#5a1301]">THE BEST</span>
            </p>
            
            <p className="max-w-2xl text-sm sm:text-base text-slate-500 leading-relaxed">
              Trusted logos from our top collaborators, shown in a compact slider for easy browsing.
            </p>
          </div>

          <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:-translate-y-0.5"
          >
            <span className="text-slate-600 text-sm sm:text-base">←</span>
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:-translate-y-0.5"
          >
            <span className="text-slate-600 text-sm sm:text-base">→</span>
          </button>
        </div>
      </div>

      {/* Logo slider row */}
      <div className="w-full mt-4 overflow-visible">
        <div
          ref={sliderRef}
          className="flex gap-4 pb-2 pt-2 overflow-x-auto overflow-y-visible scroll-smooth no-scrollbar"
          style={{ paddingBottom: 8 }}
        >
          {partners.map((partner) => {
            const isActive = partner.id === activePartner.id;
            const isHovered = hoveredId === partner.id;

            return (
              <div
                key={partner.id}
                onClick={() => goToSlide(partners.findIndex((p) => p.id === partner.id))}
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative flex-none w-20 sm:w-24 md:w-28 min-w-[6rem] cursor-pointer transition-transform duration-300 ${isActive ? 'scale-105 -translate-y-1' : 'hover:scale-105 hover:-translate-y-0.5'}`}
                style={{
                  aspectRatio: "1/1",
                  boxShadow: isActive
                    ? `0 18px 48px -18px ${partner.color}40`
                    : "0 8px 20px -12px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  className={`relative w-full h-full rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isActive ? "border-[#d10000] bg-white" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 30vw, (max-width: 768px) 20vw, 12vw"
                    priority={partner.id <= 5}
                  />

                  {/* category badge */}
                  <div className="absolute left-3 top-3 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white" style={{ backgroundColor: partner.color }}>
                    {partner.category}
                  </div>
                </div>
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 4px ${partner.color}22`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation - Responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 gap-3 sm:gap-0">
          <div className="flex gap-1.5 sm:gap-2 order-2 sm:order-1">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none group"
            >
              <div
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 group-hover:bg-[#d10000] ${
                  index === currentSlide
                    ? "w-5 sm:w-8 bg-[#d10000]"
                    : "w-1.5 sm:w-2 bg-gray-300 group-hover:w-3"
                }`}
              />
            </button>
          ))}
        </div>

      
      </div>

      {/* Active Partner Info - Responsive */}
      {/* <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 tracking-wide">{activePartner.category}</p>
            <p 
              className="text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300"
              style={{ color: activePartner.color }}
            >
              {activePartner.title}
            </p>
          </div> 
          <div className="hidden sm:flex gap-2 mt-2 sm:mt-0">
            {partners.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-orange-500 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
    </div>
    </div>
    
    </>
  );
};

export default StylishPartnerSlider;
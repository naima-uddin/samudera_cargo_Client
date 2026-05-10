"use client";
// Add this useState import at the top
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

const PromotionPricing = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState("");
  // Component fixed to show only the "Design & Development" category — tab/scroll states removed

  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  // Inlined Design & Development data (component-local)
  const designService = {
    id: 1,
    category: 'Design & Development',
    packages: [
      {
        id: 'design-special',
        name: 'Basic',
        price: '$199',
        originalPrice: '$250',
        discount: '70% Off',
        color: 'teal',
        features: [
          'Up to 100 shipments',
          '5-7 days Delivery',
          'Basic Tracking',
          'Email Support',
          'Basic Insurance',
        ]
      },
      {
        id: 'design-plus',
       name: 'Standard',
      price: '249',
        originalPrice: '$300',
        discount: '70% Off',
        color: 'orange',
        features: [
          'Up to 100 shipments',
          '5-7 days Delivery',
          'Premium Tracking',
          'Priority Email Support',
          'Enhanced Insurance',
        ]
      },
      {
        id: 'design-gold',
        name: 'Premium',
      price: '299',
        originalPrice: '$350',
        discount: '70% Off',
        color: 'blue',
        features: [
          'Up to 100 shipments',
          '5-7 days Delivery',
          'Advanced Tracking',
          '24/7 Support',
          'Priority Email Support',
          'Premium Insurance',
        ]
      },
      {
        id: 'design-platinum',
        name: 'Platinum',
      price: '349',
        originalPrice: '$389',
        discount: '70% Off',
        color: 'red',
        features: [
          'Up to 100 shipments',
          '5-7 days Delivery',
          'Advanced Tracking',
          '24/7 Support',
          'Priority Email Support',
          'Premium Insurance',
          'Dedicated Account Manager',
          'Custom Reporting',
          'Priority Issue Resolution',
          'Exclusive Access to New Features',
        ]
      },
    ]
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentService = designService;
  
  // Determine packages per page based on screen size
  const packagesPerPage = isMobile ? currentService.packages.length : 4;
  
  const totalPages = currentService ? Math.ceil(currentService.packages.length / packagesPerPage) : 0;
  const startIndex = currentPage * packagesPerPage;
  const visiblePackages = currentService?.packages.slice(startIndex, startIndex + packagesPerPage) || [];

  // Reset page when switching between mobile and desktop views
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  // Navigation functions
  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (totalPages <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        prevPage();
      } else if (e.key === 'ArrowRight') {
        nextPage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevPage, nextPage, totalPages]);



  if (!currentService) {
    return null;
  }

  // Function to determine card style based on package color
  const getCardStyle = (pkg, isHovered) => {
    // Simplified color mapping using theme tokens. Red packages are highlighted.
    const isRed = pkg.color === 'red';
    const headerBg = isRed ? 'bg-gradient-to-r from-[#d10000] to-[#ff2a2a]' : 'bg-gradient-to-br from-third to-fourth';
    const priceBg = isRed ? 'bg-gradient-to-r from-[#d10000] to-[#ff2a2a]' : 'bg-gradient-to-br from-gray-50 to-gray-100';
    const featuresBg = isRed ? 'bg-[#d10000]' : 'bg-white';
    const ctaBg = isRed ? 'bg-slate-800' : 'bg-gradient-to-r from-primary to-[#ff2a2a]';
    const buttonHover = 'hover:opacity-95';
    const ribbonBg = isRed ? 'bg-slate-700 text-white' : 'bg-primary';
    const iconBg = isRed ? 'bg-white/20' : 'bg-third/20';

    return {
      headerBg,
      priceBg,
      featuresBg,
      ctaBg,
      buttonHover,
      ribbonBg,
      iconBg,
      headerText: 'text-white',
      bodyText: isRed ? 'text-white' : 'text-gray-700',
      priceText: isRed ? 'text-white' : 'text-gray-900',
      ctaText: 'text-white',
      borderColor: 'border-gray-200',
      shadow: isHovered
        ? 'shadow-[0_30px_90px_-45px_rgba(15,23,42,0.32)]'
        : 'shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]',
      transform: isHovered ? 'translateY(-8px) scale-[1.02]' : 'translateY(0) scale-100'
    };
  };




  return (
    <>   
      <section className="relative pt-0  flex items-center justify-center overflow-hidden">
      <style jsx>{`
        .btn-3d {
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(145deg, #66B2FF, #000099);
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          min-width: 220px;
          text-align: center;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        
        .btn-3d:hover {
          transform: translateY(-4px) rotateX(10deg);
          box-shadow: 
            0 15px 30px rgba(102, 126, 234, 0.4),
            inset 0 -3px 0 rgba(0,0,0,0.2);
          background: linear-gradient(145deg, #764ba2, #667eea);
        }
        
        .btn-3d:active {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(102, 126, 234, 0.3),
            inset 0 -2px 0 rgba(0,0,0,0.2);
        }
        
        /* Top edge effect */
        .btn-3d::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          height: 30%;
          background: linear-gradient(rgba(255,255,255,0.3), transparent);
          border-radius: 10px 10px 0 0;
          opacity: 0.6;
        }
        
        /* Neon Button Style - Fixed white background */
        .btn-neon {
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(145deg, #66B2FF, #000099);
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          min-width: 220px;
          text-align: center;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        .btn-neon:hover {
          transform: translateY(-4px) rotateX(10deg);
          box-shadow: 
            0 15px 30px rgba(102, 126, 234, 0.4),
            inset 0 -3px 0 rgba(0,0,0,0.2);
          background: linear-gradient(145deg, #764ba2, #667eea);
        }
        
        .btn-neon:active {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(245, 87, 108, 0.3),
            inset 0 -2px 0 rgba(0,0,0,0.2);
        }
        
        /* Top edge effect */
        .btn-neon::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          height: 30%;
          background: linear-gradient(rgba(255,255,255,0.3), transparent);
          border-radius: 10px 10px 0 0;
          opacity: 0.6;
        }

        /* Styled scrollbar - visible gray with proper track */
        .thin-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 4px;
          border: 2px solid #f1f5f9;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
        .thin-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 #f1f5f9;
        }

        /* Extra small devices (very small phones) */
        @media (max-width: 400px) {
          .btn-3d,
          .btn-neon {
            padding: 6px 8px;
            font-size: 10px;
          }
        }

      `}</style> 
      </section>

      {/* Background hero with dark truck image + overlay */}
      <div className="relative w-full">
        <div className="w-full h-[320px] md:h-[380px] lg:h-[420px] bg-cover bg-center" style={{backgroundImage: "url('/images/pricing-bg.jpg')"}}>
          <div className="absolute inset-0 bg-[rgba(3,7,18,0.6)]/70 backdrop-blur-sm"></div>
        </div>

        {/* Heading positioned over hero */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          <div className="container mx-auto pt-20 pointer-events-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d10000] to-[#1D2D52] inline-block">
                  PRICING & PLANS
                </span>
              </h1>
              <p className="text-white/70 text-sm font-medium mt-1 tracking-wide">Reliable Freight Services for every stage of your shipment.</p>
            </div>
          </div>
        </div>
      </div>

    <div className=" bg-transparent -mt-20 pb-12">

      {/* Enhanced Pricing Cards with Navigation */}
      <div className="container mx-auto">
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
            {/* Vertical slider (desktop only) */}
            <div className="hidden lg:flex flex-col items-center gap-3 absolute left-[-64px] top-1/2 -translate-y-1/2">
              <button
                aria-label="prev"
                onClick={prevPage}
                className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                ▲
              </button>
              <div className="flex flex-col items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`transition-all duration-200 ${currentPage === i ? 'w-3 h-10 bg-primary rounded-full' : 'w-2 h-6 bg-gray-200/60 rounded-full hover:opacity-80'}`}
                  />
                ))}
              </div>
              <button
                aria-label="next"
                onClick={nextPage}
                className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                ▼
              </button>
            </div>
        

            {/* Cards Container - Different grid for mobile vs desktop */}
            <div className={`mb-10 ${isMobile ? 'px-3' : 'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 items-stretch'}`}>
              {visiblePackages.map((pkg, index) => {
                const isHovered = hoveredCard === pkg.id;
                const style = getCardStyle(pkg, isHovered);
                
                return (
                  <div
                    key={pkg.id}
                    onMouseEnter={() => setHoveredCard(pkg.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`rounded-xl overflow-hidden ${style.shadow} transition-all duration-500 ${style.transform} ${ 
                      isMobile ? 'w-full max-w-[340px] mx-auto mb-8' : 'h-full flex flex-col'
                    } relative bg-white` }>
                  
                    {/* Discount Ribbon - Top Right */}
                    <div className="absolute top-0 right-0 z-20">
                      {(() => {
                        const isRedPkg = pkg.color === 'red';
                        const ribbonClass = isRedPkg ? 'bg-slate-800 text-white' : style.ribbonBg;
                        const ribbonText = isRedPkg ? 'POPULAR' : pkg.discount;
                        return (
                          <div
                            className={`${ribbonClass} px-3 py-1 sm:px-5 sm:py-1.5 font-bold text-xs sm:text-sm shadow-sm ring-1 ring-slate-200 whitespace-nowrap max-w-[140px] transform origin-top-right ${isRedPkg ? 'rotate-0' : ''}`}
                            style={{
                              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
                              minWidth: '90px',
                              maxWidth: '140px',
                              textAlign: 'right'
                            }}
                          >
                            {ribbonText}
                          </div>
                        );
                      })()}
                    </div>

                    {/* Package Header with Icon and Background */}
                    <div className={`${style.headerBg} p-6 md:p-6 text-left relative`}>
                      <div className="flex items-start gap-4">
                        {/* Building Icon */}
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 21V8l7-5 7 5v13h-4v-7H8v7H3zm2-2h2v-5h10v5h2V9.5l-5-3.575L7 9.5V19z"/>
                              <rect x="9" y="11" width="2" height="2"/>
                              <rect x="13" y="11" width="2" height="2"/>
                              <rect x="9" y="14" width="2" height="2"/>
                              <rect x="13" y="14" width="2" height="2"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Package Info */}
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{pkg.name}</h3>
                          <p className="text-xs sm:text-sm md:text-sm text-white/90 font-medium">Best Value for Money Guaranteed!</p>
                        </div>
                      </div>
                    </div>

                    {/* Price Section - Separate Background */}
                    <div className={`${style.priceBg} px-6 py-4 md:px-8 md:py-6 text-center ${style.borderColor} border-b` }>
                      <div className="flex  items-center justify-center gap-2 mb-1">
                        <span className={`text-2xl sm:text-3xl md:text-5xl font-black ${style.priceText}`}>{pkg.price}</span>
                        <span className="text-[0.68rem] sm:text-sm md:text-base text-gray-400 line-through font-semibold">{pkg.originalPrice}</span>
                      </div>
                    </div>

                    {/* Package Features - Scrollable */}
                    <div className={`${style.featuresBg} px-6 py-6 md:px-8 ${style.borderColor} border-b`}>
                      <div className="h-[10.5rem] sm:h-[12rem] overflow-y-auto pr-2 thin-scrollbar">
                        <ul className="space-y-2 md:space-y-3">
                          {pkg.features.map((feature, idx) => {
                            const iconColor = pkg.color === 'teal' ? 'text-teal-500' : pkg.color === 'orange' ? 'text-orange-500' : pkg.color === 'red' ? 'text-white' : pkg.color === 'blue' ? 'text-blue-500' : 'text-indigo-500';
                            return (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="mt-1 flex-shrink-0 ml-3">
                                  <svg className={`w-2 h-2 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="10"/>
                                  </svg>
                                </div>
                                <span className={`text-[0.72rem] sm:text-sm md:text-base leading-relaxed ${style.bodyText}`}>{feature}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="p-6 md:p-6">
                      <Link
                        href={`/contact`}
                        className={`block w-full text-center py-3 md:py-4 ${style.ctaBg} ${style.ctaText} ${style.buttonHover} font-bold text-sm md:text-base rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-lg uppercase tracking-wider cursor-pointer`}
                      >
                        START PROJECT
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>

    </div>
    </>
  );
};



export default PromotionPricing;
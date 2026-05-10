"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Topbar = () => { 
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlTopbar = () => {
      const currentScrollY = window.scrollY;
      
      // শুধুমাত্র একদম উপরে (শীর্ষে) থাকলেই দেখাবে
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // অন্যথায় সবসময় হাইড থাকবে
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // throttle ফাংশন যাতে পারফরম্যান্স ভালো থাকে
    let timeoutId;
    const throttledControl = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          controlTopbar();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledControl);
    
    return () => {
      window.removeEventListener('scroll', throttledControl);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []); // lastScrollY ডিপেন্ডেন্সি রিমুভ করেছি

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="bg-gradient-to-r from-[#fff8f1] to-[#ffd3a8] text-third font-bold py-2 text-sm fixed top-0 left-0 right-0 z-[40]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between">
          
          {/* Left Section - Address */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span className="text-third">Green Tower, 9th floor, 3656/27-28
Rama IV Road</span>
            </div>
            <span className="text-orange-600 hidden md:inline">|</span>
            <span className="text-third hidden md:block">Klongton-Klong Toey
Bangkok 10110, Thailand</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden lg:flex items-center space-x-1 text-white font-bold hover:text-third"
            >
              {/* <span>MAP VIEW</span> */}
              {/* <ChevronRight className="w-4 h-4" /> */}
            </motion.button>
          </div>

          {/* Right Section - Contact */}
          <div className="flex items-center space-x-4">  
            
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center space-x-2 group"
            >
              {/* <Mail className="w-4 h-4 text-white" /> */}
              <span className="border-b border-transparent group-hover:border-[#FD5621] transition-all duration-300">
                <Link href="/contact">Contact Us</Link>
              </span>
              <ChevronRight className="w-4 h-4 text-[#ff3c00] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
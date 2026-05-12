"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    const controlTopbar = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 50);
    };
    const throttled = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          controlTopbar();
          timeoutId = null;
        }, 100);
      }
    };
    window.addEventListener('scroll', throttled);
    controlTopbar();
    return () => {
      window.removeEventListener('scroll', throttled);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-[40]"
    >
      <div className="bg-gradient-to-r from-fourth to-fifth text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-7 md:h-8">

            {/* Left - Address / Brand */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <div className="text-[10px] md:text-[11px] leading-tight">
                  <div className="font-semibold">Green Tower, 9th floor</div>
                  <div className="hidden sm:block text-white/90">Rama IV Road, Bangkok</div>
                </div>
              </div>
            </div>

            {/* Right - Social icons */}
            <div className="flex items-center gap-2.5 text-white">
             

              <a href="mailto:info@samuderathai.com" aria-label="Email" className="inline-flex items-center justify-center hover:text-white/80 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>

              <a href="https://wa.me/66977830395" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex items-center justify-center hover:text-white/80 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.16 1.6 5.95L0 24l6.31-1.66A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-1.95-.45-3.79-1.48-5.34zM12 21.5c-1.88 0-3.66-.5-5.2-1.37l-.37-.22-3.75.99.99-3.66-.24-.38A9.5 9.5 0 1 1 21.5 12 9.48 9.48 0 0 1 12 21.5zM17.18 14.12c-.27-.13-1.6-.79-1.85-.88s-.44-.13-.63.13-.72.88-.88 1.06-.33.2-.6.07a6.07 6.07 0 0 1-1.78-1.1c-.33-.33-.7-.36-.97-.25-.27.12-1.16.43-2.21-1.36-.82-1.34-1.37-2.99-1.53-3.26-.16-.27-.02-.42.12-.55.12-.12.27-.33.4-.5.13-.17.17-.28.27-.47.09-.19.05-.35-.02-.48-.07-.12-.63-1.52-.86-2.08-.23-.54-.46-.47-.63-.48-.16-.01-.35-.01-.53-.01s-.48.07-.74.35c-.26.28-1 1-1 2.44s1.03 2.83 1.18 3.03c.15.2 2.04 3.12 4.94 4.37 1.06.46 1.89.73 2.54.94. - ."/></svg>
              </a>

              <a href="tel:+66977830395" aria-label="Phone" className="inline-flex items-center justify-center hover:text-white/80 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default Topbar;
// app/components/states.js
'use client';

import { Package, Radar, ShieldCheck, Truck } from 'lucide-react';

export default function States() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e3ddd7]">
      <img
        src="/images/red-container.jpg"
        alt="Cargo container illustration"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none bg-black/10"
      />

      <div className="max-w-7xl mx-auto px-4  relative">
        <div className="relative min-h-[540px] lg:min-h-[690px]">
          {/* Very light tint for text readability over the image */}
          <div className="absolute inset-0 bg-[#e3ddd7]/8"></div>

          {/* Left content */}
          <div className="relative z-10 max-w-[540px] pt-26 lg:pt-24">
            <h2 className="text-4xl md:text-5xl  font-semibold   text-[#25282c] uppercase pt-serif-bold">
              Your Cargo, Handled
              
              With Care
            </h2>

            <p className="mt-8 max-w-xs text-sm sm:text-base leading-7 text-[#5a5a5a]">
              From delicate goods to oversized containers, we ensure secure loading, transport, and delivery every time. Our cargo workflows are designed to keep shipments protected, visible, and moving smoothly.
            </p>
          </div>

          {/* Right feature cards */}
          <div className="relative z-10 mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[42%] grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#aca6a2] text-white p-4 min-h-[130px] flex flex-col justify-between">
              <Package className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Secure Container Sealing</h3>
                <p className="text-sm leading-6 text-white/90">Tamper-proof protocols for full cargo protection.</p>
              </div>
            </div>

            <div className="rounded-lg bg-[#aca6a2] text-white p-4 min-h-[130px] flex flex-col justify-between">
              <Truck className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Global Port Access</h3>
                <p className="text-sm leading-6 text-white/90">Seamless operations across major international shipping hubs.</p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-[#b35b24] to-[#aca6a2] text-white p-4 min-h-[130px] flex flex-col justify-between">
              <Radar className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Tracking</h3>
                <p className="text-sm leading-6 text-white/90">Total visibility from origin to destination.</p>
              </div>
            </div>

            <div className="rounded-lg bg-[#aca6a2] text-white p-4 min-h-[130px] flex flex-col justify-between">
              <ShieldCheck className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Fully Insured Shipments</h3>
                <p className="text-sm leading-6 text-white/90">Your cargo is covered for added peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
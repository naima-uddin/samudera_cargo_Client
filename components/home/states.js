// app/components/states.js
'use client';

import { Package, Radar, ShieldCheck, Truck } from 'lucide-react';

export default function States() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e3ddd7] py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative min-h-[560px] lg:min-h-[700px]">
          {/* Background container artwork */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none">
            <img
              src="/images/blue-container.png"
              alt="Cargo container illustration"
              className="w-[72%] sm:w-[66%] lg:w-[58%] max-w-none object-contain drop-shadow-[0_38px_40px_rgba(180,91,34,0.25)]"
            />
          </div>

          {/* Left content */}
          <div className="relative z-10 max-w-[420px] pt-2 lg:pt-8">
            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#25282c] uppercase">
              Your Cargo, Handled
              <br />
              With Care
            </h2>

            <p className="mt-8 max-w-sm text-sm sm:text-base leading-7 text-[#4c596e]">
              From delicate goods to oversized containers, we ensure secure loading, transport, and delivery every time. Our cargo workflows are designed to keep shipments protected, visible, and moving smoothly.
            </p>
          </div>

          {/* Right feature cards */}
          <div className="relative z-10 mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[52%] grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#aca6a2] text-white p-6 min-h-[150px] flex flex-col justify-between">
              <Package className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Secure Container Sealing</h3>
                <p className="text-sm leading-6 text-white/90">Tamper-proof protocols for full cargo protection.</p>
              </div>
            </div>

            <div className="rounded-lg bg-[#aca6a2] text-white p-6 min-h-[150px] flex flex-col justify-between">
              <Truck className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Global Port Access</h3>
                <p className="text-sm leading-6 text-white/90">Seamless operations across major international shipping hubs.</p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-[#b35b24] to-[#aca6a2] text-white p-6 min-h-[150px] flex flex-col justify-between">
              <Radar className="h-9 w-9 text-white/90" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Tracking</h3>
                <p className="text-sm leading-6 text-white/90">Total visibility from origin to destination.</p>
              </div>
            </div>

            <div className="rounded-lg bg-[#aca6a2] text-white p-6 min-h-[150px] flex flex-col justify-between">
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
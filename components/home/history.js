"use client"
import React from 'react'
import { Eye, Flag } from 'lucide-react'

function history() {
  return (
    <div className="relative w-full  bg-white">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left Column - Ship Image with Container Overlay */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[260px] sm:h-[340px] md:h-[590px] lg:h-[640px] w-full sm:w-4/5">
              {/* Ship background image */}
              <img
                src="/images/cargo-ship.jpg"
                alt="Cargo Ship"
                className="w-full h-full object-cover shadow-2xl"
              />
              
              {/* Very light dark overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Double Container overlay - positioned absolutely, can overflow */}
              <div className="absolute -bottom-12 -left-4 w-40 h-28 sm:-bottom-20 sm:-left-8 sm:w-72 sm:h-44 md:-bottom-32 md:-left-14 md:w-[424px] md:h-[360px] lg:w-[450px] lg:h-[504px]">
                <img
                  src="/images/doubleContainer.png"
                  alt="Double Container"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <p className="text-primary font-bold text-sm md:text-base tracking-widest uppercase mb-4">
              About Samudera Cargo
            </p>
            
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl  text-gray-900 mb-6 leading-tight pt-serif-bold">
              Logistics Beyond <br className="hidden md:block" />Expectation
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
              Delivering excellence in global freight services with operational expertise, strategic solutions, and innovative technology to move your business forward with confidence. We connect sea, air, and land logistics into one reliable experience built around speed, safety, and consistency.
            </p>
            
            {/* Vision and Mission Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Vision */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center ">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To become a globally recognized logistics partner known for operational excellence, innovation, and dependable service across every shipment.
                  </p>
                </div>
              </div>
              
              {/* Mission */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center">
                    <Flag className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To provide secure, efficient, and cost-effective logistics solutions worldwide, while helping clients move cargo with clarity and confidence at every step.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default history
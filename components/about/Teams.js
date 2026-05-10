"use client"
import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'


function Teams() {
  // In your component:
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.5,
})
  const teamMembers = [
    {
      name: "Leo George",
      title: "CHIEF EXECUTIVE OFFICER",
      image: "/images/team (1).jpg",
      email: "leo.george@cargologisticscompany.com",
      phone: "+1 (555) 123-4567",
      experience: "15+ years",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Benjamin Ebenezer",
      title: "LOGISTICS MANAGER",
      image: "/images/team (2).jpg", 
      email: "benjamin.ebenezer@cargologisticscompany.com",
      phone: "+1 (555) 234-5678",
      experience: "12+ years",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Sophia Luna",
      title: "CLIENT RELATIONS SPECIALIST",
      image: "/images/team (3).jpg",
      email: "sophia.luna@cargologisticscompany.com",
      phone: "+1 (555) 345-6789",
      experience: "8+ years",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Michael Chen",
      title: "OPERATIONS DIRECTOR",
      image: "/images/team (4).jpg",
      email: "michael.chen@cargologisticscompany.com",
      phone: "+1 (555) 456-7890",
      experience: "10+ years",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Sarah Williams",
      title: "FINANCE MANAGER",
      image: "/images/team (5).jpg",
      email: "sarah.williams@cargologisticscompany.com",
      phone: "+1 (555) 567-8901",
      experience: "9+ years",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "David Rodriguez",
      title: "FLEET SUPERVISOR",
      image: "/images/team (6).jpg",
      email: "david.rodriguez@cargologisticscompany.com",
      phone: "+1 (555) 678-9012",
      experience: "7+ years",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    }
  ]

  return (
    <>
     {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership & Management Team
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Member Image */}
              <div className="relative h-72 overflow-hidden bg-gray-200">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                    <span className="text-5xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                
                {/* Social Links Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <a
                    href={member.social.linkedin}
                    className="bg-white p-2.5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="bg-white p-2.5 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="bg-white p-2.5 rounded-full hover:bg-[#4267B2] hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                </div> */}

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {member.experience}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                  {member.title}
                </p>
                
                {/* Contact Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-600 group/email">
                    <FaEnvelope className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover/email:text-primary transition-colors" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm hover:text-primary transition-colors truncate"
                    >
                      {member.email}
                    </a>
                  </div>
                  {/* <div className="flex items-center gap-3 text-gray-600 group/phone">
                    <FaPhone className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover/phone:text-primary transition-colors" />
                    <a
                      href={`tel:${member.phone}`}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-10" ref={ref}>
  <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {inView ? <CountUp end={50} duration={2.5} suffix="+" /> : "0+"}
      </div>
      <div className="text-sm text-gray-600 font-medium">Team Members</div>
    </div>
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {inView ? <CountUp end={15} duration={2.5} suffix="+" /> : "0+"}
      </div>
      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
    </div>
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {inView ? <CountUp end={500} duration={2.5} suffix="+" /> : "0+"}
      </div>
      <div className="text-sm text-gray-600 font-medium">Projects Done</div>
    </div>
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {inView ? <CountUp end={24} duration={2.5} suffix="/7" /> : "0/7"}
      </div>
      <div className="text-sm text-gray-600 font-medium">Support</div>
    </div>
  </div>
      </div>

      

      
      </>

  )
}

export default Teams
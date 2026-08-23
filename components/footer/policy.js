"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useSiteSettings } from '@/components/context/SiteSettingsProvider';
import { 
  HiShieldCheck,
  HiChevronRight,
  HiLockClosed,
  HiEye,
  HiDocumentText,
  HiGlobeAlt,
  HiMail,
  HiPhone,
  HiClock,
  HiCheckCircle,
  HiDownload,
  HiPrinter,
  HiUser,
  HiOfficeBuilding,
  HiCreditCard,
  HiIdentification,
  HiLocationMarker,
  HiCube,
  HiScale,
  HiServer,
  HiChip,
  HiChartBar,
  HiTruck,
  HiDocumentReport,
  HiShieldExclamation,
  HiRefresh,
  HiPencil,
  HiTrash,
  HiArrowRight,
  HiBadgeCheck,
  HiKey,
  HiDatabase,
  HiBan,
  HiExternalLink,
  HiCode
} from 'react-icons/hi';

const PrivacyPolicy = () => {
  const site = useSiteSettings();
  const lastUpdated = "March 10, 2026";
  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true, amount: 0.3 });

  const sections = [
    {
      id: "information",
      title: "Information We Collect",
      subtitle: "Comprehensive data collection transparency",
      icon: <HiDatabase className="w-6 h-6" />,
      content: [
        {
          icon: <HiUser className="w-5 h-5" />,
          subtitle: "Personal Information",
          description: "Basic identifying information required for service delivery",
          items: [
            { text: "Full name and contact details (email, phone, address)", icon: <HiMail className="w-4 h-4" /> },
            { text: "Company name and business registration details", icon: <HiOfficeBuilding className="w-4 h-4" /> },
            { text: "Billing and payment information", icon: <HiCreditCard className="w-4 h-4" /> },
            { text: "Government-issued IDs for customs clearance", icon: <HiIdentification className="w-4 h-4" /> }
          ]
        },
        {
          icon: <HiCube className="w-5 h-5" />,
          subtitle: "Shipment Information",
          description: "Logistics and cargo-specific data",
          items: [
            { text: "Origin and destination addresses", icon: <HiLocationMarker className="w-4 h-4" /> },
            { text: "Cargo details (weight, dimensions, contents)", icon: <HiScale className="w-4 h-4" /> },
            { text: "Shipping history and tracking data", icon: <HiTruck className="w-4 h-4" /> },
            { text: "Customs documentation", icon: <HiDocumentText className="w-4 h-4" /> }
          ]
        },
        {
          icon: <HiServer className="w-5 h-5" />,
          subtitle: "Technical Information",
          description: "Automatically collected system data",
          items: [
            { text: "IP address and browser type", icon: <HiChip className="w-4 h-4" /> },
            { text: "Device information and settings", icon: <HiClock className="w-4 h-4" /> },
            { text: "Cookies and usage analytics", icon: <HiCode className="w-4 h-4" /> },
            { text: "Login activity and security logs", icon: <HiChartBar className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      subtitle: "Purpose-driven data utilization",
      icon: <HiChartBar className="w-6 h-6" />,
      content: [
        {
          items: [
            { text: "Process and manage your shipments efficiently", icon: <HiTruck className="w-4 h-4" /> },
            { text: "Provide real-time tracking and status updates", icon: <HiEye className="w-4 h-4" /> },
            { text: "Generate invoices and shipping documentation", icon: <HiDocumentReport className="w-4 h-4" /> },
            { text: "Communicate important service notifications", icon: <HiMail className="w-4 h-4" /> },
            { text: "Improve and optimize our logistics services", icon: <HiChartBar className="w-4 h-4" /> },
            { text: "Comply with international customs regulations", icon: <HiShieldCheck className="w-4 h-4" /> },
            { text: "Prevent fraud and enhance platform security", icon: <HiLockClosed className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      id: "sharing",
      title: "Information Sharing & Disclosure",
      subtitle: "Limited and necessary data sharing",
      icon: <HiGlobeAlt className="w-6 h-6" />,
      content: [
        {
          subtitle: "Trusted Partners & Authorities",
          description: "We share information only when essential for service delivery",
          items: [
            { text: "Shipping carriers and logistics partners", icon: <HiTruck className="w-4 h-4" /> },
            { text: "Customs authorities and regulatory bodies", icon: <HiShieldExclamation className="w-4 h-4" /> },
            { text: "Payment processors for secure billing", icon: <HiCreditCard className="w-4 h-4" /> },
            { text: "Vetted third-party service providers", icon: <HiOfficeBuilding className="w-4 h-4" /> },
            { text: "Legal authorities when required by law", icon: <HiDocumentText className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      id: "security",
      title: "Data Security & Protection",
      subtitle: "Enterprise-grade security measures",
      icon: <HiLockClosed className="w-6 h-6" />,
      content: [
        {
          items: [
            { text: "256-bit SSL/TLS encryption for all data transmission", icon: <HiLockClosed className="w-4 h-4" /> },
            { text: "Regular security audits and penetration testing", icon: <HiShieldCheck className="w-4 h-4" /> },
            { text: "Multi-factor authentication and access controls", icon: <HiKey className="w-4 h-4" /> },
            { text: "SOC 2 Type II certified data centers with 24/7 monitoring", icon: <HiServer className="w-4 h-4" /> },
            { text: "Continuous employee security training programs", icon: <HiDocumentText className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      id: "rights",
      title: "Your Privacy Rights",
      subtitle: "Control over your personal data",
      icon: <HiBadgeCheck className="w-6 h-6" />,
      content: [
        {
          items: [
            { text: "Access and obtain copies of your personal data", icon: <HiEye className="w-4 h-4" /> },
            { text: "Correct inaccurate or incomplete information", icon: <HiPencil className="w-4 h-4" /> },
            { text: "Request deletion of your data (Right to be Forgotten)", icon: <HiTrash className="w-4 h-4" /> },
            { text: "Opt-out of marketing communications", icon: <HiBan className="w-4 h-4" /> },
            { text: "Data portability to another service provider", icon: <HiRefresh className="w-4 h-4" /> }
          ]
        }
      ]
    }
  ];

  const contacts = [
    {
      icon: <HiMail className="w-5 h-5" />,
      text: site.email,
      href: `mailto:${site.email}`,
      label: "Email our DPO"
    },
    {
      icon: <HiPhone className="w-5 h-5" />,
      text: site.phone,
      href: `tel:${site.phone}`,
      label: "Call Privacy Office"
    },
    {
      icon: <HiLocationMarker className="w-5 h-5" />,
      text: site.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
      label: "View Headquarters"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D2D52] via-[#1D2D52] to-[#d10000]" />
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Privacy <span className="text-[#d10000]">Policy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Your trust is our foundation. We are committed to protecting your privacy 
              and ensuring transparent, secure handling of your information.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24"> 
        {/* Introduction Card */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-12 border border-slate-200"
        >
          <div className="relative flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#1D2D52] to-[#d10000] rounded-2xl flex items-center justify-center shadow-lg">
                <HiShieldCheck className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D52] tracking-tight">
                  Our Commitment to Privacy
                </h2>
                <div className="px-3 py-1 bg-red-100 text-[#d10000] text-xs font-semibold rounded-full border border-red-200">
                  GDPR Compliant
                </div>
                <div className="px-3 py-1 bg-blue-100 text-[#1D2D52] text-xs font-semibold rounded-full border border-blue-200">
                  CCPA Ready
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                At <span className="font-semibold text-[#1D2D52]">Samudera Traffic Co., Ltd.</span>, we believe privacy is a fundamental right. 
                This policy outlines our comprehensive approach to protecting your personal information while delivering 
                world-class freight forwarding and logistics services. We adhere to the highest standards of data protection 
                and transparency in everything we do.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Section Header */}
              <div className="p-8 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D2D52] to-[#d10000] rounded-xl flex items-center justify-center text-white shadow-md">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1D2D52]">{section.title}</h2>
                      <p className="text-sm text-slate-500 mt-1">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                    <span className="text-xs font-semibold text-[#1D2D52]">
                      Section {index + 1} of 5
                    </span>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-8">
                {section.content.map((subsection, idx) => (
                  <div key={idx} className={idx > 0 ? 'mt-8 pt-8 border-t border-slate-200' : ''}>
                    {subsection.subtitle && (
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          {subsection.icon && (
                            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                              <div className="text-[#d10000]">
                                {subsection.icon}
                              </div>
                            </div>
                          )}
                          <h3 className="text-xl font-bold text-slate-900">{subsection.subtitle}</h3>
                        </div>
                        {subsection.description && (
                          <p className="text-slate-500 text-sm ml-13 mb-4">{subsection.description}</p>
                        )}
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {subsection.items.map((item, itemIdx) => (
                        <motion.div 
                          key={itemIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIdx * 0.05 }}
                          className="group relative flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-all duration-300 border border-slate-200 hover:border-[#d10000]/30"
                        >
                          <div className="mt-0.5 text-[#d10000] group-hover:scale-110 transition-transform duration-200">
                            {item.icon || <HiCheckCircle className="w-5 h-5" />}
                          </div>
                          <span className="text-sm text-slate-700 flex-1 font-medium leading-relaxed">
                            {item.text || item}
                          </span>
                          <HiArrowRight className="w-4 h-4 text-[#d10000] opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 relative bg-gradient-to-br from-[#1D2D52] to-[#0f172a] rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d10000]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div className="p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <HiShieldCheck className="w-8 h-8 text-[#d10000]" />
                <span className="text-[#d10000] font-semibold tracking-wider text-sm uppercase">
                  Data Protection Office
                </span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Questions About Your Privacy?
              </h3>
              
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Our dedicated Data Protection Officer is here to address any concerns or questions 
                you may have about how we handle your personal information.
              </p>
              
              <div className="space-y-4">
                {contacts.map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    className="group flex items-center gap-5 p-5 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-[#d10000]/10 transition-all duration-300 border border-white/10 hover:border-[#d10000]/30"
                  >
                    <div className="w-12 h-12 bg-[#d10000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-white">
                        {contact.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white group-hover:text-white font-medium">
                        {contact.text}
                      </div>
                      <div className="text-white/50 text-xs mt-1 group-hover:text-white/70">
                        {contact.label}
                      </div>
                    </div>
                    <HiExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#d10000] transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Response Time Badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <HiClock className="w-4 h-4 text-[#d10000]" />
                <span className="text-white/80 text-sm">Response within 24-48 hours</span>
              </div>
            </div>

            {/* Right Side - Decorative */}
            <div className="relative hidden lg:block bg-gradient-to-br from-[#d10000] to-[#a00a00] overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative h-full flex items-center justify-center p-14">
                <div className="text-center">
                  <div className="relative">
                    <HiShieldCheck className="relative w-32 h-32 text-white mx-auto mb-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Your Data, Protected</h4>
                  <p className="text-white/80 text-lg mb-6">Enterprise-grade security</p>
                  <div className="flex justify-center gap-3">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-semibold">256-bit SSL</span>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-semibold">SOC 2 Type II</span>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-semibold">ISO 27001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-white rounded-full shadow-md border border-slate-200 mb-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Samudera Traffic Co., Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { href: "/footer/terms", label: "Terms of Service" },
              { href: "/contact", label: "Contact Us" },
            ].map((link, idx) => (
              <Link 
                key={idx}
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-[#d10000] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d10000] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
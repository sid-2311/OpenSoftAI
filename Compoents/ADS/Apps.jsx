"use client";
import React, { useState } from 'react';
import { Smartphone, Layers, Building2, MapPin, ShoppingBag, Shield, HeartPulse, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AppTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const appTypes = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Native iOS & Android Apps",
      description:
        "Platform-specific applications that leverage the full power and unique capabilities of iPhone and Android devices. These apps provide the best possible performance, seamless integration with device features, and user experiences that feel completely natural on each platform.",
      highlight:
        "Perfect when app store success and platform optimization are critical business priorities.",
      number: "01",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Cross-Platform Apps",
      description:
        "Cost-effective mobile solutions using Flutter and React Native that work excellently on both iOS and Android. Single codebase development reduces time-to-market and maintenance costs while still delivering native-quality user experiences.",
      highlight:
        "Ideal for businesses that need broad mobile reach without the complexity of maintaining separate platform teams.",
      number: "02",
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Enterprise Mobile Apps",
      description:
        "Internal productivity applications that help teams work more efficiently, access business systems securely, and stay productive while mobile. These solutions integrate with existing business systems while providing mobile-optimized workflows.",
      highlight:
        "Improve operational efficiency and empower your workforce on the go.",
      number: "03",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "On-Demand Service Apps",
      description:
        "Complete platforms for food delivery, ride-sharing, home services, and marketplace businesses. These apps handle real-time matching, location services, payment processing, and multi-sided user experiences that connect service providers with customers seamlessly.",
      highlight:
        "Deliver reliable, real-time experiences across complex user ecosystems.",
      number: "04",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "E-Commerce Mobile Apps",
      description:
        "Shopping applications optimized for mobile commerce, featuring intuitive product browsing, secure checkout processes, personalized recommendations, and loyalty program integration.",
      highlight:
        "Mobile-first design that converts browsers into loyal customers.",
      number: "05",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "FinTech Applications",
      description:
        "Secure financial apps including trading platforms, mobile banking solutions, digital wallets, and personal finance management tools. Built to meet the highest standards of security, compliance, and performance.",
      highlight:
        "Simplify complex financial operations with confidence and security.",
      number: "06",
    },
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: "Healthcare & Telemedicine Apps",
      description:
        "Digital health solutions featuring appointment scheduling, telemedicine consultations, electronic health records, and health monitoring integrations. HIPAA-compliant development ensures patient privacy.",
      highlight:
        "Empower better healthcare delivery and improve patient outcomes.",
      number: "07",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Education & Learning Apps",
      description:
        "Interactive learning platforms with live classes, course management, progress tracking, and multimedia content delivery. Engage learners through personalized and social learning experiences.",
      highlight:
        "Support both structured education and self-directed learning with ease.",
      number: "08",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI-Powered Applications",
      description:
        "Intelligent apps featuring chatbots, virtual assistants, predictive analytics, and machine learning capabilities that personalize experiences and automate complex tasks.",
      highlight:
        "Use AI to create smarter user experiences and efficient business processes.",
      number: "09",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Types of Apps{" "}
            <span className="text-blue-600 mt-2">We Build</span>
          </h2>
        </div>

        {/* Interactive List */}
        <div className="space-y-1">
          {appTypes.map((type, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 cursor-pointer ${
                activeIndex === index ? "py-12 md:py-16" : "py-6 md:py-8"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              style={{
                animation: `fadeInSlide 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl"
                    : "bg-white/50 backdrop-blur-sm hover:bg-white/80"
                }`}
                style={{ borderRadius: "24px" }}
              ></div>

              <div className="relative px-6 md:px-12 flex items-start gap-6 md:gap-12">
                {/* Number */}
                <div
                  className={`flex-shrink-0 text-3xl md:text-4xl font-bold transition-all duration-500 ${
                    activeIndex === index
                      ? "text-blue-200"
                      : "text-blue-300/40"
                  }`}
                >
                  {type.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        activeIndex === index
                          ? "bg-white text-blue-600 shadow-xl scale-110"
                          : "bg-blue-100 text-blue-600 scale-100"
                      }`}
                    >
                      {type.icon}
                    </div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold transition-all duration-500 ${
                        activeIndex === index ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {type.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeIndex === index
                        ? "max-h-96 opacity-100 mt-6"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="space-y-4">
                      <p className="text-md md:text-lg text-blue-50 leading-relaxed">
                        {type.description}
                      </p>
                      <p className="text-sm md:text-md text-white font-semibold leading-relaxed flex items-center gap-2">
                        <ArrowRight className="w-5 h-5 flex-shrink-0" />
                        <span>{type.highlight}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`flex-shrink-0 transition-all duration-500 ${
                    activeIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            href="/contact-us"
            className="group relative px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your App Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="/portfolio"
            className="px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-5deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

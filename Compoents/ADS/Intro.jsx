"use client";
import { useState, useEffect } from "react";
import {
  Smartphone,
  Code,
  Users,
  Cpu,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Brain,
  Rocket,
} from "lucide-react";
import Link from "next/link";

// Dynamic data from API - use data prop to access section data

export default function ADSSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [radius, setRadius] = useState(170); // ✅ Safe default radius

  // Extract section data
  const section = data?.intro || {};
  const heading = section.heading || {};
  const featuresData = section.features || [];
  const benefitsData = section.benefits || [];
  const cta = section.cta || {};

  // Icon mapping
  const iconMap = {
    Smartphone: Smartphone,
    Code: Code,
    Cpu: Cpu,
    ShoppingBag: ShoppingBag,
    HeartPulse: HeartPulse,
    GraduationCap: GraduationCap,
    Brain: Brain,
    Users: Users,
    Rocket: Rocket,
  };

  const features = featuresData.map(f => ({
    icon: iconMap[f.icon] || Smartphone,
    title: f.title,
    color: f.color || "from-blue-400 to-indigo-600",
  }));

  const benefits = benefitsData.map(b => ({
    title: b.title,
    desc: b.desc,
  }));

  useEffect(() => {
    setIsVisible(true);

    if (features.length > 0) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [features.length]);

  useEffect(() => {
    // ✅ Handle window resizing safely
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        setRadius(window.innerWidth < 640 ? 127 : 170);
      }
    };

    updateRadius(); // Initial call
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight">
            {heading.main}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            {section.subheading}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Left side content */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {section.introText}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                At <span className="font-semibold text-indigo-600">OpenSoftAI</span>, {section.companyText}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {section.closingText}
              </p>
            </div>
          </div>

          {/* Right side - Orbiting icons */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center">
              {/* Center circle */}
              <div className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl z-10">
                <Rocket className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>

              {/* Orbiting feature circles */}
              {features.map((feature, index) => {
                const angle = (index * (360 / features.length)) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 1})`,
                    }}
                  >
                    <div
                      className={`w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${isActive ? "ring-4 ring-purple-300" : ""
                        }`}
                    >
                      <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-1 sm:mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-indigo-700">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-indigo-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Link
            href={cta.link || "/contact-us"}
            className="group relative inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{cta.label || "Build Your Next Mobile App"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

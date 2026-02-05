"use client";
import { useState, useEffect } from "react";
import { Globe, Monitor, ShoppingCart, Code, LayoutDashboard } from "lucide-react";

// Dynamic data from API - use data prop to access section data

export default function WDSSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [radius, setRadius] = useState(170); // ✅ Default safe radius

  // Extract section data
  const section = data?.intro || {};
  const heading = section.heading || {};
  const featuresData = section.features || [];
  const benefitsData = section.benefits || [];
  const cta = section.cta || {};

  // Icon mapping
  const iconMap = {
    Globe: Globe,
    Monitor: Monitor,
    ShoppingCart: ShoppingCart,
    Code: Code,
    LayoutDashboard: LayoutDashboard,
  };

  const features = featuresData.map(f => ({
    icon: iconMap[f.icon] || Globe,
    title: f.title,
    color: f.color || "from-blue-400 to-blue-600",
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

  // ✅ Handle responsive orbit radius safely on client
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(132);
      else if (width < 1024) setRadius(140);
      else setRadius(170);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 md:py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
            {heading.main}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {section.subheading}
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 md:mb-20">
          {/* Left - Description */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {section.introText}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {section.companyText}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {section.closingText}
              </p>
            </div>
          </div>

          {/* Right - Orbiting icons */}
          <div
            className={`transition-all duration-1000 delay-400 transform flex justify-center ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative w-[300px] sm:w-[360px] md:w-[420px] h-[300px] sm:h-[360px] md:h-[420px] flex items-center justify-center">
              {/* Center Circle */}
              <div className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">Web</span>
              </div>

              {/* Orbiting Icons */}
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
                      className={`w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${isActive ? "ring-4 ring-blue-300" : ""
                        }`}
                    >
                      <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-1 sm:mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-blue-700">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 text-sm sm:text-base">{cta.label || "Get Your Custom Website Built"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

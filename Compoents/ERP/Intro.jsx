"use client";
import { useState, useEffect } from "react";
import {
  Database,
  Users,
  Package,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";

export default function ERPSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [radius, setRadius] = useState(170);
  const [particles, setParticles] = useState([]);
  const [hydrated, setHydrated] = useState(false); // FIX

  useEffect(() => {
    setHydrated(true); // mark hydration complete

    // Reveal animation
    setIsVisible(true);

    // Rotate active feature
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    // Radius on client only
    if (window.innerWidth < 640) {
      setRadius(120);
    }

    // Generate particles on client
    const particleData = [...Array(20)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));

    setParticles(particleData);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Database, title: "Finance", color: "from-blue-400 to-blue-600" },
    { icon: Users, title: "HR", color: "from-blue-500 to-blue-700" },
    { icon: Package, title: "Inventory", color: "from-blue-400 to-blue-600" },
    { icon: TrendingUp, title: "Sales", color: "from-blue-500 to-blue-700" },
    { icon: Zap, title: "Operations", color: "from-blue-400 to-blue-600" },
    { icon: BarChart3, title: "Analytics", color: "from-blue-500 to-blue-700" },
  ];

  const benefits = [
    {
      title: "Eliminate Data Silos",
      desc: "Connect all departments with unified data flow",
    },
    {
      title: "Reduce Manual Work",
      desc: "Automate repetitive tasks and workflows",
    },
    {
      title: "Informed Decisions",
      desc: "Real-time insights for strategic planning",
    },
    {
      title: "Custom Fit",
      desc: "Built around your specific business processes",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-20 sm:py-24 px-4 overflow-hidden">

      {/* Background blur shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div
          className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* FLOATING PARTICLES (only render after hydration) */}
        {hydrated &&
          particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                animation: `float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-snug">
            Streamline Your Entire Business
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            with Custom ERP Solutions
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left section */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Enterprise Resource Planning (ERP) software serves as the{" "}
                <span className="font-semibold text-blue-600">
                  central nervous system
                </span>{" "}
                of your business…
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                At{" "}
                <span className="font-semibold text-blue-700">OpenSoftAI</span>,
                we build custom ERP solutions…
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our ERP development approach focuses on your{" "}
                <span className="font-semibold text-blue-600">
                  specific business processes
                </span>{" "}
                rather than forcing you to adapt to rigid software structures.
              </p>
            </div>
          </div>

          {/* Orbiting Features */}
          <div
            className={`transition-all duration-1000 delay-400 transform flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">

              {/* Center Circle */}
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold">ERP</span>
              </div>

              {/* Orbiting icons */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500"
                    style={{ transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 1})` }}
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-blue-300" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    {isActive && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-100">
                        <span className="text-xs sm:text-sm font-semibold text-blue-700">
                          {feature.title}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-14 sm:mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base">
            <span className="relative z-10">Get Your Custom ERP Solution</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

      </div>
    </section>
  );
}

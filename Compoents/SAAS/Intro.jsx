"use client";
import { useState, useEffect } from "react";
import { Cloud, Users, Layers, Rocket, RefreshCw, DollarSign } from "lucide-react";
import Link from "next/link";

export default function SaaSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024); // default (for SSR-safe)

  useEffect(() => {
    // Animate visibility
    setIsVisible(true);

    // Cycle active features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    // Track window width safely on client
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define responsive orbit radius
  const getRadius = () => {
    if (windowWidth < 640) return 117;
    if (windowWidth < 1024) return 150;
    return 170;
  };
  const orbitRadius = getRadius();

  const features = [
    { icon: Cloud, title: "Cloud Infrastructure", color: "from-indigo-400 to-indigo-600" },
    { icon: Users, title: "User Management", color: "from-indigo-500 to-indigo-700" },
    { icon: Layers, title: "Multi-Tenancy", color: "from-indigo-400 to-indigo-600" },
    { icon: DollarSign, title: "Subscription Billing", color: "from-indigo-500 to-indigo-700" },
    { icon: RefreshCw, title: "Customer Retention", color: "from-indigo-400 to-indigo-600" },
    { icon: Rocket, title: "Scalability", color: "from-indigo-500 to-indigo-700" },
  ];

  const benefits = [
    { title: "Predictable Revenue", desc: "Turn your product into a recurring income stream with stable MRR." },
    { title: "Smart Scaling", desc: "Design infrastructure that grows seamlessly with your user base." },
    { title: "Customer-First Design", desc: "Create onboarding experiences that boost satisfaction and retention." },
    { title: "Business Strategy + Tech", desc: "We merge architecture with strategy for SaaS that actually sells." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 sm:left-16 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-16 right-8 sm:right-16 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            Why SaaS Is the Smart Play
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Here’s the thing about SaaS development — everyone thinks it’s just software that
                lives in the cloud. But true SaaS success is about building a{" "}
                <span className="font-semibold text-indigo-600">scalable business model</span> that
                handles subscriptions, growth, and customer retention.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                At <span className="font-semibold text-indigo-700">OpenSoftAI</span>, we’ve learned
                that successful SaaS platforms require thinking like both a{" "}
                <span className="font-semibold text-indigo-600">software architect</span> and a{" "}
                <span className="font-semibold text-indigo-600">business strategist</span> from day
                one.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The SaaS solutions we build don’t just function — they{" "}
                <span className="font-semibold text-indigo-600">
                  generate recurring revenue
                </span>{" "}
                and deliver experiences customers love to pay for month after month.
              </p>
            </div>
          </div>

          {/* Right orbit animation */}
          <div
            className={`transition-all duration-1000 delay-400 transform flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[340px] sm:h-[420px] md:h-[440px] flex items-center justify-center scale-90 sm:scale-100">
              {/* Center circle */}
              <div className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">SaaS</span>
              </div>

              {/* Orbiting icons */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
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
                      className={`w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-indigo-300" : ""
                      }`}
                    >
                      <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 sm:mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
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
              className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-indigo-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <Link href="/contact-us" className="relative z-10 text-sm sm:text-base">
              Build Your SaaS Platform
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

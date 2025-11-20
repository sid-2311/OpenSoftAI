"use client";
import { useState, useEffect } from "react";
import {
  Stethoscope,
  HeartPulse,
  Hospital,
  ClipboardCheck,
  Activity,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function HMSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setIsVisible(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    { icon: Hospital, title: "Hospital Operations", color: "from-blue-400 to-blue-600" },
    { icon: Stethoscope, title: "Patient Management", color: "from-cyan-500 to-blue-700" },
    { icon: ClipboardCheck, title: "Medical Records", color: "from-blue-400 to-blue-600" },
    { icon: HeartPulse, title: "Clinical Support", color: "from-cyan-500 to-blue-700" },
    { icon: Activity, title: "Performance Analytics", color: "from-blue-400 to-blue-600" },
    { icon: ShieldCheck, title: "Compliance & Security", color: "from-cyan-500 to-blue-700" },
  ];

  const benefits = [
    { title: "Improved Patient Outcomes", desc: "Ensure better patient care through coordinated healthcare delivery." },
    { title: "Reduced Administrative Burden", desc: "Automate tasks like scheduling, billing, and reporting." },
    { title: "Regulatory Compliance", desc: "Maintain complete compliance with healthcare standards and policies." },
    { title: "Data-Driven Decisions", desc: "Access real-time insights for clinical and operational improvement." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated background visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Modernize Healthcare Delivery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            with Intelligent Management Systems
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Healthcare providers face increasing pressure to deliver quality patient care while
                managing complex administrative requirements and regulatory compliance.
                Our{" "}
                <span className="font-semibold text-blue-600">
                  Hospital Management Systems
                </span>{" "}
                integrate all aspects of healthcare operations into a unified platform that improves
                patient outcomes, reduces administrative burden, and ensures regulatory compliance.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <span className="font-semibold text-blue-700">OpenSoftAI</span>'s healthcare software
                solutions are designed by understanding real-world healthcare workflows and
                challenges. We build systems that support{" "}
                <span className="font-semibold text-blue-600">clinical decision-making</span> while
                simplifying administrative processes for healthcare professionals.
              </p>
            </div>
          </div>

          {/* Right orbiting animation */}
          <div
            className={`transition-all duration-1000 delay-400 transform flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[300px] sm:h-[380px] md:h-[420px] flex items-center justify-center scale-90 sm:scale-100">
              {/* Center circle */}
              <div className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">HMS</span>
              </div>

              {/* Orbiting icons */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius =
                  windowWidth < 640 ? 127 : windowWidth < 1024 ? 150 : 170;
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
                      className={`w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-blue-300" : ""
                      }`}
                    >
                      <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 sm:mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
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
          <Link href="/contact-us" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 text-sm sm:text-base">
              Get Your Custom HMS Solution
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

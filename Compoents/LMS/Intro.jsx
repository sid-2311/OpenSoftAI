"use client";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  MessageSquare,
  Award,
  PlayCircle,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function LMSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [radius, setRadius] = useState(170);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    // Responsive orbit radius for mobile
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(127);
      else if (window.innerWidth < 1024) setRadius(140);
      else setRadius(170);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    { icon: BookOpen, title: "Interactive Courses", color: "from-indigo-400 to-indigo-600" },
    { icon: Users, title: "Community Learning", color: "from-indigo-500 to-indigo-700" },
    { icon: MessageSquare, title: "Live Discussions", color: "from-indigo-400 to-indigo-600" },
    { icon: Award, title: "Certifications", color: "from-indigo-500 to-indigo-700" },
    { icon: PlayCircle, title: "Video Lessons", color: "from-indigo-400 to-indigo-600" },
    { icon: Brain, title: "AI-Powered Insights", color: "from-indigo-500 to-indigo-700" },
  ];

  const benefits = [
    { title: "Engage Students Deeply", desc: "Interactive lessons and discussions that boost retention." },
    { title: "Build Learning Communities", desc: "Foster collaboration and real human connection online." },
    { title: "Measure Real Progress", desc: "Track engagement and outcomes with meaningful analytics." },
    { title: "Scale Effortlessly", desc: "From universities to enterprises — one LMS fits all." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 sm:left-16 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-24 right-10 sm:right-16 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            Online Learning Done Right 
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real learning happens through interaction, community, and engagement — not just uploading files.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Most online learning platforms feel like{" "}
                <span className="font-semibold text-indigo-600">
                  file-sharing systems with a quiz attached
                </span>
                . But real education requires interactive experiences and a sense of connection.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                At <span className="font-semibold text-indigo-700">OpenSoft AI</span>, we’ve built LMS platforms
                for universities pivoting to online learning overnight, companies transforming training, and
                creators launching world-class courses.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The difference between platforms students abandon and those they love comes down to how well the
                technology supports{" "}
                <span className="font-semibold text-indigo-600">real human engagement</span> and meaningful
                learning experiences.
              </p>
            </div>
          </div>

          {/* Right orbit animation */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[320px] sm:h-[380px] md:h-[440px] flex items-center justify-center">
              {/* Center circle */}
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">LMS</span>
              </div>

              {/* Orbiting features */}
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
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 1})`,
                    }}
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-indigo-300" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
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

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-indigo-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/contact-us" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base">
            <span className="relative z-10">Build Your Engaging LMS Platform</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

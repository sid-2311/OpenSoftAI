"use client";
import { useState, useEffect } from 'react';
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
  LineChart,
} from 'lucide-react';

export default function ADSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Smartphone, title: "Native Apps", color: "from-blue-400 to-indigo-600" },
    { icon: Code, title: "Cross-Platform", color: "from-indigo-500 to-purple-600" },
    { icon: Cpu, title: "Enterprise Apps", color: "from-purple-500 to-violet-600" },
    { icon: ShoppingBag, title: "E-Commerce", color: "from-blue-500 to-indigo-600" },
    { icon: HeartPulse, title: "Healthcare", color: "from-pink-500 to-rose-600" },
    { icon: GraduationCap, title: "Education", color: "from-teal-500 to-cyan-600" },
    { icon: Brain, title: "AI-Powered", color: "from-purple-500 to-fuchsia-600" },
    { icon: Users, title: "On-Demand", color: "from-blue-400 to-sky-600" },
  ];

  const benefits = [
    { title: "User-Centered Design", desc: "We design apps users love to return to — intuitive, engaging, and beautiful." },
    { title: "Cross-Platform Excellence", desc: "Develop once and reach both iOS & Android with native-level performance." },
    { title: "Scalable Architecture", desc: "Apps built to handle growth — from 100 to 1M+ users effortlessly." },
    { title: "Data-Driven Decisions", desc: "Leverage analytics and AI to improve user retention and engagement." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-24 px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            Why Most Apps Fail (And How to Build Ones That Don’t)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We design and build mobile apps that people actually use — and keep using.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side content */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Most mobile apps fail not because of bad ideas — but because they don’t solve real user
                problems or create experiences people want to come back to.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At <span className="font-semibold text-indigo-600">OpenSoft AI</span>, we’ve built
                mobile apps with millions of downloads, from consumer platforms to enterprise mobility
                solutions. We know what makes an app successful: purpose-driven design, strong technical
                foundations, and user behavior insights.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you’re building a new app or revamping an existing one, our team helps you
                design, develop, and scale mobile solutions that drive real results — across iOS,
                Android, and beyond.
              </p>
            </div>
          </div>

          {/* Right side - Orbiting icons */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-96 flex items-center justify-center">
              {/* Center circle */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl z-10">
                <Rocket className="w-10 h-10 text-white" />
              </div>

              {/* Orbiting feature circles */}
              {features.map((feature, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 150;
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
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-purple-300" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="text-sm font-semibold text-indigo-700">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-indigo-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Build Your Next Mobile App</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

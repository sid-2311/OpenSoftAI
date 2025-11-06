"use client";
import { useState, useEffect } from "react";
import { Cloud, Users, Layers, Rocket, RefreshCw, DollarSign } from "lucide-react";

export default function SaaSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-24 px-4 overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-16 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-24 right-16 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            Why SaaS Is the Smart Play
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            (And Why Most Get It Wrong)
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Here’s the thing about SaaS development — everyone thinks it’s just software that
                lives in the cloud. But true SaaS success is about building a{" "}
                <span className="font-semibold text-indigo-600">scalable business model</span> that
                handles subscriptions, growth, and customer retention.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At <span className="font-semibold text-indigo-700">OpenSoft AI</span>, we’ve learned
                that successful SaaS platforms require thinking like both a{" "}
                <span className="font-semibold text-indigo-600">software architect</span> and a{" "}
                <span className="font-semibold text-indigo-600">business strategist</span> from day
                one.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The SaaS solutions we build don’t just function — they{" "}
                <span className="font-semibold text-indigo-600">
                  generate recurring revenue
                </span>{" "}
                and deliver experiences customers love to pay for month after month.
              </p>
            </div>
          </div>

          {/* Right animation */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[440px] flex items-center justify-center">
              {/* Center circle */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-lg">SaaS</span>
              </div>

              {/* Orbiting icons */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 170; // 🔹 Increased from 140 → 170 for more spacing
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
                        isActive ? "ring-4 ring-indigo-300" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
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

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-indigo-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Build Your SaaS Platform</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

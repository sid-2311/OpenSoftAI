"use client";
import { useState, useEffect } from "react";
import { Globe, Monitor, ShoppingCart, Code, Server, LayoutDashboard } from "lucide-react";

export default function WDSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Globe, title: "Static Websites", color: "from-blue-400 to-indigo-600" },
    { icon: Monitor, title: "Dynamic Websites", color: "from-indigo-500 to-purple-600" },
    { icon: LayoutDashboard, title: "Corporate Websites", color: "from-blue-500 to-cyan-600" },
    { icon: ShoppingCart, title: "E-Commerce Websites", color: "from-teal-500 to-emerald-600" },
    { icon: Code, title: "Custom Web Portals", color: "from-purple-500 to-fuchsia-600" },
  ];

  const benefits = [
    { title: "Optimized for Performance", desc: "Fast-loading, responsive designs built for real-world performance." },
    { title: "User-Centered Design", desc: "Websites that engage visitors and turn them into loyal customers." },
    { title: "SEO & Mobile Friendly", desc: "Clean, search-optimized code that performs on any device." },
    { title: "Scalable & Secure", desc: "Built to grow with your business while keeping your data safe." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
            Building Websites That Actually Work for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Websites that not only look great but drive real business results.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Description */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Your website isn’t just a digital brochure — it’s your{" "}
                <span className="font-semibold text-blue-600">most powerful business tool</span>.
                At <span className="font-semibold text-blue-700">OpenSoft AI</span>, we design and
                build websites that connect design, functionality, and business strategy.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Whether you’re launching your first online presence, redesigning an outdated site,
                or developing a complex platform, our team ensures your site{" "}
                <span className="font-semibold text-blue-600">aligns perfectly with your goals</span>
                — from lead generation to seamless user experience.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We focus on <span className="font-semibold text-blue-600">clean code</span>,
                <span className="font-semibold text-blue-600"> fast performance</span>, and
                <span className="font-semibold text-blue-600"> modern design</span> — creating
                websites that not only look stunning but actually grow your business.
              </p>
            </div>
          </div>

          {/* Right - Interactive feature icons */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-96 flex items-center justify-center">
              {/* Center Circle */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-lg">Web</span>
              </div>

              {/* Orbiting Icons */}
              {features.map((feature, index) => {
                const angle = (index * (360 / features.length)) * (Math.PI / 180);
                const radius = 140;
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
                        isActive ? "ring-4 ring-blue-300" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="text-sm font-semibold text-blue-700">{feature.title}</span>
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
              className={`bg-white rounded-xl p-6 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg flex items-center justify-center mb-4">
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
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Get Your Custom Website Built</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

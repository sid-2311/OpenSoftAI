"use client";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  CreditCard,
  BarChart3,
  Users,
  Truck,
  Store,
} from "lucide-react";

export default function POSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024); // ✅ Default safe value (no SSR crash)

  useEffect(() => {
    // ✅ Run only on client
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const features = [
    { icon: CreditCard, title: "Smart Billing", color: "from-blue-400 to-indigo-600" },
    { icon: ShoppingCart, title: "Sales Processing", color: "from-indigo-500 to-blue-700" },
    { icon: Truck, title: "Inventory Management", color: "from-blue-400 to-cyan-600" },
    { icon: Users, title: "Customer Engagement", color: "from-indigo-500 to-purple-600" },
    { icon: BarChart3, title: "Business Analytics", color: "from-blue-500 to-indigo-700" },
    { icon: Store, title: "Multi-Store Integration", color: "from-indigo-600 to-blue-800" },
  ];

  const benefits = [
    { title: "Faster Transactions", desc: "Streamline checkout with efficient, user-friendly POS workflows." },
    { title: "Real-Time Inventory Tracking", desc: "Automatically sync inventory data to avoid stock-outs or overstocking." },
    { title: "Enhanced Customer Experience", desc: "Build customer loyalty with personalized service and reward programs." },
    { title: "Business Insights", desc: "Get actionable insights with advanced sales and performance analytics." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-24 px-4 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent">
            Accelerate Sales with Smart POS Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern businesses need POS systems that do more than just process payments.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our{" "}
                <span className="font-semibold text-indigo-600">
                  custom POS software solutions
                </span>{" "}
                integrate sales processing with inventory management, customer relationship tools, and business analytics to help you serve customers better while optimizing operations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold text-indigo-700">OpenSoftAI</span> develops POS systems specifically designed for your business model — whether you're running a retail store, restaurant, hotel, or service business. Our solutions work seamlessly across devices and integrate with your existing business systems for effortless management.
              </p>
            </div>
          </div>

          {/* Right content - Orbit */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[360px] sm:h-[440px] flex items-center justify-center scale-90 sm:scale-100">
              {/* Center circle */}
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">POS</span>
              </div>

              {/* Orbiting circles */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = windowWidth < 640 ? 127 : 170; // ✅ Safe client-side radius
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
                      className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-indigo-300" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
              className={`bg-white rounded-xl p-6 shadow-lg border border-indigo-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 text-sm sm:text-base">Request a Custom POS Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

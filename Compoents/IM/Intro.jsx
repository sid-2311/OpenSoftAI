"use client";
import { useState, useEffect } from "react";
import {
  Package,
  Truck,
  ShoppingCart,
  BarChart3,
  DollarSign,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function IMSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [radius, setRadius] = useState(160); // ✅ Default radius (safe for SSR)

  useEffect(() => {
    setIsVisible(true);

    // Handle auto-rotation
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    // Handle responsive orbit radius
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(120);
      else if (window.innerWidth < 1024) setRadius(150);
      else setRadius(180);
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    { icon: Package, title: "Stock Control", color: "from-blue-400 to-blue-600" },
    { icon: Truck, title: "Supply Chain", color: "from-blue-500 to-blue-700" },
    { icon: ShoppingCart, title: "Demand Planning", color: "from-blue-400 to-blue-600" },
    { icon: DollarSign, title: "Cost Optimization", color: "from-blue-500 to-blue-700" },
    { icon: BarChart3, title: "Forecasting", color: "from-blue-400 to-blue-600" },
    { icon: Activity, title: "Performance Insights", color: "from-blue-500 to-blue-700" },
  ];

  const benefits = [
    { title: "Right Inventory Levels", desc: "Avoid overstocking or running out of key products." },
    { title: "Better Cash Flow", desc: "Free up capital tied up in excess inventory." },
    { title: "Demand Forecasting", desc: "Predict future needs with intelligent analytics." },
    { title: "Stress-Free Operations", desc: "Automate restocking and gain real-time visibility." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Inventory Management That Actually Makes Sense
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            The right products, in the right place, at the right time — without the stress.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Side */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Here's what drives business owners crazy: you're either{" "}
                <span className="font-semibold text-blue-600">drowning in inventory</span>{" "}
                that's tying up cash, or{" "}
                <span className="font-semibold text-blue-600">running out of what customers want</span>.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                We’ve built inventory management systems for{" "}
                <span className="font-semibold text-blue-700">manufacturers</span>,{" "}
                <span className="font-semibold text-blue-700">retailers</span>, and{" "}
                <span className="font-semibold text-blue-700">service providers</span>{" "}
                — helping them track stock, predict demand, and automate ordering.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Businesses that get inventory right have{" "}
                <span className="font-semibold text-blue-600">better cash flow</span>,{" "}
                <span className="font-semibold text-blue-600">happier customers</span>, and{" "}
                <span className="font-semibold text-blue-600">way less stress</span>. Great
                inventory software doesn’t just track — it predicts what you’ll need.
              </p>
            </div>
          </div>

          {/* Right Side - Orbit animation */}
          <div
            className={`transition-all duration-1000 delay-400 transform flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-80 sm:h-96 w-80 sm:w-96 flex items-center justify-center">
              {/* Center Circle */}
              <div className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">Inventory</span>
              </div>

              {/* Orbiting Icons */}
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
                      className={`w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-blue-300" : ""
                      }`}
                      aria-label={feature.title}
                    >
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
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

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full"></div>
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
          <Link
            href="/contact-us"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base"
          >
            <span className="relative z-10">Optimize Your Inventory Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

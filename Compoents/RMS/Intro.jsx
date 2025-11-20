"use client";
import { useState, useEffect } from "react";
import {
  UtensilsCrossed,
  ChefHat,
  ClipboardList,
  Users,
  Store,
  BarChart3,
} from "lucide-react";

export default function RMSSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [radius, setRadius] = useState(160); // ✅ safe default

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);

    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(120);
      else if (window.innerWidth < 1024) setRadius(150);
      else setRadius(180);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  const features = [
    { icon: ClipboardList, title: "Order Management", color: "from-blue-400 to-blue-600" },
    { icon: ChefHat, title: "Kitchen Display", color: "from-blue-500 to-blue-700" },
    { icon: Store, title: "Inventory Control", color: "from-blue-400 to-blue-600" },
    { icon: Users, title: "Staff Scheduling", color: "from-blue-500 to-blue-700" },
    { icon: UtensilsCrossed, title: "Table & Menu Management", color: "from-blue-400 to-blue-600" },
    { icon: BarChart3, title: "Analytics & Reports", color: "from-blue-500 to-blue-700" },
  ];

  const benefits = [
    { title: "Reduce Chaos", desc: "Connect kitchen, staff, and service in one seamless flow." },
    { title: "Control Costs", desc: "Track ingredients, waste, and profit margins in real-time." },
    { title: "Improve Efficiency", desc: "Automate routine tasks like orders and scheduling." },
    { title: "Delight Customers", desc: "Deliver consistent, faster, and higher-quality service." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent px-2">
            Running a Restaurant Shouldn’t Feel Like Juggling Fire
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            Anyone who's worked in a restaurant knows the chaos — lost orders, missing inventory,
            changing schedules, and customer complaints about wait times. Meanwhile, you’re
            balancing food quality, costs, and razor-thin margins.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 sm:mb-20">
          {/* Left Text Section */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                We’ve built restaurant management systems for everything from food trucks to
                multi-location restaurant chains. Great restaurant software doesn’t just digitize
                your chaos — it reimagines it.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                At <span className="font-semibold text-blue-700">OpenSoftAI</span>, we design systems
                that bring order to the back of house, clarity to the front of house, and insights
                that help you make smarter business decisions.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The restaurants that thrive use technology to remove friction between great food and
                great service — not add to it.
              </p>
            </div>
          </div>

          {/* Right Orbit Section */}
          <div
            className={`transition-all duration-1000 delay-400 transform flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[360px] sm:h-[400px] md:h-[440px] w-[360px] sm:w-[400px] md:w-[440px] flex items-center justify-center">
              {/* Center Circle */}
              <div className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">RMS</span>
              </div>

              {/* Orbiting Features */}
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
                      aria-label={feature.title}
                      className={`w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? "ring-4 ring-blue-300" : ""
                      }`}
                    >
                      <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
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

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base">
            <span className="relative z-10">Request a Restaurant System Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

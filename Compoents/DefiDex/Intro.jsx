"use client";
import { useState, useEffect } from "react";
import DynamicIcon from "../DynamicIcon";

export default function DeFiDEXIntroSection({ data }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeInsight, setActiveInsight] = useState(0);

  const section = data?.defiDexIntro || {};
  const heading = section.heading || {};
  const shiftSection = section.shiftSection || {};
  const keyPointsData = section.keyPoints || [];
  const reality = section.reality || {};
  const journey = section.journey || {};

  const keyPoints = keyPointsData.map((point) => ({
    icon: point.icon,
    title: point.title,
    description: point.description,
  }));

  // Scroll animation for progress bars
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(section.id || "defi-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        const scrolled = Math.max(
          0,
          Math.min(1, (viewportHeight - rect.top) / elementHeight)
        );
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [section.id]);

  // Auto rotate key points highlight
  useEffect(() => {
    if (keyPoints.length === 0) return;
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % keyPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [keyPoints.length]);

  if (!section.heading) return null;

  return (
    <section
      id={section.id || "defi-section"}
      className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            {heading.main}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mt-2">
              {heading.highlight}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  {shiftSection.title}
                </h3>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 mb-6">
                  <p className="text-md text-gray-700 leading-relaxed mb-4">
                    {shiftSection.description}
                  </p>

                  <div className="flex items-start bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <DynamicIcon
                      name={shiftSection.icon || "Lightbulb"}
                      size={24}
                      className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                    />
                    <p className="text-gray-700 font-medium">
                      {shiftSection.highlightNote}
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className={`bg-white rounded-xl p-5 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                        activeInsight === idx
                          ? "border-blue-500 shadow-lg"
                          : "border-blue-100"
                      }`}
                      onMouseEnter={() => setActiveInsight(idx)}
                    >
                      <DynamicIcon
                        name={point.icon}
                        size={32}
                        className={`mb-3 transition-colors ${
                          activeInsight === idx
                            ? "text-blue-600"
                            : "text-blue-400"
                        }`}
                      />
                      <h4 className="font-bold text-gray-900 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* Reality Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="flex items-center mb-6">
                <DynamicIcon
                  name={reality.icon || "AlertCircle"}
                  size={28}
                  className="mr-4"
                />
                <h3 className="text-2xl font-bold">{reality.title}</h3>
              </div>

              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                {reality.description}
              </p>

              <div className="space-y-4">
                {(reality.points || []).map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <DynamicIcon
                      name={reality.pointIcon || "CheckCircle"}
                      size={20}
                      className="text-blue-300 mr-3 mt-1"
                    />
                    <p className="text-blue-50">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <DynamicIcon
                  name={journey.icon || "Clock"}
                  size={26}
                  className="text-blue-600 mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {journey.title}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {journey.description}
              </p>

              <div className="space-y-4">
                {(journey.evolution || []).map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">
                        {item.label}
                      </span>
                      <span className="text-blue-600 font-bold">
                        {item.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${item.progress * scrollProgress}%`,
                          transitionDelay: `${idx * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

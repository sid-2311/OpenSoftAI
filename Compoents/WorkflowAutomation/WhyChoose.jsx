"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function WhyChooseUsSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const section = data?.whyChoose || {};
  const reasons = section.reasons || [];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  if (!section.titlePrefix) return null;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {section.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              {section.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 transition-all duration-500 h-full ${isActive
                    ? "border-blue-500 shadow-2xl scale-[1.02]"
                    : "border-blue-100 shadow-lg hover:border-blue-300 hover:shadow-xl"
                    }`}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg transition-all duration-500 ${isActive ? "scale-110 rotate-6" : "group-hover:scale-105"
                        }`}
                    >
                      <DynamicIcon name={reason.icon || "Lightbulb"} className="w-8 h-8 text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute -top-2 -right-2 bg-blue-100 border-2 border-blue-300 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-blue-800">
                        {reason.stats}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 text-md md:text-lg leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {reason.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${isActive
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                          }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-700 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {section.ctaTitle}
                </h3>
                <p className="text-blue-100 text-md md:text-lg">
                  {section.ctaDescription}
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <Link
                  href={section.ctaLink}
                  className="group bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-md md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>{section.ctaButtonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    if (reasons.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reasons.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [reasons.length]);

  if (!section.title) return null;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            {section.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`p-8 rounded-3xl border-2 transition-all duration-500 ${isActive
                  ? "border-blue-500 shadow-2xl scale-[1.02]"
                  : "border-blue-100 shadow-lg"
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-blue-600 text-white">
                    <DynamicIcon name={reason.icon || "Award"} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-blue-700">
                    {reason.stats}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-slate-600 mb-4">{reason.description}</p>

                <div className="flex flex-wrap gap-2">
                  {reason.highlights?.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-blue-700 rounded-3xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            {section.ctaTitle}
          </h3>
          <p className="mb-6">{section.ctaDescription}</p>

          <Link
            href={section.ctaLink}
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3"
          >
            {section.ctaButtonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

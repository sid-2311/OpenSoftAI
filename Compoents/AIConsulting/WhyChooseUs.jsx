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

  const section = data?.whyChooseUs || {};
  const reasonsData = section.reasons || [];
  const bottomCta = section.cta || {};

  const reasons = reasonsData.map((r) => ({
    icon: r.icon,
    title: r.title,
    description: r.description,
    highlights: r.highlights || [],
    stats: r.stats,
  }));

  useEffect(() => {
    setIsVisible(true);
    if (reasons.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reasons.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [reasons.length]);

  if (!section.heading) return null;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ✅ Correct heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {section.heading}
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} onMouseEnter={() => setActiveIndex(index)}>
                <div
                  className={`rounded-3xl p-8 border-2 transition-all duration-500 ${isActive
                    ? "border-blue-500 shadow-2xl scale-[1.02]"
                    : "border-blue-100 shadow-lg"
                    }`}
                >
                  <div className="mb-6">
                    <DynamicIcon name={reason.icon} className="w-8 h-8 text-blue-700" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 mb-6">
                    {reason.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {reason.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold"
                      >
                        {h}
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

        {/* ✅ Bottom CTA from CMS */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">
                {bottomCta.title}
              </h3>
              <p className="text-blue-100">
                {bottomCta.description}
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Link
                href={bottomCta.href}
                className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
              >
                <span>{bottomCta.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

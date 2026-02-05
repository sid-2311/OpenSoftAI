"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function AICallingIntroSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % (data?.features?.length || 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data) return null;

  const features = data.features || [];
  const benefits = data.benefits || [];
  const floatingCards = data.floatingCards || [];
  const cta = data.cta || {};

  return (
    <section className="relative bg-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* LEFT */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 text-center lg:text-left">
              {data.heading.main}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                {data.heading.highlight}
              </span>
            </h2>

            {/* Story Box */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div className="ml-8">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-bold text-blue-600">
                    {data.storyBox.accent}
                  </span>{" "}
                  {data.storyBox.main}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {data.storyBox.footer}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              {data.description.text.split(data.description.highlight)[0]}
              <span className="font-bold text-blue-600">
                {data.description.highlight}
              </span>
              {data.description.text.split(data.description.highlight)[1]}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="text-blue-600 mt-1">
                    <DynamicIcon name={benefit.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href={cta.link}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                <DynamicIcon name={cta.icon} className="w-5 h-5" />
                <span>{cta.text}</span>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl max-w-sm mx-auto lg:max-w-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <Headphones className="w-20 h-20 text-blue-600" />
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-2xl p-4 shadow-lg border border-blue-100 animate-bounce"
                  style={{
                    top: i === 0 ? "20px" : "auto",
                    bottom: i === 1 ? "60px" : i === 2 ? "10px" : "auto",
                    left: i === 0 ? "20px" : "auto",
                    right: i !== 0 ? "20px" : "auto",
                    animationDuration: "4s",
                    animationDelay: `${i}s`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <DynamicIcon name={card.icon} className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{card.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`p-4 rounded-2xl border cursor-pointer text-center transition-all ${activeFeature === i
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-blue-100"
                    }`}
                >
                  <div className="mx-auto w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                    <DynamicIcon name={feature.icon} className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">{feature.title}</h4>
                  <p className="text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Bot,
} from "lucide-react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function AIChatbotIntroSection({ data }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const section = data?.intro || {};
  const story = section.story || {};
  const featuresData = section.features || [];
  const benefitsData = section.benefits || [];
  const cta = section.cta || {};

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featuresData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuresData.length]);

  if (!section.heading) return null;

  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            {section.heading}
            <span className="block mt-3 text-blue-600">
              {section.subHeading}
            </span>
          </h2>

          {/* Story */}
          <div className="relative bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl">
              <DynamicIcon name={story.icon} className="w-6 h-6" />
            </div>

            <p className="text-gray-700 mb-3">{story.text}</p>
            <p className="italic text-gray-600">{story.italic}</p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600">
            {section.description?.text}
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefitsData.map((b, i) => {
              return (
                <div key={i} className="flex items-center gap-3">
                  <DynamicIcon name={b.icon} className="w-5 h-5 text-blue-600" />
                  <span>{b.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href={cta.link || "/contact-us"}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            <Bot className="w-5 h-5" />
            {cta.text}
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[400px] bg-blue-50 rounded-3xl flex items-center justify-center">
          <MessageSquare className="w-24 h-24 text-blue-600" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
} from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function BusinessBenefitsSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  const section = data?.benefits || {};
  const benefitsData = section.list || [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ✅ Correct heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {section.heading}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mt-8"></div>
        </div>

        {/* ✅ Cards from CMS list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg"
              >
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl mb-6">
                    <DynamicIcon name={benefit.icon} className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-blue-100 text-md md:text-lg leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-2 font-semibold text-blue-100">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

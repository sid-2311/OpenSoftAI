"use client";

import { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function AIConsultingExpertiseSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  const section = data?.expertise || {};

  // ✅ Correct CMS paths
  const headingText = section.heading;
  const subHeading = section.subHeading;

  const left = section.leftColumn || {};
  const right = section.rightColumn || {};
  const philosophy = section.philosophy || {};

  const industriesData = left.industries || [];

  useEffect(() => setIsVisible(true), []);

  if (!headingText) return null;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {headingText}
          </h2>

          <p className="text-lg md:text-xl text-slate-700 max-w-4xl">
            {subHeading}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
              <DynamicIcon name={left.badgeIcon || "Brain"} className="w-5 h-5 text-blue-700" />
              <span className="text-blue-900 font-semibold">
                {left.badge}
              </span>
            </div>

            <p className="text-lg text-slate-600">{left.description1}</p>
            <p className="text-lg text-slate-600">{left.description2}</p>

            <div>
              <h3 className="text-sm uppercase font-bold mb-4 text-slate-500">
                {left.industriesHeading}
              </h3>

              <div className="flex flex-wrap gap-3">
                {industriesData.map((ind, i) => {
                  return (
                    <div
                      key={i}
                      className="px-5 py-3 bg-slate-50 border border-blue-200 rounded-xl flex items-center gap-3"
                    >
                      <DynamicIcon name={ind.icon} className="w-5 h-5 text-blue-700" />
                      <span className="font-semibold">{ind.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              {right.heading}
            </h3>

            <div className="space-y-5">
              {right.highlights?.map((h, i) => (
                <div key={i} className="flex gap-4">
                  <DynamicIcon name={right.highlightIcon || "CheckCircle"} className="w-6 h-6 text-blue-200" />
                  <p className="text-blue-50 text-lg">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-24 bg-slate-50 rounded-3xl p-12 text-center border border-blue-100">
          <DynamicIcon name={philosophy.icon || "TrendingUp"} className="w-12 h-12 text-blue-700 mx-auto mb-6" />

          <h3 className="text-3xl font-bold mb-6">
            {philosophy.heading}
          </h3>

          <p className="text-lg text-slate-700 mb-4">
            {philosophy.description1}
          </p>

          <p className="text-lg text-slate-700 mb-8">
            {philosophy.description2}
          </p>

          <Link
            href={philosophy.cta?.href}
            className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold"
          >
            {philosophy.cta?.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import React from "react";

export default function AIConsultingcta({ data }) {
  const section = data?.cta || {};

  if (!section.heading) return null;

  // Convert buttons object → array
  const buttons = Object.values(section.buttons || {});

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* ✅ Correct heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {section.heading}
          </h2>

          {/* ✅ Description array */}
          <div className="space-y-6 text-md md:text-lg text-blue-50 leading-relaxed mb-8">
            {section.description?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* ✅ Main CTA text */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
            <p className="text-lg font-semibold mb-6 text-white">
              {section.mainText}
            </p>

            {/* ✅ Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className="w-full sm:w-auto px-8 py-4 font-bold rounded-lg
                  bg-white text-blue-900 hover:bg-blue-50 transition-all"
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>

          {/* ✅ Bottom message */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 shadow-xl">
            <p className="text-lg text-white">
              {section.bottomMessage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

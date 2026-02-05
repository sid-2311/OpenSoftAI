"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function CTASection({ data }) {
  const section = data?.ctaFull || {};
  const buttons = section.buttons || [];

  if (!section.title) return null;

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {section.title}
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          {section.subheading}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          {section.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {buttons.map((btn, index) => (
            <Link
              key={index}
              href={btn.link}
              className={`group inline-flex items-center justify-center px-6 py-3 rounded-3xl font-bold text-lg transition-all duration-300 overflow-hidden ${btn.variant === "primary"
                  ? "bg-white text-blue-700 shadow-lg hover:shadow-2xl"
                  : "border-2 border-white text-white hover:bg-white hover:text-blue-700"
                }`}
            >
              <span className="relative z-10">{btn.text}</span>
              {btn.icon ? (
                <DynamicIcon name={btn.icon} className="w-5 h-5 ml-2" />
              ) : (
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              )}
            </Link>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-lg max-w-3xl mx-auto leading-relaxed">
          {section.footerText}
        </p>
      </div>
    </section>
  );
}

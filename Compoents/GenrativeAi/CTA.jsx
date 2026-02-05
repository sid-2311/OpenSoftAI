"use client";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function CTASection({ data }) {
  const section = data?.ctaFull || {};
  const vp = section.valueProposition || {};
  const buttons = section.buttons || [];
  const finalCta = section.finalCta || {};

  if (!section.title) return null;

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            {section.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-12 border border-white/20">
          <p className="text-md md:text-xl text-blue-50 mb-6 leading-relaxed">
            {vp.text}
          </p>

          <div className="bg-blue-800/50 rounded-xl p-6 mb-6">
            <p className="text-base md:text-lg text-white leading-relaxed">
              {vp.highlightBox}
            </p>
          </div>

          <p className="text-base md:text-lg text-blue-50 leading-relaxed">
            {vp.closingText}
          </p>
        </div>

        {/* CTA Buttons from CMS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          {buttons.map((btn, index) => (
            <Link
              key={index}
              href={btn.link}
              className={`px-8 py-4 rounded-2xl text-center font-semibold text-md md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2 ${btn.variant === "primary"
                  ? "bg-white text-blue-700 hover:bg-blue-50"
                  : "bg-transparent text-white border-2 border-white hover:bg-white/10"
                }`}
            >
              {btn.icon && <DynamicIcon name={btn.icon} className="w-5 h-5" />}
              {btn.text}
            </Link>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
          <h3 className="text-xl md:text-3xl font-bold text-blue-900 mb-4">
            {finalCta.title}
          </h3>
          <p className="text-md md:text-lg text-blue-700 mb-6 max-w-3xl mx-auto">
            {finalCta.description}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function FinalCTACopilotSection({ data }) {
  if (!data) return null;

  const {
    heading,
    description,
    contactMethods = [],
    offer,
    caseStudy,
    finalButton,
  } = data;

  return (
    <section
      id="ai-copilot-cta"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 px-6 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-300 via-white to-blue-200 bg-clip-text text-transparent">
          {heading}
        </h2>

        {/* Description */}
        <p className="text-md md:text-lg text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {contactMethods.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <DynamicIcon name={item.icon} className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm mb-4">
                  {item.subtitle}
                </p>
                <a
                  href={item.href}
                  className="text-cyan-300 font-medium hover:underline"
                >
                  {item.action}
                </a>
              </div>
            );
          })}
        </div>

        {/* Offer */}
        {offer && (
          <div className="max-w-4xl mx-auto bg-white text-blue-900 rounded-3xl p-10 shadow-2xl mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <DynamicIcon name={offer.icon || "Rocket"} className="w-12 h-12 text-blue-700" />
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {offer.title}
                </h3>
                <p className="text-lg text-slate-700">
                  {offer.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Case Study */}
        {caseStudy && (
          <p className="text-blue-100 mx-auto mb-10 leading-relaxed italic">
            {caseStudy}
          </p>
        )}

        {/* Final Button */}
        {finalButton && (
          <Link
            href={finalButton.href}
            className="block md:inline w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {finalButton.text}
          </Link>
        )}
      </div>
    </section>
  );
}

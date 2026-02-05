"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
} from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function CTAContactSection({ data }) {
  const [hoveredStep, setHoveredStep] = useState(null);

  // Extract section data
  const section = data?.cta || {};
  const heading = section.heading || {};
  const timelineSteps = section.timelineSteps || [];
  const contactCard = section.contactCard || {};
  const contactMethodsData = contactCard.methods || [];

  const steps = timelineSteps.map(step => ({
    number: step.number,
    title: step.title,
    description: step.description,
    icon: step.icon,
  }));

  const contactMethods = contactMethodsData.map(method => ({
    icon: method.icon,
    title: method.title,
    value: method.value,
    link: method.link,
    gradient: method.gradient || "from-blue-500 to-blue-600",
  }));

  if (!section.heading) return null;

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-50 via-blue-50 to-blue-50 py-24 px-4 overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          {heading.main}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {heading.highlight}
          </span>
        </h2>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="max-w-5xl mx-auto mb-28 relative">
        {/* Center Line (desktop only) */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2 hidden md:block" />

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
              >
                {/* ICON */}
                <div
                  className={`
                    relative md:absolute 
                    md:left-1/2 md:-translate-x-1/2
                    w-12 h-12 md:w-14 md:h-14
                    rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 
                    text-white flex items-center justify-center shadow-lg
                    transition-all duration-300
                    ${hoveredStep === index ? "scale-110 rotate-6" : ""}
                  `}
                >
                  <DynamicIcon name={step.icon} className="w-6 h-6" />
                </div>

                {/* CARD */}
                <div
                  className={`w-full md:w-5/12 ${isLeft
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                    }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300
                    ${hoveredStep === index
                        ? "border-blue-400 shadow-xl shadow-blue-500/30 -translate-y-1"
                        : "border-blue-100 shadow-lg"
                      }`}
                  >
                    <div className="text-sm font-mono text-blue-600 mb-1">
                      STEP {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl border border-blue-700/50">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {contactCard.heading}
          </h3>
          <p className="text-blue-100 text-lg mb-12">
            {contactCard.subheading}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.link}
                className="group bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all hover:scale-105"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white mb-6`}
                >
                  <DynamicIcon name={method.icon} className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {method.title}
                </h4>
                <p className="text-blue-200">{method.value}</p>
              </Link>
            ))}
          </div>

          <Link
            href={contactCard.button?.link || "/contact-us"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:scale-105 transition"
          >
            <Calendar className="w-5 h-5" />
            {contactCard.button?.text}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

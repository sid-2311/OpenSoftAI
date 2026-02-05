"use client";
import React from "react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function TokenDevelopmentSection({ data }) {
  // Extract section data
  const section = data?.tokenIntro || {};
  const heading = section.heading || {};
  const challenge = section.challenge || {};
  const solution = section.solution || {};
  const features = section.features || [];
  const cta = section.cta || {};

  if (!section.heading) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 leading-tight">
          {heading.main}{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            {heading.highlight}
          </span>
        </h2>

        {/* Opening Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-md text-gray-700 text-center leading-relaxed">
            {section.introText}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Left Column - Problem Statement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <DynamicIcon name={challenge.icon || "Zap"} className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
            {challenge.points?.map((point, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {point}
              </p>
            ))}
          </div>

          {/* Right Column - Solution */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <DynamicIcon name={solution.icon || "CheckCircle"} className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">{solution.title}</h3>
            {solution.points?.map((point, idx) => (
              <p key={idx} className="text-blue-50 leading-relaxed mb-4 last:mb-0">
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DynamicIcon name={feature.icon || (idx === 0 ? "Shield" : idx === 1 ? "Lock" : "TrendingUp")} className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href={cta.link || "/contact-us"} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1">
            {cta.label || "Start Your Token Journey"}
            <DynamicIcon name={cta.icon || "ArrowRight"} className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
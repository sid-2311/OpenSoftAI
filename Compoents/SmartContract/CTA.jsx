"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  Rocket,
  FileSearch,
  Calendar,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Dynamic data from API - use data prop to access section data

export default function SmartContractCTA({ data }) {
  const [hoveredButton, setHoveredButton] = useState(null);

  // Extract section data
  const section = data?.smartContractCTASection || {};
  const header = section.header || {};
  const keyMessage = section.keyMessage || {};
  const featuresData = section.features || [];
  const ctaButtonsData = section.ctaButtons || [];
  const process = section.process || {};
  const bottomCta = section.bottomCta || {};

  // Icon mapping
  const iconMap = {
    Shield: <Shield className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    CheckCircle: <CheckCircle className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
    FileSearch: <FileSearch className="w-5 h-5" />,
    Calendar: <Calendar className="w-5 h-5" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-white" />,
  };

  const features = featuresData.map(f => ({
    icon: iconMap[f.icon] || <Shield className="w-5 h-5" />,
    text: f.text,
  }));

  const ctaButtons = ctaButtonsData.map(b => ({
    id: b.id,
    icon: iconMap[b.icon] || <Calendar className="w-5 h-5" />,
    title: b.title,
    description: b.description,
    color: b.gradient || "from-blue-600 to-blue-700",
    hoverColor: b.hoverGradient || "from-blue-700 to-blue-800",
    href: b.url || "/contact-us",
  }));

  if (!section.header) return null;

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-8 md:px-12 py-12 text-center relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full filter blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {header.title?.split(header.highlight)[0]}
                <span className="text-blue-200">{header.highlight}</span>
              </h2>

              <p className="text-blue-100 text-md md:text-lg max-w-3xl mx-auto leading-relaxed">
                {header.description}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-12 py-10">
            {/* Key Message */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {keyMessage.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {keyMessage.description}
                  </p>

                  {keyMessage.note && (
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <p className="text-gray-800 font-medium">
                        {keyMessage.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons — now using next/link */}
            <div className="space-y-4 mb-8">
              {ctaButtons.map((button) => (
                <Link
                  href={button.href}
                  key={button.id}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`w-full group bg-gradient-to-r ${hoveredButton === button.id
                    ? button.hoverColor
                    : button.color
                    } text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors shrink-0">
                      {button.icon}
                    </div>

                    <div className="text-left">
                      <div className="text-lg font-bold mb-1">
                        {button.title}
                      </div>
                      <div className="text-blue-100 text-sm">
                        {button.description}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
                </Link>
              ))}
            </div>

            {/* Process Overview */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {process.title}
              </h4>

              <div className="grid md:grid-cols-3 gap-6">
                {(process.steps || []).map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 md:px-12 py-8 text-center">
            <p className="text-white text-xl md:text-2xl font-bold mb-2">
              {bottomCta.title}
            </p>
            <p className="text-blue-100 text-lg">
              {bottomCta.description}
            </p>
            <div className="mt-6">
              <Link
                href={bottomCta.action?.url || "/contact-us"}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-md md:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                {bottomCta.action?.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

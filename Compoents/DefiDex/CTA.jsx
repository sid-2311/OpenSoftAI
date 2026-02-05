"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DynamicIcon from "../DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function DeFiCTASection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particlePositions, setParticlePositions] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Extract section data
  const section = data?.defiCta || {};
  const heading = section.heading || {};
  const description = section.description || {};
  const vision = section.vision || {};
  const actionsData = section.actions || [];
  const finalCta = section.finalCta || {};



  const ctaActions = actionsData.map(action => ({
    icon: action.icon,
    title: action.title,
    description: action.description,
    buttonText: action.buttonText,
    href: action.href || "/contact-us",
    isPrimary: action.isPrimary,
    gradient: action.gradient || "from-blue-600 to-blue-700",
  }));

  const benefits = (vision.benefits || []).map(b => ({
    icon: b.icon,
    text: b.text,
  }));

  useEffect(() => {
    setHydrated(true);
    setIsVisible(true);

    // Particles generated on client only
    const particles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));

    setParticlePositions(particles);
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Floating Particles - Only after hydration */}
      {hydrated &&
        particlePositions.map((particle, idx) => (
          <div
            key={idx}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {heading.main}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              {heading.highlight}
            </span>
          </h2>

          <p className="text-md text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
            {description.primary}
          </p>

          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            {description.secondary}
          </p>
        </div>

        {/* Vision Box */}
        <div
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20"></div>

            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-blue-200">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-5">
                  <DynamicIcon name={vision.icon || "Sparkles"} className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {vision.title}
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {vision.description}
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center bg-blue-50 rounded-xl p-4 border border-blue-100"
                    >
                      <DynamicIcon name={benefit.icon} className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-sm font-medium text-gray-700">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaActions.map((action, idx) => {
            const Icon = action.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                className={`transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full group">
                  {/* Glow */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${action.gradient
                      } rounded-3xl blur-lg transition-opacity duration-500 ${isHovered ? "opacity-50" : "opacity-0"
                      }`}
                  ></div>

                  {/* Card */}
                  <div
                    className={`relative h-full bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${action.isPrimary
                      ? "border-blue-500 shadow-2xl"
                      : isHovered
                        ? "border-blue-400 shadow-xl"
                        : "border-blue-200 shadow-lg"
                      } ${isHovered ? "-translate-y-2" : ""}`}
                  >
                    {/* Badge */}
                    {action.isPrimary && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg">
                          <DynamicIcon name={action.badgeIcon || "Sparkles"} className="w-3 h-3 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${action.gradient
                        } transition-transform duration-500 ${isHovered ? "scale-110 rotate-6" : "scale-100"
                        }`}
                    >
                      <DynamicIcon name={action.icon} className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {action.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {action.description}
                    </p>

                    {/* CTA — Updated to next/link */}
                    <Link
                      href={action.href}
                      className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all duration-300 ${action.isPrimary
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700"
                        : "bg-blue-50 text-blue-600 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
                        } ${isHovered ? "scale-105" : "scale-100"}`}
                    >
                      {action.buttonText}
                      <DynamicIcon name={action.arrowIcon || "ArrowRight"} className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {finalCta.title && (
          <div
            className={`text-center transition-all duration-1000 delay-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <div className="mb-8">
              <div className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  {finalCta.title}
                </h3>
                <p className="text-md md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {finalCta.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

// Dynamic data from API - use data prop to access section data

export default function CTASection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Extract section data
  const section = data?.finalCTA || {};
  const heading = section.heading || {};
  const description = section.description || [];
  const infoCard = section.infoCard || {};
  const actionsData = section.actions || [];
  const floatingIconsData = section.floatingIcons || [];
  const bottomNote = section.bottomNote || {};

  const actions = actionsData.map((action, idx) => ({
    icon: action.icon || "Calendar",
    title: action.title,
    description: action.description,
    primary: action.primary,
    delay: idx * 100,
    href: action.href || "/contact-us",
  }));

  const floatingIcons = floatingIconsData.map(fi => ({
    icon: fi.icon || "Sparkles",
    position: fi.position,
    delay: fi.delay,
  }));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ icon, position, delay }, idx) => (
        <div
          key={idx}
          className={`absolute ${position} text-white opacity-10`}
          style={{
            animation: "float 6s ease-in-out infinite",
            animationDelay: delay,
          }}
        >
          <DynamicIcon name={icon} className="w-16 h-16" />
        </div>
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {heading.main} <span className="text-blue-200">{heading.highlight}</span>
            </h2>
            {description.map((p, idx) => (
              <p key={idx} className={`text-md ${idx === 0 ? 'text-blue-100' : 'text-blue-200'} max-w-3xl mx-auto mb-4 leading-relaxed`}>
                {p}
              </p>
            ))}
          </div>

          {/* Info Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <DynamicIcon name={infoCard.icon || "Sparkles"} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {infoCard.title}
                  </h3>
                  <p className="text-blue-100">
                    {infoCard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {actions.map((action, idx) => {
              const Icon = action.icon;
              const isHovered = hoveredButton === idx;
              return (
                <Link
                  href={action.href}
                  key={idx}
                  className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${action.delay}ms` }}
                  onMouseEnter={() => setHoveredButton(idx)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl p-8 transition-all duration-300
                      h-full min-h-[320px] flex flex-col justify-between
                      ${action.primary
                        ? "bg-white text-blue-600 hover:shadow-xl"
                        : "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                      }
                    `}
                  >
                    {/* Hover Overlay */}
                    {action.primary && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-grow">

                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${action.primary
                          ? "bg-transparent"
                          : "bg-white/10 group-hover:bg-white/20"
                          } ${isHovered ? "scale-110 rotate-6" : ""}`}
                      >
                        <DynamicIcon
                          name={action.icon}
                          className={`w-7 h-7 ${action.primary ? "text-blue-600" : "text-white"
                            }`}
                        />
                      </div>

                      {/* Title + Description */}
                      <div className="flex-grow">
                        <h3
                          className={`text-xl font-bold mb-2 ${action.primary ? "text-blue-600" : "text-white"
                            }`}
                        >
                          {action.title}
                        </h3>

                        <p
                          className={`text-sm mb-4 ${action.primary ? "text-blue-500" : "text-blue-200"
                            }`}
                        >
                          {action.description}
                        </p>
                      </div>

                      {/* CTA Row */}
                      <div
                        className={`inline-flex items-center font-semibold text-sm transition-transform duration-300 ${isHovered ? "translate-x-2" : ""
                          } ${action.primary ? "text-blue-600" : "text-white"}`}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA Text */}
          {bottomNote.text && (
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <p className="text-white text-md md:text-lg font-medium">
                  {bottomNote.text}{" "}
                  <span className="text-blue-200 font-bold">
                    {bottomNote.highlight}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
}

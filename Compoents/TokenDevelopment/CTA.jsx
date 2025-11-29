"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  FileText,
  FolderOpen,
  ArrowRight,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const actions = [
    {
      icon: Calendar,
      title: "Schedule Your Free Consultation",
      description: "Get expert guidance on your token strategy.",
      primary: true,
      delay: 0,
      href: "#contact",
    },
    {
      icon: FileText,
      title: "Get a Project Quote",
      description: "Transparent pricing for your requirements.",
      primary: false,
      delay: 100,
      href: "#quote",
    },
    {
      icon: FolderOpen,
      title: "View Our Portfolio",
      description: "See our successful token launches.",
      primary: false,
      delay: 200,
      href: "#portfolio",
    },
  ];

  const floatingIcons = [
    { Icon: Sparkles, position: "top-10 left-10", delay: "0s" },
    { Icon: Zap, position: "top-20 right-20", delay: "1s" },
    { Icon: Rocket, position: "bottom-10 left-20", delay: "2s" },
  ];

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
      {floatingIcons.map(({ Icon, position, delay }, idx) => (
        <div
          key={idx}
          className={`absolute ${position} text-white opacity-10`}
          style={{
            animation: "float 6s ease-in-out infinite",
            animationDelay: delay,
          }}
        >
          <Icon className="w-16 h-16" />
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
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch <span className="text-blue-200">Your Token?</span>
            </h2>
            <p className="text-md text-blue-100 max-w-3xl mx-auto mb-4 leading-relaxed">
              Building a successful token isn’t just about the technology – it’s
              about creating something that serves your business goals and
              provides real value to your users.
            </p>
            <p className="text-md text-blue-200 max-w-2xl mx-auto">
              If you’re ready to move beyond the planning phase and start
              building something that actually works, let’s talk.
            </p>
          </div>

          {/* Info Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get started today
                  </h3>
                  <p className="text-blue-100">
                    Contact OpenSoftAI for a free consultation and token
                    strategy session. We’ll review your project, discuss the
                    technical roadmap, and guide you every step of the way.
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
                <a
                  href={action.href}
                  key={idx}
                  className={`block transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${action.delay}ms` }}
                  onMouseEnter={() => setHoveredButton(idx)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                      action.primary
                        ? "bg-white text-blue-600 hover:shadow-xl"
                        : "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                    }`}
                  >
                    {action.primary && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${
                          action.primary
                            ? "bg-transparent"
                            : "bg-white/10 group-hover:bg-white/20"
                        } ${isHovered ? "scale-110 rotate-6" : ""}`}
                      >
                        <Icon
                          className={`w-7 h-7 ${
                            action.primary ? "text-blue-600" : "text-white"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          action.primary ? "text-blue-600" : "text-white"
                        }`}
                      >
                        {action.title}
                      </h3>
                      <p
                        className={`text-sm mb-4 ${
                          action.primary ? "text-blue-500" : "text-blue-200"
                        }`}
                      >
                        {action.description}
                      </p>
                      <div
                        className={`inline-flex items-center font-semibold text-sm transition-transform duration-300 ${
                          isHovered ? "translate-x-2" : ""
                        } ${action.primary ? "text-blue-600" : "text-white"}`}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom CTA Text */}
          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <p className="text-white text-md md:text-lg font-medium">
                Ready to turn your token idea into reality?{" "}
                <span className="text-blue-200 font-bold">
                  Let’s build something great together.
                </span>
              </p>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
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

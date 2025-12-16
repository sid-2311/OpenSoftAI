"use client";

import React from "react";
import {
  Phone,
  Mail,
  Calendar,
  Rocket,
  Users,
  Settings,
  TestTube,
  TrendingUp,
  Gift,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function GetStartedSection() {
  const journeySteps = [
    {
      icon: Users,
      title: "Free Voice AI Consultation",
      description:
        "Analyze your calling needs and identify automation opportunities.",
    },
    {
      icon: Settings,
      title: "Custom Agent Design",
      description:
        "Develop AI personalities and conversation flows tailored to your brand.",
    },
    {
      icon: TestTube,
      title: "Integration & Testing",
      description:
        "Seamlessly connect with your existing systems and test thoroughly.",
    },
    {
      icon: Rocket,
      title: "Pilot Launch",
      description:
        "Start with a focused use case to prove results and build confidence.",
    },
    {
      icon: TrendingUp,
      title: "Full Deployment & Scaling",
      description:
        "Roll out across all calling needs with ongoing optimization.",
    },
  ];

  const contactMethods = [
    {
      icon: Calendar,
      title: "Book Your Free Demo",
      description:
        "See AI calling agents in action with your actual use cases.",
      action: "Schedule Now",
      href: "/contact-us",
    },
    {
      icon: Phone,
      title: "Direct Line",
      description: "+91 9256497999 – Speak with our voice AI specialists.",
      action: "Call Now",
      href: "tel:+919256497999",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "info@opensoftai.com",
      action: "Send Email",
      href: "mailto:info@opensoftai.com",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* ================= HEADER ================= */}
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Revolutionize Your{" "}
            <span className="text-blue-600">Voice Communications?</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stop losing opportunities to missed calls and overwhelmed staff.
            Let’s build AI calling agents that work tirelessly for your business.
          </p>
        </header>

        {/* ================= VERTICAL TIMELINE ================= */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
            Your Implementation Journey
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2" />

            <div className="space-y-16">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* ICON */}
                    <div
                      className="
                        relative md:absolute 
                        md:left-1/2 md:-translate-x-1/2
                        w-12 h-12 md:w-14 md:h-14
                        bg-blue-600 rounded-xl
                        flex items-center justify-center
                        text-white shadow-lg
                      "
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* CARD */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isLeft
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all">
                        <div className="text-sm font-mono text-blue-600 mb-1">
                          STEP {index + 1}
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CONTACT METHODS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all border border-blue-100"
              >
                <div className="text-center">
                  <div className="inline-flex w-16 h-16 bg-blue-100 rounded-2xl items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {method.description}
                  </p>
                  <Link
                    href={method.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= OFFER ================= */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Gift className="w-10 h-10 text-blue-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-3">
                Special Offer for New Clients
              </h3>
              <p className="text-blue-100 text-lg">
                Free 30-day pilot program with up to 1,000 calls included.
              </p>
            </div>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition">
              Claim Your Offer
            </button>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100 text-center">
          <p className="text-2xl text-gray-700 mb-4">
            Your next customer is calling. Make sure your AI agent is ready.
          </p>
          <p className="text-xl font-bold text-blue-900 mb-8">
            Contact OpenSoftAI today and never miss another opportunity.
          </p>
          <Link
            href="/contact-us"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition inline-flex items-center gap-3"
          >
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </section>
      </section>
    </main>
  );
}

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
import Head from "next/head";

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
    },
    {
      icon: Phone,
      title: "Direct Line",
      description: "+91 9256497999 – Speak with our voice AI specialists.",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "info@opensoftai.com",
      action: "Send Email",
    },
  ];

  return (
    <>
      {/* SEO Optimization */}
     

      <main
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50"
        aria-labelledby="get-started-heading"
      >
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Header */}
          <header className="text-center mb-16">
            <h2
              id="get-started-heading"
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
            >
              Ready to Revolutionize Your{" "}
              
              <span className="text-blue-600">Voice Communications?</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stop losing opportunities to missed calls and overwhelmed staff.
              Let's build AI calling agents that work tirelessly for your
              business success.
            </p>
          </header>

          {/* Journey Steps */}
          <section aria-label="Implementation Journey" className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Your Implementation Journey
            </h2>
            <div className="relative">
              {/* Connection Line */}
              <div
                className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-blue-200"
                style={{ width: "90%", margin: "0 5%" }}
              ></div>

              <div className="grid lg:grid-cols-5 gap-6 relative">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                            {index + 1}
                          </div>
                          <h3 className="font-bold text-blue-900 mb-3 text-base">
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

          {/* Contact Methods */}
         <div className="grid md:grid-cols-3 mb-4 gap-8">
  {contactMethods.map((method, index) => {
    const Icon = method.icon;
    // Define hrefs for each method
    let href = "#";
    if (method.title === "Book Your Free Demo") href = "/contact-us";
    if (method.title === "Direct Line") href = "tel:+919256497999";
    if (method.title === "Email Us") href = "mailto:info@opensoftai.com";
    return (
      <div
        key={index}
        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
      >
        <div className="text-center">
          <div className="inline-flex w-16 h-16 bg-blue-100 rounded-2xl items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            {method.title}
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {method.description}
          </p>
          <Link
            href={href}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 w-full flex items-center justify-center gap-2"
          >
            {method.action}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  })}
</div>

          {/* Special Offer Banner */}
          <section
            aria-label="Special Offer"
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Gift className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Special Offer for New Clients
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Free 30-day pilot program for qualified businesses. Experience
                  the power of AI calling agents risk-free with up to 1,000
                  calls included.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg whitespace-nowrap">
                  Claim Your Offer
                </button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section
            aria-label="Final Call to Action"
            className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100 text-center"
          >
            <p className="text-2xl text-gray-700 mb-4 leading-relaxed">
              Your next customer is calling. Make sure your AI agent is ready to
              answer.
            </p>
            <p className="text-xl font-bold text-blue-900 mb-8">
              Contact OpenSoftAI today and never miss another opportunity.
            </p>
            <Link
              href="/contact-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-md md:text-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

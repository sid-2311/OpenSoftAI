"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Rocket,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function CTAContactSection() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Free AI Strategy Consultation",
      description:
        "We’ll analyze your business needs and identify AI opportunities.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Custom Solution Design",
      description: "Detailed project roadmap with timeline and deliverables.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Proof of Concept Development",
      description: "Small-scale prototype to validate the approach.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Full Development & Deployment",
      description: "Complete AI solution built for your environment.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "05",
      title: "Ongoing Optimization",
      description: "Continuous improvement and scaling support.",
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 9509653923",
      link: "tel:+919509653923",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@opensoftai.com",
      link: "mailto:info@opensoftai.com",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Consultation",
      value: "Book your free AI strategy session",
      link: "/contact",
      gradient: "from-blue-700 to-blue-800",
    },
  ];

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Contact OpenSoft AI | Build Your AI Future</title>
        <meta
          name="description"
          content="Book your free AI strategy consultation with OpenSoft AI. Let’s design, develop, and deploy intelligent solutions that drive business growth."
        />
        <meta
          name="keywords"
          content="AI development, AI consultation, OpenSoft AI, machine learning, business automation"
        />
        <meta property="og:title" content="OpenSoft AI - AI Consultation" />
        <meta
          property="og:description"
          content="Book your free AI strategy consultation and start building intelligent systems for your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://opensoftai.com/contact" />
      </Head>

      <section
        className="relative bg-gradient-to-b from-slate-50 via-blue-50 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        id="contact"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "2s" }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Build Your
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Intelligent Future?
              </span>
            </h2>
          </div>

          {/* Process Steps */}
          <section aria-labelledby="process-steps">
            <h3
              id="process-steps"
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              What Happens Next:
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="group relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 -translate-x-3" />
                  )}

                  <div
                    className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 ${
                      hoveredStep === index
                        ? "border-blue-400 shadow-2xl shadow-blue-500/30 -translate-y-2"
                        : "border-blue-100 shadow-lg"
                    }`}
                  >
                    <div
                      className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 ${
                        hoveredStep === index ? "scale-110 rotate-6" : "scale-100"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div
                      className={`w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 ml-8 transition-colors duration-300 ${
                        hoveredStep === index ? "bg-blue-600 text-white" : ""
                      }`}
                    >
                      {step.icon}
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            aria-labelledby="contact-options"
            className="relative text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl border border-blue-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative z-10">
                <h3
                  id="contact-options"
                  className="text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                  Ready to Get Started?
                </h3>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                  Choose your preferred way to connect with our AI experts
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {contactMethods.map((method, index) => (
                    <Link
                      key={index}
                      href={method.link}
                      className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {method.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {method.title}
                      </h4>
                      <p className="text-blue-200 group-hover:text-white transition-colors">
                        {method.value}
                      </p>
                      <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mb-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20"
                  >
                    <Calendar className="w-6 h-6" />
                    Book Your Free AI Strategy Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="text-center pt-8 border-t border-white/20">
                  <p className="text-xl text-blue-100 italic font-medium mb-2">
                    Let&apos;s build AI that works as hard as you do.
                  </p>
                  <p className="text-blue-200">
                    Contact{" "}
                    <span className="font-bold text-white">OpenSoft AI</span> today and turn your data into your competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

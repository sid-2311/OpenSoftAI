"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  CheckCircle,
  Workflow,
  Settings,
  Building2,
  Activity,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function IntelligentAutomationExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    { name: "Finance & Accounting", icon: Building2 },
    { name: "Healthcare", icon: ShieldCheck },
    { name: "Manufacturing", icon: Activity },
    { name: "Technology", icon: Cpu },
    { name: "Operations & Logistics", icon: Workflow },
  ];

  const highlights = [
    "Deep expertise in AI, machine learning, and systems integration",
    "Automation strategies that improve — not just replicate — workflows",
    "Proven results across industries from finance to healthcare",
    "Custom AI workflows designed around your specific business needs",
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Our Deep Expertise in
            <span className="block mt-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Intelligent Process Automation
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-10"></div>
          <p className="text-xl text-slate-700 leading-relaxed max-w-4xl font-light">
            We've been building AI-powered automation solutions since machine
            learning first started showing real business promise, and we've seen
            firsthand how the right automation strategy can transform entire
            organizations. Our team combines deep technical expertise in{" "}
            <span className="font-semibold text-blue-700">
              artificial intelligence, machine learning, and systems
              integration
            </span>{" "}
            with practical experience in business process optimization.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
                <Settings className="w-5 h-5 text-blue-700" />
                <span className="text-blue-900 font-semibold">
                  Reimagining Processes
                </span>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                What makes our approach unique is that we don’t just automate
                existing processes –{" "}
                <span className="font-semibold text-blue-700">
                  we reimagine them.
                </span>{" "}
                We analyze your current workflows, identify inefficiencies and
                bottlenecks, and design AI-powered solutions that not only
                automate tasks but actually improve how work gets done. This
                means you're not just saving time; you're building better, more
                resilient business processes.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our experience spans everything from simple task automation for
                small businesses to complex, multi-department workflow
                orchestration for enterprise organizations. We've automated
                financial processes that{" "}
                <span className="font-semibold text-blue-700">
                  reduced month-end closing from weeks to days
                </span>
                , built healthcare workflows that improved patient care while
                reducing administrative burden, and created manufacturing
                automation that increased production efficiency by double
                digits.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                The key to our success is understanding that every business is
                different. We don't believe in cookie-cutter automation
                solutions. Instead, we take the time to understand your unique
                processes, challenges, and goals, then{" "}
                <span className="font-semibold text-blue-700">
                  build custom AI workflows
                </span>{" "}
                that fit perfectly into your existing operations.
              </p>

              <div className="pt-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">
                  Industries We Serve
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <div
                        key={index}
                        className="group relative px-5 py-3 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all duration-300 cursor-pointer hover:scale-105"
                        onMouseEnter={() => setActiveIndustry(index)}
                        onMouseLeave={() => setActiveIndustry(null)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                          <span className="text-slate-800 font-semibold">
                            {industry.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full filter blur-3xl opacity-10"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    What Makes Us Unique
                  </h3>
                  <div className="space-y-5">
                    {highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 group"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-blue-50 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border-2 border-blue-100 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Brain className="w-12 h-12 text-blue-700" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Transforming Workflows with AI-Powered Automation
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              We help organizations move beyond manual processes into a new era
              of intelligent, data-driven efficiency. From automating everyday
              tasks to reengineering entire operations — we help businesses
              unlock measurable ROI with automation that thinks, learns, and
              improves.
            </p>
            <p className="text-2xl font-semibold text-blue-700 mb-10">
              Let’s reimagine how your business works — intelligently.
            </p>
            <Link href="/contact-us" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-900">
              Start Your Automation Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

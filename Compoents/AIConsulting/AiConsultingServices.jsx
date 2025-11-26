"use client";

import {
  Map,
  LineChart,
  Database,
  Puzzle,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export default function AIConsultingServices() {
  const services = [
    {
      icon: Map,
      title: "AI Strategy & Roadmap Development",
      description:
        "We work with your leadership team to create a comprehensive AI strategy that aligns with your business goals. This isn't just a high-level vision – it's a detailed roadmap outlining which AI initiatives to pursue first, how to build internal capabilities, and how to measure success along the way.",
    },
    {
      icon: LineChart,
      title: "AI Feasibility & ROI Analysis",
      description:
        "Not every AI idea is worth pursuing, and we help you figure out which ones are. We conduct thorough feasibility studies covering technical requirements, resource needs, implementation timelines, and expected returns – giving you clear, data-backed investment recommendations.",
    },
    {
      icon: Database,
      title: "Data Assessment & AI Readiness Evaluation",
      description:
        "AI is only as good as the data that feeds it. We perform comprehensive audits of your data infrastructure, quality, and accessibility to determine your AI readiness. We identify gaps, recommend improvements, and help you build a strong data foundation for successful AI adoption.",
    },
    {
      icon: Puzzle,
      title: "Custom AI Solution Advisory",
      description:
        "Every business is unique, and cookie-cutter AI rarely delivers. We analyze your use cases and recommend the right combination of tools, models, and approaches – from predictive analytics to NLP and computer vision – to ensure your AI initiatives deliver real business impact.",
    },
    {
      icon: Rocket,
      title: "Implementation & Deployment Guidance",
      description:
        "Having a great AI strategy is one thing – executing it successfully is another. We provide hands-on guidance throughout implementation, helping you navigate technical challenges, manage organizational change, and ensure smooth, sustainable deployment.",
    },
    {
      icon: ShieldCheck,
      title: "Ethical AI & Compliance Consulting",
      description:
        "AI comes with responsibilities. We help you build systems that are ethical, secure, and compliant – guiding you through bias mitigation, privacy protection, regulatory adherence, and transparent AI governance frameworks that build long-term trust.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="ai-consulting-services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="ai-consulting-services-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Core AI Consulting Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

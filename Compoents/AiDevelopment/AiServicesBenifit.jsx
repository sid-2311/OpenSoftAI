"use client";

import React from "react";
import Link from "next/link";
import {
  Brain,
  Phone,
  MessageSquare,
  Users,
  Lightbulb,
  FileText,
  Workflow,
  Cpu,
} from "lucide-react";

export default function AIServicesBenefits() {
  const services = [
    {
      icon: Brain,
      title: "AI Development Services",
      description:
        "Machine learning systems that learn from your specific business patterns. Not generic algorithms, but AI that understands your industry and customers. Increase sales conversions by 45% or predict equipment problems before disasters.",
      benefits: [
        "Your data works harder than spreadsheets ever could",
        "Faster, more accurate decisions by seeing patterns humans miss",
        "System grows smarter as your business grows",
        "Integrates with existing tools—no starting over",
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "AI Calling Agent Development",
      description:
        "AI calling agents that sound completely natural in conversation. They remember every detail, never have bad days, work 24/7, and seamlessly hand off to your human team when needed.",
      benefits: [
        "Phone costs drop by 70% with 24/7 availability",
        "Same high level of service, every time",
        "Human agents focus on complex problems",
        "Handle global customers in their native languages",
      ],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot Development",
      description:
        "Chatbots that actually understand what people are trying to accomplish. They pick up on context, remember conversations, and guide customers without feeling like a machine.",
      benefits: [
        "Customers get instant help that actually helps",
        "Support team handles meaningful interactions",
        "Every conversation makes the system smarter",
        "Deploy across website, mobile app, and messaging platforms",
      ],
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "AI Copilot Development",
      description:
        "AI copilots make your team superhuman. They handle tedious tasks, surface insights from complex data, and offer suggestions based on patterns across your organization.",
      benefits: [
        "Routine tasks happen automatically in background",
        "Complex data analysis as easy as asking questions",
        "Everyone gets access to specialized expertise",
        "Productivity jumps 60% without working harder",
      ],
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Lightbulb,
      title: "AI Consulting Services",
      description:
        "We help you avoid AI implementation mistakes by understanding your business first, then identifying where AI makes the biggest impact fastest.",
      benefits: [
        "Figure out what's actually worth automating",
        "Clear plan with realistic timelines and budgets",
        "Team learns to work with AI confidently",
        "Every implementation builds toward strategic goals",
      ],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: FileText,
      title: "Generative AI Development",
      description:
        "Generative AI that creates content matching your brand voice. It learns your style and produces marketing, product, and technical content with consistency.",
      benefits: [
        "Marketing content stays on-brand with fresh angles",
        "Product descriptions write themselves from specs",
        "Technical documentation stays updated automatically",
        "Personalized customer communications at scale",
      ],
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      description:
        "Intelligent automation for complex workflows with exceptions and judgment calls. Systems that adapt to changes intelligently.",
      benefits: [
        "Complex processes run themselves, even with exceptions",
        "Documents processed with 99.5% accuracy",
        "Quality control happens automatically",
        "Everything scales without breaking down",
      ],
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Cpu,
      title: "Custom AI Solutions",
      description:
        "Tailored AI systems that integrate with your infrastructure and scale with your business growth.",
      benefits: [
        "Solutions customized to your specific needs",
        "Seamless integration with existing infrastructure",
        "Scalable architecture that grows with you",
        "Continuous improvement and ongoing support",
      ],
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      id="ai-services"
    >
      <div className="max-w-7xl mx-auto">
        {/* SEO Heading */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI & Automation Solutions for Real Business Impact
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From AI chatbots to automation systems, we design intelligent
            solutions that scale with your business and deliver measurable ROI.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your AI Journey Today
          </Link>
        </div>
      </div>
    </section>
  );
}

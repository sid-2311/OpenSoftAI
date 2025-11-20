"use client";
import { useState } from "react";
import {
  Zap,
  Users,
  Shield,
  Layers,
  Code,
  Puzzle,
  Boxes,
  Handshake,
  MessageSquare,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const approaches = [
  {
    icon: Zap,
    title: "Agile Development Methodology",
    description:
      "We use iterative development cycles that allow for continuous feedback, rapid adjustments, and faster time-to-market while maintaining high quality standards throughout the project.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "User-First Design Philosophy",
    description:
      "Every software solution we build starts with understanding your users' needs and workflows. Our design process ensures intuitive interfaces that drive adoption and productivity.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "We integrate security considerations from the initial design phase through deployment, ensuring your software and data remain protected against evolving threats.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Layers,
    title: "Scalable Technology Foundation",
    description:
      "Our software solutions are built to grow with your business, using modern architectures and cloud technologies that handle increased users, data, and functionality seamlessly.",
    color: "from-blue-600 to-blue-700",
  },
];

const reasons = [
  {
    icon: Code,
    title: "Deep Technical Expertise",
    description:
      "Our development team combines years of experience across multiple technologies, industries, and project complexities. We stay current with emerging technologies while leveraging proven solutions.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Puzzle,
    title: "Custom Solutions, Not Templates",
    description:
      "We build software specifically for your business requirements, not modified versions of existing products. Every feature serves your unique needs and business objectives.",
    gradient: "from-blue-100 to-blue-50",
  },
  {
    icon: Boxes,
    title: "End-to-End Development Services",
    description:
      "From initial concept through deployment and ongoing maintenance, we provide comprehensive software development services that eliminate the need for multiple vendors.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership Approach",
    description:
      "We view every project as the beginning of a long-term relationship. Our post-launch support ensures your software continues to meet your evolving business needs.",
    gradient: "from-blue-100 to-blue-50",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and honest communication keep you informed throughout the development process. You always know where your project stands.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Building2,
    title: "Industry-Specific Knowledge",
    description:
      "Our experience across multiple industries means we understand the unique challenges, regulations, and opportunities that affect your software requirements.",
    gradient: "from-blue-100 to-blue-50",
  },
];

export default function DevelopmentApproach() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white">
      {/* Development Approach */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Our Proven Development Approach
          </h2>
          <p className="text-blue-100 max-w-4xl mx-auto">
            We follow best practices and modern development methodologies to
            deliver high-quality software solutions tailored to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, idx) => {
            const Icon = approach.icon;
            return (
              <article
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                onMouseEnter={() => setHoveredCard(`approach-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${approach.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-6 flex items-center text-white font-medium transition-all duration-300 ${
                    hoveredCard === `approach-${idx}` ? "translate-x-2" : ""
                  }`}
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose OpenSoftAI for Software Development
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From expertise to long-term partnerships, we ensure your software
            projects are a success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <article
                key={idx}
                className={`bg-gradient-to-br ${reason.gradient} rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl`}
                onMouseEnter={() => setHoveredCard(`reason-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {reason.description}
                </p>
                <div
                  className={`flex items-center text-blue-600 font-medium transition-all duration-300 ${
                    hoveredCard === `reason-${idx}` ? "translate-x-2" : ""
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Key Advantage</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Industries Served" },
            { number: "5+", label: "Years of Exprience" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

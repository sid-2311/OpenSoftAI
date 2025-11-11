"use client";
import { useState, useEffect } from "react";
import {
  Globe2,
  Building2,
  Users,
  BarChart3,
  DollarSign,
  GraduationCap,
  BookOpen,
  MessageSquare,
  Brain,
  Frown,
} from "lucide-react";

export default function LMSImpactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Globe2,
      title: "Expand Reach Without Losing Quality",
      description:
        "Serve students globally while maintaining interactive, engaging educational experiences. Geography stops being a limitation for enrollment growth.",
      stat: "Global",
      statLabel: "Reach",
    },
    {
      icon: Building2,
      title: "Reduce Infrastructure Costs",
      description:
        "Eliminate physical classroom constraints while offering richer experiences. Serve more students without proportional increases in facilities or staffing.",
      stat: "Lower",
      statLabel: "Overheads",
    },
    {
      icon: Users,
      title: "Improve Student Retention Rates",
      description:
        "Engaging, interactive learning experiences keep students motivated and progressing through programs, improving completion rates and satisfaction.",
      stat: "↑",
      statLabel: "Retention",
    },
    {
      icon: BarChart3,
      title: "Generate Data-Driven Insights",
      description:
        "Gain deep insights into student performance, engagement, and learning patterns. Use analytics to continuously improve outcomes and teaching methods.",
      stat: "Smart",
      statLabel: "Analytics",
    },
    {
      icon: DollarSign,
      title: "Create New Revenue Opportunities",
      description:
        "Online delivery enables flexible course formats, micro-learning, and scalable offerings that open new revenue streams beyond traditional classrooms.",
      stat: "New",
      statLabel: "Revenue",
    },
    {
      icon: GraduationCap, // ✅ Replaced ChalkboardTeacher
      title: "Enhance Instructor Effectiveness",
      description:
        "Empower educators with tools that make online teaching efficient and impactful. Better tools lead to better teaching and higher instructor satisfaction.",
      stat: "Better",
      statLabel: "Teaching",
    },
  ];

  const pitfalls = [
    {
      icon: BookOpen,
      title: "They Focus on Content Delivery, Not Learning Outcomes",
      description:
        "Uploading videos and PDFs isn't education – it's digital filing. True platforms promote understanding, retention, and real-world application.",
      solution: "We design for outcomes, not just content.",
    },
    {
      icon: MessageSquare,
      title: "They Ignore the Social Aspects of Learning",
      description:
        "Humans learn through collaboration and discussion. Isolated content consumption leads to low engagement and weak learning results.",
      solution: "We integrate collaboration at every level.",
    },
    {
      icon: Frown,
      title: "They Make Teaching Harder, Not Easier",
      description:
        "Many LMSs burden instructors with admin tasks instead of simplifying their workflow or enhancing teaching impact.",
      solution: "We build tools that empower educators.",
    },
    {
      icon: Brain,
      title: "They Don't Adapt to Different Learning Styles",
      description:
        "Every learner is unique. Platforms that fail to offer diverse formats leave many students behind.",
      solution: "We personalize learning experiences for all.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full animate-pulse opacity-30"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 border-2 border-blue-300 rounded-full animate-pulse opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Business Benefits for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Educational Organizations
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            How a modern learning platform drives growth, retention, and teaching excellence.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="space-y-24 mb-32">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isLeft ? "-translate-x-10" : "translate-x-10"}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      <div
                        className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${
                          isActive ? "-rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border-4 border-blue-100 px-6 py-4">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-gray-600 font-semibold whitespace-nowrap">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-7/12">
                  <div className="max-w-2xl">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
                      Benefit {index + 1}
                    </span>
                    <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pitfalls Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            Why Most Online Learning Platforms{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Miss the Mark
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common pitfalls in online learning — and how our platform avoids them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {pitfalls.map((pitfall, index) => {
            const Icon = pitfall.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-10 rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {pitfall.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{pitfall.description}</p>
                    <p className="text-blue-700 font-semibold">
                      {pitfall.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

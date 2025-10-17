// components/CopilotTypesSection.js
"use client";

import { useState } from "react";
import { BarChart3, Zap, Rocket, BookOpen, Link2 } from "lucide-react";

export default function CopilotTypesSection() {
  const [activeTab, setActiveTab] = useState(1);

  const copilotTypes = [
    {
      id: 1,
      title: "Analytics & Reporting Copilots",
      subtitle: "The Data Whisperers",
      icon: BarChart3,
      color: "from-blue-600 to-cyan-500",
      borderColor: "border-cyan-400",
      description:
        "These are for teams who spend way too much time in Excel and PowerBI. The copilot connects to your data sources, creates reports automatically, and explains what the numbers actually mean in plain English.",
      caseStudy:
        "We built one for a retail chain that analyzes sales data every morning and sends personalized insights to each store manager. Instead of generic corporate reports, each manager gets specific recommendations for their location.",
      stats: { metric: "Automated", value: "Daily Reports" },
    },
    {
      id: 2,
      title: "Task Automation Copilots",
      subtitle: "The Productivity Multipliers",
      icon: Zap,
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-indigo-400",
      description:
        "These handle the repetitive stuff that's eating up your team's time. Email sorting, calendar management, document creation, follow-up reminders—all the administrative work that keeps people from doing their actual jobs.",
      caseStudy:
        "One client's HR team uses their copilot to handle initial candidate screening, schedule interviews, and even draft personalized rejection emails. Their time-to-hire dropped by 40% because they could focus on actually evaluating candidates.",
      stats: { metric: "40%", value: "Faster Hiring" },
    },
    {
      id: 3,
      title: "Sales & Marketing Copilots",
      subtitle: "The Revenue Accelerators",
      icon: Rocket,
      color: "from-blue-600 to-violet-500",
      borderColor: "border-violet-400",
      description:
        "These understand your customer data and help teams identify opportunities, craft personalized outreach, and track what's actually working. They're like having a sales analytics expert and content creator rolled into one.",
      caseStudy:
        "A B2B software company's copilot now writes their email campaigns, suggests the best times to reach prospects, and identifies which leads are most likely to convert. Their sales team went from spending 60% of their time on administrative tasks to focusing almost entirely on relationship building.",
      stats: { metric: "60%", value: "More Selling Time" },
    },
    {
      id: 4,
      title: "Content & Knowledge Management Copilots",
      subtitle: "The Information Organizers",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-blue-400",
      description:
        "For teams drowning in documents, policies, and institutional knowledge. These copilots can find any piece of information instantly, draft responses using company guidelines, and even suggest improvements to existing content.",
      caseStudy:
        "Instantly access any document, policy, or piece of institutional knowledge. Draft responses using company guidelines and improve existing content automatically.",
      stats: { metric: "Instant", value: "Knowledge Access" },
    },
    {
      id: 5,
      title: "System Integration Copilots",
      subtitle: "The Universal Translators",
      icon: Link2,
      color: "from-indigo-500 to-blue-600",
      borderColor: "border-blue-500",
      description:
        "These work across your existing tools—CRM, project management, accounting software, communication platforms. They understand how information flows between systems and help teams work seamlessly across different platforms.",
      caseStudy:
        "Connect all your tools and let information flow seamlessly between CRM, project management, accounting software, and communication platforms.",
      stats: { metric: "All Tools", value: "Connected" },
    },
  ];

  const active = copilotTypes.find((c) => c.id === activeTab);
  const Icon = active.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-blue-600 bg-clip-text text-transparent">
            The Different Types of AI Copilots We Build
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect AI assistant for your team's unique needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {copilotTypes.map((copilot) => {
            const IconTab = copilot.icon;
            const isActive = activeTab === copilot.id;
            return (
              <button
                key={copilot.id}
                onClick={() => setActiveTab(copilot.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${copilot.color} text-white border-transparent shadow-lg`
                    : `bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600`
                }`}
              >
                <IconTab
                  className={`w-5 h-5 ${
                    isActive ? "text-white" : "text-blue-500"
                  }`}
                />
                <span className="font-semibold">{copilot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div
          key={active.id}
          className={`relative bg-white rounded-3xl p-10 shadow-lg border-2 ${active.borderColor} animate-slide-up`}
        >
          {/* Icon */}
          <div className="mb-6">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${active.color} rounded-2xl flex items-center justify-center shadow-lg`}
            >
              <Icon className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-slate-800 mb-2">
            {active.title}
          </h3>
          <p
            className={`text-lg font-semibold bg-gradient-to-r ${active.color} bg-clip-text text-transparent mb-6`}
          >
            {active.subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-6">
            {active.description}
          </p>

          {/* Case Study */}
          <div
            className={`bg-gradient-to-r ${active.color} bg-opacity-5 rounded-xl p-6 mb-6 border-l-4 ${active.borderColor}`}
          >
            <p className="text-white italic leading-relaxed">
              {active.caseStudy}
            </p>
          </div>

          {/* Stats Badge */}
          <div className="flex items-center justify-between">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${active.color} rounded-full shadow-md`}
            >
              <span className="text-white font-bold text-lg">
                {active.stats.metric}
              </span>
              <span className="text-white/90 text-sm">
                {active.stats.value}
              </span>
            </div>
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-r ${active.color} flex items-center justify-center text-white font-bold`}
            >
              →
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
      
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

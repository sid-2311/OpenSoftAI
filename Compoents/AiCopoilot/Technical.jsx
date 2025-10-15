"use client";

import { Brain, ShieldCheck, Workflow, MessageSquare, Eye, AlertTriangle } from "lucide-react";

export default function TechnicalMagicSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "They understand context, not just keywords",
      desc: "Good AI copilots remember what you were working on yesterday and pick up conversations naturally. When you ask 'What about the Johnson account?' they know exactly which Johnson and what context you're referring to.",
    },
    {
      icon: Workflow,
      title: "They learn your team's specific workflow",
      desc: "Every company works differently. Our copilots adapt to how your team actually operates, not how some generic productivity guru thinks you should work.",
    },
    {
      icon: Eye,
      title: "They explain their reasoning",
      desc: "When the copilot suggests a decision or recommends an action, it tells you why. No black box mystery—you understand the logic behind every suggestion.",
    },
    {
      icon: AlertTriangle,
      title: "They know their limitations",
      desc: "The smartest copilots know when they're out of their depth and ask for human input instead of making something up. They're confident about what they know and honest about what they don't.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy and security that actually works",
      desc: "Your sensitive data stays secure while the copilot accesses exactly what it needs to be helpful. We build privacy protection into the architecture, not bolt it on afterward.",
    },
  ];

  return (
    <section
      id="technical-magic"
      className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 px-6 text-slate-800"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          The Technical Magic That Makes Them Feel Human
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          These aren't just tools — they're intelligent partners that understand you, learn from you, and grow with your team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">{feature.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-20">
        <div className="inline-block bg-white rounded-2xl px-10 py-8 shadow-xl border border-blue-200">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Building AI That Feels Human Takes Real Engineering
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Every layer of our copilots—from data architecture to user experience—is designed to make AI feel natural, contextual, and trustworthy.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Discover How It Works
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

"use client";

import { BarChart3, Users, Brain, Rocket, Smile } from "lucide-react";

export default function HowTeamsWorkSection() {
  const benefits = [
    {
      icon: Brain,
      title: "People focus on strategy instead of spreadsheets",
      desc: "When routine analysis happens automatically, teams spend their brain power on creative problem-solving and strategic thinking instead of data entry and report formatting.",
    },
    {
      icon: Rocket,
      title: "Decision-making gets faster and more informed",
      desc: "Instead of waiting for someone to pull together information from five different systems, teams get comprehensive insights instantly when they need to make decisions.",
    },
    {
      icon: Users,
      title: "Knowledge doesn't get lost when people leave",
      desc: "The copilot learns from every team member and becomes a repository of institutional knowledge that doesn't walk out the door with departing employees.",
    },
    {
      icon: BarChart3,
      title: "New team members get up to speed faster",
      desc: "Instead of spending weeks learning where everything is and how things work, new hires have an AI assistant that can answer questions and guide them through processes immediately.",
    },
    {
      icon: Smile,
      title: "Work becomes more satisfying",
      desc: "Teams report higher job satisfaction when they're not bogged down in repetitive tasks. People like their jobs more when they can focus on the interesting, human parts of their work.",
    },
  ];

  return (
    <section
      id="how-teams-work"
      className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 px-6 text-slate-800"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          How This Changes How Teams Actually Work
        </h2>
        <p className="text-lg md:text-lg text-slate-600 max-w-3xl mx-auto">
          AI copilots transform daily operations, freeing teams from routine work and letting them focus on what truly matters.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom Highlight Card */}
    

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

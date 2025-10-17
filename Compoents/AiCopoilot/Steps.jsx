"use client";

import { Eye, PenTool, CheckCircle2, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function BuildCopilotSection() {
  const steps = [
    {
      step: "Step 1",
      icon: Eye,
      title: "We watch how your team really works",
      desc: "Not how your org chart says they should work—how they actually spend their time, what frustrates them, and where they get stuck. That's where the copilot adds the most value.",
    },
    {
      step: "Step 2",
      icon: PenTool,
      title: "We design for your specific workflow",
      desc: "Generic AI assistants feel generic. We build copilots that understand your industry, your terminology, and your particular way of doing business.",
    },
    {
      step: "Step 3",
      icon: CheckCircle2,
      title: "We test with real work scenarios",
      desc: "Beta testing with actual tasks, real deadlines, and the messy situations that happen in everyday work. We iterate until it feels natural and helpful, not complicated.",
    },
    {
      step: "Step 4",
      icon: GraduationCap,
      title: "We train your team and keep improving",
      desc: "The copilot gets smarter by working with your team. We provide training, gather feedback, and continuously improve the system based on how it's actually being used.",
    },
  ];

  return (
    <section
      id="build-copilot"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 text-slate-800"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          How We Build Copilots That Teams Actually Want to Use
        </h2>
        <p className="text-lg md:text-lg text-slate-600 max-w-3xl mx-auto">
          Our process is built around real people, real work, and real results —
          not just technology for technology’s sake.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute top-6 right-6 text-blue-100 text-6xl font-bold opacity-20 select-none">
                {item.step.split(" ")[1]}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                {item.step}: {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        
        <Link href="/contact-us" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Explore Our Process
        </Link>
      </div>

      {/* Animation */}
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
        section {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

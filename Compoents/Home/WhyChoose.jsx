"use client";

import { useState } from "react";
import { Shield, Eye, Calendar, Zap, Users, Lightbulb } from "lucide-react";

export default function WhyChooseOpenSoftAI() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: Users,
      title: "We Actually Know What We're Doing",
      description:
        "Ten years in this business teaches you things. Like how to spot problems before they become disasters. How to build systems that don't break when your traffic spikes. How to explain technical stuff without putting you to sleep.",
      subtext:
        "Our certifications? They're nice wall decorations. But what really matters is that we've been there, done that, fixed that at 3 AM on a Sunday.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      icon: Shield,
      title: "Security Isn't Optional",
      description:
        "Your data is everything. We get it. That's why we build every single thing like hackers are watching. Enterprise-grade security from day one. Secure coding that makes the bad guys cry.",
      subtext: 'No shortcuts. No "we\'ll fix that later." Your business deserves better.',
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      icon: Eye,
      title: "No Surprises, Ever",
      description:
        "Here's what drives us crazy about other development companies: they disappear for weeks, then show up with something completely different from what you asked for. We don't do that.",
      subtext: "Your money, your project, your right to know what's happening.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      icon: Calendar,
      title: "Built for Tomorrow, Not Yesterday",
      description:
        "Technology changes fast. Really fast. The solution we build for you today needs to work in three years when your business has doubled and technology has evolved again.",
      subtext:
        "That's why we use modern architectures and industry best practices. Not because they're trendy, but because they last.",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 5,
      icon: Zap,
      title: "We Speak Your Industry",
      description:
        "Finance has compliance nightmares. Healthcare has HIPAA. Retail has inventory chaos. Manufacturing has supply chain puzzles.",
      subtext:
        "We've solved problems in all these industries. Multiple times. So when you explain your challenge, we already know what you're up against.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 6,
      icon: Lightbulb,
      title: "Ideas That Actually Work",
      description:
        "We don’t just build what you ask for—we help shape it. Sometimes the smallest tweak makes the biggest difference. We think with you, not just for you.",
      subtext:
        "Because innovation isn’t about fancy buzzwords, it’s about delivering real results that matter.",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Choose OpenSoftAI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glowing border */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                ></div>

                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-slate-800/70 group-hover:border-slate-600">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                    {feature.description}
                  </p>

                  {/* Subtext */}
                  <p className="text-gray-400 text-base italic leading-relaxed">
                    {feature.subtext}
                  </p>

                  {/* Soft Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

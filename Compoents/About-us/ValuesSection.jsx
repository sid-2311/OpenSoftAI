"use client"; // ✅ Required for interactive client-side rendering

import React from "react";
import { Lightbulb, ShieldCheck, Users, Handshake } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      id: 1,
      title: "Innovation",
      desc: "We're not interested in building yesterday's solutions with today's technology. We stay at the forefront of AI, blockchain, and software development to ensure our clients have access to approaches that create genuine competitive advantages. Innovation means finding better ways to solve business problems.",
      icon: <Lightbulb className="w-10 h-10 text-blue-600" aria-hidden="true" />,
    },
    {
      id: 2,
      title: "Trust & Transparency",
      desc: "Technology partnerships require trust, and trust requires transparency. We maintain open communication, provide clear timelines and budgets, and explain technical decisions in business terms. Our clients always know what we're building, why, and how it serves their goals.",
      icon: <Handshake className="w-10 h-10 text-green-600" aria-hidden="true" />,
    },
    {
      id: 3,
      title: "Customer-Centricity",
      desc: "Every business is different, and every solution should reflect that. We don't believe in cookie-cutter approaches. Instead, we listen first, understand your challenges and opportunities, then design solutions that fit your business perfectly.",
      icon: <Users className="w-10 h-10 text-purple-600" aria-hidden="true" />,
    },
    {
      id: 4,
      title: "Excellence & Security",
      desc: "In emerging technology development, quality and security aren't optional. Every AI system, blockchain platform, and software application we build meets the highest standards for performance, reliability, and security. We build solutions you can depend on as your business grows.",
      icon: <ShieldCheck className="w-10 h-10 text-red-600" aria-hidden="true" />,
    },
  ];

  return (
    <section
      className="bg-gray-50 py-16"
      aria-labelledby="our-values-title"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="our-values-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work, shape our partnerships, and
            define how we build technology that truly makes a difference.
          </p>
        </div>

        {/* Values Grid */}
        <div
          className="grid md:grid-cols-2 gap-8"
          role="list"
          aria-label="Company core values"
        >
          {values.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
              role="listitem"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-xl group-hover:scale-110 transition">
                  {val.icon}
                </div>
                <h3 className="text-xl font-semibold">{val.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

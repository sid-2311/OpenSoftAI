"use client"; // Required for Lucide icons

import React from "react";
import { Cpu, Building2, Users } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section
      className="bg-white py-16"
      aria-labelledby="expertise-heading"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2
            id="expertise-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Expertise
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team combines deep technical expertise with practical business
            experience across multiple industries and technology stacks. From
            certified AI developers and blockchain architects to full-stack
            engineers, we build solutions that are secure, scalable, and truly
            impactful.
          </p>
        </div>

        {/* Expertise Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12" role="list">
          {/* Technical Excellence */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            role="listitem"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Cpu className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold">Technical Excellence</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our developers hold certifications in major cloud platforms, AI
              frameworks, and blockchain networks. With hands-on experience,
              they’ve built solutions that handle real users, real data, and
              real business requirements under production conditions.
            </p>
          </div>

          {/* Industry Knowledge */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            role="listitem"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Building2
                  className="w-8 h-8 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold">Industry Knowledge</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We've worked across fintech, healthcare, real estate, retail,
              SaaS, and crypto markets. This cross-industry experience helps us
              bring fresh insights, creating innovative solutions that go beyond
              single-industry limitations.
            </p>
          </div>
        </div>

        {/* Leadership Placeholder (Optional) */}
        {/* <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-8 text-center shadow-sm">
          <Users className="w-10 h-10 mx-auto text-gray-500 mb-4" aria-hidden="true" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            [Placeholder for leadership profiles: <br />
            "Led by <span className="font-semibold">[Founder Name]</span>, former
            [Background], our leadership team brings [X years] of combined
            experience in enterprise software, AI research, and blockchain
            development."]
          </p>
        </div> */}
      </div>
    </section>
  );
}

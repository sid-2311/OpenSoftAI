"use client";

import React from "react";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function IndustryProjectShowcase() {
  const projects = [
    {
      category: "E-Commerce Websites & Applications",
      description:
        "We craft high-performance E-Commerce websites and mobile apps designed to boost conversions and enhance customer experience. Our solutions include AI-driven product recommendations, intuitive dashboards, and secure payment integrations.",
      examples: [
        { name: "Finditez", url: "https://www.finditez.com" },
        { name: "FYE", url: "https://www.fye.com" },
      ],
    },
    {
      category: "Healthcare Management Systems",
      description:
        "Our healthcare management platforms simplify clinical workflows and improve patient engagement. We specialize in telemedicine, EMR integration, appointment scheduling, and HIPAA-compliant cloud-based systems.",
      examples: [
        { name: "America Medic", url: "http://americamedic.com" },
        { name: "Induction Healthcare", url: "http://inductionhealthcare.com" },
        { name: "Divya Ayurveda", url: "http://divyaayurveda.com" },
      ],
    },
    {
      category: "Real Estate Websites & Platforms",
      description:
        "We develop digital solutions for real estate professionals to streamline property listings, lead management, and customer communication. Our work includes portals, mobile apps, and advanced search tools powered by automation and analytics.",
      examples: [
        { name: "HomeOptima", url: "https://www.homeoptima.com" },
        { name: "The Pas Falls", url: "http://thepasfalls.dk" },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-blue-600">Industry Expertise</span> & Project Portfolio
        </h2>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          Take a closer look at how OpenSoftAI empowers industries with innovative,
          scalable, and business-driven technology solutions.
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 relative hover:shadow-2xl transition duration-300 border border-blue-100 text-left"
              role="region"
              aria-label={`${proj.category} project showcase`}
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                {proj.category}
              </h3>
              <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                {proj.description}
              </p>
              <h4 className="font-semibold text-gray-800 mb-2">
                Examples of Our Projects:
              </h4>
              <ul className="space-y-2">
                {proj.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <a
                      href={ex.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {ex.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
}

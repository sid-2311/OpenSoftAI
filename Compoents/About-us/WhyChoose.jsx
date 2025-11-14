"use client"; // Required for Lucide icons

import React from "react";
import { ShieldCheck, Layers, Rocket, Award } from "lucide-react";

const FEATURES = [
  {
    title: "End-to-End Development Capability",
    desc: "Rather than managing multiple vendors, you get comprehensive development services under one roof. This ensures better coordination, clearer communication, and seamless solutions.",
    icon: <Layers className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
  },
  {
    title: "Security-First Architecture",
    desc: "We build with security in mind from the ground up. From sensitive business data to AI-driven systems, security is embedded into every step of our process.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
  },
  {
    title: "Scalable, Future-Ready Solutions",
    desc: "Our technology solutions grow with your business. Built on scalable architecture, what we create today supports your needs tomorrow as you expand.",
    icon: <Rocket className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
  },
  {
    title: "Proven Track Record",
    desc: "Our success is defined by client success. From startups to enterprises, we’ve enabled funding, market expansion, and competitive advantages.",
    icon: <Award className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-indigo-600">OpenSoft AI</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we deliver secure, scalable, and
            future-ready technology solutions that drive measurable impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              role="listitem"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials Placeholder */}
       
      </div>
    </section>
  );
}

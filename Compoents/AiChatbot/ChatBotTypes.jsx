"use client";
import React, { useState } from "react";
import {
  CheckCircle,
  Star,
  Users,
  Shield,
  Activity,
} from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function ChatbotTypesSection({ data }) {
  const section = data?.types || {};
  const heading = section.heading || {};
  const items = section.items || [];

  const [active, setActive] = useState(0);

  if (!heading.main) return null;

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            {heading.main}
            <span className="block text-blue-600 mt-2">
              {heading.highlight}
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            {section.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {items.map((item, i) => {
            return (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition ${active === i
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-blue-200"
                  }`}
              >
                <DynamicIcon name={item.icon} className="w-5 h-5" />
                {item.subtitle}
              </button>
            );
          })}
        </div>

        {/* Active Card */}
        {items[active] && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">
            {/* Header */}
            <div className={`p-10 bg-gradient-to-r ${items[active].color} text-white`}>
              <h3 className="text-3xl font-bold mb-2">
                {items[active].title}
              </h3>
              <p className="text-blue-100">
                {items[active].description}
              </p>
            </div>

            {/* Body */}
            <div className="grid md:grid-cols-2 gap-10 p-10">
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  Key Capabilities
                </h4>

                <div className="space-y-3">
                  {items[active].features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Real-World Impact
                </h4>

                <div className="bg-blue-50 p-6 rounded-2xl">
                  <div className="text-sm text-gray-600 mb-2">
                    {items[active].caseStudy.company}
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {items[active].caseStudy.stat}
                  </div>
                  <div className="font-medium mb-3">
                    {items[active].caseStudy.detail}
                  </div>
                  <p className="text-gray-700">
                    {items[active].caseStudy.extra}
                  </p>
                </div>

                {/* Static badges */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl text-center border">
                    <Users className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                    <div className="font-bold">24/7</div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center border">
                    <Shield className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                    <div className="font-bold">100%</div>
                    <div className="text-xs text-gray-600">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

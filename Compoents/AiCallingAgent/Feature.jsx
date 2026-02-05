"use client";

import React from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function AICallingAgents({ data }) {
  if (!data) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {data.heading}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {data.items?.map((feature, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <DynamicIcon name={feature.icon} className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

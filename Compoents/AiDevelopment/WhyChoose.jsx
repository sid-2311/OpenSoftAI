"use client";

import React from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function WhyChooseUs({ data }) {
  if (!data) return null;

  const { header, features } = data;

  return (
    <section
      id={data.id}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-blue-900 mb-4">
            {header.title}
          </h2>
        </header>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {

            return (
              <article
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <DynamicIcon name={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-900 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-md">
                  {feature.description}
                </p>

                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded-r">
                  <p className="text-blue-900 font-medium italic">
                    {feature.highlight}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

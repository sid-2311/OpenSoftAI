"use client";

import React from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function AdvancedFeaturesSection({ data }) {
  if (!data) return null;

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              {data.heading.main}
            </span>
            <span className="block mt-2">
              {data.heading.highlight}
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20">
          {data.items.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Icon */}
              <div className="flex justify-center w-full lg:w-2/5">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 scale-150" />
                  <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-xl">
                    <DynamicIcon name={feature.icon} className="w-16 h-16" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                      <DynamicIcon name={feature.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>

                  {feature.details?.length > 0 && (
                    <div className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            <DynamicIcon name={detail.icon} className="w-4 h-4" />
                          </div>
                          <p className="text-gray-700 text-sm">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function OpenSoftAIPartner({ data }) {
  if (!data) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {data.heading}
          </h2>
        </header>

        {/* Features */}
        <section className="grid lg:grid-cols-3 gap-8 mb-20">
          {data.items.map((feature, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
                  <DynamicIcon name={feature.icon} className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        {/* Trust Signals */}
        <section className="bg-white rounded-3xl p-12 shadow-2xl border border-blue-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-900 mb-3">
              {data.trustSignals.heading}
            </h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.trustSignals.items.map((signal, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <DynamicIcon name={signal.icon} className="w-6 h-6" />
                </div>
                <p className="text-gray-700 font-medium pt-2">
                  {signal.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

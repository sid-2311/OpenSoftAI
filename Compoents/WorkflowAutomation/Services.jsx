"use client";
import React from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import { motion } from "framer-motion";

export default function AIWorkflowAutomationCapabilities({ data }) {
  const section = data?.services || {};
  const capabilities = section.capabilities || [];

  if (!section.title) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {section.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-6">
            {section.description}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((cap, index) => {
            return (
              <div key={index} className="group perspective">
                <motion.div
                  className="relative w-full h-[22rem] cursor-pointer transition-transform duration-700 transform-style-preserve-3d"
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-blue-700 rounded-2xl shadow-lg flex flex-col justify-center items-center backface-hidden p-6 text-center">
                    <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-xl mb-4 shadow-md shadow-blue-400/40">
                      <DynamicIcon name={cap.icon || "Workflow"} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed px-4">
                      {cap.description}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-6 backface-hidden rotate-y-180 flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-4">
                      <DynamicIcon name={cap.icon || "Workflow"} className="w-6 h-6 text-blue-700" />
                      <h3 className="text-xl font-bold text-blue-700">
                        {cap.title}
                      </h3>
                    </div>
                    {cap.details && (
                      <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm leading-relaxed">
                        {cap.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

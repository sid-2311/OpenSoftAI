// components/CopilotTypesSection.js
"use client";

import { useState } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function CopilotTypesSection({ data }) {
  const [activeTab, setActiveTab] = useState(1);

  if (!data) return null;

  const { heading, subHeading, items = [] } = data;

  const active = items.find((c) => c.id === activeTab) || items[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-4xl font-bold mb-6 bg-blue-600 bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {subHeading}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {items.map((copilot) => {
            const isActive = activeTab === copilot.id;

            return (
              <button
                key={copilot.id}
                onClick={() => setActiveTab(copilot.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${isActive
                  ? `bg-gradient-to-r ${copilot.color} text-white border-transparent shadow-lg`
                  : `bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600`
                  }`}
              >
                <DynamicIcon
                  name={copilot.icon}
                  className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-500"
                    }`}
                />
                <span className="font-semibold">{copilot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        <div
          key={active.id}
          className={`relative bg-white rounded-3xl p-10 shadow-lg border-2 ${active.borderColor} animate-slide-up`}
        >
          <div className="mb-6">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${active.color} rounded-2xl flex items-center justify-center shadow-lg`}
            >
              <DynamicIcon name={active.icon} className="w-10 h-10 text-white" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-slate-800 mb-2">
            {active.title}
          </h3>

          <p
            className={`text-lg font-semibold bg-gradient-to-r ${active.color} bg-clip-text text-transparent mb-6`}
          >
            {active.subtitle}
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            {active.description}
          </p>

          {/* Case Study */}
          <div
            className={`bg-gradient-to-r ${active.color} bg-opacity-5 rounded-xl p-6 mb-6 border-l-4 ${active.borderColor}`}
          >
            <p className="text-white italic leading-relaxed">
              {active.caseStudy}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${active.color} rounded-full shadow-md`}
            >
              <span className="text-white font-bold text-lg">
                {active.stats.metric}
              </span>
              <span className="text-white/90 text-sm">
                {active.stats.value}
              </span>
            </div>

            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-r ${active.color} flex items-center justify-center text-white font-bold`}
            >
              →
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

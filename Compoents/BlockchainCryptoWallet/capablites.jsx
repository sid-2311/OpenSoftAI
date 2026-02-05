"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function CryptoCapabilitiesSection({ data }) {
  const [expandedCards, setExpandedCards] = useState({});

  // Extract section data
  const section = data?.cryptoCapabilities || {};
  const header = section.header || {};
  const capabilitiesData = section.capabilities || [];

  const capabilities = capabilitiesData.map(cap => ({
    id: cap.id,
    icon: cap.icon,
    title: cap.title,
    subtitle: cap.subtitle,
    gradient: cap.gradient || 'from-blue-500 to-cyan-500',
    sections: (cap.sections || []).map(s => ({
      title: s.title,
      icon: s.icon,
      items: s.items || []
    }))
  }));

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (!section.header) return null;

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
            {header.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
              {header.highlight}
            </span>
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-6">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const isExpanded = expandedCards[capability.id];

            return (
              <div
                key={capability.id}
                className="group"
              >
                {/* Card Header */}
                <div
                  onClick={() => toggleCard(capability.id)}
                  className="cursor-pointer"
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
                    <div className="relative bg-white rounded-2xl p-6 md:p-8  transition-all border-2 border-blue-100 hover:border-blue-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                            <DynamicIcon name={capability.icon || "Wallet"} className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-2">
                              {capability.title}
                            </h3>
                            <p className="text-gray-600">{capability.subtitle}</p>
                          </div>
                        </div>
                        <div className={`w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="mt-4 animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6">
                      {capability.sections.map((sec, sectionIndex) => {
                        const SectionIcon = sec.icon;
                        return (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 h-full"
                          >
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                                <DynamicIcon name={sec.icon || "Key"} className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-gray-900">{sec.title}</h4>
                            </div>

                            <div className="space-y-4">
                              {sec.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex gap-3 group/item"
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                                  <div>
                                    <div className="font-semibold text-gray-900">{item.label}</div>
                                    <div className="text-sm text-gray-600">{item.desc}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 15s ease-in-out infinite;
          animation-delay: -7.5s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
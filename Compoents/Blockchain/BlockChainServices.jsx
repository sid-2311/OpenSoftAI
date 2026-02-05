"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Shield } from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";


export default function BlockchainServices({ data }) {
  const [expandedService, setExpandedService] = useState(null);

  const servicesSection = data?.blockchainServicesSection || {};
  const services = servicesSection.services || [];


  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 overflow-hidden" aria-labelledby="blockchain-services-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-16">
          <h2 id="blockchain-services-heading" className="text-2xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {servicesSection.header?.titleGradient || "Core Blockchain Development"}{" "}
            </span>

            <span className="text-gray-900">{servicesSection.header?.titleNormal || "Offerings"}</span>
          </h2>
        </header>

        {/* Services accordion */}
        <div className="space-y-6">
          {services.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <article
                key={service.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Service header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-8 flex items-start gap-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={isExpanded}
                  aria-controls={`service-${service.id}-content`}
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                  >
                    <DynamicIcon name={service.icon} className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Expandable content */}
                <div
                  id={`service-${service.id}-content`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {service.categories.map((category, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
                        >
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            {category.title}
                          </h4>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                                <Shield className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {servicesSection.cta?.title || "Ready to Build Your Blockchain Solution?"}
          </h3>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-2">
            {servicesSection.cta?.description || "Let's discuss how our blockchain expertise can transform your business"}
          </p>
          <Link
            href={servicesSection.cta?.button?.href || "/contact-us"}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-white text-blue-700 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {servicesSection.cta?.button?.label || "Schedule a Consultation"}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

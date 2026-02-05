"use client";

import React from "react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function AIServicesBenefits({ data }) {
  if (!data) return null;

  const { header, services, cta } = data;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {header.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {header.description}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {

            return (
              <article
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <DynamicIcon name={service.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href={cta.href}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

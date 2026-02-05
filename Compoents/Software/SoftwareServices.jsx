"use client";

import { useState } from "react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function SoftwareServices({ data }) {
  const [activeCategory, setActiveCategory] = useState("all");

  // Extract section data
  const section = data?.softwareSolutionsSection || {};
  const header = section.header || {};
  const categoriesList = section.categories || [];
  const servicesData = section.services || [];
  const cta = section.cta || {};

  const services = servicesData.map(s => ({
    icon: s.icon,
    title: s.title,
    description: s.description,
    category: s.category,
    link: s.link,
  }));

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  if (!section.header) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-4">
            {header.title}
          </h2>
          <p className="text-md text-slate-600 max-w-3xl mx-auto">
            {header.description}
          </p>
        </header>

        {/* Category Filter */}
        <nav
          className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 justify-start sm:justify-center gap-3 mb-12 pb-2 no-scrollbar"
          aria-label="Software Categories"
        >
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.id
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            return (
              <Link key={index} href={service.link} className="group">
                <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 hover:border-blue-300 group-hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <DynamicIcon name={service.icon} className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            {cta.heading}
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            {cta.description}
          </p>
          <Link
            href={cta.button?.link || "/contact-us"}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {cta.button?.text || "Get Started Today"}
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import DynamicIcon from "../DynamicIcon";

export default function Portfolio({ sections }) {
  const [activeCategory, setActiveCategory] = useState("all");

  if (!sections) return null;

  const {
    portfolioHero,
    stats,
    services,
    projects,
    whyChooseUs,
    technologies,
    processSteps,
    testimonial,
    cta
  } = sections;

  const categories = projects?.categories || ["all", "E-Commerce", "Healthcare", "Real Estate", "Food & Delivery", "Gaming", "Travel & Tourism", "ERP & Reporting", "B2B Domain", "Blockchain", "Web Application"];

  const projectItems = projects?.items || [];
  const filteredProjects = activeCategory === "all"
    ? projectItems
    : projectItems.filter(p => p.category === activeCategory);

  const statsItems = stats?.items || [];
  const servicesItems = services?.items || [];
  const technologiesItems = technologies?.items || [];
  const whyChooseUsItems = whyChooseUs?.items || [];
  const processStepsItems = processSteps?.items || [];

  return (
    <>


      <main className="bg-white text-gray-900 font-sans overflow-hidden">
        {/* HERO SECTION - SEO Optimized */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-6xl">
            <div className="mb-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border-2 border-white/30 transform hover:scale-110 transition-all duration-300">
                <DynamicIcon name={portfolioHero?.heroIcon || "Cpu"} className="w-10 h-10 text-white" aria-label="Technology Icon" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
              {portfolioHero?.title}
            </h1>
            <h2 className="mt-6 text-xl md:text-2xl max-w-4xl mx-auto text-white/95 font-light leading-relaxed">
              {portfolioHero?.subtitle}
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/80">
              {portfolioHero?.description}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={portfolioHero?.primaryCTA?.href}
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label={`View our ${portfolioHero?.primaryCTA?.label}`}
              >
                <DynamicIcon name={portfolioHero?.primaryCTA?.icon || "Package"} className="w-6 h-6" />
                {portfolioHero?.primaryCTA?.label} <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href={portfolioHero?.secondaryCTA?.href}
                className="inline-flex items-center gap-3 bg-blue-700/30 backdrop-blur-sm text-white border-3 border-white/50 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600/40 hover:scale-105 transition-all duration-300"
                aria-label={portfolioHero?.secondaryCTA?.label}
              >
                <DynamicIcon name={portfolioHero?.secondaryCTA?.icon || "Rocket"} className="w-6 h-6" />
                {portfolioHero?.secondaryCTA?.label}
              </a>
            </div>
          </div>


        </section>

        {/* STATS SECTION - Trust Indicators for SEO */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white" aria-label="Company statistics">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsItems.map((stat, i) => (
                <article key={i} className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-blue-300" aria-hidden="true">
                    <DynamicIcon name={stat.icon} className="w-10 h-10" />
                  </div>
                  <div className="text-3xl font-black mb-2">{stat.value}</div>
                  <div className="text-xl text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-blue-200">{stat.desc}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - SEO Rich Content */}
        <section className="py-24 px-6 bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                {services?.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {services?.description}
              </p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesItems.map((service, i) => (
                <article key={i} className={`group bg-gradient-to-br ${service.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white`}>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <DynamicIcon name={service.icon} className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - Portfolio Showcase */}
        <section id="projects" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="projects-heading" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                {projects?.title}
              </h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto">
                {projects?.description}
              </p>
            </header>

            <div className="relative w-full max-w-6xl mx-auto px-4">
              <nav
                className="flex overflow-x-auto no-scrollbar gap-3 sm:gap-4 mb-10 sm:mb-12 py-2"
                aria-label="Project categories"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`relative flex-shrink-0 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300
          ${activeCategory === cat
                        ? "bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg ring-2 ring-blue-300 scale-105"
                        : "bg-white text-blue-900 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                      }`}
                  >
                    {activeCategory === cat && (
                      <span className="absolute inset-0 rounded-full bg-blue-400/10 animate-pulse"></span>
                    )}
                    <span className="relative z-10">
                      {cat === "all" ? "All Projects" : cat}
                    </span>
                  </button>
                ))}
              </nav>
            </div>





            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <article
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div
                    className="block cursor-default"
                    aria-label={`${project.name} - ${project.desc}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className="text-blue-600 group-hover:text-blue-700 mt-1 flex-shrink-0"
                          aria-hidden="true"
                        >
                          <DynamicIcon name={project.icon} className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors mb-1">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {project.desc}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ArrowRight
                        className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US - Trust Factors for SEO */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-950 to-blue-900 text-white" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-2xl md:text-4xl font-black mb-4">
                {whyChooseUs?.title}
              </h2>
              <p className="text-md text-blue-200 max-w-3xl mx-auto">
                {whyChooseUs?.description}
              </p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsItems.map((item, i) => (
                <article key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-blue-300 mb-4" aria-hidden="true">
                    <DynamicIcon name={item.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-200 mb-3">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                    <DynamicIcon name="Sparkles" className="w-4 h-4" />
                    {item.highlight}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES - Tech Stack Showcase */}
        <section className="py-24 px-6 bg-white" aria-labelledby="tech-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="tech-heading" className="text-2xl md:text-4xl font-black text-blue-950 mb-4">
                {technologies?.title}
              </h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto">
                {technologies?.description}
              </p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologiesItems.map((tech, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  <div className="text-blue-600 group-hover:text-blue-700" aria-hidden="true">
                    <DynamicIcon name={tech.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-950 text-lg">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        {/* PROCESS SECTION */}
        <section
          className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2
                id="process-heading"
                className="text-2xl md:text-4xl font-black text-blue-950 mb-4"
              >
                {processSteps?.title}
              </h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto">
                {processSteps?.description}
              </p>
            </header>

            <div className="relative max-w-5xl mx-auto">
              {/* Center line (desktop only) */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2" />

              <div className="space-y-16">
                {processStepsItems.map((step, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:justify-start" : "md:justify-end"
                        }`}
                    >
                      {/* ICON */}
                      <div
                        className="
                  relative md:absolute 
                  md:left-1/2 md:-translate-x-1/2
                  w-12 h-12 md:w-14 md:h-14
                  bg-gradient-to-br from-blue-600 to-blue-700
                  text-white rounded-xl
                  flex items-center justify-center
                  shadow-lg
                "
                        aria-hidden="true"
                      >
                        <DynamicIcon name={step.icon} className="w-8 h-8" />
                      </div>

                      {/* CARD */}
                      <div
                        className={`w-full md:w-5/12 ${isLeft
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                          }`}
                      >
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
                          <div className="text-sm font-bold text-blue-600 mb-2">
                            Step {index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-blue-950 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* TESTIMONIAL SECTION */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-blue-950 text-white" aria-labelledby="testimonial-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">

            </div>
            <blockquote>
              <p className="text-xl md:text-xl font-light italic mb-6 leading-relaxed">
                "{testimonial?.quote}"
              </p>
              <footer>
                <cite className="not-italic">
                  <div className="font-bold text-xl">{testimonial?.author}</div>
                  <div className="text-blue-300">{testimonial?.role}</div>
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA SECTION - Conversion Optimized */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-950 text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">

            <h2 id="cta-heading" className="text-2xl md:text-4xl font-black mb-6">
              {cta?.heading}
            </h2>
            <p className="text-lg text-blue-200 mb-4">{cta?.subtext}</p>
            <p className="text-md text-blue-300 mb-12">
              {cta?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`mailto:${cta?.email || 'info@opensoftai.com'}`}
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label="Contact us via email"
              >
                <DynamicIcon name={cta?.emailIcon || "Globe"} className="w-6 h-6" />
                {cta?.emailLabel} <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href={`tel:${cta?.phone || '+919256497999'}`}
                className="inline-flex items-center gap-3 bg-blue-700/30 backdrop-blur-sm text-white border-3 border-white/50 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600/40 hover:scale-105 transition-all duration-300"
                aria-label={`Call us at ${cta?.phone || '+91 925 649 7999'}`}
              >
                <DynamicIcon name={cta?.phoneIcon || "Smartphone"} className="w-6 h-6" />
                {cta?.phoneLabel}: {cta?.phone || '+91 9256497999'}
              </a>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
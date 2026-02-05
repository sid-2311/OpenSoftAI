"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Dynamic data from API - use data prop to access section data

export default function HeroSection({ data }) {
  // Extract section data
  const section = data?.hero || {};
  const heading = section.heading || {};
  const cta = section.cta || {};

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={section.backgroundImage || "/images/app-development.jpg"}
            alt={section.title || "App Development Services"}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-20 flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {section.title || "App Development Services –"}
              <br className="hidden sm:block" />
              <span className="text-gray-200"> {section.subtitle || "Native, Cross-Platform & Enterprise Solutions"}</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              {section.description || "Build high-performance mobile and web applications with our expert team — tailored for startups and enterprises alike."}
            </p>

            <div>
              <Link
                href={cta.link || "/contact-us"}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
              >
                {cta.label || "Book a Call"}
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side Placeholder (hidden on mobile) */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

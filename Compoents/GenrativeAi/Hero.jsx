"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ data }) {
  const section = data?.hero || {};

  if (!section.title) return null;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="generative-ai-heading"
    >
      {/* MOBILE BG */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />

      {/* DESKTOP BG from CMS */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src={section.backgroundImage}
          alt={section.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="max-w-xl">
            <h1
              id="generative-ai-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              {section.title}
            </h1>

            <Link
              href={section.ctaLink}
              className="group inline-flex items-center px-8 py-4 text-md font-semibold 
              text-white bg-transparent border-2 border-white rounded-full
              hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              {section.ctaText}
              <span className="ml-3 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

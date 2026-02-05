"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ data }) {
  const hero = data?.hero || {};
  const cta = hero?.cta || {};

  if (!hero.title) return null;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="ai-copilot-heading"
    >
      {/* MOBILE Gradient */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />

      {/* DESKTOP Background Image from CMS */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src={hero.backgroundImage}
          alt="AI Copilot Development"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="max-w-2xl">
            <h1
              id="ai-copilot-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              {hero.title}
            </h1>

            <Link
              href={cta.href || "/contact-us"}
              className="group inline-flex items-center px-8 py-4 text-md font-semibold 
              text-white bg-transparent border-2 border-white rounded-full
              hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              {cta.label}
              <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 hidden sm:block bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
    </section>
  );
}

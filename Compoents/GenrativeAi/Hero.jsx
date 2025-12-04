"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen w-full overflow-hidden"
        aria-labelledby="generative-ai-heading"
      >
        {/* MOBILE: Gradient Background */}
        <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
          {/* Mobile Glow Effects */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* DESKTOP: Background Image */}
        <div className="absolute inset-0 z-0 hidden sm:block">
          <Image
            src="/images/ai-text-on-a-digital-blue-background-with-pixel-pattern.jpg"
            alt="Generative AI Development Background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Desktop Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="max-w-xl">
              {/* Heading */}
              <h1
                id="generative-ai-heading"
                className="text-3xl md:text-4xl  font-bold text-white mb-6 leading-tight"
              >
                Generative AI Development Services – Create Smarter, Faster, and
                Scalable Content with AI
              </h1>

              {/* CTA Button */}
              <Link
                href="/contact-us"
                className="group w-full sm:w-fit inline-flex items-center px-8 py-4 text-md font-semibold 
                text-white bg-transparent border-2 border-white rounded-full
                hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Book a Call
                <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* DESKTOP ONLY: Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 hidden sm:block bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
      </section>
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="token-hero-heading"
    >
      {/* MOBILE: Gradient Background */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
        {/* Mobile Glow Effects */}
        <div className="absolute -top-20 -left-16 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* DESKTOP: Background Image */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/images/token.jpg"
          alt="AI Calling Agent Development"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1
              id="token-hero-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Launch Secure and Scalable Crypto Tokens with OpenSoftAI
            </h1>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="group w-full sm:w-fit inline-flex items-center px-8 py-4 text-md font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Book a Call
              <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP: Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent z-10 hidden sm:block"></div>
    </section>
  );
}

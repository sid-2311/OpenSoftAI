"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/digital-tablet-with-stethoscope.webp"
            alt="Digital Tablet with Stethoscope"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight">
              Hospital Management System Development {" "}
              <span className="text-indigo-400">
                Comprehensive Healthcare Solutions
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Streamline hospital workflows, enhance patient care, and automate
              management processes with our advanced digital healthcare systems.
            </p>

            <Link
              href="/contact-us"
              className="mt-4 inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a Call
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Optional Right Side Placeholder (hidden on mobile) */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

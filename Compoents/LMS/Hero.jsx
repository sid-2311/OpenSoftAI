"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-full bg-center bg-no-repeat">
            <Image
              src="/images/Students-studying-together-for-education-concept.png"
              alt="AI Calling Agent Development"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/90 to-transparent md:via-[#0B0417]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-tight">
              LMS with Live Class Software Development – Interactive Learning
              Platforms That Actually Engage
            </h1>

            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-gray-200 hover:text-black transition-all text-sm sm:text-base"
              >
                Book a Call
                <span className="text-lg sm:text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

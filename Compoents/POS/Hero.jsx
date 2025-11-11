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
          <Image
            src="/images/pos.jpg"
            alt="Digital Tablet with Stethoscope"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left side content */}
          <div className="w-full md:w-1/2 space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              POS System Software Development – Modern Point of Sale Solutions
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              Streamline transactions, track inventory, and boost business efficiency with our cutting-edge POS software solutions.
            </p>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base"
            >
              Book a Call <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Right side placeholder (for layout balance on desktop) */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

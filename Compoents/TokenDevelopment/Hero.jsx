"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      {/* SEO Head */}
     
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center overflow-hidden">
        {/* Background Image (Right side) */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-full bg-center bg-no-repeat">
            <Image
              src="/images/token.avif"
              alt="AI Calling Agent Development"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-4xl font-bold leading-tight">
      Launch Secure and Scalable Crypto Tokens with OpenSoft AI




            </h1>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-gray-200 hover:text-black transition-all"
            >
              Book a Call
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Right Side Placeholder */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

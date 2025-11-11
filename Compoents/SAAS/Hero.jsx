"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>SaaS Software Development | OpenSoft AI</title>
        <meta
          name="description"
          content="Build scalable SaaS solutions and grow recurring revenue with OpenSoft AI’s cloud-first software development services."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] md:min-h-[90vh] bg-[#0B0417] text-white flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/saas.jpg"
            alt="SaaS Image"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 flex flex-col md:flex-row items-center md:items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight">
              SaaS Software Development – Build Recurring Revenue with
              Cloud-First Solutions
            </h1>

            <div>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Book a Call
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Right Placeholder (Desktop only) */}
          <div className="hidden md:block w-1/2"></div>
        </div>

        {/* Optional Gradient Fade for Mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0417] to-transparent md:hidden"></div>
      </section>
    </>
  );
}

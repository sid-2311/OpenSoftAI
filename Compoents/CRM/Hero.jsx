"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      {/* SEO Head */}
    

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-full bg-center bg-no-repeat">
            <Image
              src="/images/crm.png"
              alt="AI Calling Agent Development"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Custom CRM Development – Build Customer Relationships That Actually Drive Revenue
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Empower your business with a powerful, customized CRM solution built to scale and retain your customers.
            </p>

            <div>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base"
              >
                Book a Call
                <span className="text-lg sm:text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side Placeholder */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

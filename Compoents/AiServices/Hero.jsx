"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      {/* SEO Meta Tags */}
      

      <section
        className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center"
        aria-label="Custom AI Development Services Hero Section"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-full h-full">
            <Image
              src="/images/download.jpg"
              alt="AI technology background"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Custom AI Development Services to Power Smarter Businesses
            </h1>

            <p className="text-lg text-gray-300">
              Unlock the potential of Artificial Intelligence with solutions tailored to your unique business needs.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-gray-200 hover:text-black transition-all w-fit"
            >
              Book a Call
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Right side placeholder for layout balance */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

'use client';

import Head from 'next/head';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ConsultationPage() {
  return (
    <>
    

      <section
        className="flex justify-center items-center py-16 px-6 bg-slate-900 relative overflow-hidden"
        aria-labelledby="consultation-heading"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-90"></div>

        {/* Decorative circles (optimized with next/image for performance) */}
       
        

        {/* Main content */}
        <div className="relative z-10 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl shadow-2xl text-center text-white max-w-5xl w-full p-10">
          {/* Heading */}
          <h2
            id="consultation-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get your Free Consultation today!
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg mb-6 text-gray-100 max-w-3xl mx-auto">
            The OpenSoftAI team will guide you on your journey to building a
            strong digital presence, helping you stay ahead of your competition.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm font-medium">
            <span>
              India:{' '}
              <a
                href="tel:+919256497999"
                className=" hover:text-cyan-300 transition"
              >
                +91 92564 97999
              </a>
            </span>
            <span className="hidden md:block">|</span>
            <a
              href="mailto:info@opensoftai.com"
              className="text-white font-medium hover:text-cyan-300 transition"
            >
              info@opensoftai.com
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition transform hover:scale-105"
            aria-label="Get your free consultation"
          >
            GET FREE CONSULTATION
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

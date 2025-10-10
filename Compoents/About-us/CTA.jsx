"use client"; // Required for client-side interactivity if needed

import Link from "next/link";
import React from "react";

export default function CallToActionCard() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Card Container */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center border border-blue-100">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to{" "}
            <span className="text-blue-600">Transform Your Business?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            The future belongs to businesses that adapt, innovate, and leverage
            technology to create real value. Whether it’s AI automation,
            blockchain solutions, or custom software – we’re here to help you
            succeed.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
            Partner with{" "}
            <span className="font-semibold text-blue-700">OpenSoft AI</span>{" "}
            and let’s build the future together. Great technology should make
            your business stronger, more efficient, and more capable of
            achieving your vision.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              role="button"
            >
              Schedule Your Free Consultation
            </Link>
            
            <Link
              href="/Portfolio"
              className="px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold shadow-md hover:bg-gray-200 transition duration-300"
              role="button"
            >
              View Our Portfolio
            </Link>
          </div>

          {/* Sub Footer Line */}
          <p className="mt-10 text-sm text-gray-500">
            Ready to turn technology into{" "}
            <span className="font-semibold text-blue-600">
              competitive advantage?
            </span>{" "}
            Let’s create something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
}

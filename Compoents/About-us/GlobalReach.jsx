"use client"; // Required for Lucide icons

import React from "react";
import { Globe, Users, Headphones } from "lucide-react";

export default function GlobalReach() {
  return (
    <section
      className="relative bg-gray-50 py-20"
      aria-labelledby="global-reach-heading"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        {/* Heading */}
        <h2
          id="global-reach-heading"
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Our <span className="text-indigo-600">Global Reach</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          Technology knows no borders, and neither do we. While we serve clients
          globally, we maintain the personal attention and communication that
          makes complex technology projects successful.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 border-t-4 border-indigo-600"
            role="region"
            aria-labelledby="global-presence"
          >
            <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" aria-hidden="true" />
            <h3 id="global-presence" className="text-xl font-semibold text-gray-800 mb-3">
              Global Presence
            </h3>
            <p className="text-gray-600">
              Serving clients across North America, Europe, and Asia with 24/7
              support capabilities.
            </p>
          </div>

          <div
            className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
            role="region"
            aria-labelledby="distributed-team"
          >
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" aria-hidden="true" />
            <h3 id="distributed-team" className="text-xl font-semibold text-gray-800 mb-3">
              Distributed Team
            </h3>
            <p className="text-gray-600">
              Our remote-first approach lets us work with the best talent,
              regardless of location.
            </p>
          </div>

          <div
            className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 border-t-4 border-green-500"
            role="region"
            aria-labelledby="support-247"
          >
            <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4" aria-hidden="true" />
            <h3 id="support-247" className="text-xl font-semibold text-gray-800 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Headquartered in [Location] with team members across [Regions]
              ensuring round-the-clock availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

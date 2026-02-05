"use client";

import Image from "next/image";
import Link from "next/link";

export default function ClientsPage({ data }) {
  if (!data) return null;

  const header = data.header;
  const content = data.content;

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="clients-heading"
    >
      {/* Header */}
      <header className="text-center py-16 px-4">
        <h1
          id="clients-heading"
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          {header.titlePrefix}{" "}
          <span className="text-gray-900">{header.titleHighlight}</span>{" "}
          {header.titleSuffix}
        </h1>
      </header>

      {/* Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
            {content.partnersLabel}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {content.titlePrefix}{" "}
            <span className="font-normal">{content.titleHighlight}</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {content.description}
          </p>

          <Link
            href={content.buttonLink}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 group w-fit"
          >
            {content.buttonText}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Right Map */}
        <div className="relative w-full h-[420px] flex items-center justify-center">
          <Image
            src={data.mapImage}
            alt="World map"
            fill
            className="object-contain opacity-90 select-none"
          />

          {/* India Pin */}
          <div
            className="absolute animate-bounce"
            style={{ top: "50%", left: "66%" }}
          >
            <div className="w-2 h-2 bg-red-600 rounded-full shadow-lg shadow-red-400"></div>
            <span className="text-xs mt-1 block text-red-700 font-semibold">
              India
            </span>
            <span className="absolute inset-0 w-5 h-5 rounded-full bg-red-400 opacity-40 animate-ping"></span>
          </div>
        </div>
      </section>
    </main>
  );
}

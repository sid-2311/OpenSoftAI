"use client";
import React from "react";

const colorMap = {
  "blue-600": "text-blue-600",
  "blue-700": "text-blue-700",
  "blue-800": "text-blue-800",
  "blue-900": "text-blue-900",
};

export default function AIExpertiseSection({ data }) {
  if (!data) return null;

  const {
    header,
    teamHighlight,
    numbers,
    retentionNote,
    stories,
    footerNote,
  } = data;

  return (
    <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {header.title}
            <br />
            <span className="text-blue-300">{header.highlight}</span>
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed max-w-4xl">
            {header.description}
          </p>
        </header>

        {/* Team Highlight */}
        <article className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-400/20">
          <p className="text-md md:text-lg text-blue-50 leading-relaxed">
            Our team of{" "}
            <span className="font-bold text-white text-2xl">
              {teamHighlight.count} {teamHighlight.text}
            </span>{" "}
            {teamHighlight.description}
          </p>
        </article>

        {/* Numbers */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {numbers.heading}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {numbers.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div
                  className={`text-3xl md:text-4xl font-bold ${
                    colorMap[item.color]
                  } mb-3`}
                >
                  {item.number}
                </div>
                <p className="text-gray-700 font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Retention Note */}
        <section className="bg-blue-600 rounded-3xl p-10 mb-12 shadow-2xl text-center">
          <div className="inline-block bg-white/20 rounded-full px-8 py-2 mb-6">
            <p className="text-white font-semibold">
              {retentionNote.badge}
            </p>
          </div>
          <p className="text-xl text-white font-medium leading-relaxed">
            {retentionNote.text}
          </p>
        </section>

        {/* Stories */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {stories.map((story, index) => (
            <article
              key={index}
              className={`rounded-2xl p-10 ${
                story.variant === "glass"
                  ? "bg-white/10 backdrop-blur-sm border border-blue-400/30 text-blue-100"
                  : "bg-gradient-to-br from-blue-400 to-blue-600 text-blue-50 shadow-2xl"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {story.title}
              </h3>
              <p className="text-md md:text-lg leading-relaxed">
                {story.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-blue-300 italic text-lg">{footerNote}</p>
        </footer>
      </div>
    </section>
  );
}

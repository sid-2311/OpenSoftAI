"use client"; // remove if using Next.js pages router

import React from "react";

export default function AIExpertiseSection() {
  return (
    <section
      className="bg-gradient-to-b from-blue-950 to-blue-900 py-20 sm:py-24"
      aria-labelledby="ai-expertise-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16">
          <h2
            id="ai-expertise-heading"
            className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Why We Know AI Better Than Most:
            <br />
            <span className="text-blue-300">A Decade of Getting It Right</span>
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl">
            We've been doing this for over ten years — not ten years of talking
            about AI, but ten years of actually building it, deploying it, and
            watching it transform businesses from the inside out.
          </p>
        </header>

        {/* Team Highlight */}
        <article
          className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-400/20"
          aria-label="Team Expertise"
        >
          <p className="text-lg text-blue-50 leading-relaxed">
            Our team of{" "}
            <span className="font-bold text-white text-2xl">
              25+ certified AI engineers
            </span>{" "}
            has seen what works, what doesn’t, and what makes the difference
            between AI that impresses in demos and AI that delivers results
            every single day.
          </p>
        </article>

        {/* Numbers Section */}
        <section
          aria-labelledby="ai-numbers-heading"
          className="mb-16"
        >
          <h3
            id="ai-numbers-heading"
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            The Numbers Tell Part of Our Story
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "300+",
                text: "Successful AI systems still running strong",
                color: "text-blue-600",
              },
              {
                number: "5+",
                text: "Major AI platforms certified (TensorFlow, PyTorch, AWS, GCP, Azure)",
                color: "text-blue-700",
              },
              {
                number: "95%",
                text: "Client retention rate — our proudest number",
                color: "text-blue-800",
              },
              {
                number: "10+",
                text: "Years of building and deploying real AI solutions",
                color: "text-blue-900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div
                  className={`text-5xl font-bold ${item.color} mb-3`}
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

        {/* Why Clients Stay */}
        <section
          aria-labelledby="why-clients-stay"
          className="bg-blue-600 rounded-3xl p-10 mb-12 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
              <p
                id="why-clients-stay"
                className="text-white font-semibold"
              >
                Why Companies Stick With Us
              </p>
            </div>
            <p className="text-2xl text-white font-medium leading-relaxed">
              Our AI keeps getting{" "}
              <span className="font-bold underline decoration-blue-300">
                better
              </span>
              , not because they're locked into contracts
            </p>
          </div>
        </section>

        {/* The Real Story */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <article
            aria-label="Beyond the Numbers"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-blue-400/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Beyond The Numbers
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Numbers only tell you so much. The real story is simpler: we
              understand that great AI isn't about the algorithm—it's about
              understanding{" "}
              <span className="font-semibold text-white">
                your business
              </span>{" "}
              well enough to know where intelligence can make the biggest
              impact.
            </p>
          </article>

          <article
            aria-label="A Decade of Learning"
            className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              A Decade of Learning
            </h3>
            <p className="text-blue-50 text-lg leading-relaxed">
              The best solutions don't feel like technology at all — they feel
              like your business just got{" "}
              <span className="font-bold text-white">
                smarter overnight
              </span>
              .
            </p>
          </article>
        </div>

        {/* Awards Note */}
        <footer className="mt-12 text-center">
          <p className="text-blue-300 italic text-lg">
            We've won industry awards — but honestly? We're more proud of our
            clients' success stories.
          </p>
        </footer>
      </div>
    </section>
  );
}

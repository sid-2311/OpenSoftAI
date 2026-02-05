"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ data }) {
  // Extract hero section data - AI services might use different structure
  const hero = data?.heroSection || data?.aiHero || {};
  const content = hero.content || {};
  const cta = hero.cta || {};

  // Fallback values
  const heading = content.heading || "Custom AI Development Services to Power Smarter Businesses";
  const description = content.description || "Unlock the potential of Artificial Intelligence with solutions tailored to your unique business needs.";
  const ctaLabel = cta.label || "Book a Call";
  const ctaHref = cta.href || "/contact-us";

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="ai-hero-heading"
    >
      {/* MOBILE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        {/* Mobile Glow Effects */}
        <div className="absolute -top-20 -left-16 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* DESKTOP IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/images/Person-interacting-with-futuristic-AI-interface-on-a-digital-screen.jpg"
          alt="Person interacting with futuristic AI interface on a digital screen"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1
              id="ai-hero-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              {heading}
            </h1>

            {/* Description */}
            <p className="text-md md:text-xl text-gray-300 mb-10 leading-relaxed">
              {description}
            </p>

            {/* CTA */}
            <Link
              href={ctaHref}
              className="group w-full sm:w-fit inline-flex items-center px-8 py-4 text-md font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {ctaLabel}
              <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT (Desktop Only) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent z-10 hidden sm:block" />
    </section>
  );
}

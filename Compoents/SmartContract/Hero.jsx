"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlockchainHero({ data }) {
  const section = data?.Hero || {};
  const cta = section.cta || {};
  const background = section.background || {};

  if (!section.heading) return null;

  const overlayClass =
    background.overlay === "black/60"
      ? "bg-black/60"
      : background.overlay === "black/50"
      ? "bg-black/50"
      : "bg-black/40";

  return (
    <section
      id="blockchain-hero"
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="blockchain-hero-heading"
    >
      {/* MOBILE BACKGROUND */}
      <div
        className={`absolute inset-0 z-0 sm:hidden bg-gradient-to-br ${
          background.mobileGradient ||
          "from-slate-900 via-indigo-900 to-slate-800"
        }`}
      >
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* DESKTOP BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        {background.desktopImage ? (
          <Image
            src={background.desktopImage}
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-slate-900" />
        )}

        {/* Overlay (Tailwind safe) */}
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            <h1
              id="blockchain-hero-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              {section.heading}
            </h1>

            {/* CTA */}
            <Link
              href={cta.link || "/contact-us"}
              className="group w-full sm:w-fit inline-flex items-center px-8 py-4 text-md font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {cta.label || "Book A Free Consultation"}
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent z-10 hidden sm:block"></div>
    </section>
  );
}

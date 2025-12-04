"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlockchainHero() {
  return (
    <section
      id="blockchain-hero"
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="blockchain-hero-heading"
    >
      {/* MOBILE: Gradient Background */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
        {/* Mobile Glow Effects */}
        <div className="absolute -top-20 -left-16 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* DESKTOP: Background Image */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/images/earth-from-space-night-lights-view.jpg"
          alt="Earth from space with glowing city lights at night"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1
              id="blockchain-hero-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Blockchain Development Services Secure, Scalable, and
              Future-Ready Solutions
            </h1>

            {/* Description */}
            <p className="text-md md:text-xl text-gray-300 mb-10 leading-relaxed">
              Leverage blockchain technology to enhance transparency, security,
              and efficiency. We develop smart contracts, decentralized
              applications, and scalable blockchain systems tailored to your
              business needs.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="group w-full sm:w-fit inline-flex items-center px-8 py-4 text-md font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Book A Free Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP: Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent z-10 hidden sm:block"></div>
    </section>
  );
}

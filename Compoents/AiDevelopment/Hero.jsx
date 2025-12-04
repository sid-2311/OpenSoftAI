"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* MOBILE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-16 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* DESKTOP IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/images/artificial-intelligence-robot-using-futiristic-technology.jpg"
          alt="artificial intelligence robot using laptop futuristic technology"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              AI & Automation Development Services
            </h1>

            {/* Description */}
            <p className="text-md md:text-xl text-gray-300 mb-10 leading-relaxed">
              Build intelligent automation systems that transform your business
              efficiency using our advanced AI development expertise.
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

      {/* Desktop Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent z-10 hidden sm:block"></div>
    </section>
  );
}

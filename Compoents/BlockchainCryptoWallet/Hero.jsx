"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";
import Image from "next/image";

// Dynamic data from API - use data prop to access section data

export default function BlockchainHero({ data }) {
  // Extract section data
  const section = data?.blockchainHero || {};
  const content = section.content || {};
  const cta = content.cta || {};
  const background = section.background || {};

  if (!content.heading) return null;

  return (
    <section
      id="blockchain-hero"
      className="relative min-h-screen overflow-hidden"
      aria-labelledby="blockchain-hero-heading"
    >
      {/* Background image with overlay */}
      {background.image ? (
        <Image
          src={background.image}
          alt={background.alt || "Blockchain Hero Background"}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-900"></div>
      )}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="text-white space-y-8">
            <h1
              id="blockchain-hero-heading"
              className="text-3xl lg:text-4xl font-bold leading-tight"
            >
              {content.heading}
            </h1>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={cta.link || "/contact-us"}
                className="group inline-flex items-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <span>{cta.label || "Book A Free Consultation"}</span>
                <DynamicIcon name={cta.icon || "ArrowRight"} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right content - Visual element */}

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}

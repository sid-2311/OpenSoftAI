"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ data }) {
  if (!data) return null;

  const bg = data.background;
  const content = data.content;
  const cta = data.cta;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Desktop Image */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src={bg.desktop.image.src}
          alt={bg.desktop.image.alt}
          fill
          priority
          className="object-cover"
        />
        <div className={`absolute inset-0 ${bg.desktop.overlay}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
              {content.heading}
            </h1>

            <p className="text-md md:text-xl text-gray-300 mb-10">
              {content.description}
            </p>

            <Link
              href={cta.href}
              className="group inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
            >
              {cta.label}
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ data }) {
  // Extract hero section data
  const hero = data?.heroSection || data?.softwareHero || {};
  const content = hero.content || {};
  const cta = hero.cta || {};

  // Fallback values
  const heading = content.heading || "Custom Software Development Services – Scalable, Secure, and Tailored to Your Business";
  const description = content.description || "Build software that grows with your business. OpenSoftAI delivers custom web, mobile, and enterprise software solutions designed for your specific needs and industry requirements.";
  const ctaLabel = cta.label || "Book A Free Consultation";
  const ctaHref = cta.href || "/contact-us";

  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* MOBILE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        {/* Mobile Glow Effects (optional) */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* DESKTOP IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/images/software-developers-collaborating-on-project.jpg"
          alt="software-developers-collaborating-on-project"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay for desktop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="max-w-xl md:max-w-2xl">
            <h1
              id="hero-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight"
            >
              {heading}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <Link
              href={ctaHref}
              className="group w-full sm:w-fit inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-md font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {ctaLabel}
              <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade – desktop only */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10 hidden sm:block" />
    </section>
  );
}

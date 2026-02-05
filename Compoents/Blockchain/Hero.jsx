"use client";

import Link from "next/link";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function BlockchainHero({ data }) {
  // Extract hero section data from API response
  const hero = data?.heroSection || {};
  const background = hero.background || {};
  const content = hero.content || {};
  const cta = hero.cta || {};

  // Fallback values if data is missing
  const heading = content.heading || "Blockchain Development Services";
  const description = content.description || "Leverage blockchain technology to enhance transparency, security, and efficiency.";
  const ctaLabel = cta.label || "Book A Free Consultation";
  const ctaHref = cta.href || "/contact-us";

  // Background configuration
  const mobileBackground = background.mobile || {};
  const desktopBackground = background.desktop || {};
  const bottomGradient = background.bottomGradient || {};

  return (
    <section
      id={hero.id || "blockchain-hero"}
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby={hero.ariaLabelledBy || "blockchain-hero-heading"}
    >
      {/* MOBILE: Gradient Background */}
      <div className={`absolute inset-0 z-0 sm:hidden bg-gradient-to-br ${mobileBackground.gradient || 'from-slate-900 via-indigo-900 to-slate-800'}`}>
        {/* Mobile Glow Effects */}
        {mobileBackground.glowEffects?.map((glow, index) => (
          <div
            key={index}
            className={`absolute ${glow.position === 'top-left' ? '-top-20 -left-16' : 'bottom-0 right-0'} ${glow.size || 'w-60 h-60'} ${glow.color || 'bg-indigo-500/20'} rounded-full ${glow.blur || 'blur-3xl'}`}
          />
        )) || (
            <>
              <div className="absolute -top-20 -left-16 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-400/10 rounded-full blur-2xl" />
            </>
          )}
      </div>

      {/* DESKTOP: Background Image */}
      {desktopBackground.type === 'image' && desktopBackground.image?.src && (
        <div className="absolute inset-0 z-0 hidden sm:block">
          <Image
            src={desktopBackground.image.src}
            alt={desktopBackground.image.alt || "Blockchain background"}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Desktop Overlay */}
          <div className={`absolute inset-0 ${desktopBackground.overlay || 'bg-black/40'}`} />
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className={content.maxWidth || "max-w-2xl"}>
            {/* Heading */}
            <h1
              id={hero.ariaLabelledBy || "blockchain-hero-heading"}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              {heading}
            </h1>

            {/* Description */}
            <p className="text-md md:text-xl text-gray-300 mb-10 leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <Link
              href={ctaHref}
              className={`group w-full sm:w-fit inline-flex items-center px-8 py-4 text-md font-semibold text-white ${cta.variant === 'outline'
                ? 'bg-transparent border-2 border-white hover:bg-white hover:text-slate-900'
                : 'bg-blue-600 hover:bg-blue-700'
                } rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
            >
              {ctaLabel}
              <DynamicIcon name={cta.icon || "ArrowRight"} className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP: Bottom Gradient */}
      {bottomGradient.enabled !== false && (
        <div className={`absolute bottom-0 left-0 right-0 ${bottomGradient.height || 'h-32'} bg-gradient-to-t ${bottomGradient.gradient || 'from-slate-900/80 to-transparent'} z-10 ${bottomGradient.visibleOn === 'desktop' ? 'hidden sm:block' : ''}`} />
      )}
    </section>
  );
}

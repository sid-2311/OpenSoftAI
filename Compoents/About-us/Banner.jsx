"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Banner({ data }) {
  if (!data) return null;

  const { background, content, image, ariaLabel } = data;

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ background: background.color }}
      aria-label={ariaLabel}
    >
      {/* Left shape */}
      <div
        className="absolute left-0 bottom-0 top-[50px] w-1/2 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background.leftShapeImage})` }}
      />

      {/* Right bg image */}
      <div
        className="absolute top-0 right-10 bg-no-repeat bg-right"
        style={{
          backgroundImage: `url(${background.rightBackgroundImage})`,
          opacity: background.rightImageOpacity,
        }}
      />

      <div className="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-center text-white">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            {content.heading}
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">
            {content.description}
          </p>

          <Link
            href={content.cta.link}
            className="mt-6 inline-flex items-center gap-2 rounded bg-[#016CD3] px-6 py-3 hover:text-black font-semibold shadow hover:bg-gray-100 transition"
            aria-label={content.cta.ariaLabel}
          >
            {content.cta.label}
            <ArrowRightIcon size={20} />
          </Link>
        </div>

        {/* Image */}
        {image.visibleOn === "desktop" && (
          <div className="hidden md:block w-1/2">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-[500px] w-[80%] object-contain mx-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}

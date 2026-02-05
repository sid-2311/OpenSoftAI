"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestimonialHero({ data }) {
  if (!data) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* LEFT */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {data.titlePrefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {data.titleHighlight}
              </span>{" "}
              {data.titleSuffix}
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-300">
                {data.sectionTitle}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {data.description}
              </p>
            </div>

            <Link
              href={data.ctaLink}
              className="w-fit mt-8 px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition"
            >
              {data.ctaText}
            </Link>
          </div>

          {/* RIGHT IMAGE GRID FROM DB */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 gap-4">
              {data.images.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-lg overflow-hidden ${img.className} ${
                    img.hasBorder ? "border-4 border-white" : ""
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

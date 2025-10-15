"use client"; // because we’re using interactive components like Link

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ use next/link instead of react-router-dom

export default function Banner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#000c55] flex items-center justify-center"
      aria-label="OpenSoft AI Banner Section"
    >
      {/* Left background shape */}
      <div
        className="absolute left-0 bottom-0 top-[50px] w-1/2 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(/images/banner-shape.png)",
        }}
      ></div>

      {/* Right background image */}
      <div
        className="absolute top-0 right-10 bg-no-repeat bg-right opacity-40"
        style={{
          backgroundImage:
            "url(/images/Digital-Transformation1.webp)",
        }}
      ></div>

      {/* Content + Image container */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-center text-white">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Know more about OpenSoft AI – Driving Innovation with AI, Blockchain,
            and Custom Software
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">
            Empowering businesses with cutting-edge Artificial Intelligence,
            Blockchain, and software development solutions for a smarter future.
          </p>

          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 rounded bg-[#016CD3] px-6 py-3 hover:text-black font-semibold shadow hover:bg-gray-100 transition"
            aria-label="Contact OpenSoft AI"
          >
            Contact Us
            <ArrowRightIcon size={20} />
          </Link>
        </div>

        {/* Image (hidden on mobile) */}
        <div className="hidden md:block w-1/2">
         <Image
  src="\images\people-playing-vr-games-with-virtual-reality-headsets.webp"
  alt="people laying vr games with virtual reality headsets"
  width={800}
  height={500}
  className="h-[500px] w-[80%] object-contain mx-auto"
  loading="lazy"
/>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // (not used here directly, but available if you want to replace background image later)

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="/images/video_0.mp4" type="video/mp4" />
        <source src="/video/video_0.webm" type="video/webm" />
        <source src="/video/video_0.ogg" type="video/ogg" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Business with{" "}
          <span className="text-[#016CD3]">Expert Software Development</span> &
          AI Solutions
        </motion.h1>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Link
            href="/contact-us"
            className="group px-8 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            Schedule a Call{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-3 transition-all duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

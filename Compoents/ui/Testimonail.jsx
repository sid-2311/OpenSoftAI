"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection({
  title = "What Our Clients Are Saying",
  testimonials = [],
  darkMode = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (testimonials.length === 0) return null;

  const { name, company, image, alt, quote } = testimonials[currentIndex];

  return (
    <section
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-800"
      } py-20 px-6 transition-colors`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="flex-1 relative flex justify-center w-full">
            {/* Decorative dots */}
            <div className="absolute -left-10 -top-8 opacity-20 hidden sm:block">
              <div className="grid grid-cols-8 gap-2">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Image container */}
            <div
              className="
                relative 
                w-full 
                sm:max-w-md 
                aspect-[3/2] 
                sm:aspect-[4/3] 
                rounded-2xl 
                overflow-hidden 
                bg-gradient-to-br 
                from-blue-500 
                via-indigo-500 
                to-purple-600 
                p-1
              "
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt={alt || name || "Client image"}
                        fill
                        className="object-cover rounded-xl"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-300 text-sm">
                        No image available
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 w-full">
            {/* Arrows */}
            <div className="flex justify-end gap-4 mb-8">
              <button
                onClick={handlePrev}
                className="border border-gray-600 rounded-full p-3 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="border border-gray-600 rounded-full p-3 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quote Icon */}
            <div className="mb-8">
              <svg
                className="w-20 h-20 text-blue-400 opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Quote Text */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                className="text-md leading-relaxed mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                “{quote}”
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <div className="flex items-center gap-4">
              {image ? (
                <Image
                  src={image}
                  alt={alt || name || "Client image"}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">
                  No Img
                </div>
              )}
              <div>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-gray-400">{company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

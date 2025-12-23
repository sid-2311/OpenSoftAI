"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection({ data }) {
  const testimonials = data.items;
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

  const { name, company, image, alt, quote } =
    testimonials[currentIndex];

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {data.section.heading}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-1">
              <div className="relative rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={image}
                      alt={alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    suppressHydrationWarning
                    className="bg-transparent rounded-full p-6"
                  >
                    <Play
                      className="w-8 h-8 text-black ml-1"
                      fill="currentColor"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="flex justify-end gap-4 mb-8">
              <button
                suppressHydrationWarning
                onClick={handlePrev}
                className="border border-gray-600 rounded-full p-3 text-gray-400 hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                suppressHydrationWarning
                onClick={handleNext}
                className="border border-gray-600 rounded-full p-3 text-gray-400 hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                className="text-white text-md leading-relaxed mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {quote}
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <Image
                src={image}
                alt={alt}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-lg">
                  {name}
                </h4>
                <p className="text-gray-400">{company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

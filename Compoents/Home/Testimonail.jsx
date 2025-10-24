"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    company: "InnovateTech Solutions",
    image: "/images/smiling-man-in-yellow-shirt-on-blue-background.jpg",
    alt: "smiling man in yellow shirt on blue background",
    quote:
      "These guys took our messy manual processes and turned them into something that actually works. Cut our costs by 40% and our team finally stopped complaining about the system. That's worth its weight in gold.",
  },
  {
    name: "Priya Nair",
    company: "NextWave Digital",
    image: "/images/men3.jpg",
    alt: "smiling woman in white shirt on blue background",
    quote:
      "The CRM they built completely changed how we work with clients. ROI showed up in the first quarter, which honestly surprised everyone, including me.",
  },
  {
    name: "Rohan Sharma",
    company: "Finverse Technologies",
    image: "/images/men2.jpg",
    alt: "man in white shirt on white background",
    quote:
      "Over ₹400 crore in transactions through our platform and zero security issues. Zero. I sleep better at night knowing these guys built it right.",
  },
];

export default function TestimonialsSection() {
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

  // ✅ include `alt` in destructuring
  const { name, company, image, alt, quote } = testimonials[currentIndex];

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="flex-1 relative">
            <div className="absolute -left-16 -top-8 opacity-20">
              <div className="grid grid-cols-8 gap-2">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-blue-400 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

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
                      alt={alt} // ✅ now works correctly
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-transparent bg-opacity-20 rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group">
                    <Play
                      className="w-8 h-8 text-black ml-1 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="flex-1">
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

            <div className="mb-8">
              <svg
                className="w-20 h-20 text-blue-400 opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
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
                alt={alt} // ✅ fixed here too
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-lg">{name}</h4>
                <p className="text-gray-400">{company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

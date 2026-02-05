"use client";

import React from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function MissionVisionSection({ data }) {
  if (!data) return null;

  const {
    ariaLabelledBy,
    header,
    mission,
    vision,
    image,
    whatWeDo,
  } = data;

  return (
    <section
      className="container mx-auto px-6 py-16"
      aria-labelledby={ariaLabelledBy}
    >
      {/* 🔹 Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-0 mb-20">
        {/* Left side text */}
        <div className="text-left space-y-6 text-gray-700 leading-relaxed">
          <h2
            id={ariaLabelledBy}
            className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
          >
            {header.title}
          </h2>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <DynamicIcon name={mission.icon || "Target"} className="w-6 h-6 text-blue-600" />
              {mission.title}
            </h3>

            {mission.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <DynamicIcon name={vision.icon || "Eye"} className="w-6 h-6 text-blue-600" />
              {vision.title}
            </h3>

            {vision.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 🔹 What We Do Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold" id="what-we-do-title">
          {whatWeDo.title}
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          {whatWeDo.description}
        </p>
      </div>

      <div
        className="grid md:grid-cols-3 gap-8"
        aria-labelledby="what-we-do-title"
      >
        {whatWeDo.services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            aria-label={service.ariaLabel}
          >
            <div className="mb-4">
              <DynamicIcon name={service.icon || "Cpu"} className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

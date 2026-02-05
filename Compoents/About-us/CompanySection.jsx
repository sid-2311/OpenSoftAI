"use client";

import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function CompanySection({ data }) {
  if (!data) return null;

  const { overview, linkedinCard, story, ariaLabelledBy } = data;

  return (
    <section
      className="container mx-auto px-6 py-16"
      aria-labelledby={ariaLabelledBy}
    >
      {/* 🔹 Top Row - Company Overview + LinkedIn */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Company Overview */}
        <div>
          <h2
            id={ariaLabelledBy}
            className="text-3xl font-bold mb-3 leading-snug"
          >
            {overview.title}
          </h2>

          <div className="bg-[#016CD3] w-20 h-0.5 mb-3" />

          {overview.paragraphs.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed my-4">
              {para}
            </p>
          ))}
        </div>

        {/* LinkedIn Card */}
        <div
          className="border-2 border-[#0A66C2] rounded-md overflow-hidden shadow-sm md:w-sm mx-auto"
          aria-label="LinkedIn connection section"
        >
          <div className="bg-[#0A66C2] text-white text-3xl px-4 py-2 flex items-center gap-2">
            <span className="text-4xl font-bold border-r pr-3">
              {linkedinCard.brandText}
            </span>
            {linkedinCard.heading}
          </div>

          <div className="p-5 text-center">
            <h3 className="text-2xl font-bold mb-2">
              {linkedinCard.followers}{" "}
              <span className="font-normal text-gray-600">
                {linkedinCard.followersLabel}
              </span>
            </h3>

            <div className="flex justify-center mb-4">
              <Image
                src={linkedinCard.image.src}
                alt={linkedinCard.image.alt}
                width={linkedinCard.image.width}
                height={linkedinCard.image.height}
                className="rounded"
              />
            </div>

            <a
              href={linkedinCard.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white px-5 py-2 rounded inline-flex items-center gap-2 text-xl font-medium hover:bg-blue-600 transition"
              aria-label={linkedinCard.link.ariaLabel}
            >
              {linkedinCard.link.label}
              <div className="bg-white rounded-full p-2">
                <ArrowRightIcon size={18} color="#0A66C2" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Row - Our Story */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              width={story.image.width}
              height={story.image.height}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Our Story Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{story.title}</h2>

          {story.paragraphs.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

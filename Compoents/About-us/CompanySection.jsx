"use client"; // 👈 because we’re using interactive elements like <a> and external links

import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image"; // ✅ Next.js Image for performance & SEO

export default function CompanySection() {
  return (
    <section
      className="container mx-auto px-6 py-16"
      aria-labelledby="company-overview-title"
    >
      {/* 🔹 Top Row - Company Overview + LinkedIn */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Company Overview */}
        <div>
          <h2
            id="company-overview-title"
            className="text-3xl font-bold mb-3 leading-snug"
          >
            Where Technology Meets Human Ambition
          </h2>
          <div className="bg-[#016CD3] w-20 h-0.5 mb-3" />
          <p className="text-gray-600 leading-relaxed">
            At <strong>OpenSoft AI</strong>, we believe the future isn’t just
            about having the latest technology — it’s about using that
            technology to solve real problems for real people. We're not here to
            build solutions just because they're technically impressive. We're
            here to help businesses transform, scale, and succeed in ways that
            actually matter to their customers and their bottom line.
          </p>
          <p className="text-gray-600 leading-relaxed my-4">
            Founded on the principle that great technology should make business
            easier, not more complicated, OpenSoft AI has grown into a trusted
            partner for companies ready to embrace AI, blockchain, and custom
            software solutions. We work with everyone from ambitious startups
            launching their first product to established enterprises reimagining
            their entire digital infrastructure.
          </p>
          <p className="text-gray-600 leading-relaxed">
            What sets us apart isn’t just our technical expertise — though we're
            proud of that too. It’s our commitment to understanding your
            business first, then building technology that serves your specific
            goals. We've learned that the most successful digital transformations
            happen when cutting-edge technology meets deep business
            understanding.
          </p>
        </div>

        {/* LinkedIn Card */}
        <div
          className="border-2 border-[#0A66C2] rounded-md overflow-hidden shadow-sm md:w-sm mx-auto"
          aria-label="LinkedIn connection section"
        >
          <div className="bg-[#0A66C2] text-white text-3xl px-4 py-2 flex items-center gap-2">
            <span className="text-4xl font-bold border-r pr-3">in</span> Let’s
            Connect
          </div>
          <div className="p-5 text-center">
            <h3 className="text-2xl font-bold mb-2">
              19.7T+{" "}
              <span className="font-normal text-gray-600">followers</span>
            </h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/customer-service-representatives-on-call.webp"
                alt="Team collaboration at OpenSoft AI"
                width={300}
                height={200}
                className="rounded"
              />
            </div>
            <a
              href="https://www.linkedin.com/company/opensoftai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white px-5 py-2 rounded inline-flex items-center gap-2 text-xl font-medium hover:bg-blue-600 transition"
              aria-label="Follow OpenSoft AI on LinkedIn"
            >
              LinkedIn
              <div className="bg-white rounded-full p-2">
                <ArrowRightIcon size={18} color="#0A66C2" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Row - Who We Are */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/business-team-collaboration-meeting-in-modern-office.webp"
              alt="business team collaboration meeting in modern office"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Our Story Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>OpenSoft AI</strong> started with a simple observation: too
            many businesses were struggling to bridge the gap between emerging
            technologies and practical business applications. AI was becoming
            mainstream, blockchain was moving beyond crypto speculation, and
            custom software development was more critical than ever – but
            finding partners who could deliver all three with equal expertise
            was nearly impossible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our founders came from different backgrounds – software engineering,
            AI research, and blockchain development – but shared a common
            frustration with how technology companies approached client
            relationships. Too often, the focus was on showcasing technical
            prowess rather than solving business problems. Too many projects
            delivered impressive demos that didn't translate into real business
            value.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We decided to build something different: a company that combined
            deep technical expertise across multiple emerging technology stacks
            with a genuine commitment to client success. From our first project
            – helping a fintech startup build an AI-powered risk assessment
            system – we've maintained the same philosophy: great technology
            should make your business stronger, not just more complex.
          </p>
        </div>
      </div>
    </section>
  );
}

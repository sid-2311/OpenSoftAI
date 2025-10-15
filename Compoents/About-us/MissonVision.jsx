"use client"; // 👈 Client component (for interactivity and smooth rendering)

import React from "react";
import Image from "next/image"; // ✅ Next.js image optimization

export default function MissionVisionSection() {
  return (
    <section
      className="container mx-auto px-6 py-16"
      aria-labelledby="mission-vision-title"
    >
      {/* 🔹 Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-0 mb-20">
        {/* Left side text */}
        <div className="text-left space-y-6 text-gray-700 leading-relaxed">
          <h2
            id="mission-vision-title"
            className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
          >
            Our Mission & Vision
          </h2>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              At <strong>OpenSoft AI</strong>, our mission is to help businesses
              scale and innovate using cutting-edge Artificial Intelligence,
              Blockchain, and custom software development solutions. We don’t
              just build technology — we build competitive advantages that help
              our clients succeed in rapidly changing markets.
            </p>
            <p>
              Every project we take on is guided by a simple question:{" "}
              <em>
                “How will this technology make our client’s business stronger?”
              </em>{" "}
              Whether we’re developing an AI system that automates complex
              workflows, building a blockchain platform that creates new revenue
              opportunities, or crafting custom software that streamlines
              operations — our goal is always measurable business impact.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              Our vision is to become a global leader in AI and blockchain-driven
              digital transformation. We envision a world where businesses of all
              sizes can leverage the most advanced technologies to compete,
              innovate, and grow — regardless of their internal technical
              resources or geographic location.
            </p>
            <p>
              We’re building toward a future where emerging technologies are
              accessible, practical, and transformative for every business ready
              to embrace them. That future requires partners who can navigate
              technical complexity while keeping business goals at the center of
              every decision.
            </p>
          </div>
        </div>

        {/* Right side image */}
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
      </div>

      {/* 🔹 What We Do Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold" id="what-we-do-title">
          What We Do
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Empowering organizations with next-generation technology solutions that
          deliver measurable impact and long-term growth.
        </p>
      </div>

      <div
        className="grid md:grid-cols-3 gap-8"
        aria-labelledby="what-we-do-title"
      >
        {/* Custom Software */}
        <div
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          aria-label="Custom Software Development"
        >
          <h3 className="text-xl font-semibold mb-3">
            Custom Software Development
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We build scalable web, mobile, and enterprise software applications
            tailored to your business. From startup MVPs to complex system
            integrations, we create software that fits your exact requirements
            and helps you scale.
          </p>
        </div>

        {/* AI Services */}
        <div
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          aria-label="AI and Automation Services"
        >
          <h3 className="text-xl font-semibold mb-3">
            AI & Automation Services
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We develop AI agents, chatbots, business copilots, and automation
            systems that handle repetitive tasks — freeing your team to focus on
            growth and innovation. Our AI consulting ensures real-world impact
            for your business.
          </p>
        </div>

        {/* Blockchain */}
        <div
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          aria-label="Blockchain Development"
        >
          <h3 className="text-xl font-semibold mb-3">Blockchain Development</h3>
          <p className="text-gray-600 leading-relaxed">
            We go beyond crypto. Our blockchain solutions include wallets, DeFi
            platforms, smart contracts, NFT marketplaces, and supply chain
            transparency systems — designed for scalability, security, and real
            business value.
          </p>
        </div>
      </div>
    </section>
  );
}

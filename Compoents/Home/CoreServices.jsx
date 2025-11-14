"use client";

import { useState } from "react";
import { Code2, Bot, Blocks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  {
    id: "Custom Software Development",
    title: "Custom Software",
    heading: "Custom Software Development",
    text: `Remember when you had that brilliant idea? The one that could change everything if only you had the right software to make it happen?
That's where we come in. We build websites that don't just look pretty – they convert visitors into customers. Mobile apps that people actually want to use. Enterprise systems that make your team's life easier, not harder.
No cookie-cutter solutions here. Your business is unique, and your software should be too.`,
    img: "/images/custom-software-development.webp",
    imgAlt: "custom software development", // ✅ ALT added
    icon: <Code2 className="w-6 h-6" />,
    link: "/software-development-company",
  },
  {
    id: "AI & Automation Solutions",
    title: "AI & Automation",
    heading: "AI & Automation Solutions",
    text: `Let's be honest. Your team is probably doing a lot of boring, repetitive stuff right now. Stuff that a smart system could handle while they focus on what actually matters.
We build AI that works in the real world. Chatbots that don't make your customers want to throw their phones. Automation that saves you hours every day. Machine learning models that actually predict useful things. The kind of technology that makes you wonder how you ever managed without it.`,
    img: "/images/ai-automation-development.jpg",
    imgAlt: "ai automation development", // ✅ ALT added
    icon: <Bot className="w-6 h-6" />,
    link: "/ai-development-company",
  },
  {
    id: "Full-Stack Blockchain Development",
    title: "Blockchain",
    heading: "Full-Stack Blockchain Development",
    text: `Blockchain isn't just about crypto anymore. Though we build those too – wallets, DeFi platforms, NFT marketplaces that don't fall apart when things get busy.
Smart contracts that are actually smart. Decentralized apps that regular people can figure out. The whole blockchain thing, but done right. Secure, transparent, and built to scale when your big break comes.`,
    img: "/images/ai-blockchain-technology.jpg",
    imgAlt: "ai blockchain technology", // ✅ ALT added
    icon: <Blocks className="w-6 h-6" />,
    link: "/blockchain-development-service",
  },
];

export default function CoreServices() {
  const [active, setActive] = useState(TABS[0].id);

  return (
    <section className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-8 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          The Core Services OpenSoft AI Offer
        </h2>
        <p className="text-gray-600 text-sm">
          Explore our main offerings designed to transform your business with
          cutting-edge technology and innovation.
        </p>
      </div>

      {/* Card wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Row */}
        <div
          role="tablist"
          aria-label="Core Services"
          className="flex justify-start md:justify-start gap-6 mb-8 overflow-x-auto"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${
                  isActive
                    ? "bg-[#0B2542] text-white border-2 border-[#243B55] shadow-lg"
                    : "text-gray-300 hover:text-white border border-[#0B2542]"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span className="text-sm font-medium text-center">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={`${isActive ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>

                  {/* Explore More Link */}
                  <Link
                    href={tab.link}
                    className="inline-block mt-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-lg shadow-md hover:bg-[#243B55] transition"
                  >
                    Explore More →
                  </Link>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[480px] h-[300px] md:h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={tab.img}
                      alt={tab.imgAlt} // ✅ using the new alt text
                      fill
                      priority={false}
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 480px"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/480x320?text=Image+Unavailable";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

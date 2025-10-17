"use client";

import { FileText, Image, Volume2, Video, Cpu, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

export default function GenerativeAICapabilitiesFlip() {
  const capabilities = [
    {
      icon: FileText,
      title: "Text Generation AI",
      details: [
        "Marketing copy & ad variations",
        "Blog & thought leadership content",
        "Personalized email campaigns",
        "Product descriptions & technical docs",
        "Social media content & captions",
      ],
    },
    {
      icon: Image,
      title: "Image & Design AI",
      details: [
        "Social media graphics & ads",
        "Product visualization & mockups",
        "Marketing materials & presentations",
        "Brand-consistent visual assets",
        "Custom illustrations & artwork",
      ],
    },
    {
      icon: Volume2,
      title: "Audio & Voice AI",
      details: [
        "Professional voiceovers for videos",
        "Podcast content & audio articles",
        "Interactive voice responses & chatbots",
        "Multilingual audio content",
        "Custom music & sound design",
      ],
    },
    {
      icon: Video,
      title: "Video Generation AI",
      details: [
        "Marketing & promotional videos",
        "Training & educational content",
        "Product demos & tutorials",
        "Personalized video messages",
        "Social media video content",
      ],
    },
    {
      icon: Cpu,
      title: "Custom AI Models",
      details: [
        "Industry-specific language models",
        "Brand-consistent outputs",
        "Custom workflow integration",
      ],
    },
    {
      icon: Puzzle,
      title: "Seamless Integration",
      details: [
        "CMS integration",
        "CRM workflow integration",
        "Marketing automation tools",
        "Collaboration software compatibility",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Generative AI Development Capabilities
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </header>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div key={index} className="group perspective">
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  className="relative w-full h-64 cursor-pointer transition-transform duration-500 transform-style-preserve-3d"
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-blue-600 rounded-xl shadow-lg flex flex-col justify-center items-center backface-hidden p-6">
                    <div className="w-14 h-14 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center">{cap.title}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 backface-hidden rotate-y-180 flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-blue-700">{cap.title}</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      {cap.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}

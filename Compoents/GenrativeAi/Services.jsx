"use client";

import { FileText, Image, Volume2, Video, Cpu, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

export default function GenerativeAICapabilities() {
  const capabilities = [
    {
      icon: FileText,
      title: "Text Generation AI",
      description:
        "We build intelligent writing systems that understand your brand voice and can produce everything from blog articles and marketing copy to personalized emails and detailed reports. Our text generation AI learns from your existing content to maintain consistency while scaling your writing capabilities exponentially.",
      details: [
        "Marketing copy and ad variations",
        "Blog articles and thought leadership content",
        "Personalized email campaigns",
        "Product descriptions and technical documentation",
        "Social media content and captions",
      ],
    },
    {
      icon: Image,
      title: "Image & Design Generation AI",
      description:
        "Our visual AI solutions create stunning graphics, product images, and design assets that align perfectly with your brand guidelines. Whether you need social media visuals, marketing materials, or product imagery, our AI generates professional-quality designs in minutes instead of hours.",
      details: [
        "Social media graphics and advertisements",
        "Product visualization and mockups",
        "Marketing materials and presentations",
        "Brand-consistent visual assets",
        "Custom illustrations and artwork",
      ],
    },
    {
      icon: Volume2,
      title: "Audio & Voice Generation AI",
      description:
        "We develop sophisticated audio AI that can produce natural-sounding voiceovers, create podcast content, and generate music or sound effects tailored to your needs. Our voice synthesis technology creates authentic-sounding audio that maintains emotional tone and brand personality.",
      details: [
        "Professional voiceovers for videos and presentations",
        "Podcast content and audio articles",
        "Interactive voice responses and chatbots",
        "Multilingual audio content",
        "Custom music and sound design",
      ],
    },
    {
      icon: Video,
      title: "Video Generation AI",
      description:
        "Our AI video solutions automate the creation of engaging video content for marketing, training, and storytelling purposes. From script to screen, we build systems that can produce professional-quality videos with minimal human intervention.",
      details: [
        "Marketing and promotional videos",
        "Training and educational content",
        "Product demonstrations and tutorials",
        "Personalized video messages",
        "Social media video content",
      ],
    },
    {
      icon: Cpu,
      title: "Custom Generative AI Models",
      description:
        "Every business has unique creative needs, and we build custom AI models that address your specific challenges. Whether you need AI that understands your industry's technical language or generates content in your distinct style, we develop solutions that work exactly as you need them to.",
      details: [
        "Industry-specific AI models",
        "Brand-style content generation",
        "Tailored creative workflows",
      ],
    },
    {
      icon: Puzzle,
      title: "Seamless Integration with Existing Tools",
      description:
        "We ensure our generative AI solutions integrate smoothly with your current workflow. Whether you're using content management systems, CRM platforms, marketing automation tools, or collaboration software, our AI becomes a natural extension of your existing tech stack.",
      details: [
        "CMS integration",
        "CRM workflow compatibility",
        "Marketing automation tools",
        "Collaboration software integration",
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

        {/* Static Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">{cap.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {cap.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

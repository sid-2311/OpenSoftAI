"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";
import { motion } from "framer-motion";

export default function GenerativeAICapabilities({ data }) {
  const section = data?.services || {};
  const capabilities = section.capabilities || [];

  if (!section.title) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ✅ Heading from CMS */}
        <header className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                    <DynamicIcon name={cap.icon || "FileText"} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-sm mb-4">
                  {cap.description}
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {cap.details?.map((detail, i) => (
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

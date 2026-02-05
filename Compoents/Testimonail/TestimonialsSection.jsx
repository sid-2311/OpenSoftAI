"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection({ data }) {
  if (!data) return null;

  const [activeTab, setActiveTab] = useState("video");

  const videoTestimonials = data.videoTestimonials || [];
  const textTestimonials = data.textTestimonials || [];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Tabs from DB */}
        <div className="flex gap-8 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("video")}
            className={`pb-4 px-2 font-medium relative ${
              activeTab === "video"
                ? "text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {data.tabs.video}
            {activeTab === "video" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("text")}
            className={`pb-4 px-2 font-medium relative ${
              activeTab === "text"
                ? "text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {data.tabs.text}
            {activeTab === "text" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        </div>

        {/* VIDEO TAB */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* Thumbnail */}
                <div className="relative h-56">
                  <Image
                    src={t.video}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.name}</h3>
                      <p className="text-sm text-gray-600">{t.title}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TEXT TAB */}
        {activeTab === "text" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

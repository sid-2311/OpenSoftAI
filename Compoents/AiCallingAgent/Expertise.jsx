"use client";

import { useState } from "react";
import {
  Award,
  CheckCircle,
} from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function VoiceAIExpertiseSection({ data }) {
  const [hoveredStat, setHoveredStat] = useState(null);
  if (!data) return null;

  const stats = data.stats || [];
  const results = data.results?.items || [];
  const expertise = data.deepExpertise?.items || [];
  const success = data.successStory || {};

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            {data.heading.main}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              {data.heading.highlight}
            </span>
          </h2>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="group relative"
            >
              <div className="relative bg-white border border-blue-100 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4 text-blue-600">
                  <DynamicIcon name={stat.icon} className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise */}
        <article className="bg-white border border-blue-100 rounded-3xl p-8 lg:p-12 mb-16 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {data.deepExpertise.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Results */}
        <section>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            {data.results.heading}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${result.gradient} flex items-center justify-center text-white mb-6`}
                >
                  <DynamicIcon name={result.icon} className="w-6 h-6" />
                </div>

                <div className="mb-4">
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {result.metric}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {result.label}
                  </h4>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Story */}
        <section className="relative mt-16">
          <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl p-10 lg:p-12 shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-lg md:text-2xl text-white leading-relaxed mb-6">
                  {success.text}
                </p>
              </div>

              <div className="space-y-4">
                {success.stats?.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-4 border border-white/20"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {s.value}
                    </div>
                    <div className="text-blue-200 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

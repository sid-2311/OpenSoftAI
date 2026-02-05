"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
} from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function ExperienceSection({ data }) {
  const section = data?.experienceSection || {};
  const metrics = section.metrics || [];
  const learned = section.learned?.items || [];
  const numbers = section.numbers || {};
  const success = section.successStory || {};

  if (!section.heading) return null;

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            {section.heading.main}
            <span className="block text-blue-400 mt-2">
              {section.heading.highlight}
            </span>
          </h2>
          <p className="text-blue-100 mt-6 max-w-3xl mx-auto">
            {section.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((m, i) => {
            return (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl text-center">
                <DynamicIcon name={m.icon} className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold">{m.value}</div>
                <div className="text-blue-300">{m.label}</div>
              </div>
            );
          })}
        </div>

        {/* Learned */}
        <div className="bg-slate-800 p-10 rounded-3xl mb-20">
          <h3 className="text-3xl font-bold mb-8">
            {section.learned?.heading}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {learned.map((item, i) => {
              return (
                <div key={i} className="flex gap-4">
                  <DynamicIcon name={item.icon} className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-blue-200">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Numbers */}
        <div className="bg-blue-700 p-10 rounded-3xl mb-20">
          <h3 className="text-3xl font-bold mb-6">
            {numbers.heading}
          </h3>
          <p className="mb-8 text-blue-100">{numbers.description}</p>

          <div className="grid md:grid-cols-4 gap-6">
            {(numbers.stats || []).map((s, i) => {
              return (
                <div key={i} className="text-center">
                  <DynamicIcon name={s.icon} className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-blue-200">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-white text-black p-10 rounded-3xl">
          <h3 className="text-3xl font-bold mb-6">
            {success.title}
          </h3>

          <p className="mb-4">{success.description1}</p>
          <p className="mb-8">{success.description2}</p>

          <div className="space-y-4">
            {(success.stats || []).map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-blue-50 p-4 rounded-xl"
              >
                <div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-red-600">
                      {s.before}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="font-bold text-green-600">
                      {s.after}
                    </span>
                  </div>
                </div>
                <div className="text-blue-700 font-bold">
                  {s.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

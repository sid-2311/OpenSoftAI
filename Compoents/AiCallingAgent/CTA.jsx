"use client";

import React from "react";
import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function GetStartedSection({ data }) {
  if (!data) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            {data.heading.main}{" "}
            <span className="text-blue-600">{data.heading.highlight}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {data.description}
          </p>
        </header>

        {/* JOURNEY */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
            {data.journey.heading}
          </h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2" />

            <div className="space-y-16">
              {data.journey.steps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                  >
                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <DynamicIcon name={step.icon} className="w-6 h-6" />
                    </div>

                    <div
                      className={`w-full md:w-5/12 ${isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                        }`}
                    >
                      <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg">
                        <div className="text-sm font-mono text-blue-600 mb-1">
                          STEP {index + 1}
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT METHODS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {data.contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100"
            >
              <div className="text-center">
                <div className="inline-flex w-16 h-16 bg-blue-100 rounded-2xl items-center justify-center mb-6">
                  <DynamicIcon name={method.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {method.description}
                </p>
                <Link
                  href={method.href}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* OFFER */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <DynamicIcon name="Gift" className="w-10 h-10 text-blue-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-3">
                {data.offer.title}
              </h3>
              <p className="text-blue-100 text-lg">{data.offer.text}</p>
            </div>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold">
              {data.offer.button}
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100 text-center">
          <p className="text-2xl text-gray-700 mb-4">
            {data.finalCta.text1}
          </p>
          <p className="text-xl font-bold text-blue-900 mb-8">
            {data.finalCta.text2}
          </p>
          <Link
            href={data.finalCta.link}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold inline-flex items-center gap-3"
          >
            {data.finalCta.button}
            <ArrowRight className="w-6 h-6" />
          </Link>
        </section>
      </section>
    </main>
  );
}

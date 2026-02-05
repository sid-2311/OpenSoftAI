"use client";

import React from "react";
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function CTASection({ data }) {
  // Extract section data
  const section = data?.cta || {};
  const heading = section.heading || {};
  const contactMethodsData = section.contactMethods || [];
  const benefitsData = section.benefits || [];
  const pilot = section.pilot || {};
  const story = section.story || {};
  const finalCta = section.finalCta || {};

  const contactMethods = contactMethodsData.map(m => ({
    icon: m.icon,
    title: m.title,
    subtitle: m.subtitle,
    action: m.action,
    href: m.href,
    color: m.color,
  }));

  const benefits = benefitsData.map(b => ({
    icon: b.icon,
    text: b.text,
  }));

  if (!section.heading) return null;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {heading.main}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
            <p>{heading.description}</p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Start the conversation:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              return (
                <a
                  key={index}
                  href={method.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-400 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DynamicIcon name={method.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {method.subtitle}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center justify-center gap-2">
                      {method.action}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Try Before You Commit Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              {pilot.title || "Try before you commit"}
            </h3>
            <p className="text-blue-100 text-lg text-center mb-8 leading-relaxed">
              {pilot.description || "We offer a 30-day pilot program where you can test a custom chatbot with real customers. Most businesses see measurable results within the first two weeks."}
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.length > 0 ? benefits.map((benefit, index) => {
                return (
                  <div key={index} className="flex items-center gap-3 bg-blue-700 bg-opacity-50 rounded-xl p-4">
                    <DynamicIcon name={benefit.icon} className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <span className="text-white font-semibold">{benefit.text}</span>
                  </div>
                );
              }) : (
                // Fallback if no benefits data
                <>
                  <div className="flex items-center gap-3 bg-blue-700 bg-opacity-50 rounded-xl p-4"><Clock className="w-6 h-6 text-blue-200 flex-shrink-0" /><span className="text-white font-semibold">30-day pilot program</span></div>
                  <div className="flex items-center gap-3 bg-blue-700 bg-opacity-50 rounded-xl p-4"><Zap className="w-6 h-6 text-blue-200 flex-shrink-0" /><span className="text-white font-semibold">Results within 2 weeks</span></div>
                  <div className="flex items-center gap-3 bg-blue-700 bg-opacity-50 rounded-xl p-4"><Shield className="w-6 h-6 text-blue-200 flex-shrink-0" /><span className="text-white font-semibold">Try before you commit</span></div>
                </>
              )}
            </div>

            <div className="text-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                {pilot.ctaText || "Start Your Free Pilot Program"}
              </button>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {story.text || "That customer trying to return the shirt I mentioned at the beginning? With the right chatbot, she would have had her return processed and a replacement ordered before she finished her coffee."}
            </p>
            <p className="text-xl font-semibold text-gray-900">
              {story.highlight || "Your customers deserve better than frustrating bot conversations. Let's build them something that actually works."}
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {finalCta.title || "Ready to stop losing customers to bad chatbot experiences?"}
          </h3>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            {finalCta.description || "Schedule your free chatbot strategy session or call us directly. Your next conversation could be the one that changes how your customers experience your business."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#schedule"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Strategy Session
            </a>
            <a
              href="tel:+10000001111"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 (000) 000-1111
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
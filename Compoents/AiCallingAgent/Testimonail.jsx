"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function ClientTestimonials() {
  const testimonials = [
    {
      quote:
        "OpenSoft AI's outbound calling agent transformed our lead qualification process. We went from our sales team spending 60% of their time on cold calls to focusing entirely on warm, qualified prospects. Our conversion rate improved by 38% in the first quarter.",
      name: "Michael Thompson",
      position: "Sales Director",
      company: "TechStart Solutions",
    },
    {
      quote:
        "The inbound AI agent handles 80% of our customer support calls without human intervention. Our customers love the instant response, and our support team can focus on complex issues that really need human expertise. It's a win-win.",
      name: "Laura Martinez",
      position: "Customer Success Manager",
      company: "FlowCommerce",
    },
    {
      quote:
        "What impressed us most was how quickly the AI learned our industry terminology and company processes. Within two weeks, it was handling patient calls better than some of our human staff. The 24/7 availability has been a game-changer for our practice.",
      name: "Dr. James Chen",
      position: "Medical Director",
      company: "Wellness First Clinic",
    },
  ];

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Client Testimonials | OpenSoft AI</title>
        <meta
          name="description"
          content="See how businesses across industries are transforming their operations with OpenSoft AI. Real client testimonials showcasing measurable results and success stories."
        />
        <meta
          name="keywords"
          content="OpenSoft AI testimonials, AI success stories, AI voice agents, AI customer support, client feedback"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Client Testimonials | OpenSoft AI Success Stories"
        />
        <meta
          property="og:description"
          content="Discover how OpenSoft AI's clients achieved real business results using intelligent voice automation and AI calling agents."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/testimonials" />
      </Head>

      <main
        className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100"
        aria-labelledby="testimonials-heading"
      >
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <header className="text-center mb-16">
            <h1
              id="testimonials-heading"
              className="text-5xl font-bold text-blue-900 mb-4"
            >
              What Our Clients Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses transforming their operations
              with AI
            </p>
          </header>

          {/* Testimonials Grid */}
          <section
            aria-label="Client testimonials"
            className="grid lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Stars */}
                <div
                  className="flex gap-1 mb-6 mt-4"
                  aria-label="5 star testimonial"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-blue-500 fill-blue-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-8 italic text-base">
                  “{testimonial.quote}”
                </p>

                {/* Author Info */}
                <div className="border-t border-blue-100 pt-6">
                  <p className="font-bold text-blue-900 text-lg mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-600 font-medium text-sm mb-1">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* Stats Section */}
          <section
            aria-label="Client success statistics"
            className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-white mb-2">500+</p>
                <p className="text-blue-100 text-lg">Happy Clients</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">98%</p>
                <p className="text-blue-100 text-lg">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">24/7</p>
                <p className="text-blue-100 text-lg">Support Available</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Join These Success Stories
            </h3>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Start Your Transformation
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

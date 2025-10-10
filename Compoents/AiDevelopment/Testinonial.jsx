"use client";

import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="testimonial-heading"
            className="text-5xl font-bold text-slate-900 mb-4"
          >
            Real Stories from Real Clients
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </header>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-900 opacity-5 rounded-full -ml-16 -mb-16"></div>

          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 rounded-full p-4">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">
            "We were skeptical about chatbots because we'd tried them before with terrible results. 
            But OpenSoft AI's solution is completely different. It actually understands what customers 
            are trying to accomplish, and when it doesn't know something, it asks intelligent follow-up 
            questions instead of giving useless generic responses."
          </blockquote>

          {/* Client Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MS</span>
            </div>
            <div>
              <div className="text-slate-900 font-bold text-xl">Manoj Sharma</div>
              <div className="text-blue-600 font-medium">
                CTO at Zennox 
              </div>
            </div>
          </div>

          {/* Rating Stars */}
          
        </div>
      </div>
    </section>
  );
}

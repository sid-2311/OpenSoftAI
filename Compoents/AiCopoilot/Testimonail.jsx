"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jennifer",
      company: "Fintech Startup",
      quote:
        "I was skeptical because I'd tried other AI tools that promised everything and delivered headaches. Your copilot actually makes my day easier. I spend 80% less time on reports and have way more time for actual analysis.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Marcus",
      company: "Healthcare Practice",
      quote:
        "The copilot handles all the insurance verification and appointment scheduling stuff that used to take hours. Our staff can actually focus on patient care instead of paperwork. Patient satisfaction scores went up because we're not rushing through appointments.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Sarah",
      company: "E-commerce Company",
      quote:
        "It's like having the world's most organized, never-tired colleague. The copilot remembers everything, connects patterns I would have missed, and never has Monday morning brain fog. Our team's productivity doubled, but more importantly, work became fun again.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section
      id="ai-copilot-testimonials"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 text-slate-800"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          What Teams Tell Us After Using AI Copilots
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Real voices from teams who transformed the way they work with intelligent AI copilots.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-blue-100 p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative w-20 h-20 mb-6">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover rounded-full shadow-md border-4 border-blue-100"
              />
            </div>

            <Quote className="w-8 h-8 text-blue-500 mb-4" />
            <p className="text-slate-600 italic leading-relaxed mb-6">
              “{t.quote}”
            </p>

            <div className="mt-auto">
              <h3 className="text-lg font-semibold text-blue-700">{t.name}</h3>
              <p className="text-sm text-slate-500">{t.company}</p>
            </div>

            <div className="flex justify-center mt-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle fade-in animation */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

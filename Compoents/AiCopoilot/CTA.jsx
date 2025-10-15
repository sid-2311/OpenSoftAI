"use client";

import { PhoneCall, Mail, Calendar, Rocket } from "lucide-react";

export default function FinalCTACopilotSection() {
  return (
    <section
      id="ai-copilot-cta"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_50%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-300 via-white to-blue-200 bg-clip-text text-transparent">
          Ready to Give Your Team Their AI Assistant?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          You already know your team is spending too much time on routine work
          instead of the strategic stuff that actually moves your business
          forward. The question isn't <strong>whether</strong> AI copilots will
          become standard—it's <strong>whether you want your team to have that
          advantage now or later.</strong>
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <PhoneCall className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
            <h3 className="text-xl font-semibold mb-2">Talk to an Expert</h3>
            <p className="text-blue-100 text-sm mb-4">
              Call us to discuss your team's workflow challenges
            </p>
            <a
              href="tel:+15551234567"
              className="text-cyan-300 font-medium hover:underline"
            >
              +1 (555) 123-4567
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <Mail className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-blue-100 text-sm mb-4">
              Tell us about your biggest workflow challenge
            </p>
            <a
              href="mailto:copilot-ai@opensoftai.com"
              className="text-cyan-300 font-medium hover:underline"
            >
              copilot-ai@opensoftai.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
            <h3 className="text-xl font-semibold mb-2">Book a Demo</h3>
            <p className="text-blue-100 text-sm mb-4">
              See what a custom AI copilot built for your team looks like
            </p>
            <a
              href="#demo"
              className="text-cyan-300 font-medium hover:underline"
            >
              Schedule Your Demo →
            </a>
          </div>
        </div>

        {/* Risk-Free Offer */}
        <div className="max-w-4xl mx-auto bg-white text-blue-900 rounded-3xl p-10 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Rocket className="w-12 h-12 text-blue-700" />
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Try It Risk-Free for 45 Days
              </h3>
              <p className="text-lg text-slate-700">
                Work with a custom AI copilot on real projects. Most teams see
                measurable productivity improvements within the first two weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <p className="text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed italic">
          “That marketing agency we mentioned? Their copilot now handles client
          reporting, social media analysis, and campaign optimization. They went
          from working late every Friday to finishing ahead of schedule—and now
          use the extra time for creative brainstorming and strategic planning.”
        </p>

        {/* Final CTA Button */}
        <button className="px-10 py-4 bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          Schedule Your Free AI Copilot Consultation
        </button>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fade-in {
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
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

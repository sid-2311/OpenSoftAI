"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Business Operations Today
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          The companies that will thrive in the coming years are those that embrace intelligent automation now. 
          While your competitors are still bogged down in manual processes, you could be operating with the efficiency 
          and precision that only AI can deliver.
        </p>

        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're looking to eliminate specific manual tasks, optimize entire departments, 
          or reimagine your core business processes, we're here to help you harness the power of intelligent automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-3xl bg-white text-blue-700 font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get Free Process Assessment</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-3xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Schedule Automation Demo</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

        
        </div>

        {/* Optional Footer CTA Text */}
        <p className="mt-12 text-lg max-w-3xl mx-auto leading-relaxed">
          Ready to stop wasting time on repetitive tasks and start scaling your business intelligently? 
          Let's discuss how AI workflow automation can transform your operations and drive unprecedented efficiency. 
          Our automation specialists are standing by to show you what's possible.
        </p>
      </div>
    </section>
  );
}

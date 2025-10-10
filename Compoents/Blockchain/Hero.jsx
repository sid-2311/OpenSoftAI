"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlockchainHero() {
  return (
    <section
      id="blockchain-hero"
      className="relative min-h-screen overflow-hidden"
      aria-labelledby="blockchain-hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Blockchain background with digital network visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <h1
              id="blockchain-hero-heading"
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Blockchain Development Services – Secure, Scalable, and Future-Ready Solutions
            </h1>

            <p className="text-lg md:text-xl text-blue-200 max-w-3xl">
              Leverage blockchain technology to enhance transparency, security, and efficiency.
              We develop smart contracts, decentralized applications, and scalable blockchain systems
              tailored to your business needs.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <span>Book A Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right content - Visual element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                {/* Connected blocks */}
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((block) => (
                    <div
                      key={block}
                      className="flex items-center space-x-4 animate-pulse"
                      style={{ animationDelay: `${block * 200}ms` }}
                    >
                      <div className="w-16 h-16 bg-purple-500/50 rounded-lg border-2 border-purple-400 flex items-center justify-center backdrop-blur">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded"></div>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                      <div className="w-12 h-12 bg-blue-500/50 rounded-full border-2 border-blue-400 backdrop-blur"></div>
                    </div>
                  ))}
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg transform rotate-12 animate-bounce opacity-80"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}

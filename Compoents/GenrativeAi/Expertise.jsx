"use client";

import { useState, useEffect } from 'react';
import { Brain, CheckCircle, Sparkles, FileText, Video, Brush, Cpu, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function GenerativeAIExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    { name: 'Marketing', icon: Sparkles },
    { name: 'Media & Entertainment', icon: Video },
    { name: 'E-Commerce', icon: ShoppingBag },
    { name: 'Technology', icon: Cpu },
    { name: 'Creative Agencies', icon: Brush }
  ];

  const highlights = [
    'Hands-on experience across the full generative AI stack',
    'Custom AI models tailored to brand voice and style',
    'Proven solutions for content, visuals, audio, and video',
    'Delivered at scale while maintaining quality and consistency'
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Our Deep Expertise in{" "}
            <span className=" mt-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Generative AI Technologies
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-10"></div>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl font-light">
            We're not newcomers to generative AI – we've been building and deploying AI-powered creative solutions since the early days. Our team combines deep technical expertise in <span className="font-semibold text-blue-700">NLP, computer vision, and neural networks</span> with a real understanding of creative workflows and business needs.
          </p>
        </div>

        {/* Main Content Flow */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-blue-700" />
                <span className="text-blue-900 font-semibold">Hands-On Expertise</span>
              </div>

              <p className="text-md md:text-lg text-slate-600 leading-relaxed">
                From fine-tuning large language models to building custom diffusion models, we tackle complex AI challenges across industries. We've helped teams generate thousands of personalized campaigns, automate video production, and create visuals at unprecedented scale.
              </p>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Our solutions are not generic – they are <span className="font-semibold text-blue-700">tailored to your brand voice, visual style, and business requirements</span>, ensuring consistency and quality across all content touchpoints.
              </p>

              <div className="pt-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">Industries We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <div
                        key={index}
                        className="group relative px-5 py-3 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all duration-300 cursor-pointer hover:scale-105"
                        onMouseEnter={() => setActiveIndustry(index)}
                        onMouseLeave={() => setActiveIndustry(null)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                          <span className="text-slate-800 font-semibold">{industry.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full filter blur-3xl opacity-10"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">What Makes Us Unique</h3>
                  <div className="space-y-5">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-blue-50 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border-2 border-blue-100 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Sparkles className="w-12 h-12 text-blue-700" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
              Amplifying Creativity with Generative AI
            </h3>
            <p className="text-lg text-justify md:text-xl text-slate-700 leading-relaxed mb-6">
              We go beyond existing AI tools – creating models that match your brand and workflow, unlocking content, visuals, and media at scale without compromising quality.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-blue-700 mb-10">
              Let us help your business transform creative workflows and reach new heights.
            </p>
            <Link href="/contact-us" className="bg-gradient-to-r md:inline block from-blue-600 to-blue-800 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-900">
              Start Your AI Journey Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

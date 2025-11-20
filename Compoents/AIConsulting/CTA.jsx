import Link from 'next/link';
import React from 'react';

export default function AIConsultingcta() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-5xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Ready to Build Your AI-Powered Future?
          </h2>
          
          <div className="space-y-6 text-lg sm:text-lg text-blue-50 leading-relaxed mb-8">
            <p className="font-semibold">
              The AI revolution isn't coming – it's here. The question isn't whether your business should adopt AI, but how to do it strategically, effectively, and responsibly.
            </p>
            
            <p>
              At <span className="text-white font-bold">OpenSoftAI</span>, we've helped dozens of companies navigate this journey successfully. We know what works, what doesn't, and how to avoid the expensive mistakes that derail AI initiatives.
            </p>
            
            <p>
              Whether you're just beginning to explore AI possibilities or looking to scale existing AI capabilities, we're here to guide you every step of the way.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
            <p className="text-lg font-semibold mb-6 text-white">
              Start your AI journey with expert guidance. Contact OpenSoftAI today for a free strategic consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </Link>
              <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-400">
                Get AI Readiness Assessment
              </Link>
             
            </div>
          </div>

          {/* Bottom message */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 shadow-xl">
            <p className="text-lg text-white">
              Ready to transform your business with AI? Let's talk about what's possible for your organization. Our AI consulting experts are standing by to help you build a strategy that delivers real results.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>
    </section>
  );
}
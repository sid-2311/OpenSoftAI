import React from 'react';

export default function AIExpertiseSection() {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Why We Know AI Better Than Most:
            <br />
            <span className="text-blue-300">A Decade of Getting It Right</span>
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl">
            We've been doing this for over ten years. Not ten years of talking about AI—ten years of actually building it, deploying it, and watching it transform businesses from the inside out.
          </p>
        </div>

        {/* Team Highlight */}
        <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-400/20">
          <p className="text-lg text-blue-50 leading-relaxed">
            Our team of <span className="font-bold text-white text-2xl">25+ certified AI engineers</span> has seen what works, what doesn't, and what makes the difference between AI that impresses in demos and AI that delivers results every single day.
          </p>
        </div>

        {/* Numbers Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">The Numbers Tell Part of Our Story</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="text-5xl font-bold text-blue-600 mb-3">300+</div>
              <p className="text-gray-700 font-medium leading-snug">
                Successful AI systems still running strong
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="text-5xl font-bold text-blue-700 mb-3">5+</div>
              <p className="text-gray-700 font-medium leading-snug">
                Major AI platforms certified (TensorFlow, PyTorch, AWS, GCP, Azure)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="text-5xl font-bold text-blue-800 mb-3">95%</div>
              <p className="text-gray-700 font-medium leading-snug">
                Client retention rate—our proudest number
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="text-5xl font-bold text-blue-900 mb-3">10+</div>
              <p className="text-gray-700 font-medium leading-snug">
                Years of building and deploying real AI solutions
              </p>
            </div>
          </div>
        </div>

        {/* Why Clients Stay */}
        <div className="bg-blue-600 rounded-3xl p-10 mb-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
              <p className="text-white font-semibold">Why Companies Stick With Us</p>
            </div>
            <p className="text-2xl text-white font-medium leading-relaxed">
              Our AI keeps getting <span className="font-bold underline decoration-blue-300">better</span>, not because they're locked into contracts
            </p>
          </div>
        </div>

        {/* The Real Story */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Beyond The Numbers</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Numbers only tell you so much. The real story is simpler: we understand that great AI isn't about the algorithm—it's about understanding <span className="font-semibold text-white">your business</span> well enough to know where intelligence can make the biggest impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">A Decade of Learning</h3>
            <p className="text-blue-50 text-lg leading-relaxed">
              The best solutions don't feel like technology at all. They feel like your business just got <span className="font-bold text-white">smarter overnight</span>.
            </p>
          </div>
        </div>

        {/* Awards Note */}
        <div className="mt-12 text-center">
          <p className="text-blue-300 italic text-lg">
            We've won industry awards, but honestly? We're more proud of our clients' success stories.
          </p>
        </div>
      </div>
    </div>
  );
}
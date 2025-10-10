import React from 'react';

export default function AIBusinessSection() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Your Business Needs AI. <span className="text-blue-600">But Not Just Any AI.</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-100 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Here's the thing about artificial intelligence—everyone's talking about it, but most businesses are still waiting on the sidelines. Meanwhile, the companies already using AI?
          </p>
          
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-gray-700 font-medium">Cost Reduction</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-700">
              <div className="text-3xl font-bold text-blue-700 mb-2">3x</div>
              <p className="text-gray-700 font-medium">Faster Decisions</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <div className="text-3xl font-bold text-blue-800 mb-2">35%</div>
              <p className="text-gray-700 font-medium">Happier Customers</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            You don't want to be left behind. But you also don't want to jump into AI just because everyone else is doing it. You want AI that actually <span className="font-semibold text-blue-900">works for your business</span>—AI that solves real problems, makes your team more effective, and shows up on your bottom line.
          </p>
        </div>

        {/* OpenSoft AI Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-blue-900 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">That's Where We Come In</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              At <span className="font-bold text-white">OpenSoft AI</span>, we build intelligent systems that feel less like science fiction and more like the natural evolution of how business should work.
            </p>
          </div>

          <div className="bg-blue-600 rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-700 rounded-full -ml-12 -mb-12 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">What Makes Us Different?</h3>
              <p className="text-blue-50 leading-relaxed text-lg">
                We care more about <span className="font-bold text-white">your success</span> than we do about showing off our technical wizardry.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Let's Talk About Your AI Strategy
          </button>
        </div> */}
      </div>
    </div>
  );
}
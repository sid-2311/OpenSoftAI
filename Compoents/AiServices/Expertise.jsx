import React from 'react';

// Dynamic data from API - use data prop to access section data

export default function AIExpertiseSection({ data }) {
  // Extract section data
  const section = data?.expertise || {};
  const heading = section.heading || {};
  const teamHighlight = section.teamHighlight || {};
  const stats = section.stats || [];
  const whyClientsStay = section.whyClientsStay || {};
  const realStory = section.realStory || {};
  const realStoryLeft = realStory.left || {};
  const realStoryRight = realStory.right || {};

  if (!section.heading) return null;

  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {heading.main}
            <br />
            <span className="text-blue-300">{heading.highlight}</span>
          </h2>
          <p className="text-md md:text-lg text-blue-100 leading-relaxed max-w-4xl">
            {section.description}
          </p>
        </div>

        {/* Team Highlight */}
        <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-400/20">
          <p className="text-md md:text-lg text-blue-50 leading-relaxed">
            {teamHighlight.prefix} <span className="font-bold text-white text-lg md:text-xl">{teamHighlight.highlight}</span> {teamHighlight.suffix}
          </p>
        </div>

        {/* Numbers Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{section.statsTitle || "The Numbers Tell Part of Our Story"}</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <div className={`text-3xl font-bold ${stat.color || "text-blue-600"} mb-3`}>{stat.value}</div>
                <p className="text-gray-700 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Stay */}
        <div className="bg-blue-600 rounded-3xl p-10 mb-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
              <p className="text-white font-semibold">{whyClientsStay.badge}</p>
            </div>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              {whyClientsStay.text && (
                <>
                  {whyClientsStay.text.split('better')[0]}
                  <span className="font-bold underline decoration-blue-300">better</span>
                  {whyClientsStay.text.split('better')[1]}
                </>
              )}
            </p>
          </div>
        </div>

        {/* The Real Story */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-blue-400/30">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{realStoryLeft.title}</h3>
            <p className="text-blue-100 text-md md:text-lg leading-relaxed">
              {realStoryLeft.text && (
                <>
                  {realStoryLeft.text.split('your business')[0]}
                  <span className="font-semibold text-white">your business</span>
                  {realStoryLeft.text.split('your business')[1]}
                </>
              )}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-10 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{realStoryRight.title}</h3>
            <p className="text-blue-50 md:text-lg text-md leading-relaxed">
              {realStoryRight.text && (
                <>
                  {realStoryRight.text.split('smarter overnight')[0]}
                  <span className="font-bold text-white">smarter overnight</span>
                  {realStoryRight.text.split('smarter overnight')[1]}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Awards Note */}
        <div className="mt-12 text-center">
          <p className="text-blue-300 italic text-lg">
            {section.awardsNote}
          </p>
        </div>
      </div>
    </div>
  );
}
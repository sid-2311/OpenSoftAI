// components/AICopilotSection.js
'use client';

import { useState, useEffect } from 'react';

export default function AiCopilot() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '180+', label: 'Custom AI Copilots Created' },
    { number: '5', label: 'Years of AI Innovation' },
    { number: '3-5', label: 'Hours Saved Per Week' },
    { number: '90%', label: 'Faster Report Generation' }
  ];

  const insights = [
  "The most effective AI copilots work quietly in the background, making every task smoother without getting in the way.",
  "Teams embrace AI faster when it feels like a supportive colleague, not just another complex tool.",
  "Success with AI copilots comes from understanding real context—not just following commands.",
  "When repetitive work is automated, teams become more creative and strategic, focusing on what truly matters."
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
            We've Been Building AI That Actually Helps People Get Work Done
          </h2>
          <p className="text-xl md:text-md  text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Five years ago, when we started talking about AI copilots, people looked at us like we were describing flying cars. Now, teams can't imagine working without them. The journey from "that sounds impossible" to "how did we ever work without this?" has been wild to watch.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-8 transition-all duration-700 hover:bg-blue-400/10 hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold text-blue-400 mb-3">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className={`bg-white/5 border-l-4 border-blue-400 rounded-xl p-12 mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What Five Years of Building AI Assistants Taught Us
          </h2>
          <ul className="space-y-6">
            {insights.map((insight, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-5 bg-blue-400/5 rounded-lg transition-all duration-300 hover:bg-blue-400/10 hover:translate-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  ✓
                </div>
                <div className="text-lg text-blue-100 leading-relaxed">
                  {insight}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Case Study */}
        <div className={`relative bg-gradient-to-br from-blue-500/10 to-slate-900/80 rounded-3xl p-12 mb-20 border border-blue-400/20 overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Animated Background */}
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-400/10 to-transparent rounded-full animate-spin-slow pointer-events-none" 
               style={{ animation: 'rotate 20s linear infinite' }}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
              Real Results That Matter
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed mb-6">
              A financial services team we worked with saw their report generation time drop from{' '}
              <span className="inline-block px-3 py-1 bg-blue-400/20 rounded-lg font-semibold text-white">
                8 hours to 45 minutes
              </span>
              . But the real win? Their analysts started finding insights they'd never noticed before because the AI copilot highlighted patterns in the data they would have missed while manually crunching numbers.
            </p>
            <p className="text-xl text-blue-100 leading-relaxed">
              Teams using our AI copilots typically save 3-5 hours per week on routine tasks. But here's what's more interesting—they report being more creative and strategic because they're not spending mental energy on repetitive work.
            </p>
          </div>
        </div>

        {/* CTA Section */}
       
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// Usage in your page:
// import AICopilotSection from '@/components/AICopilotSection';
// 
// export default function Home() {
//   return <AICopilotSection />;
// }
"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, MessageSquare, TrendingDown, Users, Clock, Award, ChevronRight, Sparkles, BarChart4, Shield, Zap, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    conversations: 0,
    reduction: 0
  });

  const metrics = [
    { value: '200+', label: 'Chatbot Projects', icon: Rocket, color: 'from-blue-500 to-blue-600' },
    { value: '50M+', label: 'Real Conversations', icon: MessageSquare, color: 'from-blue-600 to-blue-700' },
    { value: '60-70%', label: 'Ticket Reduction', icon: TrendingDown, color: 'from-blue-700 to-blue-800' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    animateCounter(200, 'projects');
    animateCounter(50, 'conversations');
    animateCounter(70, 'reduction');
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-300"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeIn">
            
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              We've Been Building Conversational AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Since People Thought It Was Science Fiction
              </span>
            </h2>
            <p className="text-md md:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Six years ago, when we told people we were building AI chatbots, they'd picture that paperclip from Microsoft Office. Now everyone expects their chatbots to understand them perfectly. The learning curve has been steep, but that's exactly why our current systems work so well.
            </p>
          </div>

          {/* Interactive Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`relative group animate-slideInUp delay-${idx * 100}`}
                onMouseEnter={() => setActiveMetric(idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500`}></div>
                <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 ${
                  activeMetric === idx ? 'border-blue-400 shadow-2xl scale-105' : 'border-blue-900/50 hover:border-blue-700'
                }`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-blue-300 font-medium md:text-lg text-md">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* What We've Learned Section */}
          <div className="mb-16 animate-slideInUp delay-300">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">What We've Learned from 200+ Projects</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Rocket,
                    title: 'From Simple to Complex',
                    desc: 'Built everything from simple FAQ bots to complex sales assistants that handle million-dollar deals',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Real-World Experience',
                    desc: 'Processed over 50 million real conversations (not practice scenarios)',
                    color: 'from-blue-600 to-blue-700'
                  },
                  {
                    icon: BarChart4,
                    title: 'Every Mistake Possible',
                    desc: 'Made every possible mistake in natural language processing (so you don\'t have to)',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: Shield,
                    title: 'All Scales Covered',
                    desc: 'Worked with startups using free hosting and Fortune 500s with enterprise security requirements',
                    color: 'from-blue-600 to-blue-700'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 animate-fadeIn delay-${400 + idx * 100}`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-blue-200 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Numbers That Matter */}
          <div className="mb-16 animate-slideInUp delay-600">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <BarChart4 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">The Numbers That Actually Matter</h3>
                </div>

                <p className="text-md text-blue-100 mb-8 leading-relaxed">
                  Our chatbots typically reduce support ticket volume by 60-70%, but here's what's more interesting—customer satisfaction scores usually <span className="font-bold text-white">go up, not down</span>. Turns out people don't mind talking to bots when those bots actually understand what they're asking.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: '60-70%', label: 'Ticket Reduction', icon: TrendingDown },
                    { value: '↑', label: 'Satisfaction Scores', icon: Users },
                    { value: '30sec', label: 'Response Time', icon: Clock },
                    { value: '24/7', label: 'Availability', icon: Zap }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Success Story */}
          <div className="animate-slideInUp delay-700">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Real Impact, Real Results</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
                    A SaaS company we worked with last year saw their first-response time drop from <span className="font-bold text-red-600">4 hours</span> to <span className="font-bold text-green-600">30 seconds</span>.
                  </p>
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    Their support team went from drowning in repetitive questions to focusing on complex problems that actually needed human expertise.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Response Time', before: '4 hours', after: '30 seconds', improvement: '99.8%' },
                    { label: 'Team Focus', before: 'Repetitive Tasks', after: 'Complex Problems', improvement: 'Better' },
                    { label: 'Customer Wait', before: 'Hours', after: 'Instant', improvement: '100%' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-600 line-through text-sm">{item.before}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <span className="text-green-600 font-bold">{item.after}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Improvement</div>
                        <div className="text-blue-600 font-bold">{item.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
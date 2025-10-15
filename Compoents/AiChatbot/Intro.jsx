"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle, TrendingUp, Zap, CheckCircle, XCircle, Brain, Sparkles, ArrowRight, BarChart3, Bot } from 'lucide-react';

export default function ChatbotArticleSections() {
  const [activeTab, setActiveTab] = useState('helpful');
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chatMessages = [
    "Understanding your question...",
    "Analyzing context...",
    "Providing personalized answer..."
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          background-size: 1000px 100%;
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          {/* Floating badge */}
          <div className={`flex justify-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
           
          </div>

          {/* Main headline */}
          <h2 className={`text-5xl md:text-6xl lg:text-5xl font-bold text-center mb-6 text-gray-900 leading-tight ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            Ever Wonder Why Some Chatbots Feel Like{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              Talking to a Wall?
            </span>
          </h2>

          {/* Story introduction */}
          <div className={` mx-auto mt-16 ${isVisible ? 'animate-scaleIn delay-300' : 'opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl  p-8 md:p-12 border border-blue-100/50 hover:shadow-3xl transition-shadow duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg animate-float">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-lg text-gray-700 leading-relaxed mb-4">
                    Last week, I watched a customer try to return a shirt through an e-commerce chatbot. After fifteen minutes of circular conversations and increasing frustration, she gave up and called customer service.
                  </p>
                  <p className="text-lg md:text-lg text-gray-700 leading-relaxed font-medium">
                    The irony? That chatbot was supposed to <span className="text-blue-600">save the company money</span> on support calls.
                  </p>
                </div>
              </div>

              {/* Key insight with shimmer effect */}
              <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 md:p-8 mt-8 text-white shadow-lg overflow-hidden group">
                <div className="absolute inset-0 animate-shimmer"></div>
                <div className="relative z-10">
                  <p className="text-xl md:text-xl font-semibold mb-4">
                    Here's the thing about chatbots—they're either incredibly helpful or completely useless.
                  </p>
                  <p className="text-lg text-blue-50">
                    There's not much middle ground.
                  </p>
                </div>
              </div>

              {/* Company intro */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At <span className="font-bold text-blue-600">OpenSoft AI</span>, we've been building the helpful kind for the past six years, and honestly, we've learned more from our failures than our successes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The difference between a chatbot that works and one that drives customers crazy usually comes down to <span className="font-semibold text-gray-900">understanding context</span>. Real conversations aren't scripted. People ask weird questions, change topics mid-sentence, and expect the bot to keep up.
                </p>
                <p className="text-xl text-blue-600 font-bold mt-6">
                  That's exactly what we design for.
                </p>
              </div>
            </div>
          </div>

          {/* Floating stats with staggered animation */}
          

          {/* CTA */}
         
        </div>
      </section>

      {/* Second Section - Interactive Modern Design */}
     
    </>
  );
}
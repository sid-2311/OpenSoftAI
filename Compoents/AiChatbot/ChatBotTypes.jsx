"use client";
import React, { useState, useEffect } from 'react';
import { Headphones, TrendingUp, ShoppingCart, Briefcase, Building2, ChevronRight, Bot, CheckCircle, Star, Users, Calendar, Shield, Activity } from 'lucide-react';

export default function ChatbotTypesSection() {
  const [activeBot, setActiveBot] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const chatbotTypes = [
    {
      id: 'support',
      title: 'Customer Support Bots',
      subtitle: 'The Workhorses',
      icon: Headphones,
      color: 'from-blue-500 to-blue-600',
      description: 'These handle the repetitive stuff that\'s killing your support team\'s motivation. Password resets, account questions, order tracking, basic troubleshooting. They\'re designed to solve problems, not just deflect them to humans.',
      caseStudy: {
        company: 'Software Company',
        stat: '80%',
        detail: 'of technical support tickets handled',
        extra: 'The remaining 20% that reach humans come with full conversation context, so agents know exactly what\'s been tried already.'
      },
      features: ['Password Resets', 'Order Tracking', 'Basic Troubleshooting', 'Context Preservation']
    },
    {
      id: 'sales',
      title: 'Sales & Lead Generation Bots',
      subtitle: 'The Smooth Talkers',
      icon: TrendingUp,
      color: 'from-blue-600 to-blue-700',
      description: 'Ever notice how the best salespeople ask great questions? Our sales bots do the same thing. They qualify leads by understanding what prospects actually need, not just collecting contact information.',
      caseStudy: {
        company: 'Real Estate Client',
        stat: 'Better',
        detail: 'qualifying questions than junior agents',
        extra: 'Handles initial property inquiries and schedules sight visits. Never forgets to follow up.'
      },
      features: ['Lead Qualification', 'Smart Questions', 'Visit Scheduling', 'Auto Follow-ups']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Conversation Bots',
      subtitle: 'The Personal Shoppers',
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600',
      description: 'These are product recommendation engines disguised as helpful conversations. They understand customer preferences, suggest alternatives when something\'s out of stock, and handle the entire purchase journey.',
      caseStudy: {
        company: 'E-commerce Store',
        stat: '3x',
        detail: 'increase in conversion rate',
        extra: 'Customers love the personalized recommendations and seamless purchase experience.'
      },
      features: ['Product Recommendations', 'Stock Alternatives', 'Purchase Journey', 'Preference Learning']
    },
    {
      id: 'internal',
      title: 'Internal Workflow Bots',
      subtitle: 'The Office Assistants',
      icon: Briefcase,
      color: 'from-blue-600 to-blue-700',
      description: 'HR questions, IT requests, meeting scheduling, expense approvals. These bots live in Slack or Teams and handle the internal stuff that usually requires three emails and two approvals.',
      caseStudy: {
        company: 'Tech Startup',
        stat: '70%',
        detail: 'reduction in internal email volume',
        extra: 'Employees get instant answers without waiting for HR or IT response.'
      },
      features: ['HR Inquiries', 'IT Requests', 'Meeting Scheduling', 'Expense Approvals']
    },
    {
      id: 'specialist',
      title: 'Industry-Specific Bots',
      subtitle: 'The Specialists',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      description: 'Healthcare bots that understand medical terminology and HIPAA requirements. Financial bots that handle account inquiries without compromising security. Each one built for the specific regulations and language of that industry.',
      caseStudy: {
        company: 'Healthcare Provider',
        stat: '100%',
        detail: 'HIPAA compliant interactions',
        extra: 'Handles patient inquiries while maintaining strict privacy and security standards.'
      },
      features: ['Industry Compliance', 'Specialized Terms', 'Security First', 'Regulatory Standards']
    }
  ];

  return (
    <>
      <style>{`
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16" data-animate id="header">
            
            <h2 className={`text-3xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight ${isVisible.header ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              The Different Types of Chatbots{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                We Actually Build
              </span>
            </h2>
            <p className={`text-md md:text-lg text-gray-600 max-w-3xl mx-auto ${isVisible.header ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              Each chatbot type is purpose-built for specific business needs, combining intelligent automation with human-like understanding.
            </p>
          </div>

          {/* Navigation Tabs */}
         <div className="flex overflow-x-auto whitespace-nowrap gap-3 mb-12 py-2 px-1 no-scrollbar">
  {chatbotTypes.map((bot, idx) => (
    <button
      key={bot.id}
      onClick={() => setActiveBot(idx)}
      className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
        activeBot === idx
          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
      }`}
    >
      <bot.icon className="w-5 h-5 inline mr-2" />
      {bot.subtitle}
    </button>
  ))}
</div>


          {/* Active Chatbot Display */}
          {chatbotTypes.map((bot, idx) => (
            activeBot === idx && (
              <div key={bot.id} className="mb-16 animate-scaleIn">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${bot.color} p-8 md:p-12 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                            <bot.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-blue-100 font-medium">{bot.subtitle}</div>
                            <h3 className="text-2xl md:text-4xl font-bold">{bot.title}</h3>
                          </div>
                        </div>
                        <p className="text-md md:text-lg text-blue-50 leading-relaxed max-w-3xl">
                          {bot.description}
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-float">
                          <bot.icon className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    {/* Features */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Star className="w-6 h-6 text-blue-600" />
                        Key Capabilities
                      </h4>
                      <div className="space-y-4">
                        {bot.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className={`flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:translate-x-2 animate-slideInLeft delay-${fIdx * 100}`}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Case Study */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Activity className="w-6 h-6 text-blue-600" />
                        Real-World Impact
                      </h4>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 animate-slideInRight">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-white p-2 rounded-lg">
                            <Building2 className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-sm font-semibold text-gray-700">{bot.caseStudy.company}</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 mb-4 shadow-md">
                          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{bot.caseStudy.stat}</div>
                          <div className="text-gray-700 font-medium">{bot.caseStudy.detail}</div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          {bot.caseStudy.extra}
                        </p>
                      </div>

                      {/* Additional Stats */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-white rounded-xl p-4 border border-blue-100 text-center hover:shadow-lg transition-shadow">
                          <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">24/7</div>
                          <div className="text-xs text-gray-600">Available</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-blue-100 text-center hover:shadow-lg transition-shadow">
                          <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">100%</div>
                          <div className="text-xs text-gray-600">Secure</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}

          {/* Bottom CTA */}
         
        </div>
      </section>
    </>
  );
}
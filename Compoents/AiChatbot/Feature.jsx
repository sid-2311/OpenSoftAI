"use client";
import React, { useState, useEffect } from 'react';
import { Brain, Globe, Users, Zap, Shield, ChevronDown, CheckCircle, ArrowRight, Lock, Database, MessageSquare, Sparkles, UserCheck, Activity } from 'lucide-react';

export default function TechnicalFeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeDemo, setActiveDemo] = useState(0);

  const conversationDemo = [
    { user: "I need a blue shirt", bot: "Great! What size are you looking for?" },
    { user: "Medium. Do you have it in stock?", bot: "Yes, we have 15 blue medium shirts available. Would you like to see them?" },
    { user: "What about the one I saw yesterday?", bot: "I remember you viewed our Premium Cotton Blue Shirt. It's in stock in medium. Should I add it to your cart?" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % conversationDemo.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const technicalFeatures = [
    {
      id: 'context',
      title: 'Context Understanding, Not Just Keywords',
      subtitle: 'True Conversational Memory',
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      problem: 'Most chatbots die when someone asks a follow-up question.',
      solution: 'Ours remember the entire conversation and understand when "it" refers to something mentioned three messages ago.',
      benefits: [
        'Full conversation history retention',
        'Reference resolution across messages',
        'Intent understanding and tracking',
        'Natural flow without repetition'
      ],
      techDetails: 'Advanced NLP models with context windows spanning entire conversations, powered by transformer architectures for semantic understanding.',
      stats: { value: '97%', label: 'Context Retention Accuracy' }
    },
    {
      id: 'multilingual',
      title: 'Multilingual Without the Awkwardness',
      subtitle: 'Cultural Communication Intelligence',
      icon: Globe,
      color: 'from-blue-600 to-blue-700',
      problem: 'Most translation just converts words, not cultural communication styles.',
      solution: 'Supporting 20+ languages isn\'t just about translation. Cultural communication styles are different. A chatbot conversation in Japanese feels different from one in German, exactly like it should.',
      benefits: [
        '20+ languages supported natively',
        'Cultural nuance preservation',
        'Localized conversation patterns',
        'Regional dialect understanding'
      ],
      techDetails: 'Language-specific training models that understand cultural context, formality levels, and regional communication preferences.',
      stats: { value: '20+', label: 'Languages Supported' }
    },
    {
      id: 'handoff',
      title: 'They Know When to Give Up',
      subtitle: 'Intelligent Human Escalation',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      problem: 'Bad chatbots frustrate users by pretending to understand when they don\'t.',
      solution: 'The smartest thing a chatbot can do is recognize when it\'s in over its head. Ours hand off to humans gracefully, with full context about what\'s already been discussed.',
      benefits: [
        'Automatic complexity detection',
        'Seamless agent handoff',
        'Full conversation transfer',
        'No repetition for customers'
      ],
      techDetails: 'Confidence scoring algorithms that monitor conversation quality and trigger human escalation when uncertainty exceeds thresholds.',
      stats: { value: '<30s', label: 'Average Handoff Time' }
    },
    {
      id: 'integration',
      title: 'Integration That Actually Works',
      subtitle: 'Unified Data Intelligence',
      icon: Zap,
      color: 'from-blue-600 to-blue-700',
      problem: 'Disconnected systems mean chatbots can\'t access the information they need.',
      solution: 'Your CRM has customer history. Your inventory system knows what\'s in stock. Your booking system knows available appointments. Our chatbots use all that information naturally during conversations.',
      benefits: [
        'Real-time CRM integration',
        'Live inventory access',
        'Booking system sync',
        'Payment gateway connection'
      ],
      techDetails: 'RESTful API connections with real-time data synchronization, webhook support, and enterprise SSO integration.',
      stats: { value: '100+', label: 'Platform Integrations' }
    },
    {
      id: 'security',
      title: 'Security That Doesn\'t Break Functionality',
      subtitle: 'Enterprise-Grade Protection',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      problem: 'Security often makes chatbots clunky and difficult to use.',
      solution: 'GDPR compliance, data encryption, secure authentication. All the boring stuff that keeps lawyers happy without making the chatbot clunky to use.',
      benefits: [
        'GDPR & CCPA compliant',
        'End-to-end encryption',
        'SOC 2 Type II certified',
        'Role-based access control'
      ],
      techDetails: 'AES-256 encryption at rest and in transit, zero-knowledge architecture, and automated compliance reporting.',
      stats: { value: '100%', label: 'Data Encryption' }
    }
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; filter: blur(40px); }
          50% { opacity: 0.6; filter: blur(60px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.1);
        }
      `}</style>

      <section className="relative min-h-screen py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full opacity-30 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-400 rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <header className="text-center mb-20 animate-slideUp">
           
            <h2 className="text-5xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              The Technical Stuff That {" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Actually Works
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced AI technology and enterprise integrations working together to create chatbots that feel remarkably human.
            </p>
          </header>

          {/* Interactive Demo Box */}
          <div className="max-w-4xl mx-auto mb-20 animate-scaleIn delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-100">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
                  </div>
                  <span className="text-sm text-blue-600 font-bold ml-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-pulse" />
                    Context-Aware Conversation
                  </span>
                </div>

                <div className="space-y-6">
                  {conversationDemo.slice(0, activeDemo + 1).map((msg, idx) => (
                    <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 0.2}s`, opacity: 0 }}>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                          <UserCheck className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl rounded-tl-sm px-6 py-4 max-w-md shadow-xl">
                          <p className="text-sm font-medium">{msg.user}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-50 p-3 rounded-2xl shadow-lg border-2 border-blue-100">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="bg-blue-50 text-gray-900 rounded-3xl rounded-tl-sm px-6 py-4 max-w-md shadow-xl border-2 border-blue-100">
                          <p className="text-sm font-medium">{msg.bot}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-2xl border-2 border-blue-100">
                  <Brain className="w-5 h-5 text-blue-600 animate-pulse" />
                  <span className="text-sm text-gray-700 font-medium">
                    Remembering context: <span className="text-blue-600 font-bold">"the one I saw yesterday"</span> → Premium Cotton Blue Shirt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-6xl mx-auto space-y-6 mb-20">
            {technicalFeatures.map((feature, idx) => (
              <article
                key={feature.id}
                className="relative group animate-slideUp"
                style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-500 ${
                  expandedFeature === feature.id ? 'border-blue-500 shadow-2xl' : 'border-blue-100 hover:border-blue-300'
                }`}>
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                    className="w-full p-8 flex items-start justify-between gap-6 text-left group/button"
                    aria-expanded={expandedFeature === feature.id}
                  >
                    <div className="flex items-start gap-6 flex-1">
                      <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl group-hover/button:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover/button:opacity-75 transition-opacity duration-300`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-blue-600 font-black mb-2 uppercase tracking-wider">
                          {feature.subtitle}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-lg">{feature.problem}</p>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 transition-transform duration-500 ${expandedFeature === feature.id ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-7 h-7 text-blue-600" />
                    </div>
                  </button>

                  {expandedFeature === feature.id && (
                    <div className="px-8 pb-8 animate-slideUp">
                      <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-100">
                        <div className="mb-8">
                          <h4 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-blue-600" />
                            Our Solution
                          </h4>
                          <p className="text-gray-700 text-lg leading-relaxed">{feature.solution}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {feature.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border-2 border-blue-100 group hover:scale-105 hover:border-blue-300 transition-all duration-300 shadow-md">
                              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                              <span className="text-sm text-gray-800 font-semibold">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="md:col-span-2 bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-md">
                            <h5 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2 uppercase tracking-wider">
                              <Database className="w-5 h-5 text-blue-600" />
                              Technical Implementation
                            </h5>
                            <p className="text-sm text-gray-600 leading-relaxed">{feature.techDetails}</p>
                          </div>
                          <div className={`relative bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-white text-center shadow-xl group overflow-hidden`}>
                            <div className="absolute inset-0 animate-shimmer"></div>
                            <div className="relative">
                              <div className="text-5xl font-black mb-2">{feature.stats.value}</div>
                              <div className="text-sm font-bold opacity-90">{feature.stats.label}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Integration Visual */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500 animate-glow"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-2 border-blue-100">
                <h3 className="text-4xl font-black text-gray-900 mb-12 text-center">
                  Connected to Your Entire Tech Stack
                </h3>
                
                <div className="relative">
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-50 animate-glow"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-3xl shadow-2xl">
                        <MessageSquare className="w-20 h-20 text-white" />
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse shadow-lg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { icon: Database, label: 'CRM Systems' },
                      { icon: Shield, label: 'Security APIs' },
                      { icon: Zap, label: 'Booking Systems' },
                      { icon: Lock, label: 'Payment Gateways' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center group/item">
                        <div className="relative mx-auto w-20 h-20 mb-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-40 group-hover/item:opacity-70 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-2xl shadow-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                            <item.icon className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="text-sm font-bold text-gray-800">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Badges */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Shield, label: 'GDPR Compliant' },
                { icon: Lock, label: 'SOC 2 Type II' },
                { icon: CheckCircle, label: 'ISO 27001' },
                { icon: Database, label: 'AES-256 Encryption' }
              ].map((badge, idx) => (
                <div key={idx} className="bg-white px-6 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-blue-100 hover:border-blue-300">
                  <badge.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-gray-800">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-glow"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-center shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-6">
                Want to See the Technology in Action?
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a technical demo and see how our AI chatbots can integrate seamlessly with your existing systems.
              </p>
              <button className="group/btn relative inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-6 rounded-full text-lg font-black shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105">
                <span>Book Technical Demo</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full animate-shimmer"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
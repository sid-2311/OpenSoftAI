"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Brain, Globe, Users, Zap, Shield, ChevronDown, CheckCircle, ArrowRight, Lock, Database, MessageSquare, Sparkles, UserCheck, Activity } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function TechnicalFeaturesSection({ data }) {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeDemo, setActiveDemo] = useState(0);

  // Extract section data
  const section = data?.features || {};
  const heading = section.heading || {};
  const technicalFeaturesData = section.items || [];
  const integration = section.integration || {};
  const securityBadgesData = section.securityBadges || [];
  const demoConversation = section.demoConversation || [
    { user: "I need a blue shirt", bot: "Great! What size are you looking for?" },
    { user: "Medium. Do you have it in stock?", bot: "Yes, we have 15 blue medium shirts available. Would you like to see them?" },
    { user: "What about the one I saw yesterday?", bot: "I remember you viewed our Premium Cotton Blue Shirt. It's in stock in medium. Should I add it to your cart?" }
  ];

  const technicalFeatures = technicalFeaturesData.map(f => ({
    id: f.id,
    title: f.title,
    subtitle: f.subtitle,
    icon: f.icon,
    color: f.color,
    problem: f.problem,
    solution: f.solution,
    benefits: f.benefits || [],
    techDetails: f.techDetails,
    stats: f.stats || {},
  }));

  const securityBadges = securityBadgesData.map(b => ({
    icon: b.icon,
    label: b.label,
  }));

  // Auto cycle messages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoConversation.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [demoConversation.length]);

  // Auto-scroll to bottom
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeDemo]);

  if (!section.heading) return null;

  return (
    <>
      <style>{`
        @keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        @keyframes glow {0%,100%{opacity:.3;filter:blur(40px)}50%{opacity:.6;filter:blur(60px)}}
        @keyframes shimmer {0%{background-position:-1000px 0}100%{background-position:1000px 0}}
        @keyframes slideUp {from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
        @keyframes scaleIn {from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
        .animate-float{animation:float 6s ease-in-out infinite}
        .animate-glow{animation:glow 4s ease-in-out infinite}
        .animate-shimmer{background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);background-size:1000px 100%;animation:shimmer 3s infinite}
        .animate-slideUp{animation:slideUp .8s cubic-bezier(.16,1,.3,1) forwards}
        .animate-scaleIn{animation:scaleIn .6s cubic-bezier(.16,1,.3,1) forwards}
      `}</style>

      <section className="relative min-h-screen py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full opacity-30 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-400 rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header */}
          <header className="text-center mb-20 animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 leading-tight">
              {heading.main}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                {heading.highlight}
              </span>
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {section.description}
            </p>
          </header>

          {/* ---------- STABLE DEMO BOX START ---------- */}
          <div className="max-w-4xl mx-auto mb-20 animate-scaleIn delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-100">

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-100">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-blue-600 font-bold ml-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-pulse" />
                    Context-Aware Conversation
                  </span>
                </div>

                {/* ------------ FIXED HEIGHT SCROLLABLE AREA ------------ */}
                <div
                  ref={scrollRef}
                  className="space-y-6 overflow-y-auto pr-2"
                  style={{
                    maxHeight: "260px",
                    scrollbarWidth: "thin"
                  }}
                >
                  {demoConversation.slice(0, activeDemo + 1).map((msg, idx) => (
                    <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 0.2}s`, opacity: 0 }}>

                      {/* User Message */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                          <UserCheck className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl rounded-tl-sm px-6 py-4 max-w-md shadow-xl">
                          <p className="text-sm font-medium">{msg.user}</p>
                        </div>
                      </div>

                      {/* Bot Message */}
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

                {/* Highlight bar */}
                <div className="mt-8 flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-2xl border-2 border-blue-100">
                  <Brain className="w-5 h-5 text-blue-600 animate-pulse" />
                  <span className="text-sm text-gray-700 font-medium">
                    Remembering context:{" "}
                    <span className="text-blue-600 font-bold">"the one I saw yesterday"</span> → Premium Cotton Blue Shirt
                  </span>
                </div>

              </div>
            </div>
          </div>
          {/* ---------- STABLE DEMO BOX END ---------- */}

          {/* ---------- Technical Features ---------- */}
          <div className="max-w-6xl mx-auto space-y-6 mb-20">
            {technicalFeatures.map((feature, idx) => (
              <article
                key={feature.id}
                className="relative group animate-slideUp"
                style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-500 ${expandedFeature === feature.id ? 'border-blue-500 shadow-2xl' : 'border-blue-100 hover:border-blue-300'
                  }`}>
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                    className="w-full p-8 flex items-start justify-between gap-6 text-left group/button"
                  >
                    <div className="flex items-start gap-6 flex-1">
                      <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <DynamicIcon name={feature.icon} className="w-8 h-8 text-white" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-blue-600 font-black mb-2 uppercase tracking-wider">
                          {feature.subtitle}
                        </div>
                        <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-lg">{feature.problem}</p>
                      </div>
                    </div>

                    <ChevronDown className={`w-7 h-7 text-blue-600 transition-transform duration-500 ${expandedFeature === feature.id ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedFeature === feature.id && (
                    <div className="px-8 pb-8 animate-slideUp">
                      <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-100">

                        {/* Solution */}
                        <div className="mb-8">
                          <h4 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-blue-600" />
                            Our Solution
                          </h4>
                          <p className="text-gray-700 text-lg leading-relaxed">{feature.solution}</p>
                        </div>

                        {/* Benefits */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {feature.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border-2 border-blue-100 shadow-md">
                              <CheckCircle className="w-5 h-5 text-blue-600" />
                              <span className="text-sm text-gray-800 font-semibold">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technical */}
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="md:col-span-2 bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-md">
                            <h5 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2 uppercase tracking-wider">
                              <Database className="w-5 h-5 text-blue-600" />
                              Technical Implementation
                            </h5>
                            <p className="text-sm text-gray-600 leading-relaxed">{feature.techDetails}</p>
                          </div>

                          <div className={`relative bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-white text-center shadow-xl`}>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-40 animate-glow"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-2 border-blue-100">
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                  {integration.title || "Connected to Your Entire Tech Stack"}
                </h3>

                <div className="relative">
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-50 animate-glow"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-3xl shadow-2xl">
                        <MessageSquare className="w-10 h-10 text-white" />
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse shadow-lg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {(integration.integrations || [{ icon: 'Database', label: 'CRM Systems' }, { icon: 'Shield', label: 'Security APIs' }, { icon: 'Zap', label: 'Booking Systems' }, { icon: 'Lock', label: 'Payment Gateways' }]).map((item, idx) => {
                      return (
                        <div key={idx} className="text-center">
                          <div className="relative mx-auto w-20 h-20 mb-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-40"></div>
                            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-2xl shadow-xl flex items-center justify-center">
                              <DynamicIcon name={item.icon} className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          <div className="text-sm font-bold text-gray-800">{item.label}</div>
                        </div>
                      )
                    })}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Security Badges */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex flex-wrap justify-center gap-4">
              {securityBadges.map((badge, idx) => (
                <div key={idx} className="bg-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg border-2 border-blue-100 hover:border-blue-300">
                  <DynamicIcon name={badge.icon} className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-gray-800">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

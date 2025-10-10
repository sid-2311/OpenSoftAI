"use client";

import { useState } from "react";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Wrench,
  Package,
  Calendar,
  AlertCircle,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function InboundOutboundAgentsSection() {
  const [activeTab, setActiveTab] = useState("inbound");

  const inboundCapabilities = [
    { icon: <MessageSquare className="w-5 h-5" />, title: "Customer Support Queries", desc: "Instant answers to FAQs, troubleshooting, and account questions" },
    { icon: <Package className="w-5 h-5" />, title: "Product Information Requests", desc: "Detailed explanations of features, pricing, and availability" },
    { icon: <Wrench className="w-5 h-5" />, title: "Technical Support", desc: "First-line diagnostics and guided problem resolution" },
    { icon: <Package className="w-5 h-5" />, title: "Order Status & Tracking", desc: "Real-time updates on purchases and shipments" },
    { icon: <Calendar className="w-5 h-5" />, title: "Appointment Scheduling", desc: "Smart calendar integration for bookings and rescheduling" },
    { icon: <AlertCircle className="w-5 h-5" />, title: "Complaint Resolution", desc: "Empathetic handling of concerns with appropriate escalation" },
  ];

  const inboundAdvantages = [
    { icon: <Clock className="w-6 h-6" />, title: "Zero Wait Times", desc: "Customers connect instantly, every time" },
    { icon: <Shield className="w-6 h-6" />, title: "Consistent Service Quality", desc: "Same high-level support whether it’s your first call or thousandth of the day" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Intelligent Escalation", desc: "Complex issues seamlessly transferred to human agents with full context" },
    { icon: <Zap className="w-6 h-6" />, title: "Multi-Channel Continuity", desc: "Conversation history preserved across phone, chat, and email" },
  ];

  const outboundUseCases = [
    { icon: <Target className="w-5 h-5" />, title: "Lead Qualification & Nurturing", desc: "Identify high-intent prospects and warm them for your sales team" },
    { icon: <Calendar className="w-5 h-5" />, title: "Appointment Setting & Confirmation", desc: "Fill calendars while reducing no-shows" },
    { icon: <Users className="w-5 h-5" />, title: "Customer Follow-ups", desc: "Post-purchase satisfaction calls and upselling opportunities" },
    { icon: <AlertCircle className="w-5 h-5" />, title: "Payment Reminders", desc: "Gentle, professional collection calls that preserve relationships" },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Survey & Feedback Collection", desc: "Gather valuable insights at scale" },
    { icon: <Zap className="w-5 h-5" />, title: "Event Promotion & Registration", desc: "Drive attendance for webinars, conferences, and sales events" },
  ];

  const outboundBenefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Massive Scale", desc: "Make hundreds of calls simultaneously without hiring additional staff" },
    { icon: <Shield className="w-6 h-6" />, title: "Perfect Consistency", desc: "Every prospect receives the same polished pitch and experience" },
    { icon: <Clock className="w-6 h-6" />, title: "Intelligent Timing", desc: "AI learns optimal calling times for different customer segments" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Detailed Analytics", desc: "Track conversion rates, call outcomes, and optimization opportunities" },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="ai-agents-section"
    >
      {/* SEO Headings and Meta Context */}
      <h2 id="ai-agents-section" className="sr-only">
        AI Inbound and Outbound Calling Agents – Intelligent Voice Automation for Businesses
      </h2>

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto">
        {/* Tab Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-4 p-2 bg-white rounded-2xl shadow-lg border border-blue-100">
            <button
              onClick={() => setActiveTab("inbound")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "inbound"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-600 hover:bg-blue-50"
              }`}
              aria-pressed={activeTab === "inbound"}
            >
              <PhoneIncoming className="w-5 h-5" />
              <span>Inbound Agents</span>
            </button>
            <button
              onClick={() => setActiveTab("outbound")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "outbound"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-600 hover:bg-blue-50"
              }`}
              aria-pressed={activeTab === "outbound"}
            >
              <PhoneOutgoing className="w-5 h-5" />
              <span>Outbound Agents</span>
            </button>
          </div>
        </div>

        {/* Conditional Tabs */}
        {activeTab === "inbound" ? (
          <InboundSection capabilities={inboundCapabilities} advantages={inboundAdvantages} />
        ) : (
          <OutboundSection useCases={outboundUseCases} benefits={outboundBenefits} />
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

/* ------------------ Inbound Section ------------------ */
function InboundSection({ capabilities, advantages }) {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl mb-6 shadow-lg shadow-blue-500/30">
          <PhoneIncoming className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Inbound AI Calling Agents:
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Your 24/7 Customer Service Champions
          </span>
        </h3>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What Our Inbound AI Agents Handle:
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-xl">
        <h4 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-blue-600" /> The Inbound Advantage:
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                {item.icon}
              </div>
              <div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------ Outbound Section ------------------ */
function OutboundSection({ useCases, benefits }) {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl mb-6 shadow-lg shadow-blue-500/30">
          <PhoneOutgoing className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Outbound AI Calling Agents:
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Scale Your Reach Without Scaling Your Team
          </span>
        </h3>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Outbound Use Cases That Drive Results:
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-xl">
        <h4 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-blue-600" /> Outbound Benefits:
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                {item.icon}
              </div>
              <div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Head from "next/head";
import {
  Shield,
  Mail,
  Lock,
  Eye,
  Cookie,
  Globe,
  Users,
  FileText,
  ChevronDown,
  CheckCircle2,
  Server,
  AlertTriangle,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (index) =>
    setActiveSection(activeSection === index ? null : index);

  const sections = [
    {
      icon: Users,
      title: "Personal Data We Collect",
      tag: "What we need",
      content:
        "While using our Service, we may ask you to provide certain personally identifiable information:",
      items: [
        { label: "Email address", desc: "For account management and notifications" },
        { label: "Github username", desc: "To link your account with Github" },
        { label: "Github avatar", desc: "For profile display purposes" },
      ],
    },
    {
      icon: Eye,
      title: "Usage Data Collection",
      tag: "Anonymous tracking",
      content:
        "We collect information about how you interact with our Service. This includes browser type, version, pages visited, time and date of visits, and time spent on pages. We anonymize your IP address to protect your privacy.",
      items: [],
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking",
      tag: "Essential only",
      content:
        "We use anonymous cookies only for essential functionality, such as remembering your progress. We do not use cookies for advertising or third-party tracking.",
      items: [
        { label: "Session Cookies", desc: "To operate our Service" },
        { label: "Preference Cookies", desc: "Remember your settings" },
        { label: "Security Cookies", desc: "Cloudflare & Stripe protection" },
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Data",
      tag: "Our promise",
      content: "Your data helps us provide and improve our Service:",
      items: [
        { label: "Service delivery", desc: "Maintain and operate the platform" },
        { label: "Communication", desc: "Notify you about important updates" },
        { label: "Support", desc: "Provide customer care when needed" },
        { label: "Improvement", desc: "Analyze usage to enhance features" },
        { label: "Security", desc: "Detect and prevent technical issues" },
      ],
    },
    {
      icon: Server,
      title: "Data Transfer & Storage",
      tag: "Netherlands-based",
      content:
        "Your data may be transferred to and stored in the Netherlands. We ensure all transfers are secure and comply with data protection regulations. Adequate controls are in place to protect your information.",
      items: [],
    },
    {
      icon: Shield,
      title: "Security Measures",
      tag: "Protected",
      content:
        "We use industry-standard security measures to protect your data. However, no internet transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
      items: [],
    },
  ];

  const highlights = [
    { icon: CheckCircle2, label: "GDPR Compliant", desc: "Full European data protection" },
    { icon: CheckCircle2, label: "No Tracking", desc: "We don't track your activity" },
    { icon: CheckCircle2, label: "Anonymized IPs", desc: "Your IP is never stored" },
    { icon: CheckCircle2, label: "Open Source Analytics", desc: "Using Plausible Analytics" },
  ];

  const lastUpdated = new Date("2023-07-19").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>OpenSoftAI Privacy Policy | Data Protection & Your Rights
</title>
        <meta
          name="description"
          content=" At OpenSoftAI, your privacy is our priority. Discover our policies on personal data collection, cookies, analytics, security, and how you can control your information."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, GDPR, cookies, personal data, learnhtmlcss.online"
        />
       
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://opensoftai.com/privacy-policy" />
        {/* <meta property="og:image" content="/privacy-preview.jpg" /> */}
        <link rel="canonical" href="https://opensoftai.com/privacy-policy" />
      </Head>

      {/* ✅ Main Page Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
          <div className="relative max-w-6xl mx-auto px-6 py-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                <Shield className="w-9 h-9 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-100 mb-1">
                  Last updated: {lastUpdated}
                </div>
                <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
              </div>
            </div>

            <p className="text-xl text-blue-50 max-w-3xl leading-relaxed">
              Your privacy matters. Learn how{" "}
              <span className="text-white font-semibold">OpenSoftAI</span> collects,
              uses, and protects your data 
              {/* <span className="text-white font-semibold">learnhtmlcss.online</span>. */}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all"
                >
                  <item.icon className="w-6 h-6 text-white mb-2" />
                  <div className="font-semibold text-sm mb-1 text-white">{item.label}</div>
                  <div className="text-xs text-blue-100">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-6 flex items-center gap-4 text-left hover:bg-blue-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      {section.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    {section.content.substring(0, 100)}...
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 transition-transform ${
                    activeSection === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeSection === index && (
                <div className="px-6 pb-6 border-t border-blue-100 transition-all duration-300">
                  <p className="text-slate-700 mt-4 leading-relaxed">{section.content}</p>
                  {section.items.length > 0 && (
                    <div className="mt-6 space-y-3">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-100"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                          <div>
                            <div className="font-semibold text-slate-900">{item.label}</div>
                            <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 shadow-2xl text-center relative overflow-hidden">
            <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Questions About Your Privacy?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We're here to help. Reach out if you have any questions or concerns about
              how we handle your data.
            </p>
            <a
              href="mailto:info@opensoftai.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              <Mail className="w-5 h-5" />
              info@opensoftai.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

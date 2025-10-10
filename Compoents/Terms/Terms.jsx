"use client";

import { useState } from "react";
import {
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Scale,
  Users,
  Building2,
  ChevronDown,
  Gavel,
  Lock,
  UserCheck,
  DollarSign,
  Globe,
} from "lucide-react";



export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      icon: FileText,
      title: "Purpose of Agreement",
      tag: "Overview",
      content:
        "This Agreement establishes the terms under which OpenSoftAI provides development services to the Client for creating a game website. The website may include games involving elements of skill, chance, betting, slot games, and style games as specified by the Client. The Company's role is strictly confined to technical development and delivery of the game website according to Client's specifications.",
      items: [],
    },
    {
      icon: Scale,
      title: "Legal Compliance & Responsibilities",
      tag: "Critical",
      content:
        "The Company has no involvement in, nor responsibility for, any operational, financial, legal, or regulatory aspects of the website's use or management after delivery. The Company does not assume any responsibility to ensure that the games or website comply with any local, state, national, or international laws or regulations.",
      items: [
        {
          label: "Local, National & International Laws",
          desc: "Not responsible for compliance with Public Gambling Act 1867, Rajasthan Gaming Ordinances, IT Act 2000, Consumer Protection Act 2019, RBI Guidelines, COPPA, or international licensing requirements (UK Gambling Commission, Curacao eGaming, Malta Gaming Authority)",
        },
        {
          label: "Licensing & Compliance",
          desc: "Client's sole responsibility to obtain and maintain all necessary licenses, permits, and approvals for operating the website in any jurisdiction",
        },
        {
          label: "Regional Restrictions",
          desc: "Client must restrict access to regions where they don't hold valid licenses using geoblocking or IP restrictions",
        },
      ],
    },
    {
      icon: Building2,
      title: "Company's Role & Limitations",
      tag: "Our Scope",
      content:
        "OpenSoftAI is engaged solely to provide technical development services. The Company is not a partner, co-owner, or stakeholder in the game website or any business operations.",
      items: [
        {
          label: "Technical Development Only",
          desc: "Design, coding, integration, and delivery of the game website per Client specifications",
        },
        {
          label: "No Operational Involvement",
          desc: "Not involved in operational, financial, regulatory, or managerial aspects",
        },
        {
          label: "No Warranties",
          desc: "No warranty regarding legal compliance, financial viability, or market success",
        },
        {
          label: "No Regulatory Services",
          desc: "Does not provide legal or regulatory advisory services",
        },
      ],
    },
    {
      icon: Users,
      title: "Client's Responsibilities",
      tag: "Your Duties",
      content:
        "The Client is solely responsible for providing complete, accurate, and lawful specifications. All content, features, and functionalities must comply with applicable laws in jurisdictions where the website operates.",
      items: [
        {
          label: "Game Legality Verification",
          desc: "Verify legality of all games (skill-based, chance-based, betting, slot, style) in target jurisdictions",
        },
        {
          label: "Regulatory Compliance",
          desc: "Ensure website complies with gaming laws, gambling regulations, data protection laws",
        },
        {
          label: "Licenses & Permits",
          desc: "Acquire and maintain all necessary licenses, GST certifications, and regulatory approvals",
        },
        {
          label: "Legal Certifications",
          desc: "Secure and keep up-to-date all legal certifications required for operation",
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: "Indemnification & Liability",
      tag: "Protection",
      content:
        "The Client agrees to indemnify, defend, and hold harmless OpenSoftAI from any and all claims, damages, losses, liabilities, and expenses, including attorney fees, arising from the operation or use of the game website.",
      items: [
        { label: "Full Client Responsibility", desc: "Client is 100% responsible for ensuring operations are legal" },
        { label: "Illegal Activities", desc: "Company not accountable for any illegal activity conducted through the website" },
        { label: "Legal Consequences", desc: "Fines, claims, or lawsuits are complete responsibility of the Client" },
        { label: "No Company Liability", desc: "Company makes no representations regarding website legality in any jurisdiction" },
      ],
    },
    {
      icon: DollarSign,
      title: "GGR Payment & Liability",
      tag: "Financial",
      content:
        "The Client is responsible for paying Gross Gaming Revenue (GGR) either directly to the game provider or through the Company as per agreed terms.",
      items: [
        { label: "Payment Responsibility", desc: "Client bears full responsibility for GGR payments" },
        { label: "Legal Protection", desc: "Client indemnifies Company from any legal claims by game providers" },
        { label: "Facilitation Only", desc: "Company only facilitates application process, not a partner in the game" },
        { label: "Client's Liability", desc: "Client responsible for all penalties arising from payment failures" },
      ],
    },
    {
      icon: UserCheck,
      title: "User Management & Disputes",
      tag: "Operations",
      content:
        "The Client is responsible for all aspects of user management, complaints, and disputes. The Company shall not be involved in user-related issues.",
      items: [
        { label: "User Complaints", desc: "Client handles and resolves all user complaints and issues" },
        { label: "Fraud & Scams", desc: "Client assumes full responsibility for fraudulent activities on the website" },
        { label: "Payment Disputes", desc: "Client manages financial disputes between users and website" },
        { label: "User Data & Privacy", desc: "Client ensures compliance with data protection laws and user data security" },
      ],
    },
    {
      icon: Lock,
      title: "Age Restriction & Security",
      tag: "Compliance",
      content:
        "The Client must ensure the game website is only accessible to adults according to legal age requirements in their jurisdiction.",
      items: [
        { label: "Age Verification", desc: "Implement and enforce age verification measures to restrict minor access" },
        { label: "User Authentication", desc: "Implement and manage secure user authentication procedures" },
        { label: "Security Responsibility", desc: "Company not responsible for security vulnerabilities post-delivery" },
        { label: "Content Moderation", desc: "Client responsible for moderating user-generated content" },
      ],
    },
    {
      icon: Gavel,
      title: "Termination Rights",
      tag: "Important",
      content:
        "If it comes to the Company's attention that the Client is operating the website in violation of government laws or regulations, the Company reserves the right to immediately suspend or terminate the operation.",
      items: [
        { label: "Immediate Action", desc: "Company can suspend/terminate upon learning of legal violations" },
        { label: "No Monitoring Duty", desc: "Company not responsible for monitoring Client's activities" },
        { label: "Third-Party Reports", desc: "Action taken upon receiving information from third parties or government entities" },
      ],
    },
  ];

  const highlights = [
    { icon: Shield, label: "Technical Services Only", desc: "We provide development, not operations" },
    { icon: Scale, label: "No Legal Advice", desc: "Consult independent legal counsel" },
    { icon: AlertTriangle, label: "Client's Full Liability", desc: "100% responsibility for compliance" },
    { icon: CheckCircle2, label: "Clear Boundaries", desc: "Defined roles and responsibilities" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
              <FileText className="w-9 h-9 text-blue-600" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white">Terms & Conditions</h1>
              <p className="text-blue-100 mt-2 max-w-3xl mx-auto">
                Legal agreement between <span className="font-semibold text-white">OpenSoftAI</span> and the Client for software development services.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all">
                <item.icon className="w-6 h-6 text-white mb-2" />
                <div className="font-semibold text-sm mb-1 text-white">{item.label}</div>
                <div className="text-xs text-blue-100">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-4">
        {sections.map((section, index) => (
          <article key={index} className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <button
              onClick={() => toggleSection(index)}
              className="w-full p-6 flex items-center gap-4 text-left hover:bg-blue-50 transition-colors"
              aria-expanded={activeSection === index}
              aria-controls={`section-${index}`}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <section.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">{section.tag}</span>
                </div>
                <p className="text-sm text-slate-600">{section.content.substring(0, 120)}...</p>
              </div>
              <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform ${activeSection === index ? "rotate-180" : ""}`} />
            </button>
            {activeSection === index && (
              <div id={`section-${index}`} className="px-6 pb-6 border-t border-blue-100">
                <p className="text-slate-700 mt-4">{section.content}</p>
                {section.items.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
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
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">OpenSoftAI</div>
              <div className="text-sm text-slate-600">Software Development Services</div>
            </div>
          </div>
          <div className="text-slate-600 text-sm">© 2024 All rights reserved</div>
        </div>
      </footer>
    </main>
  );
}

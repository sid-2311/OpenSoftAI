"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RefreshCw,
  XCircle,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Shield,
  ChevronDown,
  DollarSign,
  Settings,
  Wrench,
  Calendar,
  Database,
  Scale,
} from "lucide-react";





export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      icon: XCircle,
      title: "Cancellation by Customer",
      tag: "Non-Refundable",
      color: "red",
      content:
        "If the Client decides to cancel the project, the advance payment is non-refundable under any circumstances. The advance is considered a commitment towards development work.",
      items: [
        {
          label: "Advance Payment",
          desc: "Non-refundable under all circumstances. The advance is a commitment towards development work and will not be returned if the Client cancels or terminates the project.",
        },
        {
          label: "Custom Project",
          desc: "Client remains obligated to pay for the portion of work completed. Company reserves the right to claim payment for completed work, even if canceled before full completion.",
        },
        {
          label: "Ready-to-Use Project",
          desc: "Cancellation is not valid. Company reserves the right to claim full payment. No refund will be provided if Client discontinues the project.",
        },
        {
          label: "Hybrid Project Example (₹2 Lakh)",
          desc: "80% Ready-to-Use (₹1.6L): Client pays 100% - no cancellation valid. 20% Custom (₹40K): Client pays for work completed (e.g., 50% complete = ₹20K payment). No refunds for completed or ready-to-use components.",
        },
      ],
    },
    {
      icon: RefreshCw,
      title: "Cancellation by Company",
      tag: "Refundable",
      color: "green",
      content:
        "If the Company is unable to complete the project due to government guidelines, legal issues, or resource unavailability, refunds will be processed based on incomplete work.",
      items: [
        {
          label: "100% Incomplete Project",
          desc: "Company will refund the full payment made by Customer, including the advance.",
        },
        {
          label: "Partial Completion",
          desc: "Company will refund a portion based on the percentage of project remaining incomplete.",
        },
        {
          label: "Source Code Delivery",
          desc: "Company will provide source code for completed portions, enabling Customer to complete the project with another developer.",
        },
        {
          label: "Refund Timeline",
          desc: "Refund will be processed within 45-60 days of the Company's decision to cancel.",
        },
      ],
    },
    {
      icon: FileText,
      title: "Project Development Terms",
      tag: "Important",
      color: "blue",
      content:
        "The Company develops software based on the demo link shared with and finalized by the Client. Development strictly follows demo specifications.",
      items: [
        {
          label: "Demo-Based Development",
          desc: "Final project reflects exact features shown in demo. Non-functional features in demo will remain non-functional unless specifically addressed in Agreement.",
        },
        {
          label: "Feature Limitations",
          desc: "Company is not obligated to add, modify, or extend features beyond demo unless agreed upon in writing by both parties.",
        },
        {
          label: "Verbal Commitments",
          desc: "Informal commitments or verbal understandings are not legally binding unless incorporated into written Agreement. Client must raise issues before signing.",
        },
        {
          label: "Custom Development Timeline",
          desc: "Additional time required for custom development based on scope of work, communicated in advance. Timeline is an estimate and may be extended if unforeseen issues arise.",
        },
      ],
    },
    {
      icon: Wrench,
      title: "Post-Delivery Support",
      tag: "Included",
      color: "blue",
      content:
        "Bug fixes and error resolution provided for committed period post-delivery. Additional services or feature requests incur extra charges.",
      items: [
        {
          label: "Support Hours",
          desc: "Monday to Friday: 10:30 AM to 6:00 PM | Saturday: 10:30 AM to 2:00 PM. No support outside these hours or on government holidays.",
        },
        {
          label: "Included Services",
          desc: "Bug fixes and error resolution during committed support period.",
        },
        {
          label: "Additional Charges",
          desc: "Additional services or feature requests will incur extra charges either before or after delivery.",
        },
        {
          label: "After-Hours Requests",
          desc: "Support requests made after-hours will be addressed during next official business period.",
        },
      ],
    },
    {
      icon: Settings,
      title: "Custom Development",
      tag: "Flexible",
      color: "blue",
      content:
        "Additional custom development during or after the project can be handled by the Company or provided as capability for Customer to develop themselves.",
      items: [
        {
          label: "Development Options",
          desc: "Company can develop custom parts or provide Customer ability to develop themselves.",
        },
        {
          label: "Additional Costs",
          desc: "Custom development incurs additional charges and extends timeline as agreed by both parties.",
        },
      ],
    },
    {
      icon: Database,
      title: "Data Backup Policy",
      tag: "Limited",
      color: "amber",
      content:
        "Data backup provided strictly in accordance with hosting plan purchased by Client. Company maintains backups only for duration specified in hosting plan.",
      items: [
        {
          label: "Backup Duration",
          desc: "7-day plan = Last 7 days backup | 1-day plan = Last 24 hours backup. Backup limited to hosting plan specifications.",
        },
        {
          label: "Company Responsibility",
          desc: "Company is not responsible for maintaining backups beyond hosting plan coverage.",
        },
        {
          label: "Data Loss Liability",
          desc: "Company not liable for data loss due to chance, human error, or unforeseen activities.",
        },
      ],
    },
    {
      icon: Scale,
      title: "Client Responsibilities",
      tag: "Critical",
      color: "purple",
      content:
        "Client is fully responsible for ensuring their use of the developed software complies with all relevant laws and regulations.",
      items: [
        {
          label: "Legal Compliance",
          desc: "Company makes no warranties regarding legality of Client's software use. Client must ensure activities comply with all laws and regulations.",
        },
        {
          label: "Licensing Requirements",
          desc: "If using game for entertainment or real money activities, Client must obtain necessary licenses and permits per applicable laws.",
        },
        {
          label: "Legal Verification",
          desc: "Company will not verify legality of Client's operations. Client must ensure full legal compliance before offering game to users.",
        },
        {
          label: "Indemnification",
          desc: "Client agrees to indemnify and hold Company harmless from all legal costs and damages from disputes arising from operation.",
        },
      ],
    },
  ];

  const highlights = [
    {
      icon: AlertTriangle,
      label: "Advance Non-Refundable",
      desc: "All advance payments are final",
    },
    {
      icon: CheckCircle2,
      label: "Demo-Based Development",
      desc: "Built exactly as per demo specs",
    },
    {
      icon: Clock,
      label: "Support Included",
      desc: "Bug fixes during support period",
    },
    {
      icon: Shield,
      label: "Client's Legal Duty",
      desc: "Ensure full legal compliance",
    },
  ];

  const projectTypes = [
    {
      title: "Custom Project",
      icon: Settings,
      color: "from-blue-500 to-blue-700",
      policy: "Pay for completed work portion",
      refund: "No refund on advance",
    },
    {
      title: "Ready-to-Use Project",
      icon: CheckCircle2,
      color: "from-green-500 to-green-700",
      policy: "Full payment required",
      refund: "Cancellation not valid",
    },
    {
      title: "Hybrid Project",
      icon: RefreshCw,
      color: "from-purple-500 to-purple-700",
      policy: "100% for ready + custom work %",
      refund: "No refund on ready portion",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* SEO Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
              <RefreshCw className="w-9 h-9 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-blue-100 mb-1">OpenSoftAI</div>
              <h1 className="text-5xl font-bold text-white">Refund Policy</h1>
            </div>
          </div>
          <p className="text-xl text-blue-50 max-w-3xl leading-relaxed mx-auto">
            Clear guidelines on refunds, cancellations, and project terms for both{" "}
            <span className="text-white font-semibold">Client</span> and{" "}
            <span className="text-white font-semibold">Company</span> initiated cancellations.
          </p>

          {/* Highlights */}
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
      </header>

      {/* Main Sections */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Project Types & Cancellation Policy
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectTypes.map((type, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4`}
              >
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{type.title}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span className="text-slate-700">{type.policy}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span className="text-slate-700">{type.refund}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="max-w-6xl mx-auto px-6 pb-12 space-y-4">
        {sections.map((section, index) => (
          <article
            key={index}
            className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full p-6 flex items-center gap-4 text-left hover:bg-blue-50 transition-colors"
              aria-expanded={activeSection === index}
              aria-controls={`section-content-${index}`}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <section.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      section.color === "red"
                        ? "bg-red-100 text-red-700"
                        : section.color === "green"
                        ? "bg-green-100 text-green-700"
                        : section.color === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.color === "purple"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {section.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{section.content.substring(0, 120)}...</p>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-blue-600 transition-transform flex-shrink-0 ${
                  activeSection === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === index && (
              <div
                id={`section-content-${index}`}
                className="px-6 pb-6 border-t border-blue-100"
              >
                <p className="text-slate-700 mt-4 leading-relaxed">{section.content}</p>
                {section.items.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-100"
                      >
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
    </main>
  );
}

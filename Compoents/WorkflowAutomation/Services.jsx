"use client";

import { ClipboardCheck, Workflow, BarChart3, Link2, Activity, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function AIWorkflowAutomationCapabilities() {
  const capabilities = [
    {
      icon: ClipboardCheck,
      title: "Business Process Automation",
      description:
        "We identify and automate the repetitive tasks that consume your team's time and energy. From document processing to approvals and communications, our AI handles these faster, more accurately, and consistently than manual processes.",
      details: [
        "Document processing and data extraction",
        "Approval workflows and routing",
        "Routine communications and notifications",
        "Invoice processing and financial workflows",
        "Compliance monitoring and reporting",
      ],
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Design",
      description:
        "Our AI doesn’t just follow rules — it makes smart decisions based on data, history, and context. These adaptive workflows learn, adjust, and continuously optimize for better results.",
      details: [
        "Dynamic task routing based on workload and expertise",
        "Intelligent prioritization using multiple data points",
        "Automated exception handling and escalation",
        "Context-aware decision making",
        "Performance optimization through machine learning",
      ],
    },
    {
      icon: BarChart3,
      title: "Data-Driven Automation & Reporting",
      description:
        "We automate your data pipelines so dashboards, reports, and insights update themselves in real time — giving your teams instant access to the metrics that matter.",
      details: [
        "Real-time dashboard updates and KPI tracking",
        "Automated report generation and distribution",
        "Data quality monitoring and cleanup",
        "Predictive analytics and trend identification",
        "Custom alert systems for critical metrics",
      ],
    },
    {
      icon: Link2,
      title: "AI-Powered Integration Solutions",
      description:
        "Our AI automation connects seamlessly with your CRM, ERP, and productivity tools, creating a unified ecosystem where data flows automatically and systems work together.",
      details: [
        "CRM and sales process automation",
        "ERP and financial system integration",
        "Productivity tool orchestration",
        "API development and management",
        "Legacy system modernization",
      ],
    },
    {
      icon: Activity,
      title: "Predictive Workflow Optimization",
      description:
        "We use advanced analytics to help your business stay ahead of issues. These systems detect and prevent bottlenecks, optimize resources, and improve operational performance.",
      details: [
        "Bottleneck prediction and prevention",
        "Resource allocation optimization",
        "Demand forecasting and capacity planning",
        "Quality issue early detection",
        "Performance trend analysis",
      ],
    },
    {
      icon: Settings,
      title: "Custom Automation Solutions",
      description:
        "Every business is unique. We build tailored AI automation systems designed around your processes, challenges, and goals — ensuring seamless fit and maximum impact.",
      details: [
        "Custom AI workflow development",
        "Industry-specific automation design",
        "Scalable architectures for growth",
        "Cross-department coordination automation",
        "Continuous improvement and optimization",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Core AI Workflow Automation Capabilities
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-6">
            We design intelligent automation systems that streamline operations, eliminate manual work, and continuously improve performance — helping your business work smarter and scale faster.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div key={index} className="group perspective">
                <motion.div
                  
                  className="relative w-full h-[22rem] cursor-pointer transition-transform duration-700 transform-style-preserve-3d"
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-blue-700 rounded-2xl shadow-lg flex flex-col justify-center items-center backface-hidden p-6 text-center">
                    <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-xl mb-4 shadow-md shadow-blue-400/40">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed px-4">
                      {cap.description}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-6 backface-hidden rotate-y-180 flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-blue-700" />
                      <h3 className="text-xl font-bold text-blue-700">
                        {cap.title}
                      </h3>
                    </div>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm leading-relaxed">
                      {cap.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom CSS */}
      
       
    </section>
  );
}

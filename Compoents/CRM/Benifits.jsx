"use client";
import { useState, useEffect } from "react";
import {
  TrendingUp,
  Clock,
  HeartHandshake,
  Layers,
  BarChart3,
  AlertCircle,
  Database,
  Settings2,
  Workflow,
  Plug,
  Users,
  Info,
} from "lucide-react";

export default function CRMImpactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✅ CRM Business Benefits
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Sales Conversion Rates",
      description:
        "Equip your sales team with instant access to complete customer profiles, interaction history, and intelligent next-step recommendations to close more deals.",
      stat: "+22%",
      statLabel: "Conversions",
    },
    {
      icon: Clock,
      title: "Shorten Sales Cycles",
      description:
        "Automated follow-ups, pipeline tracking, and lead prioritization keep your team focused on high-value opportunities and accelerate deal closures.",
      stat: "-30%",
      statLabel: "Cycle Time",
    },
    {
      icon: HeartHandshake,
      title: "Improve Customer Retention",
      description:
        "Complete interaction history and proactive relationship management help identify upselling opportunities and strengthen long-term loyalty.",
      stat: "+18%",
      statLabel: "Retention",
    },
    {
      icon: Layers,
      title: "Scale Sales Operations Efficiently",
      description:
        "Standardized processes and centralized customer data ensure that new team members become productive quickly without losing institutional knowledge.",
      stat: "∞",
      statLabel: "Scalability",
    },
    {
      icon: BarChart3,
      title: "Generate Predictable Revenue Forecasting",
      description:
        "Accurate pipeline analytics provide clear revenue insights and help you plan staffing, inventory, and growth with confidence.",
      stat: "+40%",
      statLabel: "Forecast Accuracy",
    },
    {
      icon: Workflow,
      title: "Reduce Lead Leakage and Follow-Up Failures",
      description:
        "Automated reminders, nurturing workflows, and real-time alerts ensure no lead is lost due to human error or busy schedules.",
      stat: "0%",
      statLabel: "Lead Loss",
    },
  ];

  // ⚠️ Pitfalls of Generic CRMs
  const pitfalls = [
    {
      icon: Settings2,
      title: "They Force You to Adapt to Their Process",
      description:
        "Rigid CRM workflows rarely match your actual sales operations, making your team adjust to the software instead of enhancing productivity.",
      solution:
        "We build CRMs that adapt to your unique workflows and empower your existing processes.",
    },
    {
      icon: Database,
      title: "They’re Either Too Simple or Too Complex",
      description:
        "Basic tools lack essential functionality, while enterprise systems overwhelm small teams with clutter and complexity.",
      solution:
        "We design scalable systems that grow with your business — simple when you start, powerful as you expand.",
    },
    {
      icon: Plug,
      title: "They Don’t Integrate with Your Existing Tools",
      description:
        "Disconnected systems cause data silos and inefficiencies across marketing, sales, and support.",
      solution:
        "Our custom CRMs integrate seamlessly with your existing tools — email, calendars, marketing, and analytics.",
    },
    {
      icon: Info,
      title: "They Focus on Data Collection, Not Sales Results",
      description:
        "Most CRMs excel at storing information but fail to guide teams toward meaningful actions that drive revenue.",
      solution:
        "We create intelligent CRMs that turn customer data into actionable insights that grow sales.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full animate-pulse opacity-30"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 border-2 border-blue-300 rounded-full animate-pulse opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Business Benefits That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Impact Your Bottom Line
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empower your sales, improve retention, and achieve predictable
            revenue growth through smarter CRM systems.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="space-y-24 mb-32">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isLeft ? "-translate-x-10" : "translate-x-10"}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon Section */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      <div
                        className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${
                          isActive ? "-rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border-4 border-blue-100 px-6 py-4">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-gray-600 font-semibold whitespace-nowrap">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="lg:w-7/12">
                  <div className="max-w-2xl">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
                      Benefit {index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pitfalls Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">
            Why Generic CRMs{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              Don’t Work for Growing Businesses
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common problems with typical CRM platforms — and how our tailored
            approach solves them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {pitfalls.map((pitfall, index) => {
            const Icon = pitfall.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-4">
                  <div className="bg-gradient-to-br from-red-400 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {pitfall.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{pitfall.description}</p>
                    <p className="text-blue-700 font-semibold">
                      {pitfall.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



// The Difference Between Data Management and Relationship Building
// Most CRMs Are Glorified Databases
// They store customer information well but don't help you use that information to build stronger relationships or close more deals. Data collection becomes the end goal instead of the means to better business outcomes.
// Great CRMs Are Business Growth Tools
// They provide actionable insights, automate routine tasks, and guide sales teams toward activities that actually generate revenue. Every feature serves the ultimate goal of growing customer relationships and business results.
// Personalization at Scale
// Custom CRM development lets you automate personal touches – remembering customer preferences, tracking important dates, and providing relevant information – that make customers feel valued without overwhelming your team.

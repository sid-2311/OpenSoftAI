"use client";

import { useState } from "react";
import Image from "next/image";
import { Landmark, Stethoscope, ShoppingCart, Factory, Truck, Building2 } from "lucide-react";

const INDUSTRIES = [
  {
    id: "Finance & Banking",
    title: "Finance",
    heading: "Finance & Banking",
    text: `Money doesn't sleep, and neither should your AI. Financial services need systems that detect fraud in milliseconds, process loans without human bias, and provide investment advice that's both personalized and compliant with complex regulations.

We build AI that understands financial risk, recognizes suspicious patterns, and communicates with customers in language they actually understand. Our solutions help banks prevent fraud with 99.8% accuracy while speeding up legitimate transactions. Loan processing that used to take days happens in hours, and investment advisors get AI copilots that can analyze market conditions faster than any human ever could.`,
    bullets: [
      "Real-time fraud detection that stops threats without blocking legitimate customers",
      "Automated credit decisions based on comprehensive risk analysis",
      "Trading algorithms that adapt to market conditions in real-time",
      "Compliance monitoring that never misses regulatory requirements",
    ],
    img: "/fin.webp",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: "Healthcare & Medical",
    title: "Healthcare",
    heading: "Healthcare & Medical",
    text: `Healthcare AI has to be different. It's not just about efficiency—it's about improving patient outcomes while reducing the administrative burden that's burning out medical professionals. Every solution we build is HIPAA-compliant from the ground up and designed with patient privacy as the highest priority.

Our healthcare AI helps predict which patients need early intervention, streamlines appointment scheduling so staff can focus on care, and assists doctors with diagnostic support that's accurate but never presumptuous. The goal isn't to replace medical judgment—it's to give healthcare providers better information faster.`,
    bullets: [
      "Predictive analytics that identify at-risk patients before conditions become critical",
      "Medical imaging analysis that matches radiologist accuracy with instant results",
      "Automated scheduling that handles complex requirements and preferences",
      "Clinical decision support that provides insights without overriding professional judgment",
    ],
    img: "/healthcare.avif",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "Retail & E-commerce",
    title: "Retail",
    heading: "Retail & E-commerce",
    text: `Retail is personal, even at scale. Customers want to feel like you understand their preferences, their budget, and their needs. But doing that manually for thousands or millions of customers? Impossible.

Our retail AI creates individualized experiences that feel personal because they are personal. Recommendation engines that actually recommend things customers want to buy. Dynamic pricing that maximizes profitability without alienating customers. Customer service that knows purchase history, understands context, and resolves issues on the first interaction.`,
    bullets: [
      "Product recommendations that increase average order value by 45%",
      "Pricing optimization that responds to market conditions in real-time",
      "Inventory management that predicts demand fluctuations before they happen",
      "Customer service that turns problems into opportunities for deeper engagement",
    ],
    img: "/retail.webp",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: "Manufacturing & Industrial",
    title: "Manufacturing",
    heading: "Manufacturing & Industrial",
    text: `Manufacturing is where AI proves its worth in the most tangible ways. When a machine goes down unexpectedly, everyone knows exactly what it costs. When quality control catches defects after production instead of during, the numbers are right there on the balance sheet.

Our manufacturing AI predicts equipment failures weeks before they happen, catches quality issues in real-time, and optimizes production schedules for maximum efficiency. These systems work in harsh industrial environments and integrate with existing equipment without requiring complete overhauls.`,
    bullets: [
      "Predictive maintenance that prevents 75% of unplanned downtime",
      "Quality control systems that catch defects with computer vision precision",
      "Production optimization that balances efficiency, quality, and resource utilization",
      "Energy management that reduces consumption while maintaining output",
    ],
    img: "/manufacturing.jpg",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    id: "Logistics & Transportation",
    title: "Logistics",
    heading: "Logistics & Transportation",
    text: `Every delivery is a promise to a customer. Every route is a balance between efficiency and service. Every warehouse operation is a complex dance of inventory, space, and time. AI makes all of it smarter.

Our logistics solutions optimize routes with real-time traffic and weather data, predict demand patterns that help you prepare for busy seasons, and automate warehouse operations so orders get fulfilled faster and more accurately. Fleet management systems track maintenance needs, optimize fuel consumption, and keep drivers safer on the road.`,
    bullets: [
      "Route optimization that saves fuel costs while improving delivery times",
      "Demand forecasting that prevents both stockouts and overstock situations",
      "Warehouse automation that increases throughput without increasing errors",
      "Fleet management that maximizes uptime and minimizes operational costs",
    ],
    img: "/logistics.jpg",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: "Startups & Enterprises",
    title: "Startups",
    heading: "Startups & Enterprises",
    text: `Size doesn't matter when it comes to intelligent solutions. Startups need AI that can scale from prototype to global deployment. Enterprises need transformation strategies that work across complex organizations with established processes.

We provide startups with enterprise-grade architecture from day one, so they never outgrow their AI systems. For enterprises, we create transformation roadmaps that introduce AI capabilities gradually, allowing organizations to adapt and learn without disrupting critical operations.`,
    bullets: [
      "Startup-friendly pricing with enterprise-scale architecture",
      "Rapid development cycles that get you to market faster",
      "Change management support for smooth organizational adoption",
      "Strategic consulting that aligns AI capabilities with business objectives",
    ],
    img: "/startups.jpg",
    icon: <Building2 className="w-6 h-6" />,
  },
];

export default function IndustriesWeKnow() {
  const [active, setActive] = useState(INDUSTRIES[0].id);

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-12 bg-[#F3F8FF] flex flex-col items-center"
      aria-labelledby="industries-heading"
    >
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Industries We Know Inside and Out
        </h2>
      </header>

      {/* Card wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Row */}
        <div className="flex justify-start gap-6 mb-8 overflow-x-auto">
          {INDUSTRIES.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${
                  isActive
                    ? "bg-[#0B2542] text-white border-2 border-[#243B55] shadow-lg"
                    : "text-gray-300 hover:text-white border border-[#0B2542]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span className="text-sm font-medium text-center">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        {INDUSTRIES.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div
              key={tab.id}
              hidden={!isActive}
              role="tabpanel"
              aria-labelledby={tab.id}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {tab.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center md:justify-end">
                  <Image
                    src={tab.img}
                    alt={tab.heading}
                    width={480}
                    height={360}
                    className="rounded-lg object-cover"
                    priority={isActive} // preload active tab
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

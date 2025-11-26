"use client";

import {
  Clock,
  BarChart3,
  ShieldCheck,
  Database,
  TrendingUp,
  Users,
} from "lucide-react";

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Eliminate 70–80% of Manual, Repetitive Tasks",
      description:
        "Our AI workflow automation typically removes the majority of routine manual work, freeing your team to focus on high-value, strategic activities. Tasks that used to take hours now happen automatically in minutes.",
    },
    {
      icon: BarChart3,
      title: "Improve Operational Efficiency by 40–60%",
      description:
        "By streamlining processes and removing bottlenecks, our AI-driven workflows significantly boost productivity. Expect faster cycle times, fewer delays, and smoother day-to-day operations.",
    },
    {
      icon: ShieldCheck,
      title: "Reduce Errors and Improve Accuracy",
      description:
        "AI doesn’t get tired or distracted. Our automation solutions execute tasks with precision every time, minimizing human error and ensuring consistently high quality across all operations.",
    },
    {
      icon: Database,
      title: "Enable Data-Driven Decision Making",
      description:
        "Our systems automatically collect, analyze, and report your operational data in real time — empowering you to make smarter, faster, evidence-based decisions rather than relying on outdated reports or intuition.",
    },
    {
      icon: TrendingUp,
      title: "Scale Operations Without Scaling Costs",
      description:
        "As your business grows, AI workflows expand effortlessly to handle higher workloads — without the need to proportionally increase headcount or resources. Scale smarter, not harder.",
    },
    {
      icon: Users,
      title: "Enhance Team Collaboration and Satisfaction",
      description:
        "When AI handles repetitive work, your team can focus on meaningful, creative tasks. Happier employees mean higher engagement, stronger collaboration, and better overall performance.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="business-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="business-benefits-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            The Business Benefits That Drive Real Growth
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
            Our AI workflow automation solutions deliver measurable efficiency
            gains, cost savings, and improved team performance — turning
            day-to-day operations into a strategic advantage.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

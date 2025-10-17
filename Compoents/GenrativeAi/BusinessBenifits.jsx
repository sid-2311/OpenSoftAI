"use client";

import {
  Zap,
  DollarSign,
  Layers,
  CheckCircle,
  Lightbulb,
  UserCheck,
} from "lucide-react";

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Accelerate Content Production by 10x",
      description:
        "What used to take weeks now takes hours. Our generative AI solutions dramatically reduce the time from concept to finished content, allowing you to respond quickly to market opportunities and maintain a consistent content calendar without strain.",
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs While Improving Quality",
      description:
        "By automating repetitive creative tasks, you can reallocate your budget from production to strategy and innovation. Teams can focus on high-value activities while AI handles the heavy lifting of content creation.",
    },
    {
      icon: Layers,
      title: "Scale Creative Workflows Effortlessly",
      description:
        "Whether you need 10 social media posts or 10,000 personalized emails, generative AI scales seamlessly. You can experiment with more creative ideas, test different approaches, and maintain quality at any volume.",
    },
    {
      icon: CheckCircle,
      title: "Maintain Perfect Brand Consistency",
      description:
        "Our AI models learn your brand guidelines, tone of voice, and visual style to ensure every piece of generated content aligns with your brand identity. No more inconsistent messaging or off-brand visuals.",
    },
    {
      icon: Lightbulb,
      title: "Enable Creative Innovation",
      description:
        "With AI handling routine content creation, your team gains the freedom to pursue innovative projects, experiment with new formats, and focus on strategic creative decisions that drive business growth.",
    },
    {
      icon: UserCheck,
      title: "Personalize Content at Scale",
      description:
        "Create thousands of variations tailored to different audiences, demographics, or use cases without sacrificing quality or brand consistency.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="business-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="business-benefits-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            The Business Benefits That Drive Real Results
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
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

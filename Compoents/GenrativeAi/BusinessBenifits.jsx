"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function BusinessBenefits({ data }) {
  const section = data?.benefits || {};
  const benefits = section.benefits || [];

  if (!section.title) return null;

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="business-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* ✅ Heading from CMS */}
        <header className="text-center mb-16">
          <h2
            id="business-benefits-heading"
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {section.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </header>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            return (
              <article
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <DynamicIcon name={benefit.icon || "Zap"} className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
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

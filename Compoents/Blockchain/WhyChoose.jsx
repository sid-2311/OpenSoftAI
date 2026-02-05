"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function WhyChooseUs({ data }) {
  const section = data?.whyChooseUsSection || {};
  const reasons = section.reasons || [];

  return (
    <section
      className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="why-choose-us-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {section.header?.title || "Why Industry Leaders Choose"}{" "}
            <span className="text-blue-600">{section.header?.highlight || "OpenSoftAI"}</span>
          </h2>
        </header>

        {/* Reasons List */}
        <div className="space-y-8">
          {reasons.map((reason, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={index}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center group`}
              >
                {/* Icon Block */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div
                    className={`relative w-32 h-32 rounded-2xl bg-gradient-to-br ${reason.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : "from-indigo-500 to-indigo-600"
                      } flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <DynamicIcon name={reason.icon} className="w-16 h-16 text-white" strokeWidth={1.5} />
                    <div className="absolute -z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Description Block */}
                <div className="w-full md:w-2/3">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

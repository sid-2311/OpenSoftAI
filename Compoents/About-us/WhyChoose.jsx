"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function WhyChoose({ data }) {
  if (!data) return null;

  const { ariaLabelledBy, header, features } = data;

  return (
    <section className="py-20 bg-gray-50" aria-labelledby={ariaLabelledBy}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            id={ariaLabelledBy}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {header.title}{" "}
            <span className="text-indigo-600">{header.highlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              role="listitem"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-5">
                <DynamicIcon name={item.icon} className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

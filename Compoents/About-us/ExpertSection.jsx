"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function ExpertiseSection({ data }) {
  if (!data) return null;

  const { ariaLabelledBy, header, expertiseItems } = data;

  return (
    <section className="bg-white py-16" aria-labelledby={ariaLabelledBy}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2
            id={ariaLabelledBy}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {header.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* Expertise Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12" role="list">
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              role="listitem"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${item.color === 'green' ? 'bg-green-100 text-green-600' : item.color === 'purple' ? 'bg-purple-100 text-purple-600' : item.color === 'red' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                  <DynamicIcon name={item.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

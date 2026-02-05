"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function ValuesSection({ data }) {
  if (!data) return null;

  const { ariaLabelledBy, header, values } = data;

  return (
    <section className="bg-gray-50 py-16" aria-labelledby={ariaLabelledBy}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id={ariaLabelledBy}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {header.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* Values Grid */}
        <div
          className="grid md:grid-cols-2 gap-8"
          role="list"
          aria-label="Company core values"
        >
          {values.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
              role="listitem"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-xl group-hover:scale-110 transition">
                  <DynamicIcon name={val.icon} className={`w-10 h-10 ${val.color === 'green' ? 'text-green-600' : val.color === 'purple' ? 'text-purple-600' : val.color === 'red' ? 'text-red-600' : 'text-blue-600'}`} />
                </div>
                <h3 className="text-xl font-semibold">{val.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

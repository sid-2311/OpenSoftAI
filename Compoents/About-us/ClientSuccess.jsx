"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function IndustryProjectShowcase({ data }) {
  if (!data) return null;

  const { header, projects } = data;

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {header.title}{" "}
          <span className="text-blue-600">{header.highlight}</span>
        </h2>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          {header.description}
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white shadow-lg rounded-2xl p-8 relative hover:shadow-2xl transition duration-300 border border-blue-100 text-left"
              role="region"
              aria-label={`${proj.category} project showcase`}
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                {proj.category}
              </h3>

              <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                {proj.description}
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">
                Examples of Our Projects:
              </h4>

              <ul className="space-y-2">
                {proj.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <DynamicIcon name={ex.icon || "Globe"} className="w-5 h-5 text-blue-600" />
                    <a
                      href={ex.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {ex.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

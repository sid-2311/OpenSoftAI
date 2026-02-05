// components/HowTeamsWorkSection.js
"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function HowTeamsWorkSection({ data }) {
  if (!data) return null;

  const { heading, description, benefits = [] } = data;

  return (
    <section
      id="how-teams-work"
      className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 px-6 text-slate-800"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          {heading}
        </h2>
        <p className="text-md md:text-lg text-slate-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {benefits.map((item, index) => {
          return (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto">
                <DynamicIcon name={item.icon} className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

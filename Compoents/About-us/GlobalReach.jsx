"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";

export default function GlobalReach({ data }) {
  if (!data) return null;

  const { ariaLabelledBy, header, cards } = data;

  const borderColors = [
    "border-indigo-600",
    "border-blue-500",
    "border-green-500",
  ];

  const iconColors = [
    "text-indigo-600",
    "text-blue-500",
    "text-green-500",
  ];

  return (
    <section
      className="relative bg-gray-50 py-20"
      aria-labelledby={ariaLabelledBy}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        {/* Heading */}
        <h2
          id={ariaLabelledBy}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          {header.title}{" "}
          <span className="text-indigo-600">{header.highlight}</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          {header.description}
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 border-t-4 ${borderColors[i]}`}
              role="region"
              aria-labelledby={card.ariaId}
            >
              <DynamicIcon name={card.icon} className={`w-12 h-12 ${iconColors[i]} mx-auto mb-4`} />
              <h3
                id={card.ariaId}
                className="text-xl font-semibold text-gray-800 mb-3"
              >
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

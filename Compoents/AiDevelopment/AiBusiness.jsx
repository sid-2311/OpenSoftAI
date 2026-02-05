import React from "react";

export default function AIBusinessSection({ data }) {
  if (!data) return null;

  const { header, introCard, stats, brandCards } = data;

  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-950 mb-4">
            {header.title}{" "}
            <span className="text-blue-600">{header.highlight}</span>
          </h2>
          {header.divider && (
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          )}
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-100 mb-12">
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
            {introCard.introText}
          </p>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md border-l-4 border-${item.color}`}
              >
                <div className={`text-3xl font-bold text-${item.color} mb-2`}>
                  {item.value}
                </div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            {introCard.closingText}
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {brandCards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 text-white ${
                card.variant === "dark"
                  ? "bg-blue-900"
                  : "bg-blue-600 relative overflow-hidden"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="leading-relaxed text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

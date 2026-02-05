"use client";

import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function CallToActionCard({ data }) {
  if (!data) return null;

  const { header, description, buttons, footerText } = data;

  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center border border-blue-100">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {header.title.split(header.highlight)[0]}
            <span className="text-blue-600">{header.highlight}</span>
          </h2>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {description.primary}
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
            {description.secondary}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className={`px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 flex items-center gap-2 ${btn.variant === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                role="button"
              >
                {btn.icon && <DynamicIcon name={btn.icon} className="w-5 h-5" />}
                {btn.label}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-10 text-sm text-gray-500">{footerText}</p>
        </div>
      </div>
    </section>
  );
}

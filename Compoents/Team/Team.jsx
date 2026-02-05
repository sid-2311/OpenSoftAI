"use client";
import Image from "next/image";

export default function Team({ data }) {
  if (!data) return null;

  const members = Array.isArray(data.members) ? data.members : [];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* ===== Header ===== */}
        <div className="text-center mx-auto mb-12">
          {data.title && (
            <h2 className="text-4xl md:text-4xl mb-4">
              {data.title}
            </h2>
          )}
          {data.description && (
            <p className="text-white text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* ===== Team Grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={member.name || index} className="text-center">

              {/* Image */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-800">
                {member?.image ? (
                  <Image
                    src={member.image}
                    alt={member?.name || "Team Member"}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* Name */}
              {member?.name && (
                <h3 className="text-base font-semibold truncate">
                  {member.name}
                </h3>
              )}

              {/* Designation */}
              {member?.designation && (
                <p className="text-gray-400 text-sm truncate">
                  {member.designation}
                </p>
              )}

              {/* Experience (optional) */}
              {member?.experience && (
                <p className="text-gray-400 text-sm">
                  {member.experience}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

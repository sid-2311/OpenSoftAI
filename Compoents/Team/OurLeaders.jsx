"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Github,
  Globe,
  Twitter,
} from "lucide-react";

const getIconFromUrl = (url = "") => {
  const p = url.toLowerCase();

  if (p.includes("linkedin")) return Linkedin;
  if (p.includes("instagram")) return Instagram;
  if (p.includes("github")) return Github;
  if (p.includes("twitter") || p.includes("x")) return Twitter;

  return Globe;
};

const OurLeaders = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.15)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 space-y-28">
        {data.map((person, index) => (
          <div
            key={person.name || index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl">
                {person.image && (
                  <Image
                    src={person.image}
                    alt={person.name || "Leader"}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-2">
                {person.name}
              </h3>

              <p className="text-lg text-blue-400 mb-4">
                {person.designation}
              </p>

              {/* Safe bio split */}
              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                {(person.bio || "")
                  .split("\n\n")
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>

              {/* Button */}
              {person.buttonText && (
                <Link href={person.buttonUrl || "#"} target="_blank">
                  <button className="mt-6 px-6 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                    {person.buttonText}
                  </button>
                </Link>
              )}

              {/* Social Icons from DB */}
              {person.socials?.length > 0 && (
                <div className="flex gap-4 mt-6 flex-wrap">
                  {person.socials.map((s, i) => {
                    const Icon = getIconFromUrl(s.url);
                    return (
                      <Link
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-blue-500/30 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5 text-blue-400 hover:text-white" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLeaders;

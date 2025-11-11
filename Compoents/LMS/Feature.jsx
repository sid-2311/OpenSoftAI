"use client";
import { useState } from "react";
import {
  Video,
  Brain,
  FileCheck,
  BarChart3,
  Users,
  ClipboardCheck,
  Smartphone,
  Link,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

export default function LMSFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Video,
      title: "Interactive Live Classrooms",
      description:
        "HD video conferencing with breakout rooms, screen sharing, whiteboard collaboration, and real-time interaction tools.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: Brain,
      title: "Adaptive Content Delivery",
      description:
        "Personalized learning paths that adapt based on student progress, learning style, and performance analytics.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: FileCheck,
      title: "Comprehensive Assessment Tools",
      description:
        "Quizzes, assignments, peer reviews, and proctored exams with automated grading and detailed feedback systems.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Student Progress Analytics",
      description:
        "Individual and group-level insights into progress, engagement patterns, and areas that need attention.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: Users,
      title: "Discussion Forums & Communities",
      description:
        "Structured spaces for peer interaction, study groups, and ongoing conversations beyond the classroom.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: ClipboardCheck,
      title: "Assignment & Project Management",
      description:
        "Submission portals, rubric-based grading, plagiarism detection, and collaborative project spaces.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: Smartphone,
      title: "Mobile Learning Experience",
      description:
        "Full functionality on smartphones and tablets — because learning happens everywhere, not just at desks.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: Link,
      title: "Integration Capabilities",
      description:
        "Seamless connectivity with student information systems, payment processors, and educational tools.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: GraduationCap,
      title: "Instructor Training & Support Tools",
      description:
        "Built-in resources that help educators transition from in-person to online instruction effectively.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: BadgeCheck,
      title: "Certification & Credential Management",
      description:
        "Automated certificate generation, digital badges, and transcript management for completed courses.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Features That Make{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Learning Actually Happen
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 transition-all duration-500 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2">
                  <div className="flex items-start gap-6 mb-4">
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center transform transition-transform duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed pl-0">
                    {feature.description}
                  </p>

                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div
                      className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-20`}
                    ></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

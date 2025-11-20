"use client";
import { useState, useEffect } from 'react';
import { 
  BookOpenCheck,  
  MonitorPlay,    
  SignalHigh,     
  GraduationCap,  
  BarChart3       
} from 'lucide-react';

export default function WhyChooseLMSSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: BookOpenCheck,
      title: 'We Understand Learning, Not Just Technology',
      description:
        'Our development team includes educators and learning designers who understand how people actually learn and what motivates students to engage with educational content.'
    },
    {
      icon: MonitorPlay,
      title: 'Interactive Experience Design',
      description:
        'We build learning platforms around engaging experiences, not just content management. Students stay actively involved throughout their learning journey.'
    },
    {
      icon: SignalHigh,
      title: 'Scalable Live Interaction Technology',
      description:
        'Our platforms handle everything from intimate seminar discussions to large lecture halls, with video quality and interaction tools that work reliably under load.'
    },
    {
      icon: GraduationCap,
      title: 'Educator-Friendly Interfaces',
      description:
        'We design for the people who actually use these systems daily – instructors who need to focus on teaching, not wrestling with complicated software interfaces.'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Analytics Integration',
      description:
        'Track not just completion rates but actual learning outcomes, engagement patterns, and student success metrics that help improve educational programs over time.'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-24 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              OpenSoftAI
            </span>{' '}
            for LMS Development
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '500+', label: 'Institutions Empowered' },
            { value: '95%', label: 'Learner Engagement Rate' },
            { value: '24/7', label: 'Technical Support' },
            { value: '100%', label: 'Customizable Solutions' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-10 py-5 rounded-full font-bold text-sm shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Build Your LMS with OpenSoftAI
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

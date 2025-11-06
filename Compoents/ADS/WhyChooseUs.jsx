"use client";
import { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Rocket, 
  ShieldCheck, 
  UserCheck, 
  Code2,
  Headphones 
} from 'lucide-react';

export default function WhyChooseAppDevSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: Smartphone,
      title: 'Proven Mobile Development Expertise Across Industries',
      description:
        'Our development team combines years of mobile app experience with deep understanding of different business models and user expectations. We’ve successfully launched apps for startups, enterprises, and everything in between across multiple industries.',
    },
    {
      icon: Rocket,
      title: 'Agile Development Methodology for Faster Time-to-Market',
      description:
        'Iterative development cycles, regular client feedback, and flexible project management help bring your app to market quickly while maintaining high quality standards. Rapid prototyping and testing ensure your app meets user expectations before full development investment.',
    },
    {
      icon: ShieldCheck,
      title: 'Security-First Architecture for Long-Term Success',
      description:
        'Mobile apps handle sensitive user data and business information that require comprehensive security measures. We implement security best practices, encryption standards, and privacy protections from the initial development phases through ongoing maintenance.',
    },
    {
      icon: UserCheck,
      title: 'User Experience Design Based on Real Behavior Data',
      description:
        'Our design process combines user research, usability testing, and behavior analytics to create interfaces that users find intuitive and engaging. We design for how people actually use mobile apps, not just how we think they should use them.',
    },
    {
      icon: Code2,
      title: 'Cross-Platform Efficiency Without Compromising Quality',
      description:
        'When cross-platform development makes business sense, we use proven frameworks like Flutter and React Native to deliver native-quality experiences efficiently. Single codebase maintenance reduces long-term costs while maintaining excellent user experiences.',
    },
    {
      icon: Headphones,
      title: 'Comprehensive Post-Launch Support & Evolution',
      description:
        'Great apps require ongoing attention to maintain performance, security, and user satisfaction. We provide app store management, performance monitoring, security updates, and feature evolution services that keep your app competitive long-term.',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              OpenSoft AI
            </span>{' '}
            for App Development
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-blue-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '100+', label: 'Apps Delivered' },
            { value: '95%', label: 'Client Retention' },
            { value: '24/7', label: 'Support & Monitoring' },
            { value: '5★', label: 'Average App Store Rating' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Start Your App Project
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

// Industries We Transform Through Mobile Innovation
// Healthcare & Telemedicine – Patient apps, provider tools, and health monitoring solutions that improve care access and outcomes.
// Financial Services & FinTech – Trading platforms, banking apps, payment solutions, and personal finance tools with enterprise-grade security.
// Retail & E-Commerce – Shopping apps, inventory management, customer loyalty programs, and omnichannel retail experiences.
// Education & Training – Learning management systems, virtual classrooms, skill development platforms, and educational content delivery.
// Real Estate – Property search apps, agent tools, virtual tours, and transaction management platforms.
// Food & Hospitality – Ordering systems, reservation platforms, loyalty programs, and guest experience applications.
// Transportation & Logistics – Fleet management, delivery optimization, rider apps, and supply chain visibility tools.
// Enterprise & Productivity – Workflow automation, team collaboration, field service management, and business intelligence apps.
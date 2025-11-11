"use client";
import { useState, useEffect } from 'react';
import {
  Globe,
  Users,
  Target,
  Layers,
  LineChart,
  Workflow
} from 'lucide-react';

export default function WDSBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Globe,
      title: 'Establish Strong Digital Presence & Professional Credibility',
      description:
        'A well-designed website immediately communicates professionalism and builds trust with potential customers. First impressions matter, and your website often provides the first meaningful interaction people have with your business.',
      stat: '1st',
      statLabel: 'Impression Counts'
    },
    {
      icon: Users,
      title: 'Improve Customer Engagement & Conversion Rates',
      description:
        'Strategic design, intuitive navigation, and compelling content guide visitors toward desired actions – whether that’s making purchases, requesting quotes, or subscribing to services. Better user experiences translate directly into business results.',
      stat: '3x',
      statLabel: 'Higher Conversions'
    },
    {
      icon: Target,
      title: 'Create Tailored Solutions for Specific Business Goals',
      description:
        'Generic website templates rarely support unique business objectives effectively. Custom development ensures every feature, design element, and functionality serves your specific goals and target audience needs.',
      stat: '100%',
      statLabel: 'Custom Fit'
    },
    {
      icon: Layers,
      title: 'Build Foundation for Future Growth & Expansion',
      description:
        'Scalable architecture and flexible design accommodate business evolution, new product lines, geographic expansion, and changing market conditions without requiring complete website rebuilds.',
      stat: '∞',
      statLabel: 'Scalability'
    },
    {
      icon: LineChart,
      title: 'Generate Measurable ROI Through Digital Marketing',
      description:
        'SEO-optimized websites provide the foundation for effective digital marketing campaigns. Better search rankings, social media integration, and conversion optimization turn your website into a consistent lead generation and sales tool.',
      stat: '5x',
      statLabel: 'Marketing ROI'
    },
    {
      icon: Workflow,
      title: 'Streamline Business Operations Through Automation',
      description:
        'Custom web portals and integrated functionality can automate customer service, sales processes, appointment scheduling, and other business operations, reducing administrative overhead while improving customer satisfaction.',
      stat: '70%',
      statLabel: 'Efficiency Boost'
    }
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>

        {/* Animated circles */}
        
        <div
          className="absolute bottom-20 left-20 w-80 h-80 border-2 border-blue-300 rounded-full animate-pulse opacity-20"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Business Benefits That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Drive Real Results
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Empower your business growth through intelligent design, automation, and digital credibility.
          </p>
        </div>

        {/* Benefits Layout */}
        <div className="space-y-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon and Stat Side */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      {/* Animated rings */}
                      <div
                        className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${
                          isActive ? 'rotate-180' : 'rotate-0'
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${
                          isActive ? '-rotate-180' : 'rotate-0'
                        }`}
                        style={{ animationDelay: '0.2s' }}
                      ></div>

                      {/* Center icon */}
                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>

                      {/* Stat badge */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border-4 border-blue-100 px-6 py-4 transform transition-all duration-500 hover:scale-110">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-gray-600 font-semibold whitespace-nowrap">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-7/12">
                  <div className="max-w-2xl">
                    <div className="inline-block mb-4">
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                        Benefit {index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-8 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isActive ? '100%' : '0%',
                          transitionDelay: '200ms'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

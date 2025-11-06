"use client";
import { useState, useEffect } from 'react';
import { 
  Database, 
  Eye, 
  Zap, 
  TrendingUp, 
  Heart, 
  ShieldCheck 
} from 'lucide-react';

export default function ERPBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Database,
      title: 'Eliminate Data Silos and Manual Processes',
      description: 'Stop wasting time transferring data between disconnected systems. Our ERP solutions create a single source of truth that automatically synchronizes information across all business functions, reducing errors and improving efficiency.',
      stat: '95%',
      statLabel: 'Error Reduction'
    },
    {
      icon: Eye,
      title: 'Gain Real-Time Business Visibility',
      description: 'Make informed decisions with instant access to current business metrics. Real-time dashboards and automated reporting provide the insights you need to identify opportunities and address challenges quickly.',
      stat: '100%',
      statLabel: 'Real-Time Data'
    },
    {
      icon: Zap,
      title: 'Improve Operational Efficiency',
      description: 'Automate routine tasks, streamline approval workflows, and eliminate redundant data entry. Your team can focus on strategic activities that drive business growth instead of manual administrative work.',
      stat: '60%',
      statLabel: 'Time Saved'
    },
    {
      icon: TrendingUp,
      title: 'Scale Without Adding Complexity',
      description: 'As your business grows, your ERP system grows with you. Add new locations, users, and functionality without disrupting existing operations or requiring expensive system replacements.',
      stat: '∞',
      statLabel: 'Scalability'
    },
    {
      icon: Heart,
      title: 'Enhance Customer Service',
      description: 'Provide better customer experiences with instant access to order status, service history, and account information. Faster response times and accurate information build customer trust and loyalty.',
      stat: '85%',
      statLabel: 'Satisfaction Rate'
    },
    {
      icon: ShieldCheck,
      title: 'Ensure Regulatory Compliance',
      description: 'Built-in compliance features help you meet industry regulations and reporting requirements automatically, reducing compliance costs and minimizing regulatory risks.',
      stat: '100%',
      statLabel: 'Compliance'
    }
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
        
        {/* Animated circles */}
       
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Business Benefits of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Custom ERP Development
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your operations with intelligent automation and unified data management
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
                className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon and Stat Side */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    {/* Large icon background */}
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      {/* Rotating ring */}
                      <div className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${isActive ? 'rotate-180' : 'rotate-0'}`}></div>
                      <div className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${isActive ? '-rotate-180' : 'rotate-0'}`} style={{ animationDelay: '0.2s' }}></div>
                      
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
                    
                    <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Progress indicator */}
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

        {/* Bottom CTA Section */}
       
      </div>
    </section>
  );
}
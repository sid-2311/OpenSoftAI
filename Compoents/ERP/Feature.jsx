"use client";
import { useState } from 'react';
import { 
  DollarSign, 
  Users, 
  Package, 
  Target, 
  FolderKanban, 
  BarChart3, 
  Smartphone, 
  Link, 
  Shield, 
  Workflow 
} from 'lucide-react';

export default function ERPFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: DollarSign,
      title: 'Financial Management Integration',
      description: 'Automated accounting, budgeting, expense tracking, and comprehensive financial reporting',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Human Resources Management',
      description: 'Employee records, payroll processing, performance tracking, and compliance management',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Package,
      title: 'Inventory & Supply Chain Control',
      description: 'Real-time inventory tracking, automated reordering, and supplier relationship management',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Customer Relationship Management',
      description: 'Lead tracking, sales pipeline management, and customer service coordination',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: FolderKanban,
      title: 'Project Management Tools',
      description: 'Resource allocation, timeline tracking, budget management, and team collaboration',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Custom dashboards, automated reporting, and data-driven insights',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Smartphone,
      title: 'Mobile Access Capabilities',
      description: 'Secure access to critical business data and functions from any device, anywhere',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: Link,
      title: 'Third-Party Integrations',
      description: 'Seamless connectivity with existing business tools, payment systems, and external services',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Role-Based Security Controls',
      description: 'Granular permissions ensuring data security while enabling appropriate access levels',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: Workflow,
      title: 'Automated Workflow Management',
      description: 'Streamlined approval processes, task assignments, and business rule enforcement',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Key Features of Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ERP Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
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
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
                  {/* Icon container */}
                  <div className="flex items-start gap-6 mb-4">
                    <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center transform transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed pl-0">
                    {feature.description}
                  </p>

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-20`}></div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
}
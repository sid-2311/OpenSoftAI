import React from 'react';
import { Code, Smartphone, Building2, Zap, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function BusinessTransformationSection() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Applications",
      description: "Drive customer engagement with powerful, responsive web solutions"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "Connect with users anywhere through native and cross-platform apps"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Enterprise Systems",
      description: "Streamline complex operations with robust enterprise software"
    }
  ];

  const achievements = [
    {
      icon: <Zap className="w-7 h-7" />,
      label: "Startup Success",
      description: "Helped startups launch their first products"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      label: "Scaling Growth",
      description: "Enabled companies to scale efficiently"
    },
    {
      icon: <Users className="w-7 h-7" />,
      label: "Digital Transformation",
      description: "Supported enterprises with measurable results"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming Business Operations Through{' '}
              <span className="text-blue-600">Smart Software Solutions</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-md leading-relaxed">
              <p>
                At <span className="font-semibold text-slate-900">OpenSoftAI</span>, we understand that off-the-shelf software rarely fits perfectly. Every business has unique processes, specific challenges, and distinct goals that require customized solutions. That's why we specialize in building software that works exactly the way your business needs it to work.
              </p>
              <p>
                Our software development expertise spans web applications that drive customer engagement, mobile apps that connect you with users anywhere, and enterprise software systems that streamline complex business operations. We've helped startups launch their first products, enabled growing companies to scale efficiently, and supported enterprises in digital transformation initiatives that deliver measurable results.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {achievement.label}
                  </h4>
                  <p className="text-slate-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
            Whether you need a <span className="font-semibold text-blue-600">complete business management system</span>, a <span className="font-semibold text-blue-600">customer-facing application</span>, or <span className="font-semibold text-blue-600">specialized software for your industry</span>, we build solutions that combine powerful functionality with intuitive user experiences.
          </p>
         
        </div>
      </div>
    </section>
  );
}
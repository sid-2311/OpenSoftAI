"use client";
import { useState, useEffect } from 'react';
import { 
  CreditCard,
  PackageSearch,
  Users,
  BarChart3,
  Workflow,
  DollarSign
} from 'lucide-react';

export default function POSBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: CreditCard,
      title: 'Accelerate Transaction Processing',
      description:
        'Reduce checkout times and improve customer satisfaction with fast, reliable payment processing that supports multiple payment methods and handles complex transactions efficiently.',
      stat: '70%',
      statLabel: 'Faster Checkouts',
    },
    {
      icon: PackageSearch,
      title: 'Optimize Inventory Management',
      description:
        'Real-time inventory tracking prevents stockouts and overordering while providing insights into product performance and customer preferences across all sales channels.',
      stat: '99%',
      statLabel: 'Inventory Accuracy',
    },
    {
      icon: Users,
      title: 'Enhance Customer Experience',
      description:
        'Deliver personalized service with instant access to customer purchase history, preferences, and loyalty programs. Build stronger relationships with targeted offers and rewards.',
      stat: '85%',
      statLabel: 'Customer Retention',
    },
    {
      icon: BarChart3,
      title: 'Improve Business Decision Making',
      description:
        'Leverage comprehensive sales analytics, real-time reports, and customer insights to make data-driven decisions that optimize pricing and inventory planning.',
      stat: '100%',
      statLabel: 'Data-Driven Insights',
    },
    {
      icon: Workflow,
      title: 'Streamline Operations Management',
      description:
        'Centralize management across multiple locations with automated reporting and integrated business processes, reducing administrative tasks and improving efficiency.',
      stat: '60%',
      statLabel: 'Operational Efficiency',
    },
    {
      icon: DollarSign,
      title: 'Increase Revenue Opportunities',
      description:
        'Boost sales with built-in upselling, cross-selling, and promotional tools that increase average transaction values and customer lifetime value.',
      stat: '45%',
      statLabel: 'Revenue Growth',
    },
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Business Benefits of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Custom POS Development
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empower your retail operations with faster transactions, smarter inventory, and data-driven decisions.
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

                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>

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

                    <div className="mt-8 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isActive ? '100%' : '0%',
                          transitionDelay: '200ms',
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

"use client";
import { useState } from 'react';
import {
  CreditCard,
  PackageSearch,
  Users,
  UserCog,
  Store,
  WifiOff,
  BarChart3,
  BadgePercent,
  Link,
  Smartphone
} from 'lucide-react';

export default function POSFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: CreditCard,
      title: 'Multi-Payment Processing',
      description: 'Accept cash, cards, digital wallets, and contactless payments with secure, seamless transactions.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: PackageSearch,
      title: 'Real-Time Inventory Integration',
      description: 'Automated inventory updates, low-stock alerts, and synchronized product tracking across stores.',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Customer Management System',
      description: 'Manage customer profiles, purchase history, loyalty programs, and targeted marketing campaigns.',
      gradient: 'from-blue-400 via-blue-500 to-blue-700'
    },
    {
      icon: UserCog,
      title: 'Employee Management Tools',
      description: 'Handle staff scheduling, performance tracking, sales commission, and access control efficiently.',
      gradient: 'from-cyan-400 via-blue-500 to-blue-700'
    },
    {
      icon: Store,
      title: 'Multi-Location Support',
      description: 'Centralized management for multiple stores with unified inventory control and reporting.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: WifiOff,
      title: 'Offline Functionality',
      description: 'Process sales even without internet; data automatically syncs once reconnected.',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting & Analytics',
      description: 'Get sales insights, product trends, customer analysis, and financial dashboards in real-time.',
      gradient: 'from-blue-400 via-blue-500 to-blue-700'
    },
    {
      icon: BadgePercent,
      title: 'Promotion & Discount Management',
      description: 'Easily create discounts, coupons, and promotional campaigns with loyalty reward integration.',
      gradient: 'from-cyan-400 via-blue-500 to-blue-700'
    },
    {
      icon: Link,
      title: 'Third-Party Integrations',
      description: 'Integrate seamlessly with accounting, e-commerce, CRM, and other business management tools.',
      gradient: 'from-blue-400 via-blue-500 to-blue-700'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Tablet Compatibility',
      description: 'Full POS access and features on tablets, smartphones, and traditional terminals for flexibility.',
      gradient: 'from-cyan-400 via-blue-500 to-blue-700'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Advanced{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              POS Features
            </span>{' '}
            for Modern Businesses
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
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className="flex items-start gap-6 mb-4">
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center transform transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                  {/* Decorative accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

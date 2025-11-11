"use client";
import { useState } from 'react';
import { 
  Boxes, 
  ShoppingCart, 
  LineChart, 
  MapPin, 
  Truck, 
  Barcode, 
  DollarSign, 
  Warehouse, 
  Store, 
  BarChart3 
} from 'lucide-react';

export default function IMFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Boxes,
      title: 'Real-Time Stock Tracking',
      description: 'Instant visibility into current inventory levels across all locations, automatically updated from sales and receiving.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'Automated Reordering Systems',
      description: 'Smart reorder points based on sales velocity, lead times, and seasonality to prevent stockouts and overstocking.',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: LineChart,
      title: 'Demand Forecasting Analytics',
      description: 'Predictive algorithms anticipate future demand using historical data, trends, and external factors.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Multi-Location Inventory Control',
      description: 'Centralized visibility with location-specific tracking, transfers, and optimization across multiple warehouses.',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Truck,
      title: 'Supplier Performance Monitoring',
      description: 'Track delivery accuracy, quality metrics, and pricing trends to optimize vendor performance and reliability.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: Barcode,
      title: 'Barcode & RFID Integration',
      description: 'Seamless scanning for receiving, picking, and cycle counting with mobile-friendly tools.',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: DollarSign,
      title: 'Cost Tracking & Analysis',
      description: 'Comprehensive costing methods including FIFO, LIFO, and weighted average for detailed profitability analysis.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: Warehouse,
      title: 'Warehouse Optimization Tools',
      description: 'Bin location management, optimized pick paths, and real-time analytics to maximize storage efficiency.',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Store,
      title: 'Integration with Sales Channels',
      description: 'Automatic stock synchronization across POS systems, e-commerce stores, and online marketplaces.',
      gradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Reporting Dashboard',
      description: 'Monitor turnover, carrying costs, stock aging, and KPIs with intuitive real-time dashboards.',
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
            Intelligent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Inventory Control
            </span>{' '}
            Features
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
      </div>
    </section>
  );
}

"use client";
import React, { useState } from 'react';
import { Clock, Users, Moon, CheckCircle, TrendingUp, Zap, MessageCircle, Star } from 'lucide-react';

export default function BusinessBenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Clock,
      title: 'Your customers get answers immediately',
      description: 'No more "we\'ll get back to you within 24 hours." Questions get answered instantly, problems get solved faster, and customers stay happier.',
      stat: 'Instant',
      statLabel: 'Response Time',
      color: 'blue-500'
    },
    {
      id: 2,
      icon: Users,
      title: 'Your team focuses on interesting work',
      description: 'Instead of answering the same questions 50 times a day, your people can tackle complex issues, build relationships, and use their actual skills.',
      stat: '80%',
      statLabel: 'Time Saved',
      color: 'blue-600'
    },
    {
      id: 3,
      icon: Moon,
      title: 'You capture leads while you sleep',
      description: 'That perfect prospect who visits your website at midnight? They get their questions answered and book a consultation, instead of bouncing to a competitor.',
      stat: '24/7',
      statLabel: 'Availability',
      color: 'blue-500'
    },
    {
      id: 4,
      icon: CheckCircle,
      title: 'Consistency without the meetings',
      description: 'Every customer gets the same quality of information and service, whether it\'s your first conversation of the day or your thousandth.',
      stat: '100%',
      statLabel: 'Consistent Quality',
      color: 'blue-600'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Simple Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Actually Helps{' '}
              <span className="text-blue-600">Your Business</span>
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              Real benefits that impact your bottom line, not just technical features.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group relative animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                onMouseEnter={() => setHoveredCard(benefit.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 h-full ${
                  hoveredCard === benefit.id 
                    ? 'border-blue-500 shadow-2xl transform -translate-y-2' 
                    : 'border-blue-100 shadow-lg hover:border-blue-300'
                }`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 transition-transform duration-300 ${
                    hoveredCard === benefit.id ? 'scale-110' : ''
                  }`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Stat Badge */}
                  <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="flex justify-center mb-2">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">5x</div>
                <div className="text-sm text-blue-100">Faster Response</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">90%</div>
                <div className="text-sm text-blue-100">Queries Handled</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">3x</div>
                <div className="text-sm text-blue-100">More Leads</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
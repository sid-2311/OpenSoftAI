"use client";
import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  MessageSquare, 
  Globe2, 
  RefreshCw, 
  Users, 
  Frown, 
  CreditCard, 
  ServerCrash, 
  HeadphonesIcon 
} from 'lucide-react';

export default function SaaSImpactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Predictable Recurring Revenue',
      description:
        'Stop chasing one-time sales and build a business model that grows more valuable each month. Recurring revenue provides financial stability and confidence to invest in growth.',
      stat: 'Monthly',
      statLabel: 'Revenue Stream'
    },
    {
      icon: TrendingUp,
      title: 'Scale Without Proportional Costs',
      description:
        'A well-architected SaaS platform lets you grow users without growing costs at the same rate. As your customer base expands, profit margins improve exponentially.',
      stat: '10x',
      statLabel: 'Efficiency Gains'
    },
    {
      icon: MessageSquare,
      title: 'Faster Customer Feedback Loops',
      description:
        'SaaS customers use your product daily, giving you constant feedback. This helps you build better features, refine UX, and respond quickly to user needs.',
      stat: 'Real-Time',
      statLabel: 'Feedback'
    },
    {
      icon: Globe2,
      title: 'Global Reach from Day One',
      description:
        'Cloud-based delivery means you can serve customers worldwide—no shipping, no installations, no boundaries. Your market is global from the moment you launch.',
      stat: '100+',
      statLabel: 'Countries Reachable'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Product Improvement',
      description:
        'SaaS allows continuous delivery of updates and features without disruption. Every release makes your product more valuable to existing users.',
      stat: '24/7',
      statLabel: 'Innovation Cycle'
    },
    {
      icon: Users,
      title: 'Higher Customer Lifetime Value',
      description:
        'Subscription relationships mean customers stay longer. Loyal SaaS users generate recurring value far beyond one-time license models.',
      stat: '3–5x',
      statLabel: 'Higher CLV'
    }
  ];

  const pitfalls = [
    {
      icon: Frown,
      title: 'They Build Features, Not Experiences',
      description:
        'Many SaaS teams focus on adding features rather than designing intuitive workflows. We design with empathy—around how users actually accomplish goals.',
      solution: 'We prioritize UX-driven design.'
    },
    {
      icon: CreditCard,
      title: 'They Underestimate Subscription Complexity',
      description:
        'Plan changes, prorations, failed payments, and usage billing require precision. We build robust billing systems that handle real-world edge cases gracefully.',
      solution: 'We implement reliable subscription engines.'
    },
    {
      icon: ServerCrash,
      title: 'They Don’t Plan for Scale',
      description:
        'What works for 10 users fails at 10,000. We build cloud architectures that auto-scale, ensuring performance and stability as you grow.',
      solution: 'We design for scalable performance.'
    },
    {
      icon: HeadphonesIcon,
      title: 'They Ignore Customer Success',
      description:
        'Building the app is just the start. Successful SaaS companies excel at onboarding and retention. We embed support and engagement tools into the platform.',
      solution: 'We build customer success into the core.'
    }
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border-2 border-blue-300 rounded-full animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            The Business Impact of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Well-Built SaaS
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            How a strong SaaS foundation drives revenue, growth, and customer success.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="space-y-24 mb-32">
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
                {/* Icon & Stat */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${isActive ? 'rotate-180' : 'rotate-0'}`}></div>
                      <div className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${isActive ? '-rotate-180' : 'rotate-0'}`}></div>
                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border-4 border-blue-100 px-6 py-4">
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

                {/* Text Content */}
                <div className="lg:w-7/12">
                  <div className="max-w-2xl">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
                      Benefit {index + 1}
                    </span>
                    <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pitfalls Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">
            Why Most SaaS Projects Struggle{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              (And How We Avoid Them)
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Avoid common mistakes that hold back growth and scalability in SaaS development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {pitfalls.map((pitfall, index) => {
            const Icon = pitfall.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-10 rounded-md flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{pitfall.title}</h4>
                    <p className="text-gray-600 mb-2">{pitfall.description}</p>
                    <p className="text-blue-700 font-semibold">{pitfall.solution}</p>
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

import { Headphones, Sparkles, TestTube, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "We listen to real conversations",
      description: "We want to hear your customer service calls, read your support emails, understand what questions people actually ask. That's how we build bots that solve real problems.",
      icon: Headphones,
      features: [
        "Analyze customer service calls",
        "Review support emails",
        "Identify common questions"
      ]
    },
    {
      number: "02",
      title: "We design the personality",
      description: "Professional? Friendly? Helpful but not pushy? The chatbot's personality needs to match your brand, not sound like every other bot on the internet.",
      icon: Sparkles,
      features: [
        "Match your brand voice",
        "Custom tone and style",
        "Unique personality traits"
      ]
    },
    {
      number: "03",
      title: "We test with real scenarios",
      description: "Beta testing with actual customers, real questions, edge cases that break other bots. We launch when it works consistently, not when the timeline says so.",
      icon: TestTube,
      features: [
        "Beta test with real customers",
        "Handle edge cases",
        "Quality over deadlines"
      ]
    },
    {
      number: "04",
      title: "We keep improving it",
      description: "Chatbots get smarter by handling more conversations. We monitor performance, identify gaps, and continuously improve the system.",
      icon: TrendingUp,
      features: [
        "Continuous monitoring",
        "Performance optimization",
        "Ongoing improvements"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Actually Build These Things
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No shortcuts, no generic templates. Just a proven process that creates chatbots people actually want to use.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <article 
                key={index}
                className="group relative"
              >
                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-20 top-32 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-blue-200" />
                )}

                <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon Side */}
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative">
                      <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                        <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-100">
                        <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-2/3">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {step.description}
                      </p>
                      
                      {/* Feature List */}
                      <div className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Step Arrow */}
                      {index < steps.length - 1 && (
                        <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                          <span className="text-sm">Next Step</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to start building?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's analyze your customer conversations and create a chatbot that actually works for your business.
            </p>
            <Link href="/contact-us" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
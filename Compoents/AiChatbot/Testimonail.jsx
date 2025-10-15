import { Quote, TrendingUp, Users, Calendar } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "SM",
      quote: "I was worried customers would hate talking to a bot. Instead, they love getting instant answers. Our support ticket volume dropped 65%, but customer satisfaction scores went up. I didn't think that was possible.",
      metric: "65% fewer tickets",
      icon: TrendingUp,
      color: "blue"
    },
    {
      name: "Mark Thompson",
      role: "Founder",
      company: "E-commerce Brand",
      image: "MT",
      quote: "Your chatbot sells more products than some of our human staff. It never forgets to suggest accessories, never has a bad day, and works nights and weekends without complaining.",
      metric: "24/7 sales boost",
      icon: Users,
      color: "indigo"
    },
    {
      name: "Dr. Linda Chen",
      role: "Practice Manager",
      company: "Medical Practice",
      image: "LC",
      quote: "The chatbot handles appointment scheduling better than our previous receptionist. That sounds harsh, but it never double-books, always confirms insurance, and patients actually prefer the convenience.",
      metric: "Zero booking errors",
      icon: Calendar,
      color: "sky"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Actually Tell Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real businesses transforming their customer experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <article 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 flex flex-col"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-blue-400 opacity-50" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metric Badge */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 bg-${testimonial.color}-50 text-${testimonial.color}-700 px-4 py-2 rounded-full text-sm font-semibold`}>
                    <Icon className="w-4 h-4" />
                    {testimonial.metric}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join hundreds of businesses seeing similar results
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
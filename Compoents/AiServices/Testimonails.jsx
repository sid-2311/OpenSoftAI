import TestimonialsSection from "../ui/Testimonail";

const testimonialsData = [
    {
      quote: "OpenSoft AI didn't just build us an AI solution—they built us a competitive advantage. Their custom demand forecasting AI helped us reduce inventory costs by $2.1M in the first year while improving customer satisfaction through better stock availability.",
      author: "Sarah Chen",
      position: "Operations Director",
      company: "TechForward Retail",
      // icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      metric: "$2.1M",
      metricLabel: "Cost Savings",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      quote: "The computer vision system OpenSoft AI developed for our manufacturing line has been a game-changer. We've reduced quality control costs by 45% while catching defects we used to miss entirely.",
      author: "Marcus Rodriguez",
      position: "Plant Manager",
      company: "Precision Manufacturing Corp",
      // icon: <Eye className="w-6 h-6" aria-hidden="true" />,
      metric: "45%",
      metricLabel: "Cost Reduction",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      quote: "Working with OpenSoft AI felt like having AI experts embedded in our team. They understood our business challenges and built solutions that actually work in our real-world environment.",
      author: "Dr. Amanda Foster",
      position: "CTO",
      company: "HealthTech Innovations",
      // icon: <Heart className="w-6 h-6" aria-hidden="true" />,
      metric: "5★",
      metricLabel: "Partnership",
      gradient: "from-blue-600 to-blue-700"
    }
  ];


  export default function TestAIServices(){
    return(
     <main>
        <TestimonialsSection
          title="What Our Clients Say"
          testimonials={testimonialsData}
          darkMode={true}
        />
      </main>
    )
  }




// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Quote, Star, ChevronLeft, ChevronRight, TrendingUp, Eye, Heart } from 'lucide-react';

// export default function TestimonialsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const testimonials = [
//     {
//       quote: "OpenSoft AI didn't just build us an AI solution—they built us a competitive advantage. Their custom demand forecasting AI helped us reduce inventory costs by $2.1M in the first year while improving customer satisfaction through better stock availability.",
//       author: "Sarah Chen",
//       position: "Operations Director",
//       company: "TechForward Retail",
//       icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
//       metric: "$2.1M",
//       metricLabel: "Cost Savings",
//       gradient: "from-blue-400 to-blue-500"
//     },
//     {
//       quote: "The computer vision system OpenSoft AI developed for our manufacturing line has been a game-changer. We've reduced quality control costs by 45% while catching defects we used to miss entirely.",
//       author: "Marcus Rodriguez",
//       position: "Plant Manager",
//       company: "Precision Manufacturing Corp",
//       icon: <Eye className="w-6 h-6" aria-hidden="true" />,
//       metric: "45%",
//       metricLabel: "Cost Reduction",
//       gradient: "from-blue-500 to-blue-600"
//     },
//     {
//       quote: "Working with OpenSoft AI felt like having AI experts embedded in our team. They understood our business challenges and built solutions that actually work in our real-world environment.",
//       author: "Dr. Amanda Foster",
//       position: "CTO",
//       company: "HealthTech Innovations",
//       icon: <Heart className="w-6 h-6" aria-hidden="true" />,
//       metric: "5★",
//       metricLabel: "Partnership",
//       gradient: "from-blue-600 to-blue-700"
//     }
//   ];

//   // Auto-play carousel
//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, testimonials.length]);

//   const nextTestimonial = () => {
//     setActiveIndex((current) => (current + 1) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const goToTestimonial = (index) => {
//     setActiveIndex(index);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="Client Testimonials">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

//       {/* Decorative Blobs */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '6s' }} />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />

//       <div className="relative max-w-7xl mx-auto space-y-16">

//         {/* Header */}
//         <div className="text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             What Our <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Real stories from businesses transforming with OpenSoft AI's custom solutions.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           <blockquote className="bg-white p-10 rounded-2xl shadow-lg border border-blue-100 relative">
//             <Quote className="w-8 h-8 text-blue-400 absolute top-4 left-4" aria-hidden="true" />
//             <p className="text-gray-700 text-lg leading-relaxed">{testimonials[activeIndex].quote}</p>
//             <div className="mt-6 flex items-center gap-4">
//               <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonials[activeIndex].gradient} flex items-center justify-center text-white`}>
//                 {testimonials[activeIndex].icon}
//               </div>
//               <div>
//                 <div className="font-bold text-gray-900">{testimonials[activeIndex].author}</div>
//                 <div className="text-sm text-gray-600">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</div>
//               </div>
//             </div>
//             <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50">
//               {testimonials[activeIndex].metric} {testimonials[activeIndex].metricLabel}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevTestimonial}
//               className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-blue-50 transition"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-5 h-5 text-blue-500" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-blue-50 transition"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-5 h-5 text-blue-500" />
//             </button>
//           </blockquote>

//           {/* Dot Navigation */}
//           <div className="flex justify-center mt-6 gap-3">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => goToTestimonial(idx)}
//                 className={`w-3 h-3 rounded-full transition-colors ${idx === activeIndex ? 'bg-blue-500' : 'bg-blue-200'}`}
//                 aria-label={`Go to testimonial ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Compact Grid */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <button
//               key={index}
//               onClick={() => goToTestimonial(index)}
//               className={`group text-left bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${
//                 index === activeIndex ? 'border-blue-300 shadow-lg shadow-blue-500/10' : 'border-blue-100 hover:border-blue-300'
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white`}>
//                   {testimonial.icon}
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900 text-sm">{testimonial.author}</div>
//                   <div className="text-xs text-gray-600">{testimonial.company}</div>
//                 </div>
//               </div>

//               <div className="flex gap-1 mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-3 h-3 text-blue-600 fill-blue-600" />
//                 ))}
//               </div>

//               <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{testimonial.quote}</p>

//               <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 ${
//                 index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
//               } transition-opacity`}>
//                 {testimonial.metric} {testimonial.metricLabel}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

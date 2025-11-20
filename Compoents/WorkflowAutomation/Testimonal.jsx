import TestimonialsSection from "../ui/Testimonail";

const testimonialsData = [
  {
    name: "Robert Chen",
    company: "CFO, GrowthTech Solutions",
    image: "/images/Smiling-man-in-black-and-white-portrait.jpg",
    alt: "finance team using AI automation",
    quote:
      "OpenSoftAI's workflow automation transformed our entire operations. What used to take our finance team three days every month now happens automatically overnight. We've reduced processing errors by 85% and our team can focus on analysis instead of data entry. The ROI was apparent within the first month.",
  },
  {
    name: "Dr. Sarah Martinez",
    company: "Practice Manager, Regional Medical Center",
    image: "/images/crop4.jpg",
    alt: "healthcare staff using AI tools",
    quote:
      "The custom automation OpenSoftAI built for our healthcare practice has been incredible. Patient scheduling, insurance verification, and follow-up communications all happen automatically now. We're seeing 40% more patients without adding staff, and our patient satisfaction scores have never been higher.",
  },
  {
    name: "Michael Rodriguez",
    company: "Operations Director, RetailMax",
    image: "/images/crop2.jpg",
    alt: "retail team using AI for operations",
    quote:
      "We were drowning in manual processes before working with OpenSoftAI. Their intelligent workflow automation reduced our order processing time from hours to minutes, and our inventory accuracy improved dramatically. It's like having a super-efficient team member who never takes a break.",
  },
  {
    name: "Jennifer Walsh",
    company: "Manufacturing Manager, Industrial Solutions Inc.",
    image: "/images/manufacturing-ai-automation.jpg",
    alt: "manufacturing team using predictive AI",
    quote:
      "The predictive capabilities in our new AI workflows are game-changing. We can see potential production issues before they happen and adjust automatically. Our efficiency has increased by 35%, and unplanned downtime is virtually eliminated.",
  },
];


export default function TestAIAutomation(){
  return(
   <main>
      <TestimonialsSection
        title="What Our Clients Are Experiencing"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}



















// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Robert Chen",
//     company: "CFO, GrowthTech Solutions",
//     image: "/images/finance-team-ai.jpg",
//     alt: "finance team using AI automation",
//     quote:
//       "OpenSoftAI's workflow automation transformed our entire operations. What used to take our finance team three days every month now happens automatically overnight. We've reduced processing errors by 85% and our team can focus on analysis instead of data entry. The ROI was apparent within the first month.",
//   },
//   {
//     name: "Dr. Sarah Martinez",
//     company: "Practice Manager, Regional Medical Center",
//     image: "/images/healthcare-ai-automation.jpg",
//     alt: "healthcare staff using AI tools",
//     quote:
//       "The custom automation OpenSoftAI built for our healthcare practice has been incredible. Patient scheduling, insurance verification, and follow-up communications all happen automatically now. We're seeing 40% more patients without adding staff, and our patient satisfaction scores have never been higher.",
//   },
//   {
//     name: "Michael Rodriguez",
//     company: "Operations Director, RetailMax",
//     image: "/images/retail-ai-automation.jpg",
//     alt: "retail team using AI for operations",
//     quote:
//       "We were drowning in manual processes before working with OpenSoftAI. Their intelligent workflow automation reduced our order processing time from hours to minutes, and our inventory accuracy improved dramatically. It's like having a super-efficient team member who never takes a break.",
//   },
//   {
//     name: "Jennifer Walsh",
//     company: "Manufacturing Manager, Industrial Solutions Inc.",
//     image: "/images/manufacturing-ai-automation.jpg",
//     alt: "manufacturing team using predictive AI",
//     quote:
//       "The predictive capabilities in our new AI workflows are game-changing. We can see potential production issues before they happen and adjust automatically. Our efficiency has increased by 35%, and unplanned downtime is virtually eliminated.",
//   },
// ];

// export default function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const { name, company, image, alt, quote } = testimonials[currentIndex];

//   return (
//     <section className="bg-slate-900 py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             What Our Clients Are Experiencing
//           </h2>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Side - Image */}
//           <div className="flex-1 relative">
//             <div className="absolute -left-16 -top-8 opacity-20">
//               <div className="grid grid-cols-8 gap-2">
//                 {[...Array(64)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-1 h-1 bg-blue-400 rounded-full"
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1">
//               <div className="relative rounded-xl overflow-hidden">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentIndex}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <Image
//                       src={image}
//                       alt={alt}
//                       width={600}
//                       height={400}
//                       className="w-full h-full object-cover rounded-xl"
//                       priority
//                     />
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Text */}
//           <div className="flex-1">
//             {/* Arrows */}
//             <div className="flex justify-end gap-4 mb-8">
//               <button
//                 onClick={handlePrev}
//                 className="border border-gray-600 rounded-full p-3 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="border border-gray-600 rounded-full p-3 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Quote Icon */}
//             <div className="mb-8">
//               <svg
//                 className="w-20 h-20 text-blue-400 opacity-60"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
//               </svg>
//             </div>

//             {/* Quote Text */}
//             <AnimatePresence mode="wait">
//               <motion.blockquote
//                 key={currentIndex}
//                 className="text-white text-md leading-relaxed mb-3"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 “{quote}”
//               </motion.blockquote>
//             </AnimatePresence>

//             {/* Author */}
//             <div className="flex items-center gap-4">
//               <Image
//                 src={image}
//                 alt={alt}
//                 width={48}
//                 height={48}
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="text-white font-semibold text-lg">{name}</h4>
//                 <p className="text-gray-400">{company}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

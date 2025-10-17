import TestimonialsSection from "../ui/Testimonail";
const testimonialsData = [
  {
    name: "Jennifer",
    company: "Fintech Startup",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    alt: "Professional woman from fintech startup",
    quote:
      "I was skeptical because I'd tried other AI tools that promised everything and delivered headaches. Your copilot actually makes my day easier. I spend 80% less time on reports and have way more time for actual analysis.",
  },
  {
    name: "Marcus",
    company: "Healthcare Practice",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
    alt: "Healthcare professional smiling at clinic",
    quote:
      "The copilot handles all the insurance verification and appointment scheduling stuff that used to take hours. Our staff can actually focus on patient care instead of paperwork.",
  },
  {
    name: "Sarah",
    company: "E-commerce Company",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    alt: "E-commerce team member smiling in office",
    quote:
      "It's like having the world's most organized, never-tired colleague. The copilot remembers everything, connects patterns I would have missed, and never has Monday morning brain fog.",
  },
];

export default function TestAICopilot(){
  return(
   <main>
      <TestimonialsSection
        title="What Teams Tell Us After Using AI Copilots"
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
//     name: "Jennifer",
//     company: "Fintech Startup",
//     image:
//       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
//     alt: "Professional woman from fintech startup",
//     quote:
//       "I was skeptical because I'd tried other AI tools that promised everything and delivered headaches. Your copilot actually makes my day easier. I spend 80% less time on reports and have way more time for actual analysis.",
//   },
//   {
//     name: "Marcus",
//     company: "Healthcare Practice",
//     image:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
//     alt: "Healthcare professional smiling at clinic",
//     quote:
//       "The copilot handles all the insurance verification and appointment scheduling stuff that used to take hours. Our staff can actually focus on patient care instead of paperwork. Patient satisfaction scores went up because we're not rushing through appointments.",
//   },
//   {
//     name: "Sarah",
//     company: "E-commerce Company",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
//     alt: "E-commerce team member smiling in office",
//     quote:
//       "It's like having the world's most organized, never-tired colleague. The copilot remembers everything, connects patterns I would have missed, and never has Monday morning brain fog. Our team's productivity doubled, but more importantly, work became fun again.",
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
//             What Teams Tell Us After Using AI Copilots
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

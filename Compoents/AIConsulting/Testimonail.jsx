import TestimonialsSection from "../ui/Testimonail";


const testimonialsData = [
  {
    name: "Sarah Chen",
    company: "VP of Operations, TechFlow Solutions",
    image: "/images/Professional-woman-in-office-chair.jpg",
    alt: "businesswoman discussing AI strategy",
    quote:
      "Working with OpenSoftAI transformed how we think about AI. Their strategic approach helped us identify the highest-impact AI opportunities and build a roadmap that's delivered 30% operational efficiency gains in our first year. They didn't just consult – they partnered with us for success.",
  },
  {
    name: "Michael Rodriguez",
    company: "Chief Digital Officer, Regional Bank Network",
    image: "/images/Smiling-man-in-black-and-white-portrait.jpg",
    alt: "chief digital officer analyzing data on screen",
    quote:
      "OpenSoftAI's feasibility analysis saved us from making a costly mistake. They showed us why our initial AI plan wouldn't deliver the ROI we expected and guided us to a solution that's exceeded our expectations. Their expertise in ethical AI also helped us navigate compliance requirements we hadn't even considered.",
  },
  {
    name: "Dr. Jennifer Park",
    company: "CTO, MedTech Innovations",
    image: "/images/crop4.jpg",
    alt: "doctor CTO analyzing AI dashboard",
    quote:
      "The data assessment OpenSoftAI conducted revealed gaps in our infrastructure that would have derailed our AI initiatives. Their recommendations not only fixed these issues but positioned us for much more ambitious AI projects down the road.",
  },
];

export default function TestAIConsulting(){
  return(
   <main>
      <TestimonialsSection
        title=" What Our Clients Say"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}















// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Sarah Chen",
//     company: "VP of Operations, TechFlow Solutions",
//     image: "/images/businesswoman-ai-discussion.jpg",
//     alt: "businesswoman discussing AI strategy",
//     quote:
//       "Working with OpenSoftAI transformed how we think about AI. Their strategic approach helped us identify the highest-impact AI opportunities and build a roadmap that's delivered 30% operational efficiency gains in our first year. They didn't just consult – they partnered with us for success.",
//   },
//   {
//     name: "Michael Rodriguez",
//     company: "Chief Digital Officer, Regional Bank Network",
//     image: "/images/ai-digital-banking-team.jpg",
//     alt: "chief digital officer analyzing data on screen",
//     quote:
//       "OpenSoftAI's feasibility analysis saved us from making a costly mistake. They showed us why our initial AI plan wouldn't deliver the ROI we expected and guided us to a solution that's exceeded our expectations. Their expertise in ethical AI also helped us navigate compliance requirements we hadn't even considered.",
//   },
//   {
//     name: "Dr. Jennifer Park",
//     company: "CTO, MedTech Innovations",
//     image: "/images/doctor-analyzing-ai-dashboard.jpg",
//     alt: "doctor CTO analyzing AI dashboard",
//     quote:
//       "The data assessment OpenSoftAI conducted revealed gaps in our infrastructure that would have derailed our AI initiatives. Their recommendations not only fixed these issues but positioned us for much more ambitious AI projects down the road.",
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
//             What Our Clients Say
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

//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="bg-transparent bg-opacity-20 rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group">
//                     <Play
//                       className="w-8 h-8 text-black ml-1 group-hover:scale-110 transition-transform"
//                       fill="currentColor"
//                     />
//                   </button>
//                 </div>
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

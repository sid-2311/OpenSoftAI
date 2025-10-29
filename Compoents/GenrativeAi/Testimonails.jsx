import TestimonialsSection from "../ui/Testimonail";

const testimonialsData = [
  {
    name: "Maria Gonzalez",
    company: "Head of Marketing, TechFlow Solutions",
    image: "/images/crop3.jpg",
    alt: "marketing team using AI tools",
    quote:
      "OpenSoft AI's generative AI solutions completely transformed our content marketing strategy. We're now producing 5x more content with half the team, and our engagement rates have increased by 40%. The AI perfectly captures our brand voice – sometimes I can't tell the difference between AI-generated and human-written content.",
  },
  {
    name: "David Kim",
    company: "Creative Director, RetailMax",
    image: "/images/crop1.jpg",
    alt: "creative designer generating AI visuals",
    quote:
      "The custom image generation AI OpenSoft AI built for us has been a game-changer. We're creating product mockups and marketing visuals in minutes instead of days. Our design team can now focus on creative strategy while AI handles the production work. It's saved us over $50k in outsourcing costs this year alone.",
  },
  {
    name: "Jennifer Walsh",
    company: "Learning & Development Manager, FinanceForward",
    image: "/images/crop4.jpg",
    alt: "AI-generated video training session",
    quote:
      "Working with OpenSoft AI on our video generation project exceeded all expectations. Their AI produces training videos that are indistinguishable from professionally produced content, and we've reduced our video production timeline from weeks to hours. The ROI has been incredible.",
  },
  {
    name: "Alex Chen",
    company: "Content Director, MediaWave Network",
    image: "/images/podcast-ai-voice-generation.jpg",
    alt: "AI voice generation for podcast studio",
    quote:
      "The voice generation AI OpenSoft AI developed for our podcast network is remarkable. We can now create multilingual content, produce episodes faster, and maintain consistent audio quality across all our shows. It's opened up entirely new possibilities for content creation.",
  },
];


export default function TestAIGenrative(){
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
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Maria Gonzalez",
//     company: "Head of Marketing, TechFlow Solutions",
//     image: "/images/marketing-ai-team.jpg",
//     alt: "marketing team using AI tools",
//     quote:
//       "OpenSoft AI's generative AI solutions completely transformed our content marketing strategy. We're now producing 5x more content with half the team, and our engagement rates have increased by 40%. The AI perfectly captures our brand voice – sometimes I can't tell the difference between AI-generated and human-written content.",
//   },
//   {
//     name: "David Kim",
//     company: "Creative Director, RetailMax",
//     image: "/images/creative-team-ai-design.jpg",
//     alt: "creative designer generating AI visuals",
//     quote:
//       "The custom image generation AI OpenSoft AI built for us has been a game-changer. We're creating product mockups and marketing visuals in minutes instead of days. Our design team can now focus on creative strategy while AI handles the production work. It's saved us over $50k in outsourcing costs this year alone.",
//   },
//   {
//     name: "Jennifer Walsh",
//     company: "Learning & Development Manager, FinanceForward",
//     image: "/images/ai-video-generation-training.jpg",
//     alt: "AI-generated video training session",
//     quote:
//       "Working with OpenSoft AI on our video generation project exceeded all expectations. Their AI produces training videos that are indistinguishable from professionally produced content, and we've reduced our video production timeline from weeks to hours. The ROI has been incredible.",
//   },
//   {
//     name: "Alex Chen",
//     company: "Content Director, MediaWave Network",
//     image: "/images/podcast-ai-voice-generation.jpg",
//     alt: "AI voice generation for podcast studio",
//     quote:
//       "The voice generation AI OpenSoft AI developed for our podcast network is remarkable. We can now create multilingual content, produce episodes faster, and maintain consistent audio quality across all our shows. It's opened up entirely new possibilities for content creation.",
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
//             What Our Clients Are Saying
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

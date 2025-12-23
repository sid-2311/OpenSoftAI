"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero({ data }) {
  const  hero  = data;

  return (
    <>
      {/* ✅ Video Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: hero.videoSchema.name,
            description: hero.videoSchema.description,
            contentUrl: hero.videoSchema.contentUrl,
            thumbnailUrl: hero.videoSchema.thumbnailUrl,
            uploadDate: hero.videoSchema.uploadDate,
          }),
        }}
      />

      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
        aria-describedby="hero-description"
      >
        {/* ✅ SEO Text (Hidden but Crawlable) */}
        <div className="sr-only">
          <h1 id="hero-heading">{hero.seo.heading}</h1>
          <p id="hero-description">{hero.seo.description}</p>
        </div>

        {/* 🎥 Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          role="presentation"
          tabIndex={-1}
        >
          <source src={hero.backgroundVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
          aria-hidden="true"
        ></div>

        {/* Visible Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {hero.title.text}{" "}
            <span className="text-[#016CD3]">
              {hero.title.highlight}
            </span>{" "}
            {hero.title.suffix}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link
              href={hero.cta.link}
              className="group px-8 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              aria-label={hero.cta.ariaLabel}
            >
              {hero.cta.text}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-3 transition-all duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}












// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <>
//       {/* ✅ Video Structured Data for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "VideoObject",
//             "name": "How AI Automation Improves Business Efficiency",
//             "description":
//               "this video explains how AI-powered automation helps businesses save time, improve accuracy, and optimize performance. This video shows the impact of smart workflow automation on business efficiency.",
//             "contentUrl":
//               "https://opensoftai.com/images/ai-automation.mp4",
//             "thumbnailUrl":
//               "https://opensoftai.com/images/ai-automation-thumbnail.jpeg",
//             "uploadDate": "2024-01-01"
//           }),
//         }}
//       />

//       <section
//         className="relative w-full h-screen flex items-center justify-center overflow-hidden"
//         aria-labelledby="hero-heading"
//         aria-describedby="hero-description"
//       >
//         {/* ✅ SEO Text (Hidden but Crawlable) */}
//         <div className="sr-only">
//           <h1 id="hero-heading">
//             AI Automation & Expert Software Development Services
//           </h1>
//           <p id="hero-description">
//             We provide expert software development, AI-powered automation,
//             and intelligent digital solutions to help businesses scale,
//             innovate, and grow efficiently.
//           </p>
//         </div>

//         {/* 🎥 Background Video (Decorative Only) */}
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           aria-hidden="true"
//           role="presentation"
//           tabIndex={-1}
//         >
//           <source src="/images/ai-automation.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay */}
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
//           aria-hidden="true"
//         ></div>

//         {/* Visible Content */}
//         <div className="relative z-10 text-center px-6 max-w-3xl">
//           <motion.h2
//             className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Transform Your Business with{" "}
//             <span className="text-[#016CD3]">
//               Expert Software Development
//             </span>{" "}
//             & AI Solutions
//           </motion.h2>

//           <motion.div
//             className="flex flex-wrap justify-center gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <Link
//               href="/contact-us"
//               className="group px-8 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
//               aria-label="Schedule a call for AI and software development services"
//             >
//               Schedule a Call
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-3 transition-all duration-300"
//               />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

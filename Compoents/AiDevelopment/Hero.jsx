"use client"; // remove if using pages router
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] bg-[#0B0417] text-white flex items-center"
      aria-label="AI & Automation Development Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
       <div className="absolute right-0 top-0 bottom-0 w-full h-[200px] sm:h-[400px] md:h-[600px] bg-center bg-no-repeat">
  <Image
    src="/images/artificial-intelligence-robot-using-futiristic-technology.webp"
    alt="artificial intelligence robot using laptop futuristic technology"
    fill
    priority
    quality={90}
    style={{ objectFit: "cover", objectPosition: "center" }}
  />
</div>


        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0417] via-[#0B0417]/80 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI & Automation Development Services
          </h1>
          <p className="text-gray-300 max-w-lg">
            Build intelligent automation systems that transform your business
            efficiency using our advanced AI development expertise.
          </p>

          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 w-fit border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-200 hover:text-black transition-all"
            aria-label="Book a call with our AI development team"
          >
            Book a Call <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Right Side Placeholder (for balance) */}
        <div className="hidden md:block w-1/2" />
      </div>
    </section>
  );
}

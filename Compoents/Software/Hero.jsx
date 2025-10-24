import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ✅ SEO Metadata (server-side rendered)
export const metadata = {
  title: "Custom Software Development Services | OpenSoft AI",
  description:
    "OpenSoft AI delivers scalable, secure, and custom software development services tailored to your business needs. Build web, mobile, and enterprise software with expert precision.",
  keywords:
    "custom software development, web app development, enterprise software, mobile app solutions, OpenSoft AI",
  authors: [{ name: "OpenSoft AI" }],
  openGraph: {
    title: "Custom Software Development Services | OpenSoft AI",
    description:
      "Partner with OpenSoft AI to build scalable, secure, and innovative software solutions that grow with your business.",
    url: "https://opensoftai.com/software-development-company/",
    type: "website",
   
  },
  alternates: {
    canonical: "https://opensoftai.com/software-development-company/",
  },
};

// ✅ Main Hero Section Component
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/soft.avif"
          alt="Software developers collaborating on project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Custom Software Development Services – Scalable, Secure, and
              Tailored to Your Business
            </h1>

            {/* Description */}
            <p className="text-md md:text-xl text-gray-300 mb-10 leading-relaxed">
              Build software that grows with your business. OpenSoft AI
              delivers custom web, mobile, and enterprise software solutions
              designed for your specific needs and industry requirements.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="group w-fit inline-flex items-center px-8 py-4 text-md font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Book A Free Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  );
}

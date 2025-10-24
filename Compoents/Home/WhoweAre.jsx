"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative bg-gray-50 py-16 px-4 overflow-hidden">
      {/* Left decorative element */}
     <div className="absolute left-6 top-12 w-16 h-16 flex items-center justify-center">
  <Image
    src="/images/separate-line.png"
    alt="separateline"
    width={64}
    height={64}
    className="rotate-slow w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16"
  />
</div>


      {/* Right decorative element */}
      <div className="absolute right-6 top-12 w-16 h-16 flex items-center justify-center">
        <Image
          src="/images/dotted-pattern-background-design.png"
          alt="dotted pattern background design"
          width={64}
          height={64}
          className="rotate-slow w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
      </div>

      {/* Main content container */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">
          Who We Are
        </h2>

       <p className="text-gray-600 text-md  leading-relaxed font-semibold mb-8 text-justify">
  Here's the thing about software development – anyone can code, but not
  everyone can solve real business problems. We've been doing this for
  over 10 years now. Started small, working with local startups who
  needed websites that didn't crash every Tuesday. Fast forward to
  today? We're building AI systems for Fortune 500 companies and
  blockchain platforms that handle millions in transactions. <br /><br />
  OpenSoft AI team isn't just a bunch of developers hiding behind
  computers. We're certified in all the big platforms – AWS, Microsoft
  Azure, Google Cloud, you name it. But more importantly, we actually
  understand business. Finance, healthcare, retail, manufacturing –
  we've seen it all. And we know what works. <br /><br />
  The best part? We've delivered over 500 projects. Some were simple.
  Others kept us up at night for months. All of them taught us something
  new.
</p>


        <div>
          <Link
            href="/about-us"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

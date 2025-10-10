'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function TestimonialHero() {
  return (
    <>
      <Head>
        <title>Happy Clients | The OpenSoftAI Testimonials</title>
        <meta
          name="description"
          content="Read what our happy employees and clients have to say about working with The OpenSoftAI. 100% satisfaction and a culture built on respect and collaboration."
        />
        <meta name="keywords" content="OpenSoftAI, testimonials, happy clients, employee reviews, company culture" />
      </Head>

      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Decorative globe/network graphic */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
          <div className="w-full h-full rounded-full border-2 border-white/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full border-2 border-white/20" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <article className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                We are Proud to have these{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Happy Clients
                </span>{' '}
                with us
              </h1>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-300">Employee Speaks</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The employees are crazy about working for us. The 100% satisfaction ratio and tremendous respect
                  showcase the affection of employees towards the company. Each employee is like a star in the
                  constellation — without them, the beauty is incomplete. Let’s have a look at what they have to say
                  about their experience at The OpenSoftAI.
                </p>
              </div>

              <Link
                href="/Contact-Us"
                className="group w-fit mt-8 px-8 py-4 bg-transparent border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2"
              >
                Free Consultation
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>

            {/* Right Content - Photo Grid */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-3 gap-4">
                {/* Top Row */}
                <div className="col-span-2 h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                    alt="Smiling happy client"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover opacity-90 rounded-lg"
                    priority
                  />
                </div>
                <div className="h-40 rounded-lg overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=300&fit=crop"
                    alt="Happy employee portrait"
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Middle Row */}
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop"
                    alt="Smiling man testimonial"
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-lg overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=300&fit=crop"
                    alt="Professional portrait woman"
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="row-span-2 h-full rounded-lg overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=500&fit=crop"
                    alt="Confident smiling employee"
                    width={300}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Row */}
                <div className="col-span-2 h-40 rounded-lg overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=300&fit=crop"
                    alt="Teamwork and collaboration"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

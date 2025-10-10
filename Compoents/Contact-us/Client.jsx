'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { name: 'Hinduja', logo: '/logos/hinduja.png', alt: 'Hinduja logo' },
    { name: 'Casio', logo: '/logos/casio.png', alt: 'Casio logo' },
    { name: 'Akamai', logo: '/logos/akamai.png', alt: 'Akamai logo' },
    { name: 'Samsung', logo: '/logos/samsung.png', alt: 'Samsung logo' },
    { name: 'Ericsson', logo: '/logos/ericsson.png', alt: 'Ericsson logo' },
    { name: 'Pepsi', logo: '/logos/pepsi.png', alt: 'Pepsi logo' },
  ];

  return (
    <>
      {/* ✅ SEO Meta Setup */}
           {/* ✅ Page Section */}
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50" aria-labelledby="clients-heading">
        {/* Header Section */}
        <header className="text-center py-16 px-4">
          <h1
            id="clients-heading"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Our <span className="text-gray-900">Worldwide</span> Presence
          </h1>
        </header>

        {/* Clients Section */}
        <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
              Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="font-normal">Esteemed Clients</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We’ve collaborated with some of the world’s most recognized
              brands. Our team crafts exceptional experiences that help
              enterprises and startups alike achieve their goals. Don’t wait —
              leverage our expertise and build something extraordinary today!
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 group w-fit"
              aria-label="Start your project with OpenSoftAI"
            >
              START YOUR PROJECT NOW
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right Side — Client Logos */}
         
        </section>
      </main>
    </>
  );
}

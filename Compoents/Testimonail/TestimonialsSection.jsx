'use client';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState('video');

  const videoTestimonials = [
  {
    name: 'Alex Morgan',
    title: 'Founder & CEO - BrightTech Solutions',
    image:
      '/imgtest1.jpg',
    quote:
      'Working with The OpenSoftAI was an incredible experience. Their team delivered a robust and scalable product ahead of schedule. I truly appreciate their dedication and technical excellence.',
    video:
      'https://images.unsplash.com/photo-1581091012184-7af279bd87a5?w=400&h=300&fit=crop',
  },
  {
    name: 'Taylor Johnson',
    title: 'CTO - Nova Digital Labs',
    image:
      '/imgtest2.jpg',
    quote:
      'The OpenSoftAI team exceeded our expectations with their seamless project management and outstanding UI/UX designs. Their communication and technical depth made the whole process smooth and efficient.',
    video:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop',
  },
  {
    name: 'Jordan Lee',
    title: 'Product Manager - Visionary Apps Inc.',
    image:'/imgtest3.jpg',
    quote:
      'From concept to deployment, The OpenSoftAI team supported us every step of the way. Their attention to detail and ability to turn ideas into functional products is remarkable.',
    video:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
  },
];


  const textTestimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Product Manager - Tech Solutions',
      image: '/imgtest4.jpg',
      quote:
        'Outstanding service and delivery. The team went above and beyond to ensure our project success. Their attention to detail and commitment to quality is unmatched.',
    },
    {
      name: 'Michael Chen',
      title: 'CTO - Innovation Labs',
      image: '/imgtest5.jpg',
      quote:
        'Professional, efficient, and highly skilled. They transformed our vision into reality with exceptional technical expertise. Highly recommended for any development project.',
    },
  ];

  return (
    <>
      <Head>
        <title>Testimonials | The OpenSoftAI</title>
        <meta
          name="description"
          content="Hear from our happy clients and team members about their experiences with The OpenSoftAI. Read and watch real testimonials from satisfied customers and partners."
        />
        <meta
          name="keywords"
          content="OpenSoftAI testimonials, client reviews, video testimonials, software development feedback"
        />
      </Head>

      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-8 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('video')}
              className={`pb-4 px-2 text-base font-medium transition-colors relative ${
                activeTab === 'video'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Video Testimonials
              {activeTab === 'video' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('text')}
              className={`pb-4 px-2 text-base font-medium transition-colors relative ${
                activeTab === 'text'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Text Testimonials
              {activeTab === 'text' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          </div>

          {/* Video Testimonials */}
          {activeTab === 'video' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTestimonials.map((t, i) => (
                <article
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="relative h-56 bg-gray-200 overflow-hidden group cursor-pointer">
                    <Image
                      src={t.image}
                      alt={`Video testimonial by ${t.name}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition">
                      <svg
                        className="w-5 h-5 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={t.image}
                        alt={`${t.name} - ${t.title}`}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{t.name}</h3>
                        <p className="text-sm text-gray-600">{t.title}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Quote:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{t.quote}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Text Testimonials */}
          {activeTab === 'text' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {textTestimonials.map((t, i) => (
                <article
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={t.image}
                      alt={`${t.name} - ${t.title}`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.name}</h3>
                      <p className="text-sm text-gray-600">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Quote:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{t.quote}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

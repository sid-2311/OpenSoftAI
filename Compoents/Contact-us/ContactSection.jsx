'use client';

import Image from 'next/image';
import Head from 'next/head';
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from 'lucide-react';

export default function ContactSection() {
  return (
    <>
      

      <section
        className="relative bg-gray-900 text-white"
        aria-labelledby="contact-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact.jpg"
            alt="Modern office desk with laptop"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Say <span className="text-white">Hello!</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Let’s make headlines together! We’re excited to collaborate with
              you on your next great project.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white text-black rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {/* Left: Form (iframe) */}
            <div className="p-8 border-r border-gray-200 flex justify-center items-center">
              <iframe
                width="200"
                height="350"
                src="https://metablock-software.metablocktechnologies.org/forms/wtl/74e8b7eedc4784ab22920c27c35edb54"
                frameBorder="0"
                sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
                allowFullScreen
                className="rounded-lg shadow-lg w-full h-[850px]"
                title="OpenSoftAI Contact Form"
              ></iframe>
            </div>

            {/* Right: Info */}
            <div className="p-8 bg-[#FDFDFD] flex flex-col justify-between items-center border-l border-gray-200">
              <div className="w-full">
                <h2 className="text-orange-600 font-semibold mb-8 uppercase tracking-widest">
                  Get in Touch
                </h2>

                {/* Work Inquiry */}
                <div className="mb-10 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg md:text-3xl text-[#242424]">
                    For <span className="font-extrabold text-[#242424]">work</span> inquiry
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-5 h-5 text-gray-800" />
                    <a
                      href="mailto:info@opensoftai.com"
                      className="text-gray-800 font-medium hover:text-blue-600 transition"
                    >
                      info@opensoftai.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-5 h-5 text-gray-800" />
                    <span className="text-gray-800">India: +91 92564 97999</span>
                  </div>
                </div>

                {/* Career Inquiry */}
                <div className="mb-10 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg md:text-3xl text-[#242424]">
                    For <span className="font-extrabold text-[#242424]">career</span> inquiry
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-5 h-5 text-gray-800" />
                    <a
                      href="mailto:info@opensoftai.com"
                      className="text-gray-800 font-medium hover:text-blue-600 transition"
                    >
                      info@opensoftai.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-5 h-5 text-gray-800" />
                    <span className="text-gray-800">India: +91 92564 97999</span>
                  </div>
                </div>
              </div>

              {/* Social Section */}
              <div className="w-full text-center mt-10">
                <h3 className="font-bold mb-4 text-lg md:text-3xl text-[#242424]">
                  Connect <span className="font-medium text-[#242424]">with us</span>
                </h3>

                <div className="flex gap-3 justify-center">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/opensoftai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                    aria-label="Visit our Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/opensoftai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                    aria-label="Visit our Twitter (X)"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/opensoftai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                    aria-label="Visit our LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@OpenSoftAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition"
                    aria-label="Visit our YouTube channel"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/opensoftai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition"
                    aria-label="Visit our Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

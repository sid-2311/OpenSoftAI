"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000); // Reset after 2 seconds
    }
  };

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Logo Column */}
          <div>
            <Link href="/">
              <img
                src="/final1.svg"
                alt="OpenSoftAI Logo"
                className="h-14 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* 2. Services Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aidevelopment"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/blockchain"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  BlockChain Development
                </Link>
              </li>
              <li>
                <Link
                  href="/software"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonals"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Testimonials
                </Link>
              </li>
             
             <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contacts Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">CONTACTS</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-2 group">
                <Phone className="w-5 h-5 text-gray-600" />
                <a
                  href="tel:+919256497999"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                 +91 92564 97999
                </a>
                <button
                  onClick={() => handleCopy("9256497999", "phone")}
                  className="opacity-0 group-hover:opacity-100 transition ml-2 text-gray-500 hover:text-blue-600"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 group">
                <Mail className="w-5 h-5 text-gray-600" />
                <a
                  href="mailto:info@opensoftai.com"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  info@opensoftai.com
                </a>
                <button
                  onClick={() =>
                    handleCopy("info@opensoftai.com", "email")
                  }
                  className="opacity-0 group-hover:opacity-100 transition ml-2 text-gray-500 hover:text-blue-600"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Address with Map Link */}
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <a
                  href="https://maps.app.goo.gl/QipKBXreJD4Jf6gc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  2nd Floor, 30-A, Gopalpura Bypass Rd, opp. Holiday Inn Hotel, <br />
                  Sultan Nagar, Shanthi Nagar, Gurjar Ki Thadi, <br />
                  Jaipur, Rajasthan 302020
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.facebook.com/opensoftai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://x.com/opensoftai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/opensoftai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/@OpenSoftAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/opensoftai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-600 transition"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                Sitemap
              </a>
              <span>|</span>
              <Link
                href="/term-conditions"
                className="hover:text-blue-600 transition"
              >
                Terms and Conditions
              </Link>
              <span>|</span>
              <Link
                href="/refund-policy"
                className="hover:text-blue-600 transition"
              >
                Refund Policy
              </Link>
            </div>

            <p className="text-sm text-gray-600">
              Copyright © 2025 OpenSoftAI.com, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
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

const API_URL = "http://localhost:9000/api/footer";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (data.success) {
          setFooterData(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch footer data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFooter();
  }, []);

  const handleCopy = (text, field) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(String(text || ""));
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  if (loading || !footerData) {
    return (
      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto h-64 flex items-center justify-center text-gray-400">
          Loading footer...
        </div>
      </footer>
    );
  }

  const {
    logo,
    services = [],
    company = [],
    contacts = {},
    socialMedia = [],
    bottomLinks = [],
    copyright
  } = footerData;

  // Helper to get display string from potentially complex objects
  const resolveValue = (val) => {
    if (!val) return "";
    if (typeof val === "object" && !Array.isArray(val)) {
      return val.display || val.text || val.name || val.label || val.value || String(val);
    }
    return String(val);
  };

  // Helper to get URL from potentially complex objects
  const resolveLink = (val) => {
    if (!val) return "#";
    if (typeof val === "object" && !Array.isArray(val)) {
      return val.link || val.mapLink || val.href || val.url || "#";
    }
    return String(val);
  };

  const renderSocialIcon = (platform) => {
    if (!platform) return null;

    // If it's an object, try to get the platform name from common keys
    let pName = "";
    if (typeof platform === "object") {
      pName = platform.icon || platform.name || platform.platform || "";
    } else {
      pName = String(platform);
    }

    const p = pName.toLowerCase();
    if (p.includes("facebook")) return <Facebook className="w-5 h-5" />;
    if (p.includes("linkedin")) return <Linkedin className="w-5 h-5" />;
    if (p.includes("youtube")) return <Youtube className="w-5 h-5" />;
    if (p.includes("instagram")) return <Instagram className="w-5 h-5" />;
    if (p.includes("twitter") || p.includes("x")) {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Logo Column */}
          <div>
            <Link href="/">
              <img
                src={logo || "/images/opensoftai-logo.jpg"}
                alt="OpenSoftAI Logo"
                className="h-14 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* 2. Services Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">SERVICES</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={resolveLink(service)}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {resolveValue(service)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">COMPANY</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={resolveLink(item)}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {resolveValue(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contacts Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">CONTACTS</h3>
            <div className="space-y-4">
              {/* Phone */}
              {contacts?.phone && (
                <div className="flex items-center gap-2 group">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <a
                    href={resolveLink(contacts.phone).startsWith('tel:') ? resolveLink(contacts.phone) : `tel:${resolveValue(contacts.phone).replace(/\s/g, "")}`}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {resolveValue(contacts.phone)}
                  </a>
                  <button
                    onClick={() => handleCopy(resolveValue(contacts.phone), "phone")}
                    className="opacity-0 group-hover:opacity-100 transition ml-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                  >
                    {copiedField === "phone" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Email */}
              {contacts?.email && (
                <div className="flex items-center gap-2 group">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <a
                    href={resolveLink(contacts.email).startsWith('mailto:') ? resolveLink(contacts.email) : `mailto:${resolveValue(contacts.email)}`}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {resolveValue(contacts.email)}
                  </a>
                  <button
                    onClick={() => handleCopy(resolveValue(contacts.email), "email")}
                    className="opacity-0 group-hover:opacity-100 transition ml-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Address with Map Link */}
              {contacts?.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-16 h-16 text-gray-600 mt-1" />
                  <a
                    href={resolveLink(contacts.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition"
                    dangerouslySetInnerHTML={{ __html: resolveValue(contacts.address).replace(/\n/g, "<br />") }}
                  ></a>
                </div>
              )}

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-6">
                {(socialMedia || []).map((social, index) => (
                  <a
                    key={index}
                    href={resolveLink(social)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${social.bgColor || 'bg-blue-600'} ${social.hoverColor || 'hover:bg-blue-700'}`}
                    title={resolveValue(social)}
                  >
                    {renderSocialIcon(social)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {(bottomLinks || []).map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={resolveLink(link)}
                    className="hover:text-blue-600 transition"
                  >
                    {resolveValue(link)}
                  </Link>
                  {index < bottomLinks.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              {copyright || `Copyright © ${new Date().getFullYear()} OpenSoftAI. All Rights Reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

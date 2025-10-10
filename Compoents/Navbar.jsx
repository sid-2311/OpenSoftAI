"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Send, Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyDropdownOpen, setPrivacyDropdownOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const mobileMenuItems = [
    { key: "ai", label: "AI & Automation", to: "/ai-development-company" },
    { key: "blockchain", label: "BlockChain Development", to: "/blockchain-development-service" },
    { key: "software", label: "Software Development", to: "/software-development-comapny" },
    { key: "about", label: "About", to: "/about-us" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow">
      <div className="flex items-center justify-between mx-auto max-md:px-2 max-md:py-2 py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ml-2">
          <img src="/final1.svg" alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 font-semibold text-gray-800 uppercase">
          <li>
            <Link href="/ai-development-company" className="hover:text-[#016CD3]">
              AI & Automation
            </Link>
          </li>
          <li>
            <Link href="/blockchain-development-service" className="hover:text-[#016CD3]">
              BlockChain Development
            </Link>
          </li>
          <li>
            <Link href="/software-development-company" className="hover:text-[#016CD3]">
              Software Development
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-[#016CD3]">
              About
            </Link>
          </li>

          {/* Privacy Dropdown */}
          <Link href="/portfolio" className="hover:text-[#016CD3]">
              Portfolio
            </Link>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex relative bg-[#016CD3] px-10 py-8 items-center justify-center clip-slant">
          <Link
            href="/contact-us"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#016CD3] font-semibold shadow-md hover:bg-gray-100 transition whitespace-nowrap"
          >
            CONTACT US{" "}
            <Send
              size={16}
              className="group-hover:translate-x-3 transition-all duration-300 text-[#107EFF]"
            />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden cursor-pointer"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-[80vw] h-full bg-[#016CD3] text-white z-50 p-4 overflow-y-auto transition-transform transform translate-x-0">
          <ul className="space-y-4 mt-0 uppercase">
            {mobileMenuItems.map((item, idx) => (
              <React.Fragment key={item.key}>
                <li>
                  <Link
                    href={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
                {idx < mobileMenuItems.length - 1 && (
                  <hr className="text-white/40 pb-0" />
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="mt-10 space-y-3 text-sm">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-transparent border-2 text-white rounded-md py-2 font-semibold"
            >
              CONTACT US
            </Link>
          </div>

          {/* Privacy Mobile */}
          <div className="flex flex-col gap-2 text-sm text-white mt-8">
            <div className="flex items-center">
              <button
                onClick={() => setPrivacyOpen(!privacyOpen)}
                className="flex-1 font-semibold text-left hover:text-blue-300 transition"
                aria-label={privacyOpen ? "Close submenu" : "Open submenu"}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setPrivacyOpen(!privacyOpen)}
                className="ml-2 text-white"
              >
                {privacyOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>

            {privacyOpen && (
              <div className="flex flex-col pl-6 gap-3 mt-2">
                <Link
                  href="/term-conditions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-300 transition py-2 pb-3 border-b border-white/20 font-medium"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/refund-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-300 transition pb-2 font-medium"
                >
                  Refund Policy
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

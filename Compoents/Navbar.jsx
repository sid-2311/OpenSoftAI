"use client";
import React, { useEffect, useState } from "react";
import { Send, Menu, X, ChevronRight, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch navbar from backend
  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch("http://localhost:9000/api/navbar");
        const json = await res.json();

        if (json.success) {
          setMenuItems(json.data);
        }
      } catch (error) {
        console.error("Failed to load navbar:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavbar();
  }, []);

  const handleMenuToggle = (key) => {
    setExpandedMenu(expandedMenu === key ? null : key);
  };

  if (loading) return null; // or skeleton

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow">
      <div className="flex items-center justify-between mx-auto max-md:px-4 max-md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-2">
          <Image
            src="/images/opensoftai-logo.jpg"
            height={100}
            width={100}
            alt="OpenSoftAI Logo"
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center space-x-8 font-semibold text-gray-800 uppercase">
          {menuItems.map((item) => (
            <li key={item._id} className="relative group">
              <Link
                href={item.to || "#"}
                className="hover:text-[#016CD3] py-5 inline-block"
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.subItems?.length > 0 && (
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-md w-[750px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-8 grid grid-cols-2 gap-4">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.to}
                        href={sub.to}
                        className="hover:text-[#016CD3]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex bg-[#016CD3] px-10 py-8 clip-slant">
          <Link
            href="/contact-us"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#016CD3] font-semibold"
          >
            CONTACT US
            <Send size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-50"
        >
          {mobileMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-[#016CD3]" />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 right-0 w-[85vw] max-w-[400px] h-full bg-gradient-to-br from-[#016CD3] to-[#0152a8] z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-8 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Menu</h2>
            <p className="text-white/70 text-sm">Explore our services</p>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item._id}>
                  {item.subItems?.length > 0 ? (
                    <div className="bg-white/5 rounded-lg">
                      <button
                        onClick={() => handleMenuToggle(item.key)}
                        className="w-full flex justify-between px-4 py-4 text-white font-semibold"
                      >
                        {item.label}
                        {expandedMenu === item.key ? (
                          <Minus size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </button>

                      <div
                        className={`transition-all overflow-hidden ${
                          expandedMenu === item.key
                            ? "max-h-[500px]"
                            : "max-h-0"
                        }`}
                      >
                        <div className="px-4 pb-3 space-y-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.to}
                              href={sub.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 text-white/90 text-sm hover:bg-white/10 rounded"
                            >
                              <ChevronRight size={16} />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between px-4 py-4 text-white font-semibold bg-white/5 rounded-lg"
                    >
                      {item.label}
                      <ChevronRight size={20} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 py-6 border-t border-white/10">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-center gap-2 bg-white text-[#016CD3] py-3 rounded-lg font-bold"
            >
              CONTACT US
              <Send size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-slant {
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

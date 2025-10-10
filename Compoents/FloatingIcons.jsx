"use client";

import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="fixed right-4 bottom-20 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9256497999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:info@opensoftai.com"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection({ data }) {
  const router = useRouter();

  const [countryCode, setCountryCode] = useState(
    data.countryCodes[0].code
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  // ---------- VALIDATION ----------
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    if (!description.trim())
      newErrors.description = "Description is required.";

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email))
        newErrors.email = "Enter a valid email address.";
    }

    if (phone.trim() && !/^[0-9]{7,15}$/.test(phone))
      newErrors.phone = "Enter a valid phone number (7–15 digits).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- SUBMIT ----------
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const formData = {
    name,
    phone: countryCode + phone,
    email,
    description,
  };

  try {
    const res = await fetch("https://openbackerd.onrender.com/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      // ❌ backend error
      const errData = await res.json();
      alert(errData.message || "Something went wrong");
      return;
    }

    const data = await res.json();

    // ✅ DOUBLE CHECK
    if (data?.success === true) {
      router.push("/thank-you");
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error("API Error:", error);
    alert("Server not responding");
    // ❌ no redirect here
  }
};


  const { section, content, form, countryCodes } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-8 text-white">
          <div>
            <p className="text-blue-400 font-semibold tracking-wider mb-4 uppercase text-sm">
              {section.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {section.heading}
            </h2>
            <p className="text-blue-300 text-md md:text-lg">
              {section.subheading}
            </p>
          </div>

          <div className="space-y-6">
            {content.map((text, i) => (
              <p
                key={i}
                className="text-gray-300 text-md md:text-lg leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            {form.title}
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* NAME */}
            <input
            suppressHydrationWarning
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={form.fields.name.placeholder}
              className="w-full p-2 rounded-md bg-white/20 text-white"
            />

            {/* PHONE */}
            <div className="flex gap-2">
              <select
              suppressHydrationWarning
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-32 p-2 rounded-md bg-white/20 text-white"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code} className="text-black">
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>

              <input
              suppressHydrationWarning
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={form.fields.phone.placeholder}
                className="w-full p-2 rounded-md bg-white/20 text-white"
              />
            </div>

            {/* EMAIL */}
            <input
            suppressHydrationWarning
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={form.fields.email.placeholder}
              className="w-full p-2 rounded-md bg-white/20 text-white"
            />

            {/* DESCRIPTION */}
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={form.fields.description.placeholder}
              className="w-full p-2 rounded-md bg-white/20 text-white"
            />

            <button
            suppressHydrationWarning
              type="submit"
              className="w-full bg-[#1163FB] py-3 rounded-md text-white font-medium"
            >
              {form.submitText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

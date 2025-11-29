"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+971", name: "UAE" }
];

const ContactSection = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter()

  const [errors, setErrors] = useState({}); // validation errors

  // ---------- VALIDATION ----------
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    if (!description.trim()) newErrors.description = "Description is required.";

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

  // ---------- HANDLE SUBMIT ----------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log("❌ Validation failed!");
      return;
    }

    const formData = {
      name,
      phone: countryCode + phone,
      email,
      description
    };

    console.log("✅ Form Data:", formData);
    router.push("/thank-you")
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE CONTENT */}
         <div className="space-y-8 text-white">
            <div>
              <p className="text-blue-400 font-semibold tracking-wider mb-4 uppercase text-sm">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">For Work Inquiry</h2>
              <p className="text-blue-300 text-md md:text-lg mb-8">
                Mail to our sales department
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                Look, we could keep talking about how great we are. But you probably have actual work to do.
              </p>

              <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                Here's what happens when you call us. No sales pitch. No pressure. Just an honest conversation about what you're trying to build and whether we're the right team to help you build it.
              </p>

              <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                We'll look at what you've got now. Figure out what you actually need (not what someone told you you need). Map out a plan that makes sense. Give you real numbers with no hidden surprises.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full  bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">Send Your Query</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* NAME */}
              <div>
                <label className="block text-sm mb-1 text-gray-200">
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                suppressHydrationWarning
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-2 rounded-md bg-white/20 text-white border ${
                    errors.name ? "border-red-500" : "border-white/30"
                  } placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your name"
                />

                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm mb-1 text-gray-200">
                  Phone <span className="text-red-500">*</span>
                </label>

                <div className="flex gap-2">
                  <select
                  suppressHydrationWarning
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-32 p-2 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code} className="text-black">
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>

                  <input
                  suppressHydrationWarning
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full p-2 rounded-md bg-white/20 text-white border ${
                      errors.phone ? "border-red-500" : "border-white/30"
                    } placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your phone number"
                  />
                </div>

                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-1 text-gray-200">Email Address</label>

                <input
                suppressHydrationWarning
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-2 rounded-md bg-white/20 text-white border ${
                    errors.email ? "border-red-500" : "border-white/30"
                  } placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your email"
                />

                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block text-sm mb-1 text-gray-200">
                  Description (Interested Software) <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`w-full p-2 rounded-md bg-white/20 text-white border ${
                    errors.description ? "border-red-500" : "border-white/30"
                  } placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Describe your interest..."
                />

                {errors.description && (
                  <p className="text-red-400 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
              suppressHydrationWarning
                type="submit"
                className="w-full bg-[#1163FB]/90 hover:bg-[#1163FB] transition-colors rounded-md py-3 font-medium text-white"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;

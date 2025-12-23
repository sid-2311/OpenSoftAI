'use client';

import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const router=useRouter()


  const countryCodes = [
    { name: 'India', code: '+91' },
    { name: 'USA', code: '+1' },
    { name: 'UK', code: '+44' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Description is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  setIsSubmitting(true);

  const finalPayload = {
    name: formData.name,
    email: formData.email,
    phone: countryCode + " " + formData.phone,
    description: formData.message,
  };

  try {
    const res = await fetch(
      "https://openbackerd.onrender.com/api/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      }
    );

    const data = await res.json();
    console.log("API RESPONSE:", data);

    if (!res.ok || !data.success) {
      alert(data.message || "Submission failed");
      setIsSubmitting(false);
      return;
    }

    // ✅ SUCCESS → redirect
    router.push("/thank-you");

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error("FORM SUBMIT ERROR:", error);
    alert("Server not responding");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen">

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Say <span className="text-white">Hello!</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's make headlines together! We're excited to collaborate with you on your next great project.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg text-white rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

          {/* LEFT FORM */}
          <div className="flex items-center justify-center">
            <div className="w-full bg-white/10 backdrop-blur-md h-full p-6 md:p-8 border border-white/20 shadow-lg shadow-black/20">
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">Send Your Query</h3>

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-600/20 border border-green-400/40 rounded-lg text-green-200 text-center">
                  Message sent successfully!
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>

                {/* NAME */}
                <div>
                  <label className="block text-sm mb-1 text-gray-200">Name <span className="text-red-500">*</span></label>
                  <input
                  suppressHydrationWarning
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md bg-white/20 text-white border ${errors.name ? 'border-red-500' : 'border-white/30'} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm mb-1 text-gray-200">Phone <span className="text-red-500">*</span></label>
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 rounded-md bg-white/20 text-white border ${errors.phone ? 'border-red-500' : 'border-white/30'} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm mb-1 text-gray-200">
                    Description (Interested Software) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md bg-white/20 text-white border ${errors.message ? 'border-red-500' : 'border-white/30'} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Describe your interest..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors rounded-md py-3 font-medium text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-10 bg-gradient-to-br from-white to-blue-50 text-black flex flex-col justify-between">
            <div>
              <h2 className="text-blue-600 font-semibold mb-8 uppercase tracking-widest text-sm">Get in Touch</h2>

              {/* Work Inquiry */}
              <div className="mb-10 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-4">
                  For <span className="font-extrabold text-blue-600">work</span> inquiry
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <Link
                      href="mailto:info@opensoftai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-blue-600 transition"
                    >
                      info@opensoftai.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-800 font-medium">India: +91 92564 97999</span>
                  </div>
                </div>
              </div>

              {/* Career Inquiry */}
              <div className="mb-10 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-4">
                  For <span className="font-extrabold text-blue-600">career</span> inquiry
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <Link
                      href="mailto:info@opensoftai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-blue-600 transition"
                    >
                      info@opensoftai.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-800 font-medium">India: +91 92564 97999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL SECTION */}
            <div className="w-full text-center mt-8">
              <h3 className="font-bold mb-5 text-xl md:text-2xl text-gray-800">
                Connect <span className="font-medium text-blue-600">with us</span>
              </h3>

              <div className="flex gap-2 justify-center flex-wrap">

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/opensoftai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </Link>

                {/* X */}
                <Link
                  href="https://x.com/opensoftai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/company/opensoftai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@OpenSoftAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/opensoftai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

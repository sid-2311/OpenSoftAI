"use client";

import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Twitter
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection({ data }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const countryCodes = [
    { name: "India", code: "+91" },
    { name: "USA", code: "+1" },
    { name: "UK", code: "+44" },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Description is required";
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

    const payload = {
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        alert(result.message || "Submission failed");
        return;
      }

      router.push("/thank-you");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Server not responding");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            {data.titlePrefix}{" "}
            <span className="text-white">{data.titleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* LEFT FORM */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {data.form.title}
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label className="block text-sm mb-1">
                  {data.form.nameLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={data.form.namePlaceholder}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm mb-1">
                  {data.form.phoneLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-32 p-2 rounded-md bg-white/20 border border-white/30"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={data.form.phonePlaceholder}
                    className="w-full p-2 rounded-md bg-white/20 border border-white/30"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-1">
                  {data.form.emailLabel}
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={data.form.emailPlaceholder}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm mb-1">
                  {data.form.messageLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={data.form.messagePlaceholder}
                  className="w-full p-2 rounded-md bg-white/20 border border-white/30"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 rounded-md py-3"
              >
                {isSubmitting
                  ? data.form.submittingText
                  : data.form.submitButton}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 bg-white text-black flex flex-col justify-between">
            <div>
              <h2 className="text-blue-600 font-semibold mb-8 uppercase text-sm">
                {data.contactInfo.title}
              </h2>

              {/* WORK */}
              <div className="mb-10">
                <h3 className="font-semibold text-xl mb-4">
                  {data.contactInfo.workInquiry.title}{" "}
                  <span className="text-blue-600 font-bold">
                    {data.contactInfo.workInquiry.titleHighlight}
                  </span>{" "}
                  {data.contactInfo.workInquiry.titleSuffix}
                </h3>
                <p>{data.contactInfo.workInquiry.email}</p>
                <p>{data.contactInfo.workInquiry.phone}</p>
              </div>

              {/* CAREER */}
              <div>
                <h3 className="font-semibold text-xl mb-4">
                  {data.contactInfo.careerInquiry.title}{" "}
                  <span className="text-blue-600 font-bold">
                    {data.contactInfo.careerInquiry.titleHighlight}
                  </span>{" "}
                  {data.contactInfo.careerInquiry.titleSuffix}
                </h3>
                <p>{data.contactInfo.careerInquiry.email}</p>
                <p>{data.contactInfo.careerInquiry.phone}</p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="text-center mt-8">
              <h3 className="font-bold text-xl mb-5">
                {data.socials.title}{" "}
                <span className="text-blue-600">
                  {data.socials.titleHighlight}
                </span>
              </h3>

              <div className="flex gap-3 justify-center">
                {data.socials.links.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    target="_blank"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white"
                  >
                    {s.platform === "facebook" && <Facebook size={18} />}
                    {s.platform === "linkedin" && <Linkedin size={18} />}
                    {s.platform === "instagram" && <Instagram size={18} />}
                    {s.platform === "youtube" && <Youtube size={18} />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

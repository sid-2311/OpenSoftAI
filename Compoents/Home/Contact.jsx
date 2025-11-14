"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side Content */}
          <div className="space-y-8 text-white">
            <div>
              <p className="text-blue-400 font-semibold tracking-wider mb-4 uppercase text-sm">
                GET IN TOUCH
              </p>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                For Work Inquiry
              </h2>
              <p className="text-blue-300 text-lg mb-8">
                Mail to our sales department
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Look, we could keep talking about how great we are. But you probably have actual work to do.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Here's what happens when you call us. No sales pitch. No pressure. Just an honest conversation about what you're trying to build and whether we're the right team to help you build it.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                We'll look at what you've got now. Figure out what you actually need (not what someone told you you need). Map out a plan that makes sense. Give you real numbers with no hidden surprises.
              </p>
            </div>

           
          </div>

          {/* Right Side Form */}
          <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className="w-full bg-transparent border-b-2 border-blue-400/30 focus:border-blue-400 outline-none py-3 px-1 text-white text-lg transition-colors"
                  placeholder=" "
                  required
                />
                <label className={`absolute left-1 transition-all duration-200 pointer-events-none ${
                  focused.name || formData.name 
                    ? 'text-blue-400 text-sm -top-5' 
                    : 'text-gray-400 text-lg top-3'
                }`}>
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className="w-full bg-transparent border-b-2 border-blue-400/30 focus:border-blue-400 outline-none py-3 px-1 text-white text-lg transition-colors"
                  placeholder=" "
                  required
                />
                <label className={`absolute left-1 transition-all duration-200 pointer-events-none ${
                  focused.email || formData.email 
                    ? 'text-blue-400 text-sm -top-5' 
                    : 'text-gray-400 text-lg top-3'
                }`}>
                  Email Address
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={() => handleBlur('phone')}
                  className="w-full bg-transparent border-b-2 border-blue-400/30 focus:border-blue-400 outline-none py-3 px-1 text-white text-lg transition-colors"
                  placeholder=" "
                />
                <label className={`absolute left-1 transition-all duration-200 pointer-events-none ${
                  focused.phone || formData.phone 
                    ? 'text-blue-400 text-sm -top-5' 
                    : 'text-gray-400 text-lg top-3'
                }`}>
                  Phone Number
                </label>
              </div>

              {/* Company Field */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => handleFocus('company')}
                  onBlur={() => handleBlur('company')}
                  className="w-full bg-transparent border-b-2 border-blue-400/30 focus:border-blue-400 outline-none py-3 px-1 text-white text-lg transition-colors"
                  placeholder=" "
                />
                <label className={`absolute left-1 transition-all duration-200 pointer-events-none ${
                  focused.company || formData.company 
                    ? 'text-blue-400 text-sm -top-5' 
                    : 'text-gray-400 text-lg top-3'
                }`}>
                  Company Name
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-blue-400/30 focus:border-blue-400 outline-none py-3 px-1 text-white text-lg transition-colors resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label className={`absolute left-1 transition-all duration-200 pointer-events-none ${
                  focused.message || formData.message 
                    ? 'text-blue-400 text-sm -top-5' 
                    : 'text-gray-400 text-lg top-3'
                }`}>
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
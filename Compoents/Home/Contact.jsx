// components/Sections/ContactSection.jsx
import React from "react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="flex max-md:flex-col flex-row">
        {/* Left Side Content */}
        <div className="max-md:w-full w-1/2 bg-[#F6F7FC] max-md:p-5 p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <h3 className="text-blue-500 text-sm font-medium mb-4 tracking-wider uppercase">
              GET IN TOUCH
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              For Work Inquiry
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Mail to our sales department
            </p>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Look, we could keep talking about how great we are. But you
                probably have actual work to do.
              </p>
              <p>
                Here's what happens when you call us. No sales pitch. No
                pressure. Just an honest conversation about what you're trying
                to build and whether we're the right team to help you build it.
              </p>
              <p>
                We'll look at what you've got now. Figure out what you actually
                need (not what someone told you you need). Map out a plan that
                makes sense. Give you real numbers with no hidden surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Iframe */}
        <div className="max-md:w-full w-1/2 bg-gray-50 max-md:p-5 p-0 flex items-center justify-center">

<iframe
  width="600"
  height="850"
  src="https://metablock-software.metablocktechnologies.org/forms/wtl/74e8b7eedc4784ab22920c27c35edb54"
  frameBorder="0"
  sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
  allowFullScreen
></iframe>
       </div>
      </div>

      {/* Example SEO-friendly image */}
     
    </section>
  );
};

export default ContactSection;

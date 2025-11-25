"use client";

import { ArrowRight, Calendar, Download, FolderOpen } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero CTA Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your <br /> Blockchain-Powered Future?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The blockchain revolution is happening now — and the companies that
            embrace this technology today will be the market leaders of tomorrow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Tokenize Assets",
                desc: "Transform traditional assets into digital tokens",
              },
              {
                title: "Build DeFi Protocols",
                desc: "Create decentralized financial ecosystems",
              },
              {
                title: "NFT Ecosystems",
                desc: "Develop next-generation digital collectibles",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
          At <strong>OpenSoftAI</strong>, we've helped dozens of companies
          successfully navigate the blockchain landscape and build solutions that
          create real value for users and businesses. From crypto startups that
          have raised millions in funding to enterprises revolutionizing their
          operations — we build blockchain solutions that work.
        </p>

        <blockquote className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8 mb-8">
          <p className="text-xl font-semibold text-gray-900 italic">
            The question isn’t whether blockchain will transform your industry –
            it’s whether you’ll be leading that transformation or watching your
            competitors gain the advantage.
          </p>
        </blockquote>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          Whether you have a detailed blockchain plan or just an innovative idea,
          our blockchain specialists can help you turn that vision into reality.
          We’ll explore possibilities and show how decentralized technology can
          drive your business forward.
        </p>
      </div>

      {/* Action Buttons Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Build Secure, Scalable & Innovative Blockchain Solutions
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Contact OpenSoftAI today for a free consultation and discover what’s
            possible in the decentralized world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/contact-us"
              className="group bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-lg mb-2">Get Free Consultation</h4>
              <p className="text-blue-100 text-sm mb-4">
                Speak with our blockchain experts
              </p>
              <ArrowRight className="w-5 h-5 mx-auto" />
            </Link>

            <Link
              href="/contact-us"
              className="group bg-white hover:bg-blue-50 text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-100 hover:border-blue-300"
            >
              <Download className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-lg mb-2">Strategy Guide</h4>
              <p className="text-gray-600 text-sm mb-4">
                Download our blockchain playbook
              </p>
              <ArrowRight className="w-5 h-5 mx-auto text-blue-600" />
            </Link>

            <Link
              href="/portfolio"
              className="group bg-white hover:bg-blue-50 text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-100 hover:border-blue-300"
            >
              <FolderOpen className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-lg mb-2">View Portfolio</h4>
              <p className="text-gray-600 text-sm mb-4">
                Explore our successful projects
              </p>
              <ArrowRight className="w-5 h-5 mx-auto text-blue-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join the Blockchain Revolution?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Let’s discuss how decentralized technology can transform your
            business and open new opportunities for growth. Our blockchain
            experts are ready to help you build the future.
          </p>
          <Link
            href="/contact-us"
            className="bg-white hover:bg-blue-50 text-blue-600 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { Send, Menu, X, ChevronRight, Plus, Minus } from "lucide-react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState(null);

    const mobileMenuItems = [
        {
            key: "ai",
            label: "AI & Automation",
            subItems: [
                { label: "AI Development Services", to: "/ai-development-service" },
                { label: "AI Calling Agent Development", to: "/ai-calling-agent-development-company" },
                { label: "AI Chatbot Development", to: "/ai-chatbot-development-company" },
                { label: "AI Copilot Development", to: "/ai-copilot-development-company" },
                { label: "AI Consulting", to: "/ai-consulting-development-company" },
                { label: "Generative AI", to: "/genrative-ai-development-company" },
                { label: "AI Workflow Automation", to: "/ai-workflow-automation-development-company" },
            ],
        },
        {
            key: "blockchain",
            label: "Blockchain Development",
            subItems: [
                { label: "Crypto Wallet & Exchange Platform", to: "/crypto-wallet-exchange-platform-development" },
                { label: "Token Development", to: "/token-development" },
                { label: "DeFi DEX Development", to: "/defi-dex-development" },
                { label: "Smart Contract Development", to: "/smart-contract-development" },
                { label: "NFT Marketplace Development", to: "/nft-marketplace-development" },
            ],
        },
        { key: "software", label: "Software Development", to: "/software-development-company" },
        { key: "about", label: "About", to: "/about-us" },
        { key: "portfolio", label: "Portfolio", to: "/portfolio" },
    ];

    const handleMenuToggle = (key) => {
        setExpandedMenu(expandedMenu === key ? null : key);
    };

    return (
        <nav className="w-full bg-white sticky top-0 z-50 shadow">
            <div className="flex items-center justify-between mx-auto max-md:px-4 max-md:py-3 py-0">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-2 ml-2">
                    <img src="/images/opensoftai-logo.svg" height={100} width={100} alt="OpenSoftAI Logo" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-8 font-semibold text-gray-800 uppercase relative">
                    {/* AI & Automation Dropdown */}
                    <li className="group relative">
                        <a
                            href="/ai-development-company"
                            className="hover:text-[#016CD3] inline-block py-5"
                        >
                            AI & Automation
                        </a>

                        <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md w-[750px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                            <div className="flex">
                                <div className="bg-gray-100 w-16 flex items-center justify-center rounded-l-md">
                                    <h3 className="text-gray-400 font-semibold text-[18px] tracking-widest rotate-[-90deg] whitespace-nowrap">
                                        AI & AUTOMATION
                                    </h3>
                                </div>
                                <div className="p-8 grid grid-cols-2 gap-x-12 gap-y-5 flex-1">
                                    <a href="/ai-development-service" className="hover:text-[#016CD3] transition">AI Development Services</a>
                                    <a href="/ai-calling-agent-development-company" className="hover:text-[#016CD3] transition">AI Calling Agent Development</a>
                                    <a href="/ai-chatbot-development-company" className="hover:text-[#016CD3] transition">AI Chatbot Development</a>
                                    <a href="/ai-copilot-development-company" className="hover:text-[#016CD3] transition">AI Copilot Development</a>
                                    <a href="/ai-consulting-development-company" className="hover:text-[#016CD3] transition">AI Consulting</a>
                                    <a href="/genrative-ai-development-company" className="hover:text-[#016CD3] transition">Generative AI</a>
                                    <a href="/ai-workflow-automation-development-company" className="hover:text-[#016CD3] transition">AI Workflow Automation</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Blockchain Dropdown */}
                    <li className="group relative">
                        <a
                            href="/blockchain-development-service"
                            className="hover:text-[#016CD3] inline-block py-5"
                        >
                            Blockchain Development
                        </a>

                        <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md w-[750px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                            <div className="flex">
                                <div className="bg-gray-100 w-16 flex items-center justify-center rounded-l-md">
                                    <h3 className="text-gray-400 font-semibold text-[18px] tracking-widest rotate-[-90deg] whitespace-nowrap">
                                        BLOCKCHAIN
                                    </h3>
                                </div>
                                <div className="p-8 flex-1">
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                                        <a href="/crypto-wallet-exchange-platform-development" className="block hover:text-[#016CD3] transition">
                                            Crypto Wallet & Exchange Platform
                                        </a>
                                        <a href="/token-development" className="block hover:text-[#016CD3] transition">
                                            Token Development
                                        </a>
                                        <a href="/defi-dex-development" className="block hover:text-[#016CD3] transition">
                                            DeFi DEX Development
                                        </a>
                                        <a href="/smart-contract-development" className="block hover:text-[#016CD3] transition">
                                            Smart Contract Development
                                        </a>
                                        <a href="/nft-marketplace-development" className="block hover:text-[#016CD3] transition">
                                            NFT Marketplace Development
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="/software-development-company" className="hover:text-[#016CD3] py-5 inline-block">
                            Software Development
                        </a>
                    </li>
                    <li>
                        <a href="/about-us" className="hover:text-[#016CD3] py-5 inline-block">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/portfolio" className="hover:text-[#016CD3] py-5 inline-block">
                            Portfolio
                        </a>
                    </li>
                </ul>

                {/* Desktop Contact Button */}
                <div className="hidden lg:flex relative bg-[#016CD3] px-10 py-8 items-center justify-center clip-slant">
                    <a
                        href="/contact-us"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#016CD3] font-semibold shadow-md hover:bg-gray-100 transition whitespace-nowrap"
                    >
                        CONTACT US{" "}
                        <Send size={16} className="group-hover:translate-x-3 transition-all duration-300 text-[#107EFF]" />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden cursor-pointer z-50 relative"
                >
                    {mobileMenuOpen ? (
                        <X size={28} className="text-[#016CD3]" />
                    ) : (
                        <Menu size={28} className="text-[#016CD3]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Modern Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 right-0 w-[85vw] max-w-[400px] h-full bg-gradient-to-br from-[#016CD3] to-[#0152a8] z-40 shadow-2xl transition-transform duration-300 ease-out ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="px-6 py-8 border-b border-white/10">
                        <h2 className="text-2xl font-bold text-white">Menu</h2>
                        <p className="text-white/70 text-sm mt-1">Explore our services</p>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        <ul className="space-y-2">
                            {mobileMenuItems.map((item) => (
                                <li key={item.key}>
                                    {item.subItems ? (
                                        <div className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm">
                                            <button
                                                onClick={() => handleMenuToggle(item.key)}
                                                className="w-full flex items-center justify-between px-4 py-4 text-white font-semibold hover:bg-white/10 transition-all"
                                            >
                                                <span className="text-left">{item.label}</span>
                                                {expandedMenu === item.key ? (
                                                    <Minus size={20} className="flex-shrink-0 ml-2" />
                                                ) : (
                                                    <Plus size={20} className="flex-shrink-0 ml-2" />
                                                )}
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${
                                                    expandedMenu === item.key ? "max-h-[500px]" : "max-h-0"
                                                }`}
                                            >
                                                <div className="px-4 pb-3 space-y-1 bg-black/10">
                                                    {item.subItems.map((sub) => (
                                                        <a
                                                            key={sub.to}
                                                            href={sub.to}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="flex items-center gap-2 px-3 py-2.5 text-white/90 text-sm hover:text-white hover:bg-white/10 rounded-md transition-all group"
                                                        >
                                                            <ChevronRight size={16} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                                            <span>{sub.label}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={item.to}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center justify-between px-4 py-4 text-white font-semibold bg-white/5 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm group"
                                        >
                                            <span>{item.label}</span>
                                            <ChevronRight size={20} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer - Contact & Privacy */}
                    <div className="px-6 py-6 border-t border-white/10 space-y-4 bg-black/10">
                        <a
                            href="/contact-us"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full bg-white text-[#016CD3] rounded-lg py-3.5 font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
                        >
                            CONTACT US
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex gap-3 text-xs text-white/80">
                            <a href="/term-conditions" className="hover:text-white transition">Terms</a>
                            <span>•</span>
                            <a href="/refund-policy" className="hover:text-white transition">Refund Policy</a>
                        </div>
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
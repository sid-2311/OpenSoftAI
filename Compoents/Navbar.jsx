"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Send, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [aiMenuOpen, setAiMenuOpen] = useState(false);
    const [blockchainMenuOpen, setBlockchainMenuOpen] = useState(false);

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
                { label: "Smart Contract Development", to: "/smart-contract-development-company" },
                { label: "DApp Development", to: "/dapp-development-company" },
                { label: "NFT Marketplace Development", to: "/nft-marketplace-development-company" },
                { label: "Crypto Exchange Development", to: "/crypto-exchange-development-company" },
                { label: "DeFi Development", to: "/defi-development-company" },
                { label: "Blockchain Consulting", to: "/blockchain-consulting-company" },
            ],
        },
        { key: "software", label: "Software Development", to: "/software-development-company" },
        { key: "about", label: "About", to: "/about-us" },
        { key: "portfolio", label: "Portfolio", to: "/portfolio" },
    ];

    return (
        <nav className="w-full bg-white sticky top-0 z-50 shadow">
            <div className="flex items-center justify-between mx-auto max-md:px-2 max-md:py-2 py-0">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 ml-2">
                    <Image src="/images/opensoftai-logo.svg" height={100} width={100} alt="OpenSoftAI Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-8 font-semibold text-gray-800 uppercase relative">
                    {/* AI & Automation Dropdown */}
                    {/* <li className="group relative">
            <Link href="/ai-development-company" className="hover:text-[#016CD3] inline-block py-5">
              AI & Automation
            </Link>
            <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md p-6 w-[600px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
              <h3 className="text-lg font-bold text-[#016CD3] mb-4 border-b pb-2">
                AI & Automation Services
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <Link href="/ai-development-service" className="block px-4 py-2 hover:bg-gray-100 rounded transition">AI Development Services</Link>
                <Link href="/ai-calling-agent-development-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">AI Calling Agent Development</Link>
                <Link href="/ai-chatbot-development-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">AI Chatbot Development</Link>
                <Link href="/ai-copilot-development-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">AI Copilot Development</Link>
                <Link href="/ai-consulting-development-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">AI Consulting</Link>
                <Link href="/genrative-ai-development-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">Generative AI</Link>
                <Link href="/ai-workflow-automation-development-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">AI Workflow Automation</Link>
              </div>
            </div>
          </li> */}

                    {/* AI & Automation Dropdown */}
                    <li className="group relative">
                        <Link
                            href="/ai-development-company"
                            className="hover:text-[#016CD3] inline-block py-5"
                        >
                            AI & Automation
                        </Link>

                        {/* Dropdown Panel */}
                        <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md w-[750px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                            <div className="flex">

                                {/* Left Vertical Label */}
                                <div className="bg-gray-100 w-16 flex items-center justify-center rounded-l-md">
                                    <h3 className="text-gray-400 font-semibold text-[18px] tracking-widest rotate-[-90deg] whitespace-nowrap">
                                        AI & AUTOMATION
                                    </h3>
                                </div>

                                {/* Right Links Section */}
                                <div className="p-8 grid grid-cols-2 gap-x-12 gap-y-5 flex-1">
                                    <Link href="/ai-development-service" className="hover:text-[#016CD3] transition">AI Development Services</Link>
                                    <Link href="/ai-calling-agent-development-company" className="hover:text-[#016CD3] transition">AI Calling Agent Development</Link>
                                    <Link href="/ai-chatbot-development-company" className="hover:text-[#016CD3] transition">AI Chatbot Development</Link>
                                    <Link href="/ai-copilot-development-company" className="hover:text-[#016CD3] transition">AI Copilot Development</Link>
                                    <Link href="/ai-consulting-development-company" className="hover:text-[#016CD3] transition">AI Consulting</Link>
                                    <Link href="/genrative-ai-development-company" className="hover:text-[#016CD3] transition">Generative AI</Link>
                                    <Link href="/ai-workflow-automation-development-company" className="hover:text-[#016CD3] transition">AI Workflow Automation</Link>
                                </div>
                            </div>
                        </div>
                    </li>



                    {/* Blockchain Dropdown */}
                    {/* <li className="group relative">
                        <Link href="/blockchain-development-service" className="hover:text-[#016CD3] inline-block py-5">
                            Blockchain Development
                        </Link>
                        <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md p-6 w-[600px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                            <h3 className="text-lg font-bold text-[#016CD3] mb-4 border-b pb-2">
                                Blockchain Services
                            </h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <Link href="/crypto-wallet-exchange-platform-development" className="block px-4 py-2 hover:bg-gray-100 rounded transition">Crypto Wallet & exchange platform</Link>
                                <Link href="/token-development" className="block px-4 py-2 hover:bg-gray-100 rounded transition">Token Development</Link>
                                <Link href="/defi-dex-development" className="block px-4 py-2 hover:bg-gray-100 rounded transition">defi dex Development</Link>
                                <Link href="/smart-contract-development" className="block px-4 py-2 hover:bg-gray-100 rounded transition">Smart contract Development</Link>
                                <Link href="/nft-marketplace-development" className="block px-4 py-2 hover:bg-gray-100 rounded transition">nft marketplace Development</Link>
                                <Link href="/blockchain-consulting-company" className="block px-4 py-2 hover:bg-gray-100 rounded transition">Blockchain Consulting</Link>
                            </div>
                        </div>
                    </li> */}

                    <li className="group relative">
                        <Link
                            href="/blockchain-development-service"
                            className="hover:text-[#016CD3] inline-block py-5"
                        >
                            Blockchain Development
                        </Link>

                        {/* Dropdown Panel */}
                        <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md w-[750px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                            <div className="flex">

                                {/* Left Vertical Label */}
                                <div className="bg-gray-100 w-16 flex items-center justify-center rounded-l-md">
                                    <h3 className="text-gray-400 font-semibold text-[18px] tracking-widest rotate-[-90deg] whitespace-nowrap">
                                        BLOCKCHAIN
                                    </h3>
                                </div>

                                {/* Right Content Section */}
                                <div className="p-8 flex-1">
                                    {/* <h3 className="text-lg font-bold text-[#016CD3] mb-6 border-b pb-2">
                                        Blockchain Services
                                    </h3> */}

                                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                                        <Link
                                            href="/crypto-wallet-exchange-platform-development"
                                            className="block hover:text-[#016CD3] transition"
                                        >
                                            Crypto Wallet & Exchange Platform
                                        </Link>

                                        <Link
                                            href="/token-development"
                                            className="block hover:text-[#016CD3] transition"
                                        >
                                            Token Development
                                        </Link>

                                        <Link
                                            href="/defi-dex-development"
                                            className="block hover:text-[#016CD3] transition"
                                        >
                                            DeFi DEX Development
                                        </Link>

                                        <Link
                                            href="/smart-contract-development"
                                            className="block hover:text-[#016CD3] transition"
                                        >
                                            Smart Contract Development
                                        </Link>

                                        <Link
                                            href="/nft-marketplace-development"
                                            className="block hover:text-[#016CD3] transition"
                                        >
                                            NFT Marketplace Development
                                        </Link>

                                        {/* Uncomment if needed */}
                                        {/* <Link
                                            href="/blockchain-consulting-company"
                                            className="block hover:text-[#016CD3] transition"
                                        >
                                            Blockchain Consulting
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li>
                        <Link href="/software-development-company" className="hover:text-[#016CD3] py-5 inline-block">
                            Software Development
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us" className="hover:text-[#016CD3] py-5 inline-block">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:text-[#016CD3] py-5 inline-block">
                            Portfolio
                        </Link>
                    </li>
                </ul>

                {/* Desktop Contact Button */}
                <div className="hidden lg:flex relative bg-[#016CD3] px-10 py-8 items-center justify-center clip-slant">
                    <Link
                        href="/contact-us"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#016CD3] font-semibold shadow-md hover:bg-gray-100 transition whitespace-nowrap"
                    >
                        CONTACT US{" "}
                        <Send size={16} className="group-hover:translate-x-3 transition-all duration-300 text-[#107EFF]" />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden cursor-pointer"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-[80vw] h-full bg-[#016CD3] text-white z-50 p-4 overflow-y-auto transition-transform transform translate-x-0">
                    <ul className="space-y-4 mt-0 uppercase">
                        {mobileMenuItems.map((item, idx) => (
                            <React.Fragment key={item.key}>
                                {item.subItems ? (
                                    <div>
                                        <div
                                            onClick={() =>
                                                item.key === "ai"
                                                    ? setAiMenuOpen(aiMenuOpen === item.key ? false : item.key)
                                                    : setBlockchainMenuOpen(
                                                        blockchainMenuOpen === item.key ? false : item.key
                                                    )
                                            }
                                            className="flex justify-between items-center cursor-pointer font-semibold"
                                        >
                                            <span>{item.label}</span>
                                            {(item.key === "ai" && aiMenuOpen === item.key) ||
                                                (item.key === "blockchain" && blockchainMenuOpen === item.key) ? (
                                                <ChevronUp size={20} />
                                            ) : (
                                                <ChevronDown size={20} />
                                            )}
                                        </div>

                                        {(aiMenuOpen === item.key || blockchainMenuOpen === item.key) && (
                                            <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                                                {item.subItems.map((sub) => (
                                                    <Link
                                                        key={sub.to}
                                                        href={sub.to}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="hover:text-blue-200 transition"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <li>
                                        <Link href={item.to} onClick={() => setMobileMenuOpen(false)}>
                                            {item.label}
                                        </Link>
                                    </li>
                                )}
                                {idx < mobileMenuItems.length - 1 && <hr className="text-white/40 pb-0" />}
                            </React.Fragment>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <div className="mt-10 space-y-3 text-sm">
                        <Link
                            href="/contact-us"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full text-center bg-transparent border-2 text-white rounded-md py-2 font-semibold"
                        >
                            CONTACT US
                        </Link>
                    </div>

                    {/* Privacy Mobile */}
                    <div className="flex flex-col gap-2 text-sm text-white mt-8">
                        <div className="flex items-center">
                            <button
                                onClick={() => setPrivacyOpen(!privacyOpen)}
                                className="flex-1 font-semibold text-left hover:text-blue-300 transition"
                                aria-label={privacyOpen ? "Close submenu" : "Open submenu"}
                            >
                                Privacy Policy
                            </button>
                            <button onClick={() => setPrivacyOpen(!privacyOpen)} className="ml-2 text-white">
                                {privacyOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>

                        {privacyOpen && (
                            <div className="flex flex-col pl-6 gap-3 mt-2">
                                <Link
                                    href="/term-conditions"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="hover:text-blue-300 transition py-2 pb-3 border-b border-white/20 font-medium"
                                >
                                    Terms and Conditions
                                </Link>
                                <Link
                                    href="/refund-policy"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="hover:text-blue-300 transition pb-2 font-medium"
                                >
                                    Refund Policy
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

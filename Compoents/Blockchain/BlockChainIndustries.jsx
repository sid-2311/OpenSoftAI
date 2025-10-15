"use client";

import { useState } from "react";
import Image from "next/image";

const BLOCKCHAIN_TABS = [
  {
    id: "Cryptocurrency",
    title: "Cryptocurrency",
    heading: "Cryptocurrency Solutions",
    text: `Secure crypto wallets, exchange platforms, and trading tools built for high performance and reliability. Enable seamless transactions and real-time tracking for users globally.`,
    img: "/images/cryptocurrency-digital-coins-bitcoin-ethereum-blockchain-concept.jpg",
    alt:"cryptocurrency digital coins bitcoin ethereum blockchain concept",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.656 1.343 3 3 3s3-1.344 3-3c0-1.657-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.414 1.414M17.657 17.657l1.414 1.414M2 12h2M20 12h2M4.93 19.07l1.414-1.414M17.657 6.343l1.414-1.414" />
      </svg>
    ),
  },
  {
    id: "DeFi",
    title: "DeFi",
    heading: "Decentralized Finance",
    text: `Build decentralized finance applications that allow lending, borrowing, and yield farming without intermediaries. Smart contracts secure every transaction and automate processes.`,
    img: "/images/defi-decentralized-finance-digital-technology-concept.webp",
    alt:"defi decentralized finance digital technology concept",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    id: "NFTs",
    title: "NFTs",
    heading: "NFT Platforms",
    text: `Create, trade, and manage NFTs with user-friendly platforms. Support secure minting, marketplace features, and wallet integrations for digital assets.`,
    img: "/images/nft-non-fungible-token-digital-network-concept.jpg",
    alt:"nft non fungible token digital network concept",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 4v12l-9 4-9-4V6l9-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12" />
      </svg>
    ),
  },
  {
    id: "Smart Contracts",
    title: "Smart Contracts",
    heading: "Smart Contract Development",
    text: `Deploy secure and efficient smart contracts on Ethereum, Solana, and other blockchains. Automate agreements, reduce intermediaries, and increase trust in transactions.`,
    img: "/images/blockchain-smart-contract-illustration.webp",
    alt:"blockchain smart contract illustration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: "Blockchain Enterprise",
    title: "Enterprise",
    heading: "Blockchain for Enterprise",
    text: `Integrate blockchain into enterprise systems for supply chain, data security, and identity management. Private, permissioned networks that scale for business needs.`,
    img: "/images/data-center-cloud-network-illustration.jpg",
    alt:"data center cloud network illustration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
];

export default function BlockchainIndustries() {
  const [active, setActive] = useState(BLOCKCHAIN_TABS[0].id);

  return (
    <section className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center" aria-labelledby="blockchain-industries-heading">
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2 id="blockchain-industries-heading" className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Blockchain Services OpenSoft AI is Excelling In
        </h2>
        <p className="text-gray-600">
          Discover our blockchain solutions transforming industries with decentralization and security.
        </p>
      </header>

      {/* Tabs Container */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Navigation */}
        <nav role="tablist" aria-label="Blockchain Industries" className="flex justify-start gap-6 mb-8 overflow-x-auto">
          {BLOCKCHAIN_TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${
                  isActive
                    ? "bg-[#15375F] text-white border-2 border-[#243B55] shadow-lg"
                    : "text-gray-300 hover:text-white border border-[#0B2542]"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">{tab.icon}</div>
                <span className="text-sm font-medium text-center">{tab.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Tab Panels */}
        {BLOCKCHAIN_TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <article
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={`${isActive ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Left: Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{tab.heading}</h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>
                </div>

                {/* Right: Image */}
                <div className="w-full flex justify-center md:justify-end">
                  <Image
                    src={tab.img}
                    alt={tab.alt}
                    width={480}
                    height={320}
                    className="w-full max-w-[480px] rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

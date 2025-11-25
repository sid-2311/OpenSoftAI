"use client";

import { TrendingUp, Gamepad2, Package, Shield } from "lucide-react";
import TestimonialsSection from "../ui/Testimonail";

export default function TestBlockChain() {
  const testimonials = [
    {
      icon: TrendingUp,
      image: "/images/testimonials/david-chen.jpg",
      alt: "David Chen - YieldMax Protocol",
      quote:
        "OpenSoftAI didn't just build our DeFi platform – they architected an entire financial ecosystem. Their deep understanding of tokenomics and security helped us launch with confidence. We've processed over $50M in transactions with zero security incidents, and our total value locked has grown to $100M in just six months.",
      name: "David Chen",
      title: "Founder & CEO",
      company: "YieldMax Protocol",
      stats: ["$50M+ Transactions", "Zero Security Incidents", "$100M TVL"],
    },
    {
      icon: Gamepad2,
      image: "/images/testimonials/maria-rodriguez.jpg",
      alt: "Maria Rodriguez - MetaGaming Studios",
      quote:
        "The NFT marketplace OpenSoftAI developed for our gaming platform has been phenomenal. The custom features they built for gaming NFTs, including dynamic metadata and cross-game compatibility, have given us a significant competitive advantage. Our daily transaction volume has increased 300% since launch.",
      name: "Maria Rodriguez",
      title: "CTO",
      company: "MetaGaming Studios",
      stats: ["300% Volume Increase", "Custom NFT Features", "Cross-Game Compatible"],
    },
    {
      icon: Package,
      image: "/images/testimonials/robert-kim.jpg",
      alt: "Robert Kim - Global Supply Solutions",
      quote:
        "Working with OpenSoftAI on our enterprise blockchain solution was exceptional. They navigated complex regulatory requirements while building a system that streamlined our supply chain operations. We've reduced verification time by 80% and saved millions in operational costs.",
      name: "Robert Kim",
      title: "VP of Technology",
      company: "Global Supply Solutions",
      stats: ["80% Time Reduction", "Millions Saved", "Full Compliance"],
    },
    {
      icon: Shield,
      image: "/images/testimonials/jennifer-walsh.jpg",
      alt: "Jennifer Walsh - InnovateToken",
      quote:
        "OpenSoftAI's smart contract development expertise saved our token launch. Their security audit caught critical vulnerabilities that could have cost us everything. The final contracts are bulletproof, and our token has maintained perfect security throughout multiple bull market cycles.",
      name: "Jennifer Walsh",
      title: "Co-founder",
      company: "InnovateToken",
      stats: ["Critical Issues Found", "Bulletproof Security", "Zero Exploits"],
    },
  ];

  return (
    <main>
      <TestimonialsSection
        title="What Our Clients Experience"
        testimonials={testimonials}
        darkMode={true}
      />
    </main>
  );
}

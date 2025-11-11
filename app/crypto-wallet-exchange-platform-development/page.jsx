import BusinessBenefits from "@/Compoents/BlockchainCryptoWallet/Businessbenifit";
import CryptoCapabilitiesSection from "@/Compoents/BlockchainCryptoWallet/capablites";
import CryptoCTA from "@/Compoents/BlockchainCryptoWallet/CTA";
import CryptoExpertiseSection from "@/Compoents/BlockchainCryptoWallet/ExpertseSection";
import BlockchainHero from "@/Compoents/BlockchainCryptoWallet/Hero";
import CryptoTrustSection from "@/Compoents/BlockchainCryptoWallet/intro";
import TestBlockChainCrypto from "@/Compoents/BlockchainCryptoWallet/Testimonial";
import WhyChooseUsSection from "@/Compoents/BlockchainCryptoWallet/Whychooseus";


export const metadata = {
  title: "Crypto Wallet & Exchange Platform Development Services | OpenSoftAI",
  description:
    "Get end-to-end crypto wallet and exchange platform development services from OpenSoftAI. Secure, scalable, multi-currency, and regulatory-compliant solutions for your blockchain business.",
  alternates: {
    canonical: "https://opensoftai.com/crypto-wallet-exchange-platform-development/",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function CryptoWallet(){
    return(
        <>
        <BlockchainHero/>
        <CryptoTrustSection/>
        <CryptoExpertiseSection/>
        <CryptoCapabilitiesSection/>\
        <BusinessBenefits/>
        <WhyChooseUsSection/>
        <TestBlockChainCrypto/>
        <CryptoCTA/>
        </>
    )
}
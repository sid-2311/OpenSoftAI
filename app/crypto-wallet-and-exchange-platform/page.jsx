import BusinessBenefits from "@/Compoents/BlockchainCryptoWallet/Businessbenifit";
import CryptoCapabilitiesSection from "@/Compoents/BlockchainCryptoWallet/capablites";
import CryptoCTA from "@/Compoents/BlockchainCryptoWallet/CTA";
import CryptoExpertiseSection from "@/Compoents/BlockchainCryptoWallet/ExpertseSection";
import BlockchainHero from "@/Compoents/BlockchainCryptoWallet/Hero";
import CryptoTrustSection from "@/Compoents/BlockchainCryptoWallet/intro";
import TestBlockChainCrypto from "@/Compoents/BlockchainCryptoWallet/Testimonial";
import WhyChooseUsSection from "@/Compoents/BlockchainCryptoWallet/Whychooseus";

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
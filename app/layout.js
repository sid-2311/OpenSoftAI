import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Compoents/Navbar";
import ScrollToTop from "@/Compoents/ScrollToTop";
import FloatingIcons from "@/Compoents/FloatingIcons";
import Footer from "@/Compoents/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leading AI Software & Automation Company in India | Opensoft AI",
  description: "Opensoft AI delivers innovative AI software development and automation solutions in India. Empower your business with intelligent, scalable technology systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-K8655BT2'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K8655BT2');
            `,
          }}
        />
        <link rel="icon" href="/images/opensoftai-logo.svg" type="image/png" />
        <link rel="canonical" herf= "https://opensoftai.com"/>

      </head>
      <link rel="icon" href="/opensoftai logo.svg" type="image/png"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8655BT2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ScrollToTop/>

        <Navbar/>
        <FloatingIcons/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

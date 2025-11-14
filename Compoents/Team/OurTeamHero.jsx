"use client";
import Image from "next/image";
import Link from "next/link";

export default function OurTeamHero({ data }) {
    const {
        title,
        highlight,
        description,
        buttonText,
        buttonUrl,
        image
    } = data;

    return (
        <section
            className="relative text-white py-10 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-[#0A1A3C] via-[#0F3BAA] to-[#3B82F6]"
        >
            {/* Soft Blue Glow */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/20 blur-[150px] -z-10"></div>

            <div className="max-w-6xl mx-auto text-center relative">
                
                {/* Heading */}
                <h2 className="absolute top-2 text-3xl md:text-6xl leading-tight mb-0 text-left z-10">
                    {title}
                    <br />
                    <span className="font-semibold text-white drop-shadow">
                        {highlight}
                    </span>
                </h2>

                {/* Image Card */}
                <div className="relative inline-block rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full pt-10">
                    <div className="relative w-full h-[250px] sm:h-[400px] md:h-[480px]">
                        <Image
                            src={image}
                            alt="Our Team"
                            fill
                            className="object-contain opacity-95 rounded-3xl"
                            priority
                        />
                    </div>
                </div>

                {/* Text + Button */}
                <div className="sm:absolute sm:bottom-0 sm:right-0 lg:right-10 w-full md:w-[50%] bg-black/30 backdrop-blur-md p-4 md:p-10 text-left rounded-2xl">
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                        {description}
                    </p>

                    <Link
                        href={buttonUrl}
                        className="inline-block px-6 py-3 bg-white text-[#0A1A3C] border border-white font-medium rounded-full 
                                   hover:bg-[#0F3BAA] hover:text-white hover:border-[#0F3BAA] transition duration-300"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Revolutionize Your Creative Process?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            The future of content creation is here, and it's powered by generative AI.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-12 border border-white/20">
          <p className="text-lg md:text-xl text-blue-50 mb-6 leading-relaxed">
            Companies that embrace these technologies today will have a significant competitive advantage 
            as the market evolves. The question isn't whether generative AI will transform your industry – 
            it's whether you'll be leading that transformation or catching up to competitors who got there first.
          </p>
          
          <div className="bg-blue-800/50 rounded-xl p-6 mb-6">
            <p className="text-base md:text-lg text-white leading-relaxed">
              At <span className="font-semibold text-blue-200">OpenSoftAI</span>, we've helped dozens of 
              companies successfully implement generative AI solutions that deliver measurable results. 
              From small startups looking to compete with larger competitors to enterprise organizations 
              scaling content operations globally, we build AI solutions that work.
            </p>
          </div>

          <p className="text-base md:text-lg text-blue-50 leading-relaxed">
            Whether you're looking to automate routine content creation, experiment with new creative formats, 
            or completely reimagine your content strategy, we're here to help you harness the power of generative AI.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link href="/contact-us" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
            Get Free Demo
          </Link>
          {/* <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-all duration-300 border-2 border-white/30 hover:border-white/50 w-full sm:w-auto">
            Download AI Content Guide
          </button> */}
          <Link href="/contact-us" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 border-2 border-white w-full sm:w-auto">
            Schedule Strategy Session
          </Link>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to see your content creation transform overnight?
          </h3>
          <p className="text-lg text-blue-700 mb-6 max-w-3xl mx-auto">
            Let's discuss how generative AI can revolutionize your creative processes and drive 
            unprecedented growth. Our AI specialists are standing by to show you what's possible.
          </p>
          {/* <div className="flex items-center justify-center gap-2 text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold text-lg">Contact us today to get started</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
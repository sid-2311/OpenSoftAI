export default function TokenDevelopmentSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Badge */}
      

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-center text-gray-900 mb-6 leading-tight">
          Why Token Development {" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Matters for Your Business
          </span>
        </h2>

        {/* Opening Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-md text-gray-700 text-center leading-relaxed">
            Let's be honest – the blockchain space moves fast, and if you're thinking about launching a token, you're probably wondering where to even start.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Left Column - Problem Statement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're building the next big DeFi platform, creating a loyalty program for your business, or tokenizing real-world assets, getting your token development right from day one isn't just important – it's everything.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We've seen too many projects struggle because they rushed their token development or cut corners on security.
            </p>
          </div>

          {/* Right Column - Solution */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14  bg-opacity-20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-7 h-7 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">The OpenSoft AI Difference</h3>
            <p className="text-blue-50 leading-relaxed mb-4">
              At OpenSoft AI, we've been in the trenches with crypto startups, fintech companies, and enterprises who needed more than just basic token creation.
            </p>
            <p className="text-blue-50 leading-relaxed">
              They needed partners who understand that a successful token isn't just about the code – it's about creating something that actually works for your business goals, complies with regulations, and can scale as you grow.
            </p>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Security</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built with enterprise-grade security from the ground up
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Regulatory Compliant</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Navigate complex regulations with confidence
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Scalable Solutions</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Designed to grow seamlessly with your business
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1">
            Start Your Token Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
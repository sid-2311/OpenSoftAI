import { CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Thank You | OpenSoftAI",
  description: "Your form has been successfully submitted.",
};

export default function ThankYouPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      
      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl p-10 rounded-3xl text-center max-w-lg border border-white/40 transform transition-all duration-300 hover:scale-[1.02]">
        
        {/* Floating sparkles */}
        <Sparkles className="absolute -top-3 -right-3 text-yellow-400 animate-pulse" size={28} />
        <Sparkles className="absolute -bottom-3 -left-3 text-yellow-400 animate-pulse" size={28} />

        {/* Animated Check Icon */}
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-green-500 mb-4 animate-bounce" />
        </div>

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text mb-3">
          Thank You!
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We truly appreciate you reaching out to <span className="font-semibold text-blue-600">OpenSoftAI</span>.
          <br />
          <span className="block mt-2">
            Your submission has been received successfully, and our team will get back to you shortly.
          </span>
        </p>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
          <p className="text-blue-700 text-md italic">
            “Great things start with a simple step —  
            <br />thank you for taking that step with us.” ✨
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-xl hover:scale-105 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

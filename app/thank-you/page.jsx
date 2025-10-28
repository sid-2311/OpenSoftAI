import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You | OpenSoftAI",
  description: "Your form has been successfully submitted.",
};

export default function ThankYouPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          Your form has been submitted successfully. Our team will contact you soon.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

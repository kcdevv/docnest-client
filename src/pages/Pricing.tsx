import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-16 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight">Our Pricing Plans</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Choose the plan that suits your needs and enjoy seamless file storage.
        </p>
      </header>

      {/* Pricing Grid */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="p-8 bg-white shadow-xl rounded-xl border border-gray-200 transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-700">Free</h3>
          <p className="mt-2 text-gray-700">Perfect for individuals getting started.</p>
          <div className="text-3xl font-bold text-gray-900 mt-6">₹0<span className="text-lg">/month</span></div>
          <ul className="mt-6 text-gray-700 space-y-2">
            <li>✅ 5GB Storage</li>
            <li>✅ Basic Support</li>
            <li>✅ Limited Sharing</li>
          </ul>
          <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-8 bg-white shadow-xl rounded-xl border-2 border-blue-600 transform scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700">Pro</h3>
          <p className="mt-2 text-gray-700">Great for professionals and small teams.</p>
          <div className="text-3xl font-bold text-gray-900 mt-6">₹499<span className="text-lg">/month</span></div>
          <ul className="mt-6 text-gray-700 space-y-2">
            <li>✅ 100GB Storage</li>
            <li>✅ Priority Support</li>
            <li>✅ Advanced Sharing</li>
          </ul>
          <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Choose Pro
          </button>
        </div>

        {/* Business Plan */}
        <div className="p-8 bg-white shadow-xl rounded-xl border border-gray-200 transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-700">Business</h3>
          <p className="mt-2 text-gray-700">Best for businesses needing unlimited storage.</p>
          <div className="text-3xl font-bold text-gray-900 mt-6">₹1999<span className="text-lg">/month</span></div>
          <ul className="mt-6 text-gray-700 space-y-2">
            <li>✅ Unlimited Storage</li>
            <li>✅ 24/7 Support</li>
            <li>✅ Team Collaboration</li>
          </ul>
          <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Go Business
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

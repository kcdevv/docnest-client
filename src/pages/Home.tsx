import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-32 px-6">
        <h2 className="text-5xl font-extrabold text-blue-800 tracking-tight">
          Store, Share, and Access Your Files Anytime
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Securely upload your files and access them from anywhere, on any device.
        </p>
        <Link to={"/signin"}><button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
          Try Now
        </button></Link>
      </header>

      {/* Features */}
      <section id="features" className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-800">🔒 Secure Storage</h3>
            <p className="mt-3 text-gray-700">Your files are encrypted and stored safely with multi-layer security.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-800">📤 Easy Sharing</h3>
            <p className="mt-3 text-gray-700">Share files instantly with secure links and permissions.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-800">🌍 Access Anywhere</h3>
            <p className="mt-3 text-gray-700">Use any device to access and manage your files on the go.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="p-10 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white shadow-xl rounded-xl border-2 border-blue-500 transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-800">Free</h3>
            <p className="mt-3 text-gray-700">5GB storage | No cost</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-xl border-2 border-green-500 transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-700">Pro</h3>
            <p className="mt-3 text-gray-700">100GB storage | $9.99/month</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-xl border-2 border-red-500 transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-red-700">Business</h3>
            <p className="mt-3 text-gray-700">Unlimited storage | $29.99/month</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

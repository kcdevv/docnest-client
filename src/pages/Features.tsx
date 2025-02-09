import React from "react";

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-16 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight">Our Features</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Experience seamless, secure, and easy file management with our powerful features.
        </p>
      </header>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800">🔒 Secure Storage</h3>
          <p className="mt-3 text-gray-700">Your files are encrypted and stored with advanced security.</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800">📤 Easy File Sharing</h3>
          <p className="mt-3 text-gray-700">Share files securely with custom access control.</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800">🌍 Access Anywhere</h3>
          <p className="mt-3 text-gray-700">Use any device to access your files anytime, anywhere.</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800">💾 Auto Backup</h3>
          <p className="mt-3 text-gray-700">Never lose your files with automatic backups.</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800">📁 Organized File Management</h3>
          <p className="mt-3 text-gray-700">Easily categorize and search for files.</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-xl transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800">🚀 Lightning Fast Uploads</h3>
          <p className="mt-3 text-gray-700">Upload large files within seconds.</p>
        </div>
      </section>
    </div>
  );
};

export default Features;

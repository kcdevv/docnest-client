import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600">📩 Get in Touch</h1>
        <p className="text-center text-gray-600 mt-2">
          Have any questions? Feel free to reach out.
        </p>

        {/* Contact Form */}
        <form className="mt-6 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-8 text-gray-600">
          <p>📞 Phone: +91 98765 43210</p>
          <p>📧 Email: support@yourwebsite.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

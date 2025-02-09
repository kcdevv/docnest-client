import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log("Signup Data:", userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-blue-600">Create an Account</h1>
        <p className="text-center text-gray-600 mt-2">Sign up to get started</p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input ref={nameRef} type="text" className="w-full  focus:outline-none p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input ref={emailRef} type="email" className="w-full p-3  focus:outline-none bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input ref={passwordRef} type="password" className="w-full  focus:outline-none p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition duration-300">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

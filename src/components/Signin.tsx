import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../ui/Input";

const SignIn: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log("Signin Data:", userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome Back</h1>
        <p className="text-center text-gray-600 mt-2">Sign in to continue</p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <Input placeholder="viratkohli" type="text" refV={emailRef} label="Email or User ID" />
          <Input placeholder="********" type="password" refV={passwordRef} label="Password" />

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition duration-300">
            Sign In
          </button>
        </form>

        <div className="text-center text-gray-600 mt-4">
          <a href="#" className="text-blue-600 font-semibold hover:underline">Forgot Password?</a>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

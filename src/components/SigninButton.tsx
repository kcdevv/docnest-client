import { SignInButton } from "@clerk/clerk-react";

const SignInBtn = () => {
  return (
    <SignInButton>
      <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Sign In
      </button>
    </SignInButton>
  );
};

export default SignInBtn;

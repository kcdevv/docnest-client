import { SignOutButton } from "@clerk/clerk-react";

const SignOutBtn = () => {
  return (
    <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
      <button className="px-2 py-1 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Sign Out
      </button>
    </SignOutButton>
  );
};

export default SignOutBtn;

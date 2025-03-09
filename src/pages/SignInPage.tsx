import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <SignIn
        appearance={{
          elements: {
            rootBox: "shadow-lg rounded-lg bg-white",
            submitButton: "bg-green-600 hover:bg-green-700 text-white",
          },
        }}
        afterSignInUrl={"/dashboard"}
      />
    </div>
  );
};

export default SignInPage;

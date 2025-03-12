import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <SignUp
        appearance={{
          elements: {
            rootBox: "shadow-lg rounded-lg bg-white",
            submitButton: "bg-green-600 hover:bg-green-700 text-white",
          },
        }}
        forceRedirectUrl={"/dashboard"}
      />
    </div>
  );
};

export default SignUpPage;

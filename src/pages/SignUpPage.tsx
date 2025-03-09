import { SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const registerUser = async () => {
      if (isSignedIn && user) {
        try {
          const response = await axios.post("http://localhost:4000/user/signup", {
            clerkId: user.id,
            fullName: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
          });

          console.log("User signed up:", user);
          if (response.status === 201) {
            console.log("New user registered!");
          } else {
            console.log("User already exists.");
          }
        } catch (error) {
          console.error("Error registering user:", error);
        }

        navigate("/dashboard");
      }
    };

    registerUser();
  }, [isSignedIn, user, navigate]);

  return (
    <div className="flex items-center justify-center mt-2">
      <SignUp
        appearance={{
          elements: {
            rootBox: "shadow-lg rounded-lg bg-white",
            submitButton: "bg-green-600 hover:bg-green-700 text-white",
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;

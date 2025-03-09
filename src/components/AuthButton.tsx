import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import SignOutBtn from "./SignoutBtn";

const AuthButton = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? (
        <SignOutBtn />
      ) : (
        <Link to="/signin" className="hover:text-blue-600">Sign In</Link>
      )}
    </>
  );
};

export default AuthButton;

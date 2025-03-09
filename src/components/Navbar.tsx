import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-blue-600">DocNest</h1>
      </Link>
      <div className="space-x-4">
        {isSignedIn && (
          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        )}
        <Link to="/features" className="hover:text-blue-600">
          Features
        </Link>
        <Link to="/pricing" className="hover:text-blue-600">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;

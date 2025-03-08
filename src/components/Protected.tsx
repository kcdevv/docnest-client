import { Outlet } from "react-router-dom";
import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";

const Protected = () => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <Outlet /> : <RedirectToSignIn />;
};

export default Protected;

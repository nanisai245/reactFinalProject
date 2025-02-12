import { Outlet } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router";

function DashboardRoot() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default DashboardRoot;

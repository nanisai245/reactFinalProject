import { Outlet } from "react-router";
import { useState } from "react";
import LandingPage from "../landingPageComponent/LandingPage";
import Home from "./Home";

function Root() {
  const [isPageActive, setIsPageActive] = useState(false);
  return (
    <>
      {isPageActive ? (
        <>
          <Home isPageActive={isPageActive} />
          <Outlet />
        </>
      ) : (
        <LandingPage pageStatus={setIsPageActive} />
      )}
    </>
  );
}

export default Root;

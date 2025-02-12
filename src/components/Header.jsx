import { Link } from "react-router";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header({ text }) {
  const { isSignedIn } = useUser();
  return (
    <header className="header">
      <div className="logo">
        <img src="/logoipsum-247.svg" width={70} height={70} />
        <h1>ResumeHub</h1>
      </div>

      {isSignedIn ? (
        <div className="nav-list">
          <Link to={`${text ? "/" : "/dashboard"}`}>
            <button className="nav-btn">{`${
              text ? "home" : "Dashboard"
            }`}</button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <div className="nav-list">
          <Link to="/auth/sign-in">
            <button className="nav-btn">Get Started</button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

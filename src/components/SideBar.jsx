import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

function SideBar() {
  return (
    <div>
      <Link
        to="/dashboard"
        style={{ display: "flex", gap: "10px", textDecoration: "none" }}
      >
        <ArrowLeft />
        <p>Dashboard</p>
      </Link>
    </div>
  );
}

export default SideBar;

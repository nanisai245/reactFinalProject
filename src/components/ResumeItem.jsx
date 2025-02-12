import { Link } from "react-router";

function ResumeItem({ user }) {
  return (
    <Link to={`resume/${user.id}/edit`}>
      <div>
        <p>{user.id}</p>
        <p>{user.projectTitle}</p>
      </div>
    </Link>
  );
}

export default ResumeItem;

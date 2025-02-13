import { Link } from "react-router";

function ResumeItem({ user }) {
  return (
    <Link to={`resume/${user.id}/edit`}>
      <div className="template-duup">
        <p>{user.projectTitle}</p>
      </div>
    </Link>
  );
}

export default ResumeItem;

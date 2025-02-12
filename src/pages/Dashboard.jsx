import AddResume from "../components/AddResume";
import { useState } from "react";
import ResumeItem from "../components/ResumeItem";
import Header from "../components/Header";

function Dashboard() {
  const storedUserData = JSON.parse(localStorage.getItem("users")) || [];

  const [getUsers, setGetUsers] = useState(storedUserData);

  function handleUserData(data) {
    setGetUsers(data);
    console.log(storedUserData);
  }

  console.log(getUsers);

  return (
    <div className="dashboard">
      <Header text={"home"} />
      <div className="my-templates">
        <h2>My Resume</h2>
        <p>Start Creating AI resume for your next Job role</p>
        <div>
          <div className="template-container">
            <AddResume getUser={handleUserData} />
            {getUsers?.map((user) => (
              <ResumeItem key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

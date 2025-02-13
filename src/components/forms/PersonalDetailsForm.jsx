import { useContext } from "react";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import { useParams } from "react-router";

function PersonalDetailsForm({ enableNext }) {
  const params = useParams();
  const id = params.resumeId;

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  function handleInputChange(e) {
    enableNext(true);
    const { name, value } = e.target;
    setResumeInfo((prev) => ({ ...prev, [name]: value }));
  }

  function onSave(e) {
    e.preventDefault();

    const getStoredTemplates = JSON.parse(localStorage.getItem("users")) || [];
    const currTemplate = getStoredTemplates.find(
      (template) => template.id === id
    );

    const otherTemplates = getStoredTemplates.filter(
      (template) => template.id !== id
    );

    console.log(otherTemplates);

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    for (let i in data) {
      currTemplate.resumeData[i] = data[i];
    }

    const updatedData = [...otherTemplates, currTemplate];
    console.log(updatedData);

    localStorage.setItem("users", JSON.stringify(updatedData));
    enableNext(false);
  }

  return (
    <div className="middle-section">
      <h2>Personal Detail</h2>
      <p>Get started with basic information</p>
      <form onSubmit={onSave} className="personal-form">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div className="name">
              <label>First Name</label>
              <input
                name="firstName"
                value={resumeInfo.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="name">
              <label>Last Name</label>
              <input
                name="lastName"
                value={resumeInfo.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="name">
            <label>Job Title</label>
            <input
              name="jobTitle"
              value={resumeInfo.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="name">
            <label>Address</label>
            <input
              name="address"
              value={resumeInfo.address}
              onChange={handleInputChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div className="name">
              <label>Phone</label>
              <input
                name="phone"
                value={resumeInfo.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="name">
              <label>Email</label>
              <input
                name="email"
                value={resumeInfo.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="save-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;

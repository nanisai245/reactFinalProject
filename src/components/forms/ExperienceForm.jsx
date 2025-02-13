import { useContext, useEffect, useState } from "react";
import RichTextEditor from "../../common/RichTextEditor";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import { DeleteIcon } from "lucide-react";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};

function ExperienceForm() {
  const [experienceList, setExperienceList] = useState([formField]);
  const [displayAddMore, setDisplayAddMore] = useState(false);
  const [closeExperience, setCloseExperience] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  function handleChange(index, e) {
    const { name, value } = e.target;
    const newExperienceList = experienceList.slice();
    newExperienceList[index][name] = value;

    setExperienceList(newExperienceList);
  }

  function handleRichTextEditor(e, index, text) {
    const { value } = e.target;
    const newEntries = experienceList.slice();
    newEntries[index][text] = value;
    setExperienceList(newEntries);
  }

  function addNewExperience() {
    setDisplayAddMore(false);
    setExperienceList([...experienceList, formField]);
    setCurrIndex((prev) => prev + 1);
    setCloseExperience(false);
  }

  function openExperience(index) {
    setCurrIndex(index);
    setCloseExperience(false);
    setDisplayAddMore(false);
  }

  function handleSave(e) {
    e.preventDefault();

    setCloseExperience(true);

    setDisplayAddMore(true);
  }

  function handleDelete(index) {
    console.log(index);
    const duplicateList = [...experienceList];
    duplicateList.splice(index, 1);
    setExperienceList(duplicateList);
  }

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
    console.log(experienceList);
  }, [experienceList]);

  return (
    <div className="middle-section">
      <div className="name">
        <h2>Experience</h2>
        <p>Add your previous job experience</p>
      </div>
      <div>
        {closeExperience && (
          <div className="experience-short">
            {experienceList.map((each, index) => (
              <div key={index} className="experience-delete">
                <h4 onClick={() => openExperience(index)}>{`Experience ${
                  index + 1
                }`}</h4>
                <DeleteIcon onClick={() => handleDelete(index)} />
              </div>
            ))}
          </div>
        )}
        {!closeExperience && (
          <div>
            <form onSubmit={handleSave}>
              <div className="name">
                <label>Position Title</label>
                <input
                  name="title"
                  onChange={(e) => handleChange(currIndex, e)}
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
                  <label>Company Name</label>
                  <input
                    name="companyName"
                    onChange={(e) => handleChange(currIndex, e)}
                  />
                </div>
                <div className="name">
                  <label>City</label>
                  <input
                    name="city"
                    onChange={(e) => handleChange(currIndex, e)}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <div className="name">
                  <label>Start date</label>
                  <input
                    name="startDate"
                    type="date"
                    onChange={(e) => handleChange(currIndex, e)}
                  />
                </div>
                <div className="name">
                  <label>End date</label>
                  <input
                    name="endDate"
                    type="date"
                    onChange={(e) => handleChange(currIndex, e)}
                  />
                </div>
              </div>

              <div>
                <RichTextEditor
                  index={currIndex}
                  onRichTextEditorChange={(e) =>
                    handleRichTextEditor(e, currIndex, "workSummery")
                  }
                />
              </div>
              <button onClick={handleSave} className="save-btn" type="submit">
                Save
              </button>
            </form>
          </div>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        {displayAddMore && (
          <button
            onClick={addNewExperience}
            style={{
              marginTop: "20px",
              borderRadius: "8px",
              padding: "5px 10px",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            + Add more experience
          </button>
        )}
      </div>
    </div>
  );
}

export default ExperienceForm;

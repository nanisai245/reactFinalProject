import { useContext, useEffect, useState } from "react";
import RichTextEditor from "../../common/RichTextEditor";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";

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
  }

  function removeExperience() {
    setExperienceList((prev) => prev.slice(0, -1));
  }

  function handleSave(e) {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData.entries());
    // console.log(data);

    setDisplayAddMore(true);
  }

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);

  return (
    <div>
      <div>
        <h2>Experience</h2>
        <p>Add your previous job experience</p>
      </div>
      <div>
        {experienceList.map((experience, index) => (
          <div key={index}>
            <form onSubmit={handleSave}>
              <div>
                <label>Position Title</label>
                <input name="title" onChange={(e) => handleChange(index, e)} />
              </div>
              <div>
                <label>Company Name</label>
                <input
                  name="companyName"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <label>City</label>
                <input name="city" onChange={(e) => handleChange(index, e)} />
              </div>
              <div>
                <label>Start date</label>
                <input
                  name="startDate"
                  type="date"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <label>End date</label>
                <input
                  name="endDate"
                  type="date"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <RichTextEditor
                  onRichTextEditorChange={(e) =>
                    handleRichTextEditor(e, index, "workSummery")
                  }
                />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        ))}
      </div>
      <div>
        <div>
          <button onClick={removeExperience}>- remove</button>
        </div>
        {displayAddMore && (
          <button onClick={addNewExperience}>+ Add more experience</button>
        )}
      </div>
    </div>
  );
}

export default ExperienceForm;

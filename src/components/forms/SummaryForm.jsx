import { useContext, useState } from "react";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import { chatSession } from "../../../service/AIModal";

function SummaryForm() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [aiList, setAilist] = useState(null);

  const PROMPT = `job title: ${resumeInfo.jobTitle}, depending on the job title, give me summary for resume in about 4 - 5 lines in JSON data with experience level and summary as keys
                  and experience values should be fresher , mid-level and experienced`;

  function handleChange(e) {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({ ...prev, [name]: value }));
  }

  async function generativeAI() {
    console.log(PROMPT);
    const result = await chatSession.sendMessage(PROMPT);
    setAilist(JSON.parse(result.response.text()));
    console.log(result.response.text());
  }

  function onSave(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Summary</h2>
      <p>Add Summary for your job title</p>

      <form onSubmit={onSave}>
        <div>
          <label>Add Summary</label>
          <button onClick={generativeAI}>Generate from AI</button>
        </div>
        <textarea
          defaultValue={resumeInfo.summary}
          name="summary"
          rows={5}
          cols={50}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <div>
        {aiList &&
          aiList.map((list, index) => (
            <div key={index}>
              <h3>{list["experience_level"]}</h3>
              <p>{list.summary}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SummaryForm;

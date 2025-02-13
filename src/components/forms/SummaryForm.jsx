import { useContext, useState } from "react";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import { chatSession } from "../../../service/AIModal";
import { Brain } from "lucide-react";

function SummaryForm() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const [aiList, setAilist] = useState(null);

  const PROMPT = `job title: ${resumeInfo.jobTitle}, depending on the job title, give me summary for resume in about 4 - 5 lines in JSON data with experience level and summary as keys
                  and experience values should be fresher , mid-level and experienced`;

  function handleChange(e) {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({ ...prev, [name]: value }));
  }

  async function generativeAI() {
    setLoading(true);
    const result = await chatSession.sendMessage(PROMPT);
    setLoading(false);
    setAilist(JSON.parse(result.response.text()));
  }

  function handleSelect(index) {
    console.log(index);

    if (aiList) {
      const selectedSummary = aiList[index];
      setResumeInfo((prev) => ({
        ...prev,
        summary: selectedSummary.summary,
      }));
    }
  }

  function onSave(e) {
    e.preventDefault();
  }

  return (
    <div className="middle-section">
      <h2>Summary</h2>
      <p>Add Summary for your job title</p>

      <form onSubmit={onSave} className="summary-form">
        <div className="summary-heading">
          <label>Add Summary</label>
          <button onClick={generativeAI}>
            <Brain /> Generate from AI
          </button>
        </div>
        <textarea
          defaultValue={resumeInfo.summary}
          name="summary"
          rows={5}
          cols={50}
          value={resumeInfo.summary}
          onChange={handleChange}
        />
        <div style={{ textAlign: "center" }}>
          <button className="save-btn" type="submit">
            Save
          </button>
        </div>
      </form>
      <div className="AI-result">
        {loading ? (
          <p>Loading....</p>
        ) : (
          aiList &&
          aiList.map((list, index) => (
            <div className="each-AI" key={index}>
              <div>
                <h3>{list["experience_level"]}</h3>
                <p>{list.summary}</p>
              </div>
              <button onClick={() => handleSelect(index)}>Select</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SummaryForm;

import { useContext, useState } from "react";
import { Brain } from "lucide-react";
import { toast } from "react-toastify";
import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnBulletList,
  BtnUnderline,
  BtnNumberedList,
  BtnLink,
} from "react-simple-wysiwyg";
import { ResumeInfoContext } from "../context/ResumeInfoContext";
import { chatSession } from "../../service/AIModal";

function RichTextEditor({ onRichTextEditorChange, index }) {
  const [value, setValue] = useState();

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const generateSummary = async (e) => {
    e.preventDefault();
    if (!resumeInfo.experience[index].title) {
      toast("Please add position title");
      return;
    }
    const PROMPT = `position title: ${resumeInfo.experience[index].title}, give me 5 - 7 bullet points of the title for my experience in resume, dont use any key value pairs, simply use array and text inside`;
    const result = await chatSession.sendMessage(PROMPT);
    const resp = result.response.text();
    console.log(resp);
    setValue(resp.replace("[", "").replace("]", ""));
  };

  return (
    <>
      <div className="summary-heading" style={{ marginBottom: "10px" }}>
        <label>Summary</label>
        <button onClick={generateSummary}>
          <Brain /> Generate from AI
        </button>
      </div>
      <EditorProvider>
        <Editor
          className="editor"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnBulletList />
            <BtnNumberedList />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </>
  );
}

export default RichTextEditor;

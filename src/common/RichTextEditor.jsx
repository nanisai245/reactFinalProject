import { useState } from "react";
import { Brain } from "lucide-react";
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

function RichTextEditor({ onRichTextEditorChange }) {
  const [value, setValue] = useState();
  return (
    <>
      <div>
        <label>Summary</label>
        <button>
          <Brain /> Generate from AI
        </button>
      </div>
      <EditorProvider>
        <Editor
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

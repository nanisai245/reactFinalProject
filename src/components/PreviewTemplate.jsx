import { useContext } from "react";
import { ResumeInfoContext } from "../context/ResumeInfoContext";

import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import Summary from "./preview/Summary";
import Experience from "./preview/Experience";
import Education from "./preview/Education";
import Skills from "./preview/Skills";

function PreviewTemplate() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="template-structure"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      <Summary resumeInfo={resumeInfo} />
      <Education resumeInfo={resumeInfo} />
      <Skills resumeInfo={resumeInfo} />
      <Experience resumeInfo={resumeInfo} />
    </div>
  );
}

export default PreviewTemplate;

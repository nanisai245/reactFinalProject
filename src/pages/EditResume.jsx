import { useEffect, useState } from "react";
import FormSection from "../components/FormSection";
import PreviewTemplate from "../components/PreviewTemplate";
import { ResumeInfoContext } from "../context/ResumeInfoContext";
import dummyData from "../dummyData";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";

function EditResume() {
  const [resumeInfo, setResumeInfo] = useState(dummyData);

  const params = useParams();
  const id = params.resumeId;

  useEffect(() => {
    const jsonData = JSON.parse(localStorage.getItem("users")) || [];

    const formData = jsonData.find((data) => data.id === id);

    setResumeInfo(formData.resumeData);
  }, [id]);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="template-section">
        <SideBar />
        <FormSection />
        <PreviewTemplate />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;

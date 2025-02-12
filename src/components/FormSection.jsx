import { useState } from "react";
import PersonalDetailsForm from "../components/forms/PersonalDetailsForm";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";
import { ArrowRight, LayoutGrid } from "lucide-react";

function FormSection() {
  const [currForm, setCurrForm] = useState(1);
  const [enableNext, setEnableNext] = useState(true);

  function handleClick(arg) {
    if (arg === "next") {
      setCurrForm((prev) => prev + 1);
    } else {
      setCurrForm((prev) => prev - 1);
    }
  }

  let presentForm = <PersonalDetailsForm enableNext={setEnableNext} />;

  switch (currForm) {
    case 2:
      presentForm = <SummaryForm />;
      break;
    case 3:
      presentForm = <ExperienceForm />;
      break;
    case 4:
      presentForm = <SkillsForm />;
      break;
    case 5:
      presentForm = <EducationForm />;
      break;
  }
  return (
    <div>
      <button>
        <LayoutGrid /> Theme
      </button>
      <div>
        {currForm > 1 && (
          <button onClick={() => handleClick("back")}>Back</button>
        )}
        <button
          onClick={() => handleClick("next")}
          disabled={currForm >= 5 || enableNext}
        >
          Next <ArrowRight />
        </button>
      </div>

      {presentForm}
    </div>
  );
}

export default FormSection;

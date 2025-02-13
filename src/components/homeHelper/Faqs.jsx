import { useState } from "react";
import { PlusIcon } from "lucide-react";

const faqsData = [
  {
    name: "What is ResumeHuB",
    content:
      "ResumeHuB is a resume builder that provides customizable templates and career tools, such as cover letters and job trackers, to help users create professional resumes and extend their professional reach.",
  },
  {
    name: "Is ResumeHuB really free?",
    content:
      "Yes, ResumeHuB offers a free resume builder where your first resume remains free forever, including all design features, with no hidden fees or watermarks. We have upgrades available if you need multiple resumes or want to use AI features to enhance your job search.",
  },
  {
    name: "Can I create different versions of my resume on ResumeHuB?",
    content:
      "Absolutely, ResumeHuB allows you to create multiple versions of your resume or cover letter with just one click, catering to different job applications.",
  },
  {
    name: "How can ResumeHuB be free?",
    content:
      "FlowCV is built by a tiny team of indie developers who design and develop everything ourselves. We keep costs low by being small and efficient, which allows us to offer the core features for free while sustaining development through premium upgrades.",
  },
];

function Faqs() {
  const [isClicked, setIsClicked] = useState({
    fields: Array(faqsData.length).fill(false),
  });

  function handleClick(index) {
    setIsClicked((prev) => {
      const newFields = [...prev.fields];
      const mapped = newFields.map((each, i) => {
        if (i === index) {
          return !each;
        } else {
          return false;
        }
      });

      return {
        fields: mapped,
      };
    });
  }

  return (
    <section className="faqs-section">
      <h1>Frequently asked questions</h1>
      <div className="faqs">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq">
            <div>
              <h1>{faq.name}</h1>
              <PlusIcon
                onClick={() => handleClick(index)}
                className={`${isClicked.fields[index] ? "rotate" : ""}`}
              />
            </div>
            <p className={`faq ${isClicked.fields[index] ? "active" : ""}`}>
              {faq.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;

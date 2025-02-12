function Experience({ resumeInfo }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "19px",
          marginBottom: "5px",
          color: resumeInfo?.themeColor,
        }}
      >
        Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} style={{ margin: "20px 0" }}>
          <h2 className="title" style={{ color: resumeInfo?.themeColor }}>
            {experience?.title}
          </h2>
          <h2 className="company">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span className="date">
              {experience?.startDate}{" "}
              {experience?.currentlyWorking ? "Present" : experience.endDate}
            </span>
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
            className="summary"
          />
        </div>
      ))}
    </div>
  );
}

export default Experience;

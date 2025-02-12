function Education({ resumeInfo }) {
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
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.education.map((education, index) => (
        <div key={index} style={{ margin: "20px 0" }}>
          <h2 className="title" style={{ color: resumeInfo?.themeColor }}>
            {education?.universityName}
          </h2>
          <h2 className="company">
            {education?.degree} in {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          {/* <p style={{ fontSize: "13px", margin: "10px 0", fontWeight: "500" }}>
            {education?.description}
          </p> */}
        </div>
      ))}
    </div>
  );
}

export default Education;

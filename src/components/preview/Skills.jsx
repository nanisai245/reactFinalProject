function Skills({ resumeInfo }) {
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
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="grid">
        {resumeInfo?.skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="skill">{skill.name}</h2>
            <div className="progress">
              <div
                style={{
                  height: "8px",
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating + "%",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

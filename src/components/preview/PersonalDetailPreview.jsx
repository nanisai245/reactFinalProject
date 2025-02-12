function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2
        style={{
          fontWeight: "500",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        style={{
          fontWeight: "500",
          textAlign: "center",
          fontSize: "16px",
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.address}
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2
          style={{
            fontWeight: "normal",
            fontSize: "13px",
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          style={{
            fontWeight: "normal",
            fontSize: "13px",
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr
        style={{
          border: "1.5px solid",
          margin: "15px 0",
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;

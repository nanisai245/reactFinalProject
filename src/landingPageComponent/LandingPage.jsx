import { useEffect, useRef, useState } from "react";
import { useIsPageActive } from "../context/IsPageActiveContext";

export default function LandingPage({ pageStatus }) {
  const imageUrls = [
    "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
    "https://marketplace.canva.com/EAFszEvkM50/2/0/1131w/canva-simple-professional-cv-resume-36p5VOFVDxY.jpg",
    "https://www.myperfectresume.com/wp-content/themes/myperfectresume/img/resume-templates/color-cat/defaults/free-resume-template-contemporarys.svg",
    "https://cdn.enhancv.com/images/1920/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy8xeVZiUldsdG10Z2tFMEZjMDlPVFBRZlQwQUswcmNIOW5Ldk9UNktPL2ltYWdlLnBuZw~~.png",
    "https://d.novoresume.com/images/doc/minimalist-resume-template.png",
    "https://resumegenius.com/wp-content/uploads/clean-resume-builder-template-yellow.png?w=650",
    "https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/dDhwNAW3mF-photo.png",
    "https://gdoc.io/uploads/University-Student-Resume-Template-web1-712x984.webp",
    "https://cdn-blog.novoresume.com/articles/student-resume-templates/Student-Basic-Resume-Template.png",
    "https://d.novoresume.com/images/doc/general-resume-template.png",
    "https://resumegenius.com/wp-content/uploads/Swiss-Google-Docs-Resume-Template-Hub.png",
    "https://resumecompanion.com/wp-content/uploads/2019/08/Technical-Resume-Template-Imperial-Gold.png",
    "https://i.pinimg.com/736x/e0/e7/3f/e0e73f4a66540958136ea8f853d3338e.jpg",
    "https://d1xn1bcogdo8ve.cloudfront.net/1981/image.png",
    "https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fuploadedfiles%2Fuploads%2F0f94791b-379e-4acc-9d91-98122e56caee-bold-attorney-resume-black-modern-simple-1-1.webp&w=1920&q=90",
    "https://beamjobs.wpenginepowered.com/wp-content/uploads/2023/01/academic-resume-template.png",
    "https://jofibo.com/images/templates/modern_resume_template_thumbnail.png",
    "https://www.my-resume-templates.com/wp-content/uploads/2023/10/simple-resume-template-221.jpg",
    "https://i.pinimg.com/736x/e0/e7/3f/e0e73f4a66540958136ea8f853d3338e.jpg",
    "https://resumegenius.com/wp-content/uploads/clean-resume-builder-template-yellow.png?w=650",
    "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
  ];

  const { setIsPageActive } = useIsPageActive();

  const [visibleImages, setVisibleImages] = useState(
    Array(imageUrls.length).fill(false)
  );
  const [decreaseOpacity, setDecreaseOpacity] = useState(false);

  const minimize = useRef();

  useEffect(() => {
    let timeouts = [];

    imageUrls.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleImages((prev) => {
          const newVisibleImages = [...prev];
          newVisibleImages[index] = true;
          return newVisibleImages;
        });
      }, Math.random() * 3000);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  setTimeout(() => {
    minimize.current.style.opacity = 1;
    minimize.current.style.bottom = "0px";
  }, 3000);

  setTimeout(() => {
    setTimeout(() => {
      setIsPageActive(true);
    }, 800);
    setDecreaseOpacity(true);
  }, 4500);

  return (
    <div
      className={`landing-container ${
        decreaseOpacity ? "animated-landing" : ""
      }`}
    >
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Resume ${index + 1}`}
          style={{ opacity: visibleImages[index] ? 0.7 : 0 }}
        />
      ))}
      <h1 className="landing-heading">
        ResumeHuB <span ref={minimize}>Stepping point towards success</span>
      </h1>
    </div>
  );
}

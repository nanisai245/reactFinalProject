// import { UserButton } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Reviews from "../components/homeHelper/Reviews";
import Faqs from "../components/homeHelper/Faqs";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useIsPageActive } from "../context/IsPageActiveContext";

const imageUrls = [
  // {
  //   id: 1,
  //   src: "https://resumegenius.com/wp-content/uploads/clean-resume-builder-template-yellow.png?w=650",
  // },
  {
    src: "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
  },
  {
    src: "https://marketplace.canva.com/EAFszEvkM50/2/0/1131w/canva-simple-professional-cv-resume-36p5VOFVDxY.jpg",
  },
  {
    src: "https://cdn.enhancv.com/images/1920/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy8xeVZiUldsdG10Z2tFMEZjMDlPVFBRZlQwQUswcmNIOW5Ldk9UNktPL2ltYWdlLnBuZw~~.png",
  },
  { src: "https://d.novoresume.com/images/doc/minimalist-resume-template.png" },
  {
    src: "https://resumegenius.com/wp-content/uploads/clean-resume-builder-template-yellow.png?w=650",
  },
  {
    src: "https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/dDhwNAW3mF-photo.png",
  },
  {
    src: "https://gdoc.io/uploads/University-Student-Resume-Template-web1-712x984.webp",
  },
  {
    src: "https://cdn-blog.novoresume.com/articles/student-resume-templates/Student-Basic-Resume-Template.png",
  },
  { src: "https://d.novoresume.com/images/doc/general-resume-template.png" },
  {
    src: "https://resumegenius.com/wp-content/uploads/Swiss-Google-Docs-Resume-Template-Hub.png",
  },
  {
    src: "https://resumecompanion.com/wp-content/uploads/2019/08/Technical-Resume-Template-Imperial-Gold.png",
  },
  {
    src: "https://i.pinimg.com/736x/e0/e7/3f/e0e73f4a66540958136ea8f853d3338e.jpg",
  },
  { src: "https://d1xn1bcogdo8ve.cloudfront.net/1981/image.png" },
  {
    src: "https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fuploadedfiles%2Fuploads%2F0f94791b-379e-4acc-9d91-98122e56caee-bold-attorney-resume-black-modern-simple-1-1.webp&w=1920&q=90",
  },
  {
    src: "https://beamjobs.wpenginepowered.com/wp-content/uploads/2023/01/academic-resume-template.png",
  },
  {
    src: "https://jofibo.com/images/templates/modern_resume_template_thumbnail.png",
  },
  {
    src: "https://www.my-resume-templates.com/wp-content/uploads/2023/10/simple-resume-template-221.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/e0/e7/3f/e0e73f4a66540958136ea8f853d3338e.jpg",
  },
  {
    src: "https://resumegenius.com/wp-content/uploads/clean-resume-builder-template-yellow.png?w=650",
  },
  // {
  //   id: 2,
  //   src: "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
  // },
];

const length = imageUrls.length;

function Home() {
  const [currSlide, setCurrSlide] = useState(0);
  const sliderRef = useRef(null);

  const { isPageActive } = useIsPageActive();

  useEffect(() => {
    // if (currSlide >= length) return;
    // const sliderElement = sliderRef.current;

    // if (sliderElement) {
    //   sliderElement.addEventListener("transitionend", () => {
    //     if (imageUrls[currSlide].id === 2) {
    //       sliderElement.style.transform = "none";
    //       setCurrSlide(length - currSlide);
    //       setTimeout(() => {
    //         sliderElement.style.transform = `transformX(${-100 * currSlide}%)`;
    //       });
    //     }
    //   });
    // }

    const sliderElement = sliderRef.current;

    if (sliderElement) {
      console.log(sliderElement);
      sliderElement.addEventListener("mousemove", (e) => {
        console.log(e.pageX);
      });
    }

    const interval = setInterval(() => {
      if (currSlide >= length - 1) {
        setCurrSlide(0);
      } else {
        setCurrSlide((prev) => prev + 1);
        // if (currSlide % 2 === 0) {
        //   const slicedElement = imageUrls.shift();
        //   imageUrls.push(slicedElement);
        // }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currSlide]);

  return (
    <div className={`home-container ${isPageActive ? "animate-home" : ""}`}>
      <Header />
      <main style={{ height: "max-content", width: "100%" }}>
        <section className="home-heading">
          <div className="side-container">
            <h1>Build a job-winning resume for free</h1>
            <p>
              Your first <b>resume</b> is 100% free, including all design
              features & unlimited downloads. Yes, really 🚀
            </p>
            <button>Get Started</button>
          </div>
          <div className="images-section">
            <img
              className="one"
              src="https://static.resumegiants.com/assets/templates/thumbnails/en/withPhoto/munich-736x1041.webp"
            />
            <img
              className="two"
              src="https://preview.redd.it/whats-the-best-type-of-resume-template-for-the-modern-day-v0-ks0pvr8k6vza1.jpg?width=726&format=pjpg&auto=webp&s=728870a354375289a4d739110176d25cee127c18"
            />
            <img
              className="three"
              src="https://www.jobhero.com/resources/wp-content/uploads/2023/07/tutor-template-resume-JH.svg"
            />
            <img
              className="four"
              src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7496/persistent-resource/brussels-resume-templates.jpg?v=1698831369"
            />
            {/* <img src="" />
            <img src="" /> */}
          </div>
        </section>
        <section className="details-section">
          <ul>
            <li className="first">
              standard fonts (Arial, Calibri, Times New Roman) to avoid parsing
              errors
            </li>
            <li>
              Avoided fancy layouts, tables, columns, and graphics that ATS
              might not read properly
            </li>
            <li>Provided PDF format for downloads</li>
          </ul>

          <img src="https://resumeworded.com/assets/images/resume-guides/full-stack-developer.png" />

          <ul>
            <li className="first">AI based keyword suggestions</li>
            <li>Added live editing</li>
            {/* <li></li> */}
          </ul>
        </section>
        <section className="work-section">
          <h2>How ResumeHuB works</h2>
          <div className="resume-work-section">
            <div>
              <div className="points">
                <h1>1. Add Content</h1>
                <p>
                  Build your resume — we'll guide you every step of the way to
                  ensure it's professional and polished.
                </p>
              </div>

              <img
                className="img-one"
                src="https://assets.flowcvassets.com/resume-landing/step1-content-1000.webp"
              />
            </div>
            <div>
              <div className="points">
                <h1>2. Design effortlessly</h1>
                <p>
                  Choose from over 50 templates and customize every detail to
                  suit your style and career.
                </p>
              </div>

              <img
                className="img-two"
                src="https://assets.flowcvassets.com/resume-landing/step2-design-1000.webp"
              />
            </div>
            <div>
              <div className="points">
                <h1>3. Download</h1>
                <p>Download your resume as a PDF </p>
              </div>

              <img
                className="img-three"
                src="https://assets.flowcvassets.com/resume-landing/step3-download-1000.webp"
              />
            </div>
          </div>
        </section>
        <section className="free-templates-section">
          <div className="slider-container">
            <h1>
              Explore our <b>Free Templates</b>
            </h1>
            <p>
              Our designers carefully designed each template for intriguing
              users
            </p>
          </div>
          <div className="slider">
            {imageUrls.map((img, i) => (
              <div
                ref={sliderRef}
                key={i}
                className="slide"
                style={{ transform: `translateX(-${currSlide * 106}%)` }}
              >
                <img src={img.src} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h1
            style={{
              fontSize: "30px",
              textAlign: "center",
              marginBottom: "5rem",
            }}
          >
            Our top customers
          </h1>
          <Reviews />
        </section>

        <Faqs />
        <footer>
          <div className="footer-logo">
            <img src="/logoipsum-247.svg" />
            <h3>ResumeHuB</h3>
          </div>
          <div className="icons">
            <Linkedin size={30} />
            <Twitter size={30} />
            <Github size={30} />
            <Instagram size={30} />
            <Facebook size={30} />
          </div>
          <p>&copy;2025 Innomatics final ReactJS project</p>
        </footer>
      </main>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";

export default function InitialHeader({
  appear,
  setAbout,
  setProjects,
  setResume,
}) {
  function projectsHandler() {
    setProjects("../media/photo/ProjectsUnderline.jpg");
    setResume("../media/photo/Resume.jpg");
    setAbout("../media/photo/About.jpg");
  }
  function resumeHandler() {
    setProjects("../media/photo/Projects.jpg");
    setResume("../media/photo/ResumeUnderline.jpg");
    setAbout("../media/photo/About.jpg");
  }
  function aboutHandler() {
    setProjects("../media/photo/Projects.jpg");
    setResume("../media/photo/Resume.jpg");
    setAbout("../media/photo/AboutUnderline.jpg");
  }
  return (
    <div className={"header-container-start " + (appear ? "appear" : "")}>
      <img
        src="../media/photo/banner.jpg"
        alt="banner"
        border="0"
        className={"banner-img-start " + (appear ? "appear" : "")}
      />
      <div className={"header " + (appear ? "appear" : "")}>
        <Link className="link" to="/projects" onClick={projectsHandler}>
          <img
            src="../media/photo/Projects.jpg"
            alt="Projects"
            className={"projects-img-start " + (appear ? "appear" : "")}
          />
        </Link>
        <Link className="link" to="/resume" onClick={resumeHandler}>
          <img
            src="../media/photo/Resume.jpg"
            alt="Resume"
            className={"resume-start " + (appear ? "appear" : "")}
          />
        </Link>
        <Link className="link" to="/about" onClick={aboutHandler}>
          <img
            src="../media/photo/About.jpg"
            alt="About"
            className={"about-start " + (appear ? "appear" : "")}
          />
        </Link>
      </div>
    </div>
  );
}

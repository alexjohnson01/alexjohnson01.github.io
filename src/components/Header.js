import { Link } from "react-router-dom";

export default function Header({
  projects,
  setProjects,
  resume,
  setResume,
  about,
  setAbout,
}) {
  //Functions
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
    <div className="header-container">
      <img
        src="../media/photo/banner.jpg"
        alt="banner"
        border="0"
        className="banner-img"
      />
      <div className="header-stay">
        <Link className="link" to="/projects" onClick={projectsHandler}>
          <img src={projects} alt="Projects" className="projects-img" />
        </Link>
        <Link className="link" to="/resume" onClick={resumeHandler}>
          <img src={resume} alt="Resume" className="resume" />
        </Link>
        <Link className="link" to="/about" onClick={aboutHandler}>
          <img src={about} alt="About" className="about" />
        </Link>
      </div>
    </div>
  );
}

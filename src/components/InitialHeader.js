import { Link } from "react-router-dom";

export default function InitialHeader({ appear }) {
  return (
    <div className={"header-container-start " + (appear ? "appear" : "")}>
      <img
        src="../media/photo/banner.jpg"
        alt="banner"
        border="0"
        className={"banner-img-start " + (appear ? "appear" : "")}
      />
      <div className={"header " + (appear ? "appear" : "")}>
        <Link className="link" to="/projects">
          <img
            src="../media/photo/Projects.jpg"
            alt="Projects"
            className={"projects-img-start " + (appear ? "appear" : "")}
          />
        </Link>
        <Link className="link" to="/resume">
          <img
            src="../media/photo/Resume.jpg"
            alt="Resume"
            className={"resume-start " + (appear ? "appear" : "")}
          />
        </Link>
        <Link className="link" to="/about">
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

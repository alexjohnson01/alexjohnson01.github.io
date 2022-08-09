import { Link } from "react-router-dom";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="header-container">
      <img
        src="../media/photo/banner.jpg"
        alt="banner"
        border="0"
        className="banner-img"
      />
      <div className="header-stay">
        <Link className="link" to="/projects">
          <img
            src={"../media/photo/Projects.jpg"}
            alt="Projects"
            className="projects-img"
          />
        </Link>
        <Link className="link" to="/resume" >
          <img
            src={"../media/photo/Resume.jpg"}
            alt="Resume"
            className="resume"
          />
        </Link>
        <Link className="link" to="/about">
          <img
            src={"../media/photo/About.jpg"}
            alt="About"
            className="about"
          />
        </Link>
      </div>
    </div>
  );
}

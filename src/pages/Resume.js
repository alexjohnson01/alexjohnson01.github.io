//Import Components
import Header from "../components/Header";
//Import Styles
import "../styles/app.css";

export default function Resume({
  projects,
  setProjects,
  resume,
  setResume,
  about,
  setAbout,
}) {
  return (
    <div className="main">
      <Header
        projects={projects}
        setProjects={setProjects}
        resume={resume}
        setResume={setResume}
        about={about}
        setAbout={setAbout}
      />
      <img className="resume-img" src="../media/photo/ResumePhoto.jpg" alt="" />
    </div>
  );
}

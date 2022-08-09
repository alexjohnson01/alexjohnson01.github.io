//Import Components
import Header from "../components/Header";
//Import Styles
import "../styles/app.css"

export default function Resume() {
  return (
    <div className="main">
      <Header />
      <img className="resume-img" src="../media/photo/ResumePhoto.jpg" alt="" />
    </div>
  );
}

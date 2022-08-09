//Import Components
import Header from "../components/Header";
//Import Styles
import "../styles/app.css";

export default function About() {
  return (
    <div className="main">
      <Header />
      <img className="aboutImage"src="../media/photo/AboutImage.jpg" alt="" />
    </div>
  );
}

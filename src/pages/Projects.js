//Import Components
import Header from "../components/Header";
import Project from "../components/Project";
//Import Styles
import "../styles/app.css";

export default function Projects({ currentPage, setCurrentPage }) {
  return (
    <div className="main">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="projects-container">
        <Project
          projectName="Skateflix"
          imageLink="../media/photo/Skateflix.jpg"
          liveLink="https://skateflix.life"
          gitLink="https://github.com/alexjohnson01/Skateflix"
        />
        <Project
          projectName="Music Player"
          imageLink="../media/photo/MusicPlayer.jpg"
          liveLink="https://effortless-eclair-7d969c.netlify.app/"
          gitLink="https://github.com/alexjohnson01/MusicPlayer_Netlify"
        />
      </div>
    </div>
  );
}

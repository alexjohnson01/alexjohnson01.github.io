//Import Components
import InitialHeader from "../components/InitialHeader";
import Overlay from "../components/Overlay";
//Import Styles
import "../styles/app.css"

export default function Home({appear, setAppear, slide, setSlide, setAbout, setProjects, setResume}) {
  return (
    <div>
      <div className={"home " + (appear ? "appear" : "")}>
        <InitialHeader appear={appear} setAbout={setAbout} setResume={setResume} setProjects={setProjects}/>
      </div>
      <Overlay slide={slide} setSlide={setSlide} setAppear={setAppear} />
    </div>
  );
}
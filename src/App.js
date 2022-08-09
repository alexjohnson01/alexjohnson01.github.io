//Import Styles
import "./styles/app.css";
//Import State
import { useState } from "react";
//Import Pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
//Import Router
import { Route, Routes } from "react-router";

function App() {
  //State
  const [slide, setSlide] = useState(false);
  const [appear, setAppear] = useState(false);
  const [projects, setProjects] = useState("../media/photo/Projects.jpg");
  const [resume, setResume] = useState("../media/photo/Resume.jpg");
  const [about, setAbout] = useState("../media/photo/About.jpg");
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              slide={slide}
              setSlide={setSlide}
              appear={appear}
              setAppear={setAppear}
              projects={projects}
              setProjects={setProjects}
              resume={resume}
              setResume={setResume}
              about={about}
              setAbout={setAbout}
            />
          }
        />
        <Route
          path="projects"
          element={
            <Projects
              appear={appear}
              projects={projects}
              setProjects={setProjects}
              resume={resume}
              setResume={setResume}
              about={about}
              setAbout={setAbout}
            />
          }
        />
        <Route
          path="resume"
          element={
            <Resume
              appear={appear}
              projects={projects}
              setProjects={setProjects}
              resume={resume}
              setResume={setResume}
              about={about}
              setAbout={setAbout}
            />
          }
        />
        <Route
          path="about"
          element={
            <About
              appear={appear}
              projects={projects}
              setProjects={setProjects}
              resume={resume}
              setResume={setResume}
              about={about}
              setAbout={setAbout}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

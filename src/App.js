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
  const [currentPage, setCurrentPage] = useState();
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
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="projects"
          element={
            <Projects
              appear={appear}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="resume"
          element={
            <Resume
              appear={appear}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="about"
          element={
            <About
              appear={appear}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

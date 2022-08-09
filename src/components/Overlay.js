export default function Overlay({ slide, setSlide, setAppear }) {
  //Functions
  const slideTrue = () => {
    setSlide(true);
    setAppear(true);
  };
  return (
    <div className={"overlay " + (slide ? "slide" : "")}>
      <a className="logo" href="https://ibb.co/QXM3Q35">
        <img
          src="https://i.ibb.co/0QrR2Rw/IMG-0413.jpg"
          alt="IMG-0413"
          border="0"
        />
      </a>
      <div className="job-title">
        <h1>Frontend / React Developer</h1>
      </div>
      <button className="enter-btn" onClick={slideTrue}>
        Enter
      </button>
    </div>
  );
}
export default function Project({ projectName, imageLink, gitLink, liveLink }) {
  return (
    <div className="project-container">
      <h2 className="projectTitle">{projectName}</h2>
      <img
        classname="project-image"
        border="0"
        src={imageLink}
        width="1000"
        alt=""
      ></img>
      <div className="buttons">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <button>live view</button>
        </a>
        <a href={gitLink} target="_blank" rel="noreferrer">
          <button>github</button>
        </a>
      </div>
    </div>
  );
}

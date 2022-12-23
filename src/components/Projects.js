import "animate.css";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <h2>Projects</h2>
      <div className="project-main">
        <div className="project-1">
          <div className="project-box" id="p-b1">
            <a href="https://github.com/shaurya019/MlGrate" taregt="_blank"><h2>Ml Grate</h2></a>
          </div>
          <div className="project-box" id="p-b2">
            <a href="https://github.com/shaurya019/CodingHats" taregt="_blank"><h2>Coding Hats</h2></a>
          </div>
          <div className="project-box" id="p-b3">
            <a href="https://github.com/shaurya019/CodeMet" taregt="_blank"><h2>CodMet 23</h2></a>
          </div>
        </div>
        <div className="project-2">
          <div className="project-box" id="p-b4">
            <a href="https://github.com/shaurya019/Crypto-Track-app" taregt="_blank"><h2>Crypto APP</h2></a>
          </div>
          <div className="project-box" id="p-b5">
            <a href="https://github.com/shaurya019" taregt="_blank"><h2>Other</h2> </a>
          </div>
        </div>
      </div>
    </section>
  );
};

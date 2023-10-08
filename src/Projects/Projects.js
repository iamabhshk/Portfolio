import SquadCode from "./SquadCode/SquadCode";
import Pixzzi from "./Pixzzi/Pixzzi";
import FilterPaper from "./FilterPaper/FilterPaper";
import Fortify from "./Fortify/Fortify";
import Number from "./Number/Number";
import "../Projects/Projects.css";

const Projects = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="projectsss" id="projects">
      <h1 className="projects-title">Projects</h1>
      <SquadCode />
      <FilterPaper />
      <Fortify />
      <Pixzzi />
      <Number />
    </div>
  );
};

export default Projects;

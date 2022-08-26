import Weatheroid from "./Weatheroid/Weatheroid";
import Covidstat from "./Covidstat/Covidstat";
import Crypto from "./Crypto/Crypto";
import Unblock from "./Unblock/Unblock";
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
      <Weatheroid />
      <Crypto />
      <Unblock />
      <Covidstat />
      <Number />
    </div>
  );
};

export default Projects;

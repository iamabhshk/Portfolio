import '../Projects/Projects.css';
import SquadCode from './SquadCode/SquadCode';
import Pixzzi from './Pixzzi/Pixzzi';
import FilterPaper from './FilterPaper/FilterPaper';
import Fortify from './Fortify/Fortify';
import Number from './Number/Number';

const Projects = () => {
  return (
    <section className="projectsss" id="projects">
      <h1 className="projects-title">Projects</h1>
      <SquadCode />
      <FilterPaper />
      <Fortify />
      <Pixzzi />
      <Number />
    </section>
  );
};

export default Projects;

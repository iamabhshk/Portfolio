import './SquadCode.css';
import ProjectImage from './Projectleftimage/Projectleftimage';
import ProjectContent from './Projectleftcontent/Projectleftcontent';

const SquadCode = () => {
  return (
    <article className="projects">
      <div className="projects-content-left">
        <ProjectImage />
        <ProjectContent />
      </div>
    </article>
  );
};

export default SquadCode;

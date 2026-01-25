import './Pixzzi.css';
import ProjectImage from './Projectrightimage/Projectrightimage';
import ProjectContent from './Projectrightcontent/Projectrightcontent';

const Pixzzi = () => {
  return (
    <article className="projects">
      <div className="projects-content-right">
        <ProjectImage />
        <ProjectContent />
      </div>
    </article>
  );
};

export default Pixzzi;

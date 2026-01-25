import './Projectrightcontent.css';

const ProjectContent = () => {
  const technologies = ['CSS', 'REACTJS', 'ReactJS Hooks', 'AXIOS', 'NPM'];
  const projectUrl = 'https://filterpaper.vercel.app/';

  return (
    <div className="projectss-right reveal fade-bottom">
      <h2 className="projectss-right-titles">Filter Paper</h2>
      <p className="projectss-right-paragraph">
        I created a user-friendly photo editing app that allows precise
        adjustments to contrast, brightness, hue, saturation, and more. It
        offers a seamless editing experience with a convenient download
        feature for effortless image saving and sharing. The app is designed
        to meet the demands of photo editing enthusiasts with
        professional-grade functionality and performance.
      </p>
      <div className="projectss-right-tech" role="list" aria-label="Technologies used">
        {technologies.map((tech, index) => (
          <span key={index} role="listitem">{tech}</span>
        ))}
      </div>
      <a 
        href={projectUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit Filter Paper project"
      >
        Click here
      </a>
    </div>
  );
};

export default ProjectContent;

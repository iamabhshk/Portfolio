import './Projectrightcontent.css';

const ProjectContent = () => {
  const technologies = ['REACTJS', 'CSS', 'AXIOS'];
  const projectUrl = 'https://pixzzi.vercel.app/';

  return (
    <div className="projectss-right reveal fade-bottom">
      <h2 className="projectss-right-titles">Pixzzi</h2>
      <p className="projectss-right-paragraph">
        Pixzzi is a user-friendly website with a diverse collection of
        high-quality images for free download. It offers advanced filtering
        and intelligent search options, making it easy for users to find and
        download images for their creative projects.
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
        aria-label="Visit Pixzzi project"
      >
        Click here
      </a>
    </div>
  );
};

export default ProjectContent;

import './Projectleftcontent.css';

const ProjectContent = () => {
  const technologies = ['HTML', 'CSS', 'JavaScript', 'SASS', 'NPM', 'DOM Manipulation'];
  const projectUrl = 'https://numberluck.netlify.app/';

  return (
    <div className="projectss-left reveal fade-bottom">
      <h2 className="projectss-left-titles">Number Guessing Game</h2>
      <p className="projectss-left-paragraph">
        A basic number guessing game which is made completely using pure
        JavaScript and specifically DOM manipulation. This was basically my first
        project using JavaScript when I first finished a course on JavaScript.
      </p>
      <div className="projectss-left-tech" role="list" aria-label="Technologies used">
        {technologies.map((tech, index) => (
          <span key={index} role="listitem">{tech}</span>
        ))}
      </div>
      <a 
        href={projectUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit Number Guessing Game project"
      >
        Click here
      </a>
    </div>
  );
};

export default ProjectContent;

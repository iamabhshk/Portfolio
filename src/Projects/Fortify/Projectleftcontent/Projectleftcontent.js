import './Projectleftcontent.css';

const ProjectContent = () => {
  const technologies = ['CSS', 'ReactJS', 'Firebase'];
  const projectUrl = 'https://forttify.vercel.app/';

  return (
    <div className="projectss-left reveal fade-bottom">
      <h2 className="projectss-left-titles">Fortify: The Chat App</h2>
      <p className="projectss-left-paragraph">
        I created a secure and privacy-focused chat application using React
        and Firebase technologies, prioritizing user data and interaction
        security. Leveraging Firebase's real-time database capabilities, the
        app enables seamless and synchronized communication between users.
        Additionally, Firebase's data synchronization features are implemented
        to provide real-time updates and notifications, enhancing the overall
        chat experience.
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
        aria-label="Visit Fortify project"
      >
        Click here
      </a>
    </div>
  );
};

export default ProjectContent;

import './Projectleftcontent.css';

const ProjectContent = () => {
  const technologies = ['ReactJS', 'NodeJS', 'Socket.io'];
  const projectUrl = 'https://squadcode.vercel.app/';

  return (
    <div className="projectss-left reveal fade-bottom">
      <h2 className="projectss-left-titles">SquadCode</h2>
      <p className="projectss-left-paragraph">
        I created a user-friendly coding interface with code highlighting and
        auto-indentation. I used socket.io for real-time data sync among
        users, enhancing collaboration. The app was built with React Hooks for
        efficiency. Additionally, I added a real-time chat feature for
        effective communication during coding collaboration.
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
        aria-label="Visit SquadCode project"
      >
        Click here
      </a>
    </div>
  );
};

export default ProjectContent;

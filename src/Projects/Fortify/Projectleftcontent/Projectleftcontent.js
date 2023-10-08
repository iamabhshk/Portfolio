import "./Projectleftcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-left reveal fade-bottom">
        <h1 className="projectss-left-titles">Fortify: The Chat App</h1>
        <span className="projectss-left-paragraph">
          I created a secure and privacy-focused chat application using React
          and Firebase technologies, prioritizing user data and interaction
          security. Leveraging Firebase's real-time database capabilities, the
          app enables seamless and synchronized communication between users.
          Additionally, Firebase's data synchronization features are implemented
          to provide real-time updates and notifications, enhancing the overall
          chat experience.
        </span>
        <span className="projectss-left-tech">
          <span>CSS</span>
          <span>ReactJS</span>
          <span>Firebase</span>
        </span>
        <a href="https://forttify.vercel.app/" target="_blank">
          Click here
        </a>
        {/* <div className="projectss-left-links">
          <a href="www.github.com">
            <img src={github} />
          </a>
          <a>
            <img src={github} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Projectcontent;

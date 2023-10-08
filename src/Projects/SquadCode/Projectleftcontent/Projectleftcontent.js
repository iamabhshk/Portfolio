import "./Projectleftcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-left reveal  fade-bottom ">
        <h1 className="projectss-left-titles">SquadCode</h1>
        <span className="projectss-left-paragraph">
          I created a user-friendly coding interface with code highlighting and
          auto-indentation. I used socket.io for real-time data sync among
          users, enhancing collaboration. The app was built with React Hooks for
          efficiency. Additionally, I added a real-time chat feature for
          effective communication during coding collaboration.
        </span>
        <span className="projectss-left-tech">
          <span>ReactJS</span>
          <span>NodeJS</span>
          <span>Socket.io</span>
        </span>
        <a href="https://squadcode.vercel.app/" target="_blank">
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

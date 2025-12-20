import "./Projectleftcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-left  reveal fade-bottom">
        <h1 className="projectss-left-titles">Number Guessing Game</h1>
        <span className="projectss-left-paragraph">
          A basic number quessing game which is made completley using pure
          JavaScript and specially DOM mainpulation. This was basically my first
          project using JavaScript when I first finished a course on JavaScript
        </span>
        <span className="projectss-left-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>SASS</span>
          <span>NPM</span>
          <span>DOM Mainpulation</span>
        </span>
        <a href="https://numberluck.netlify.app/" target="_blank">
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

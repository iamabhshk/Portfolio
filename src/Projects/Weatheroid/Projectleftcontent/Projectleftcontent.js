import "./Projectleftcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-left reveal  fade-bottom ">
        <h1 className="projectss-left-titles">Weatheroid</h1>
        <span className="projectss-left-paragraph">
          A simple webiste where you can find all the necessary weather details
          like wind speed, precipitation, cloud cover and many more of a
          particular city you search in a single page without going to multiple
          pages, also with a very clean and user-friendly UI.
        </span>
        <span className="projectss-left-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>SASS</span>
          <span>NPM</span>
        </span>
        <a href="https://weatheroid.netlify.app/" target="_blank">
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

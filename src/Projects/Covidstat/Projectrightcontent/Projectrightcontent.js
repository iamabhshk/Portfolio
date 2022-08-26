import "./Projectrightcontent.css";
// import github from "../../../img/SVG/";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-right  reveal fade-bottom">
        <h1 className="projectss-right-titles">Covid Tracker</h1>
        <span className="projectss-right-paragraph">
          Need to review covid details of a country? Check out this website to
          review all the necessary details you required
        </span>
        <span className="projectss-right-tech">
          <span>REACTJS</span>
          <span>CSS</span>
          <span>AXIOS</span>
        </span>
        <a href="https://covidinformationtracker.netlify.app/" target="_blank">
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

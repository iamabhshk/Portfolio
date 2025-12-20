import "./Projectrightcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-right reveal fade-bottom">
        <h1 className="projectss-right-titles">Filter Paper</h1>
        <span className="projectss-right-paragraph">
          I created a user-friendly photo editing app that allows precise
          adjustments to contrast, brightness, hue, saturation, and more. It
          offers a seamless editing experience with a convenient download
          feature for effortless image saving and sharing. The app is designed
          to meet the demands of photo editing enthusiasts with
          professional-grade functionality and performance.
        </span>
        <span className="projectss-right-tech">
          <span>CSS</span>
          <span>REACTJS</span>
          <span>ReactJS Hooks</span>
          <span>AXIOS</span>
          <span>NPM</span>
        </span>
        <a href="https://filterpaper.vercel.app/" target="_blank">
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

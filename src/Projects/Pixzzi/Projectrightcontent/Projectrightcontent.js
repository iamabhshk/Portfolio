import "./Projectrightcontent.css";
// import github from "../../../img/SVG/";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-right  reveal fade-bottom">
        <h1 className="projectss-right-titles">Pixzzi</h1>
        <span className="projectss-right-paragraph">
          Pixzzi is a user-friendly website with a diverse collection of
          high-quality images for free download. It offers advanced filtering
          and intelligent search options, making it easy for users to find and
          download images for their creative projects.
        </span>
        <span className="projectss-right-tech">
          <span>REACTJS</span>
          <span>CSS</span>
          <span>AXIOS</span>
        </span>
        <a href="https://pixzzi.vercel.app/" target="_blank">
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

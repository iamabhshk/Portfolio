import "./Projectleftcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-left  reveal fade-bottom">
        <h1 className="projectss-left-titles">Unblock Website UI Design</h1>
        <span className="projectss-left-paragraph">
          This website is made entirely using HTML/CSS along with SASS. I used
          various techniques like flexbox and Grid system to style the
          components. Its just a basic design website I made to practise myself
          to get my hands clean with HTML/CSS and SASS as preprocessor.
        </span>
        <span className="projectss-left-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>SASS</span>
          <span>NPM</span>
        </span>
        <a href="https://unblocksite.netlify.app/" target="_blank">
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

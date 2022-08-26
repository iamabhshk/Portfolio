import "./Projectrightcontent.css";
// import github from "/home/abhshk/Desktop/ReactJS/portfolio/src/img/SVG/github.svg";

const Projectcontent = () => {
  return (
    <div>
      <div className="projectss-right  reveal fade-bottom">
        <h1 className="projectss-right-titles">Cryotcurrency Reviewer</h1>
        <span className="projectss-right-paragraph">
          In this website you can review all the top 50 Cryptocurrencies
        </span>
        <span className="projectss-right-tech">
          <span>REACTJS</span>
          <span>CSS</span>
          <span>AXIOS</span>
        </span>
        <a href="https://cryptocurrencyland.netlify.app/" target="_blank">
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

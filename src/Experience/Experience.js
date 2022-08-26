import "../Experience/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="experience_title fade-left">Work Experience</h1>
      <div className="experience_main fade-bottom">
        <div className="experience_main-contents">
          <h1 className="experience_main-contents-title">pCloudy</h1>
          <div className="experience_main-contents-content">
            <span className="experience_main-contents-content-title">
              <h3>Frontend Developer Intern</h3>
              <h4>March, 2022 - July, 2022</h4>
            </span>
            <div className="experience_main-contents-content-work">
              <p className="experience_main-contents-content-work-para">
                Was assigned the task to modify the company's main website and
                other principle sites.
              </p>

              <p className="experience_main-contents-content-work-para">
                Had an amazing experience while working with the team. learned a
                lot of experience while working with Wordpress and responsive
                deign
              </p>
              <p className="experience_main-contents-content-work-para">
                Worked with HTML, CSS, SASS, JavaScript, Wordpress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

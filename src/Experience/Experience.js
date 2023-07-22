import "../Experience/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="experience_title fade-left">Work Experience</h1>
      <div className="experience_main fade-bottom">

        <div className="experience_main-contents">
            <h1 className="experience_main-contents-title">PWC</h1>
            <div className="experience_main-contents-content">
              <span className="experience_main-contents-content-title">
                <h3>Associate</h3>
                <h4>March, 2023 - Present</h4>
              </span>
              <div className="experience_main-contents-content-work">
                <p className="experience_main-contents-content-work-para">
                • I received Salesforce administration training and worked as a Salesforce Administrator on a Trimble project, responsible for managing and maintaining the Salesforce platform to support sales
                  processes and workflows.
                </p>
                <p className="experience_main-contents-content-work-para">
                • My responsibilities encompassed tasks such as user management, security settings, data management, customization, and reporting
                </p>
                <p className="experience_main-contents-content-work-para">
                • I successfully managed the Salesforce platform, utilizing my skills in JavaScript, Apex, HTML,
                  and CSS to support sales processes and workflows.
                </p>
              </div>
            </div>
        </div>

        <div className="experience_main-contents">
          <h1 className="experience_main-contents-title">pCloudy</h1>
          <div className="experience_main-contents-content">
            <span className="experience_main-contents-content-title">
              <h3>Frontend Developer Intern</h3>
              <h4>March, 2022 - July, 2022</h4>
            </span>
            <div className="experience_main-contents-content-work">
              <p className="experience_main-contents-content-work-para">
              • Managed a website improvement project, enhancing UI and end-to-end service processes.
              </p>
              <p className="experience_main-contents-content-work-para">
              • Successfully restructured the website, resulting in a significant 55% improvement in UI and website interaction.
              </p>
              <p className="experience_main-contents-content-work-para">
              • Utilized expertise in HTML, CSS, SASS, JavaScript, and WordPress to drive the project’s implementation and achieve desired outcomes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;

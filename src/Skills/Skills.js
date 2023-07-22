import { useEffect, useRef} from "react";
import "../Skills/Skills.css";

const Skills = () => {
  const shoudLog = useRef(true);

  useEffect(() => {
    if (shoudLog.current) {
      shoudLog.current = false;
      const myTags = [
        "JavaScript",
        "CSS",
        "SASS",
        "ES6",
        "Bootstrap",
        "HTML",
        "React",
        "GIT",
        "NPM",
        "JSON",
        "REST",
        "NODE",
        "Express",
      ];
      let tags = 0;
      if (window.innerWidth < 400) {
        tags = 130;
      } else if (window.innerWidth > 1000) {
        tags = 250;
      } else {
        tags = 180;
      }
      console.log(tags);

      const TagCloud = require("TagCloud");
      const container = ".content";

      TagCloud(container, myTags, {
        radius: tags,
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
        keep: true,
      });
      document.querySelector(".content").style.color = "#00ffff";
    }
  }, []);

  return (
    <div className="skillsset" id="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills reveal fade-bottom">
        <div className="skills-left">
          <div className="skills-para fade-bottom">
            <p>
            Front-End Development: Proficient in creating responsive and user-friendly web applications using HTML, CSS (including SASS), and JavaScript (with TypeScript) with a focus on ReactJS, leveraging the NPm package management system.
            </p>
            <p>
            Backend Development: Experienced in developing server-side applications with Node.js and Express, utilizing RESTful APIs to facilitate seamless communication between the front-end and backend components.
            </p>
            
            <p>
            For a comprehensive overview of my work and additional projects, please refer to my LinkedIn profile and GitHub repository.
            </p>
          </div>
        </div>

        <span className="content reveal fade-bottom">
          <script
            width="0"
            src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"
          ></script>
        </span>
      </div>
    </div>
  );
};

export default Skills;

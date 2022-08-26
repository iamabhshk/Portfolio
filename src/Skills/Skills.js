import { useEffect, useRef, useState } from "react";
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
        "TypeScript",
        "ES6",
        "Bootstrap",
        "HTML",
        "C++",
        "React",
        "Python",
        "GIT",
        "Figma",
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
            <p>My main area of expertise is Front-End Development</p>
            <p>
              I have worked on many projects which are mentioned below to
              practice my skills. I started from making clones of popluar
              websites like shazam, spotify then followed by my very own weather
              website, covid tracking website and finally a cryptocurrency
              analyzer and many more to practice HTML, CSS (with SASS),
              JavaScript(TypeScript) with ReactJS powered with NPm package
              mangement system.
            </p>
            <p>
              {" "}
              For all the projects I used figma to design the UI of the website
            </p>
            <p>
              You may visit my Linkedin for more information and my projects at
              Github
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

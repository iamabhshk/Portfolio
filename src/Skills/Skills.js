import '../Skills/Skills.css';
import { useTagCloud } from '../hooks/useTagCloud';
import { SKILLS } from '../constants';

const Skills = () => {
  const tagCloudRef = useTagCloud(SKILLS);

  return (
    <section className="skillsset" id="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills reveal fade-bottom">
        <div className="skills-left">
          <div className="skills-para fade-bottom">
            <p>
              Front-End Development: Proficient in creating responsive and user-friendly web 
              applications using HTML, CSS (including SASS), and JavaScript (with TypeScript) 
              with a focus on ReactJS, leveraging the NPM package management system.
            </p>
            <p>
              Backend Development: Experienced in developing server-side applications with 
              Node.js and Express, utilizing RESTful APIs to facilitate seamless communication 
              between the front-end and backend components.
            </p>
            <p>
              For a comprehensive overview of my work and additional projects, please refer 
              to my LinkedIn profile and GitHub repository.
            </p>
          </div>
        </div>

        <div ref={tagCloudRef} className="content reveal fade-bottom" aria-label="Skills tag cloud" />
      </div>
    </section>
  );
};

export default Skills;

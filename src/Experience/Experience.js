import '../Experience/Experience.css';

const EXPERIENCE_DATA = [
  {
    company: 'PWC',
    position: 'Associate',
    period: 'March, 2023 - Present',
    responsibilities: [
      'I received Salesforce administration training and worked as a Salesforce Administrator on a Trimble project, responsible for managing and maintaining the Salesforce platform to support sales processes and workflows.',
      'My responsibilities encompassed tasks such as user management, security settings, data management, customization, and reporting',
      'I successfully managed the Salesforce platform, utilizing my skills in JavaScript, Apex, HTML, and CSS to support sales processes and workflows.',
    ],
  },
  {
    company: 'pCloudy',
    position: 'Frontend Developer Intern',
    period: 'March, 2022 - July, 2022',
    responsibilities: [
      'Managed a website improvement project, enhancing UI and end-to-end service processes.',
      'Successfully restructured the website, resulting in a significant 55% improvement in UI and website interaction.',
      'Utilized expertise in HTML, CSS, SASS, JavaScript, and WordPress to drive the project\'s implementation and achieve desired outcomes.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h1 className="experience_title fade-left">Work Experience</h1>
      <div className="experience_main fade-bottom">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="experience_main-contents">
            <h2 className="experience_main-contents-title">{exp.company}</h2>
            <div className="experience_main-contents-content">
              <div className="experience_main-contents-content-title">
                <h3>{exp.position}</h3>
                <h4>{exp.period}</h4>
              </div>
              <ul className="experience_main-contents-content-work">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="experience_main-contents-content-work-para">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

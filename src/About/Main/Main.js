import education from "../../img/edu.png";
import acting from "../../img/acting.png";
import person from "../../img/person.png";
import google from "../../img/embed (1).svg";
import sic from "../../img/embed.svg";
import "../Main/Main.css";

const Main = () => {
  return (
    <div className="main ">
      <div className="main-textArea reveal fade-right">
        <p className="main-textArea-para2">
        I am a Frontend Developer continuously looking to learn new things. I am outgoing, dedicated, and open-minded. Currently, I'm an Associate at PwC Acceleration Centers in India, where I focus on accelerating innovation by leveraging Salesforce technology. Prior to this, I completed an internship at pCloudy, where I managed a website improvisation project to improve the UI and end-to-end service processes. In that role, I restructured the website and improved the UI/website interaction by 55%. I collaborate with cross-functional teams to build responsive and scalable web applications using frameworks like ReactJS. I stay up-to-date with the latest trends and best practices in web development by attending conferences and online courses.
        </p>
      </div>

      <div className="main-activity reveal fade-right">
        <div className="main-activity-btech">
          <h3 className="main-activity-btech-education">Education</h3>
          <div className="main-activity-btech-infoArea">
            <img
              src={education}
              alt=""
              className="main-activity-btech-infoArea-image"
            />
            <div className="main-activity-btech-infoArea-college">
              <p className="main-activity-btech-infoArea-college-para1">
                B.Tech in Computer Science, 2023
              </p>
              <p className="main-activity-btech-infoArea-college-para2">
                GITAM University
              </p>
            </div>
          </div>
        </div>

        <div className="main-activity-btech">
          <h3 className="main-activity-btech-education">Roles</h3>
          <div className="main-activity-btech-infoArea">
            <img
              src={acting}
              alt=""
              className="main-activity-btech-infoArea-image"
            />
            <div className="main-activity-btech-infoArea-college">
              <p className="main-activity-btech-infoArea-college-para1">
                President
              </p>
              <p className="main-activity-btech-infoArea-college-para2">
                Faces Theatre Club
              </p>
            </div>
          </div>
          <div className="main-activity-btech-infoArea">
            <img
              src={person}
              alt=""
              className="main-activity-btech-infoArea-image"
            />
            <div className="main-activity-btech-infoArea-college">
              <p className="main-activity-btech-infoArea-college-para1">
                Head of Operations
              </p>
              <p className="main-activity-btech-infoArea-college-para2">
                Association for Computing Machinery(ACM)
              </p>
            </div>
          </div>
          <div className="main-activity-btech-infoArea">
            <img
              src={google}
              alt=""
              className="main-activity-btech-infoArea-image"
            />
            <div className="main-activity-btech-infoArea-college">
              <p className="main-activity-btech-infoArea-college-para1">
                Frontend Developer
              </p>
              <p className="main-activity-btech-infoArea-college-para2">
                Google developer students Club(GDSC)
              </p>
            </div>
          </div>
          <div className="main-activity-btech-infoArea">
            <img
              src={sic}
              alt=""
              className="main-activity-btech-infoArea-image"
            />
            <div className="main-activity-btech-infoArea-college">
              <p className="main-activity-btech-infoArea-college-para1">
                Technical Team(Frontend Developer)
              </p>
              <p className="main-activity-btech-infoArea-college-para2">
                Summer Internship Club
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

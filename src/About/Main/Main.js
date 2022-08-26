import education from "../../img/edu.png";
import acting from "../../img/acting.png";
import person from "../../img/person.png";
import mike from "../../img/mike.png";
import google from "../../img/embed (1).svg";
import sic from "../../img/embed.svg";
import "../Main/Main.css";

const Main = () => {
  return (
    <div className="main ">
      <div className="main-textArea reveal fade-right">
        <p className="main-textArea-para2">
          I am a Bachelor’s student in the Department of Computer Science at the
          GITAM University in Vizag graduating in June 2023. I am an aspiring
          frontend developer and a UI/UX designer continuously looking to learn
          new things. I am outgoing, dedicated and open-minded. I get across to
          people and adjust to changes with ease. I believe that people should
          work on developing their professional skills and learning new things
          all the time. Currently, I am looking for a job to enhance my existing
          skills and get my hands in the real tech world and try out the skills
          which I developed since I got exposed to the tech world
        </p>

        <p className="main-textArea-para3">
          I have been part of the Drama club, 'FACES' the fine arts club of
          GITAM University. I am also part of a technical club, ACM and
          moreover, a frontend developer for the Summer Internship club(SIC) I
          am also a photographer and an actor by hobby and I have represented my
          college in various competitions in theatre. I love playing cricket and
          watching football and anime.
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
              src={mike}
              alt=""
              className="main-activity-btech-infoArea-image"
            />
            <div className="main-activity-btech-infoArea-college">
              <p className="main-activity-btech-infoArea-college-para1">
                Talk Show host, ChaiChats
              </p>
              <p className="main-activity-btech-infoArea-college-para2">
                Entrepreneurship-Club
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
                Public Relations Mentor
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

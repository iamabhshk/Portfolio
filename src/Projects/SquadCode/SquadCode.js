import Projectimage from "./Projectleftimage/Projectleftimage";
import Projectcontent from "./Projectleftcontent/Projectleftcontent";
import "./SquadCode.css";

const SquadCode = () => {
  return (
    <div className="projects ">
      <div className="projects-content-left">
        <Projectimage />
        <Projectcontent />
      </div>
    </div>
  );
};

export default SquadCode;

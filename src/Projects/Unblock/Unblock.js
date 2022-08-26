import Projectimage from "./Projectleftimage/Projectleftimage";
import Projectcontent from "./Projectleftcontent/Projectleftcontent";
import "./Unblock.css";

const Unblock = () => {
  return (
    <div className="projects">
      <div className="projects-content-left">
        <Projectimage />
        <Projectcontent />
      </div>
    </div>
  );
};

export default Unblock;

import Projectimage from "./Projectleftimage/Projectleftimage";
import Projectcontent from "./Projectleftcontent/Projectleftcontent";
import "./Fortify.css";

const Fortify = () => {
  return (
    <div className="projects">
      <div className="projects-content-left">
        <Projectimage />
        <Projectcontent />
      </div>
    </div>
  );
};

export default Fortify;

import Projectimage from "./Projectleftimage/Projectleftimage";
import Projectcontent from "./Projectleftcontent/Projectleftcontent";
import "./Number.css";

const Number = () => {
  return (
    <div className="projects">
      <div className="projects-content-left">
        <Projectimage />
        <Projectcontent />
      </div>
    </div>
  );
};

export default Number;

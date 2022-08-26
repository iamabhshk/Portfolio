import Projectimage from "./Projectleftimage/Projectleftimage";
import Projectcontent from "./Projectleftcontent/Projectleftcontent";
import "./Weatheroid.css";

const Weatheroid = () => {
  return (
    <div className="projects ">
      <div className="projects-content-left">
        <Projectimage />
        <Projectcontent />
      </div>
    </div>
  );
};

export default Weatheroid;

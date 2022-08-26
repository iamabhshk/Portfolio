// import Picture from "../Projects/Picture/Picture";
import Projectimage from "./Projectrightimage/Projectrightimage";
import Projectcontent from "./Projectrightcontent/Projectrightcontent";
import "./Crypto.css";

const Crypto = () => {
  return (
    <div className="projects">
      <div className="projects-content-right">
        <Projectimage />
        <Projectcontent />
      </div>
    </div>
  );
};

export default Crypto;

import about from '../../img/ppp.jpeg';
import '../Image/Image.css';

const Image = () => {
  return (
    <div className="about">
      <h1 className="about-me reveal fade-bottom">ABOUT ME</h1>
      <img 
        src={about} 
        alt="Abhishek Srinivasan profile photo" 
        className="about-image reveal fade-bottom" 
      />
    </div>
  );
};

export default Image;

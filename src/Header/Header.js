import logo from "../img/Logo.png";
import resume from "../img/Abhishek's Resume.pdf";
import "../Header/Header.css";

const Header = () => {
  return (
    <header class="header">
      <a href="#home" className="header-logo">
        <img src={logo} alt="" className="header-logo-img" />
      </a>

      <div className="header-navigation">
        <a className="header-navigation-link" href="#home">
          Home
        </a>
        <a className="header-navigation-link" href="#skills">
          Skills
        </a>
        <a className="header-navigation-link" href="#projects">
          Projects
        </a>
        <a
          className="header-navigation-link"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a className="header-navigation-link" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;

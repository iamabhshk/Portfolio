import '../Footer/Footer.css';
import logo from '../img/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <img src={logo} alt="Abhishek Srinivasan Logo" className="footer-image" />
      <p className="footer-credit">
        Made by Abhishek Srinivasan for his portfolio
        <br />
        <span className="footer-credits">Copyright © {currentYear} by</span>
        <span className="footer-credit-name"> Abhishek Srinivasan</span>
        <br />
        You are 100% allowed to use this Website design for personal use, but do
        not claim to be your own design. A credit to the original author,
        <span className="footer-credit-name"> Abhishek Srinivasan</span>, is of
        course highly appreciated.
      </p>
    </footer>
  );
};

export default Footer;

import "../Footer/Footer.css";
import logo from "../img/Logo.png";

const Footer = () => {
  return (
    <footer class="footer">
      <img src={logo} alt="" class="footer-image" />
      <p class="footer-credit">
        Made by Abhishek Srinivasan for his portfolio
        <br />
        <span class="footer-credits">Copyright © by</span>
        <span class="footer-credit-name"> Abhishek Srinivasan</span>
        <br />
        You are 100% allowed to use this Website design for personal use, but do
        not claim to be your own design. A credit to the original author,
        <span class="footer-credit-name"> Abhishek Srinivasan</span>, is of
        course highly appreciated.
      </p>
    </footer>
  );
};

export default Footer;

import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div class="fifthPage " id="contact">
      <h1 class="fifthPage-touch reveal fade-bottom">GET IN TOUCH</h1>
      <div class="fifthPage-text reveal fade-bottom">
        Thank you for visiting my website
      </div>
      <div class="fifthPage-para reveal fade-bottom">
        Want to hire me?, Got a question? Click below to send a mail :)
      </div>
      <a
        className="btn fifthPage-link reveal fade-bottom"
        href="mailto:abhisheksrinivasan5@gmail.com"
      >
        Mail me
      </a>
    </div>
  );
};

export default Contact;

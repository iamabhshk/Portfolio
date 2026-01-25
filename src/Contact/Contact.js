import '../Contact/Contact.css';
import { CONTACT_EMAIL } from '../constants';

const Contact = () => {
  return (
    <section className="fifthPage" id="contact">
      <h1 className="fifthPage-touch reveal fade-bottom">GET IN TOUCH</h1>
      <p className="fifthPage-text reveal fade-bottom">
        Thank you for visiting my website
      </p>
      <p className="fifthPage-para reveal fade-bottom">
        Want to hire me? Got a question? Click below to send a mail :)
      </p>
      <a
        className="btn fifthPage-link reveal fade-bottom"
        href={`mailto:${CONTACT_EMAIL}`}
        aria-label="Send email to Abhishek Srinivasan"
      >
        Mail me
      </a>
    </section>
  );
};

export default Contact;

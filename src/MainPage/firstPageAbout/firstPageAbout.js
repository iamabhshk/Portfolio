import '../firstPageAbout/firstPageAbout.css';
import labels from '../../taggr/labels.json';

const FirstPageAbout = () => {
  return (
    <div className="firstPage-main-about">
      <h1 className="firstPage-main-about-abhishek">
        Hi! I Am
        <br />
        <span className="firstPage-main-about-abhishek-mark">
          Abhishek Srinivasan
        </span>
      </h1>
      <p className="firstPage-main-about-text">
        Making websites aesthetic since 2 years now as a
        <br />
        <span className="firstPage-main-about-text-frontmark">
          {labels.dashboarderrormessage}
        </span>
      </p>
      <a className="firstPage-main-about-btns" href="#aboutme" aria-label="Navigate to about section">
        <button className="firstPage-main-about-btn" type="button">
          About me
        </button>
      </a>
    </div>
  );
};

export default FirstPageAbout;

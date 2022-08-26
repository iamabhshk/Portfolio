import "../firstPageAbout/firstPageAbout.css";

const firstPageAbout = () => {
  return (
    <div className="firstPage-main-about ">
      <span className="firstPage-main-about-abhishek">
        Hi! I Am
        <br />
        <span className="firstPage-main-about-abhishek-mark">
          Abhishek Srinivasan
        </span>
      </span>
      <span className="firstPage-main-about-text">
        Making webistes aestheic since 2 years now as a
        <br />
        <a className="firstPage-main-about-text-frontmark">
          Frontend Developer
        </a>
      </span>
      <a className="firstPage-main-about-btns" href="#aboutme">
        <button className="firstPage-main-about-btn" href="#aboutme">
          About me
        </button>
      </a>
    </div>
  );
};

export default firstPageAbout;

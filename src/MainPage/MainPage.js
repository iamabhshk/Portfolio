import "../MainPage/MainPage.css";
import FirstPageImage from "./firstPageImage/firstPageImage";
import FirstPageAbout from "./firstPageAbout/firstPageAbout";

const Mainpage = () => {
  return (
    <div className="firstPage" id="home">
      <div className="firstPage-main">
        <FirstPageAbout />
        <FirstPageImage />
      </div>
    </div>
  );
};

export default Mainpage;

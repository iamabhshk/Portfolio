import '../MainPage/MainPage.css';
import FirstPageAbout from './firstPageAbout/firstPageAbout';
import FirstPageImage from './firstPageImage/firstPageImage';

const MainPage = () => {
  return (
    <section className="firstPage" id="home">
      <div className="firstPage-main">
        <FirstPageAbout />
        <FirstPageImage />
      </div>
    </section>
  );
};

export default MainPage;

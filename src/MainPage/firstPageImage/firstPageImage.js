import photos from "../../img/photobgm.png";
import "../firstPageImage/firstPageImage.css";

const firstPageImage = () => {
  return (
    <div className="firstPage-main-photo ">
      <img src={photos} alt="Background Picture" className="firstPage-main-photo-image" />
    </div>
  );
};

export default firstPageImage;

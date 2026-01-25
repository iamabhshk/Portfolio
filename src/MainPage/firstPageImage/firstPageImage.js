import photos from '../../img/photobgm.png';
import '../firstPageImage/firstPageImage.css';

const FirstPageImage = () => {
  return (
    <div className="firstPage-main-photo">
      <img 
        src={photos} 
        alt="Abhishek Srinivasan professional background" 
        className="firstPage-main-photo-image" 
      />
    </div>
  );
};

export default FirstPageImage;

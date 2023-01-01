import banner from "../../assets/img/banner.png";
import "../../styles/home/homeImg.css";

function HomeImg() {
  return (
    <div className="home__img">
      <img src={banner} alt="Julieta Esains" className="home__img-banner" />
    </div>
  );
}

export default HomeImg;

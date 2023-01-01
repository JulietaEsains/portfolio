import UilMouseAlt from "@iconscout/react-unicons/icons/uil-mouse-alt";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import "../../styles/home/homeScroll.css";

function HomeScroll() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-btn btn-flex">
        <UilMouseAlt className="home__scroll-mouse" />
        <span className="home__scroll-name">Deslizar hacia abajo</span>
        <UilArrowDown className="home__scroll-arrow" />
      </a>
    </div>
  );
}

export default HomeScroll;

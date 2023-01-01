import HomeSocial from "../components/home/HomeSocial";
import HomeImg from "../components/home/HomeImg";
import HomeData from "../components/home/HomeData";
import HomeScroll from "../components/home/HomeScroll";
import "../styles/home/home.css";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <HomeSocial />
          <HomeImg />
          <HomeData />
        </div>
        <HomeScroll />
      </div>
    </section>
  );
}

export default Home;

import UilLinkedinAlt from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import UilGithubAlt from "@iconscout/react-unicons/icons/uil-github-alt";
import "../../styles/home/homeSocial.css";

function HomeSocial() {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/julieta-esains/"
        target="_blank"
        className="home__social-icon"
      >
        <UilLinkedinAlt />
      </a>
      <a
        href="https://github.com/JulietaEsains/"
        target="_blank"
        className="home__social-icon"
      >
        <UilGithubAlt />
      </a>
    </div>
  );
}

export default HomeSocial;

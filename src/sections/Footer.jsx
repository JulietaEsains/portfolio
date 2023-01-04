import UilLinkedinAlt from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import UilGithubAlt from "@iconscout/react-unicons/icons/uil-github-alt";
import "../styles/footer/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <h1 className="footer__title">Julieta Esains</h1>
          <div className="footer__content">
            <p className="footer__subtitle">
              Desarrolladora Web Full Stack en proceso
            </p>
            <p className="footer__copy">
              Diseño de interfaz basado en &#169; Bedimcode
            </p>
          </div>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/julieta-esains/"
              target="_blank"
              className="footer__social-icon"
            >
              <UilLinkedinAlt />
            </a>
            <a
              href="https://github.com/JulietaEsains"
              target="_blank"
              className="footer__social-icon"
            >
              <UilGithubAlt />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

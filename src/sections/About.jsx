import aboutMe from "../assets/img/aboutMe.png";
import cv from "../assets/pdf/Curriculum Vitae.pdf";
import UilSmile from "@iconscout/react-unicons/icons/uil-smile";
import UilDownloadAlt from "@iconscout/react-unicons/icons/uil-download-alt";
import "../styles/about/about.css";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Acerca de mí</h2>
      <div className="about__container container grid">
        <img src={aboutMe} alt="Julieta Esains" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Mi objetivo es articular mi carrera universitaria con cada
            oportunidad de aprendizaje que tomo, incluyendo el ser autodidacta,
            para participar en proyectos de desarrollo de software
            significativos y crecer profesionalmente cada día{" "}
            <UilSmile className="about__description-icon" />
          </p>
          <div className="about__btn">
            <a download="" href={cv} className="btn btn-flex">
              Descargar CV <UilDownloadAlt className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

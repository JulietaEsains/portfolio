import "../../styles/projects/project.css";

function Project({ project }) {
  return (
    <div className="project__content grid">
      <img
        src={project.img}
        alt="Imagen del proyecto"
        className="project__img"
      />
      <div className="project__data">
        <div className="project__header">
          <h3 className="project__title">{project.title}</h3>
          <span className="project__date">{project.date}</span>
        </div>
        <p className="project__description">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          className="btn btn-flex btn-small project__btn"
        >
          Visitar {">"}
        </a>
      </div>
    </div>
  );
}

export default Project;

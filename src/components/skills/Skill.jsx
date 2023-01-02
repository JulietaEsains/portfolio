import "../../styles/skills/skill.css";

function Skill({ skill }) {
  return (
    <div className="skills__data">
      <div className="skills__title">
        <h3 className="skills__name">{skill.name}</h3>
        {skill.img && (
          <img src={skill.img} alt={skill.name} className="skills__img" />
        )}
      </div>
    </div>
  );
}

export default Skill;

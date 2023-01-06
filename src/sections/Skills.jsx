import { useState, useEffect } from "react";
import SkillTab from "../components/skills/SkillTab";
import { SKILL_TABS as data } from "../data/skillTabs";
import "../styles/skills/skills.css";

function Skills() {
  const [skillTabs, setSkillTabs] = useState([]);

  useEffect(() => {
    setSkillTabs(data);
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <div className="skills__container container grid">
        {skillTabs.map((skillTab) => (
          <SkillTab key={skillTab.id} skillTab={skillTab} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

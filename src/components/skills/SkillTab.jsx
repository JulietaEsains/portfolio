import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import Skill from "./Skill";
import "../../styles/skills/skillTab.css";
import { useEffect, useState } from "react";

function SkillTab({ skillTab }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(skillTab.open);
  }, []);

  return (
    <div
      className={
        open ? "skills__content skills__open" : "skills__content skills__closed"
      }
      onClick={() => setOpen(!open)}
    >
      <div className="skills__header">
        <div>
          <h1 className="skills__title">{skillTab.title}</h1>
        </div>
        <UilAngleDown className="skills__arrow" />
      </div>
      <div className="skills__list grid">
        {skillTab.skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillTab;

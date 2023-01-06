import UilGraduationCap from "@iconscout/react-unicons/icons/uil-graduation-cap";
import UilBriefcaseAlt from "@iconscout/react-unicons/icons/uil-briefcase-alt";
import QualificationTab from "../components/qualification/QualificationTab";
import { EDUCATION_ITEMS as educationData } from "../data/qualifications";
import { EXPERIENCE_ITEMS as experienceData } from "../data/qualifications";
import { useEffect, useState } from "react";
import "../styles/qualification/qualification.css";

function Qualification() {
  const [educationItems, setEducationItems] = useState([]);
  const [experienceItems, setExperienceItems] = useState([]);
  const [currentTab, setCurrentTab] = useState("education");

  useEffect(() => {
    setEducationItems(educationData);
    setExperienceItems(experienceData);
  }, []);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Trayectoria</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              currentTab === "education"
                ? "qualification__btn btn-flex active__qualification"
                : "qualification__btn btn-flex"
            }
            data-target="#education"
            onClick={() => setCurrentTab("education")}
          >
            <UilGraduationCap className="qualification__icon" />
            Educación
          </div>
          <div
            className={
              currentTab === "experience"
                ? "qualification__btn btn-flex active__qualification"
                : "qualification__btn btn-flex"
            }
            data-target="#experience"
            onClick={() => setCurrentTab("experience")}
          >
            <UilBriefcaseAlt className="qualification__icon" />
            Experiencia
          </div>
        </div>
        <div className="qualification__sections">
          <QualificationTab
            contentId="education"
            items={educationItems}
            currentTab={currentTab}
          />
          <QualificationTab
            contentId="experience"
            items={experienceItems}
            currentTab={currentTab}
          />
        </div>
      </div>
    </section>
  );
}

export default Qualification;

import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import NavItem from "../header/NavItem";
import { SECTIONS as data } from "../../data/sections";
import "../../styles/header/navMenu.css";
import { useEffect, useState } from "react";

function NavMenu({ menuShown, toggleMenuShown }) {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(data);
  }, []);

  return (
    <div className={menuShown ? "nav__menu show-menu" : "nav__menu"}>
      <ul className="nav__list grid">
        {sections.map((section) => (
          <NavItem
            key={section.id}
            section={section}
            toggleMenuShown={toggleMenuShown}
          />
        ))}
      </ul>
      <UilTimes className="nav__close" onClick={toggleMenuShown} />
    </div>
  );
}

export default NavMenu;

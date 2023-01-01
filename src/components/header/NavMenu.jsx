import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import NavItem from '../header/NavItem'
import "../../styles/header/navMenu.css";

function NavMenu({ menuShown, toggleMenuShown }) {
  return (
    <div className={menuShown ? "nav__menu show-menu" : "nav__menu"}>
      <ul className="nav__list grid">
        <NavItem
          href="home"
          section="Inicio"
          toggleMenuShown={toggleMenuShown}
        />
        <NavItem
          href="about"
          section="Acerca de mí"
          toggleMenuShown={toggleMenuShown}
        />
        <NavItem
          href="skills"
          section="Habilidades"
          toggleMenuShown={toggleMenuShown}
        />
        <NavItem
          href="qualification"
          section="Trayectoria"
          toggleMenuShown={toggleMenuShown}
        />
        <NavItem
          href="projects"
          section="Proyectos"
          toggleMenuShown={toggleMenuShown}
        />
      </ul>
      <UilTimes className="nav__close" onClick={toggleMenuShown} />
    </div>
  );
}

export default NavMenu;

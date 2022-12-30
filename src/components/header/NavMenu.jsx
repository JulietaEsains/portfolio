import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import NavItem from "./NavItem";
import "../../styles/header/navMenu.css";

function NavMenu({ toggleMenuShown }) {
  return (
    <div className="nav__menu">
      <ul className="nav__list grid">
        <NavItem href="#home" section="Inicio" />
        <NavItem href="#about" section="Acerca de mí" />
        <NavItem href="#skills" section="Habilidades" />
        <NavItem href="#qualification" section="Trayectoria" />
        <NavItem href="#projects" section="Proyectos" />
      </ul>
      <UilTimes className="nav__close" onClick={toggleMenuShown} />
    </div>
  );
}

export default NavMenu;

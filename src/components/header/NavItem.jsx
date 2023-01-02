import "../../styles/header/navItem.css";
import { Link } from "react-scroll";

function NavItem({ section, toggleMenuShown }) {
  return (
    <Link
      activeClass="active-link"
      spy
      to={section.href}
      className="nav__item nav__link"
      onClick={toggleMenuShown}
    >
      {section.name}
    </Link>
  );
}

export default NavItem;

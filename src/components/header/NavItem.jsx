import "../../styles/header/navItem.css";
import { Link } from "react-scroll";

function NavItem({ href, section, toggleMenuShown }) {
  return (
    <Link
      activeClass="active-link"
      smooth
      spy
      to={href}
      className="nav__item nav__link"
      onClick={toggleMenuShown}
    >
      {section}
    </Link>
  );
}

export default NavItem;

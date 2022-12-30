import "../../styles/header/navItem.css";

function NavItem({ href, section }) {
  return (
    <li className="nav__item">
      <a href={href} className="nav__link">
        {section}
      </a>
    </li>
  );
}

export default NavItem;

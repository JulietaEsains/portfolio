import { useState } from "react";
import NavMenu from "../components/header/NavMenu";
import NavButtons from "../components/header/NavButtons";
import "../styles/header/header.css";

function Header() {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="#home">Julieta Esains</a>
        </div>
        <NavMenu
          menuShown={menuShown}
          toggleMenuShown={() => setMenuShown(!menuShown)}
        />
        <NavButtons toggleMenuShown={() => setMenuShown(!menuShown)} />
      </nav>
    </header>
  );
}

export default Header;

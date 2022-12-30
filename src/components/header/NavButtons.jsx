import { useState, useEffect } from "react";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilApps from "@iconscout/react-unicons/icons/uil-apps";
import "../../styles/header/navButtons.css";

function NavButtons({ toggleMenuShown }) {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selected-theme");
    if (selectedTheme) {
      setCurrentTheme(selectedTheme);
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
    }
  }, [currentTheme]);

  const setDarkTheme = () => {
    setCurrentTheme("dark");
    localStorage.setItem("selected-theme", "dark");
  };

  const setLightTheme = () => {
    setCurrentTheme("light");
    localStorage.setItem("selected-theme", "light");
  };

  return (
    <div className="nav__btns">
      {currentTheme === "light" && (
        <UilMoon className="change-theme" onClick={setDarkTheme} />
      )}
      {currentTheme === "dark" && (
        <UilSun className="change-theme" onClick={setLightTheme} />
      )}
      <div className="nav__toggle">
        <UilApps onClick={toggleMenuShown} />
      </div>
    </div>
  );
}

export default NavButtons;

import { useState } from "react";
import "./headerstyle.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [lang, setLang] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = () => {
    setLang(!lang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-container">
        <img
          src="https://i.ibb.co/dDt6K33/epic-byte-logo.png"
          className="epic-logo"
          alt="Epic Byte Logo"
        />
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`header-nav ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/projects"} onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/team"} onClick={() => setMenuOpen(false)}>
              Team
            </Link>
          </li>
          <li>
            <Link to={"/contacts"} onClick={() => setMenuOpen(false)}>
              Contacts
            </Link>
          </li>
          <li>
            <img
              src={!lang ? "https://i.ibb.co/fXPDdrq/uk.png" : "https://i.ibb.co/brz0v1V/italy-flag.png"}
              onClick={changeLang}
              className="language"
              alt="Language"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

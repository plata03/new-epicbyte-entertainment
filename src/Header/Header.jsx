import { useState } from "react"
import "./headerstyle.css"
import { Link } from "react-router-dom"

const Header = () => {

    const [lang, setLang] = useState(false);

    const changeLang = () => {
        setLang(!lang);
    }

    return (
        <div className="header">
            <div className="header-container">
                <img src="https://i.ibb.co/dDt6K33/epic-byte-logo.png" className="epic-logo" />
                <ul className="header-nav">
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={"/team"}>
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contacts"}>
                            Contacts
                        </Link>
                    </li>
                    <li>
                        
                        <img src={!lang ? "https://i.ibb.co/fXPDdrq/uk.png" : "https://i.ibb.co/brz0v1V/italy-flag.png"} onClick={changeLang} className="language"/>
                    </li>
                </ul>
                
            </div>
        </div>
    )

}

export default Header;

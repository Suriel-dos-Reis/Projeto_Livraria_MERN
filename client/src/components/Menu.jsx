import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../image/logov2.png";

function Menu({ toggleSidebar }) {
    return (
        <div className="menu">
            <span className="menu-btn" onClick={toggleSidebar}>
                <RiCloseLargeFill />
            </span>
            <h1 className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </h1>
            <nav>
                <li>
                    <i class="fa-solid fa-house"></i> Home
                </li>
                <li>
                    <Link to="/">⭐ - Lista de Livros</Link>
                </li>
                <li>
                    <Link to="/create-book">🦸🏽‍♂️ - Incluir livro</Link>
                </li>
                <li>
                    <Link to="">🖌️ - Novo Link 1</Link>
                </li>
                <li>
                    <Link to="">👌🏽 - Novo Link 2</Link>
                </li>
            </nav>
        </div>
    );
}

export default Menu;

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
                    <i className="fa-solid fa-house"></i> Home
                </li>
                <li>
                    <i className="fa-solid fa-star"></i>
                </li>
                <li>
                    <Link to="/">⭐ - Lista de Livros</Link>
                </li>
                <li>
                    <Link to="/create-book">🦸🏽‍♂️ - Incluir livro</Link>
                </li>
                <li>
                    <Link to="/ShowBookDetails">🖌️ - Lista detalhes do livro</Link>
                </li>
                <li>
                    <Link to="/ShowBookList">👌🏽 - Lista de livros</Link>
                </li>
            </nav>
        </div>
    );
}

export default Menu;

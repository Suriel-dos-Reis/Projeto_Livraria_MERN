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
                    <Link to="/"><i className="fa-solid fa-list" style={{ color: "#FFD700" }}></i> - Lista de Livros</Link>
                </li>
                <li>
                    <Link to="/create-book"><i className="fa-solid fa-book-open" style={{ color: "#FFD700" }}></i> - Incluir livro</Link>
                </li>
                <li>
                    <Link to="/ShowBookDetails">🖌️ - Lista detalhes do livro</Link>
                </li>
                <li>
                    <Link to="/ShowBookList">👌🏽 - Lista de livros</Link>
                </li>
                <li>
                    <Link to="/">👌🏽 - Lista de livros</Link>
                </li>
            </nav>
        </div>
    );
}

export default Menu;

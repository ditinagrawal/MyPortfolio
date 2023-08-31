import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="navbar-nav m-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/projects">
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/skills">
                    Skills
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    );
};

export default Menu;

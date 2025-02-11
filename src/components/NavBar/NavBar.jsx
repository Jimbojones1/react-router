// src/components/NavBar/NavBar.jsx
import './NavBar.css'
import { Link } from "react-router";

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pokemon'>Pokemon</Link>
                </li>
                <li>
                    <Link to='/pokemon/new'>New Pokemon</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

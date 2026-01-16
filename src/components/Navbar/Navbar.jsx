import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <NavLink to="/">
                <span>Accueil</span>
            </NavLink>
            <NavLink to="/Projects">
                <span>Projets</span>
            </NavLink>
            <NavLink to="/Contact">
                <span>Contact</span>
            </NavLink>
        </div>
    )
}

export default Navbar;
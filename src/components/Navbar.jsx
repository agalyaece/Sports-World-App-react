import { NavLink } from "react-router-dom";


import classes from  "./Navbar.module.css"
import { useState } from "react";



export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className={classes.menu} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? `${classes.open}` : undefined}>
                <li>
                    <NavLink  to="/football">Football</NavLink>
                </li>
                <li>
                    <NavLink  to="/cricket">Cricket</NavLink>
                </li>
                <li>
                    <NavLink to="tennis">Tennis</NavLink>
                </li>
            </ul>
        </nav>
    );
}


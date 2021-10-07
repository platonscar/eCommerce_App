import React from 'react'
import './NavBar.css'

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="nav_list">
                <li className="list"><a>Home</a></li>
                <li className="list"><a>Husbandos</a></li>
                <li className="list"><a>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;

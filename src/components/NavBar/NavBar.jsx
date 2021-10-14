import React from 'react'
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css'

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="nav_list">
                <li className="list"><a href="/#">Home</a></li>
                <li className="list"><a a href="/#">Idol</a></li>
                <li className="list"><a a href="/#">Contact</a></li>
                <li className="list"><CardWidget/></li>
            </ul>
        </nav>
    )
}

export default Nav;

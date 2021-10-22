import React from 'react'
import NavBar from "../NavBar/NavBar";
import {FaHeart } from "react-icons/fa";

const Header = () => {
    return (
        <header className="App-header">
            <NavBar/>
            <h1>Date your idol <FaHeart size="1.5rem"/>!</h1>
        </header>
    )
}

export default Header;

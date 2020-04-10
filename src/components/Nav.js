import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav className= "nav">
            <ul className="nav-link">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
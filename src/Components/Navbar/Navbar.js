
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {    
    return (
        <nav className="navbar">
            <ul className="nav-menu">
            <li className="nav-item">
                <Link to="/" className="nav-links">
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/favoritas" className="nav-links">
                Favoritas
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/todas" className="nav-links">
                Ver todas
                </Link>
            </li>
            </ul>
        </nav>
    );
    }
export default Navbar;
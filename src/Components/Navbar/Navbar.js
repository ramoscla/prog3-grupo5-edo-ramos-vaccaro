
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
                <Link to="/favoritos" className="nav-links">
                Favoritas
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/cartelera" className="nav-links">
                Cartelera
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/proximamente" className="nav-links">
                Próximamente
                </Link>
            </li>
            </ul>
        </nav>
    );
    }
export default Navbar;
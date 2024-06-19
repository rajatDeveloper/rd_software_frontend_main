// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css';
import logo from '../../../assets/images/logo-no-background.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-reddish">
            <a className="navbar-brand" href="/">
            <img className="navBarLogo" src={logo} />
            </a>
           
            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Past Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Our Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Feedback</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo from "../../../assets/images/logo-no-background.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="navBarLogo" src={logo} alt="Logo" />
    </div>
  );
};

export default Navbar;

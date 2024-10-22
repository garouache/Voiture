import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Assets/Css/NavigationBar.css";
import Logo from "./Assets/logolocationvoiture.png";

function NavigationBar() {
  return (
    <Navbar className="darkk">
      <Link to="/" className="navbar-brand logonav">
        <img src={Logo} width="50" height="50" alt="logo" className="logonav" />
      </Link>
      <Nav className="mr-auto itemnav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/addprop" className="nav-link">
          Ajouter Proprietaire
        </Link>
        <Link to="/add" className="nav-link">
          Ajouter Voiture
        </Link>
        <Link to="/listprop" className="nav-link">
          Liste Proprietaires
        </Link>
        <Link to="/list" className="nav-link">
          Liste Voitures
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;

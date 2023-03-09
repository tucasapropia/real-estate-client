import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoCompany from "../images/logoCompany.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img className="navbar-logo " src={logoCompany} alt="logo" />
      </div>
      <div className="navbar-title">
        <NavLink className="navbar-title" to="/">Inicio</NavLink>
        <NavLink className="navbar-title" to="/sale">Venta</NavLink>
        <NavLink className="navbar-title" to="/rent">Alquiler</NavLink>
        <NavLink className="navbar-title" to="/advisory">Asesoria</NavLink>
        <NavLink className="navbar-title" to="/aboutUs">Sobre nosotros</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

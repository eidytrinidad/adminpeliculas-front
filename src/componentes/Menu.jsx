import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Administrador de Peliculas
      </Link >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
         <NavLink to="/peliculas" className="nav-link"> Peliculas</NavLink>
         <NavLink to="/actores" className="nav-link"> Actores</NavLink>
        </div>
      </div>
    </nav>
  );
};

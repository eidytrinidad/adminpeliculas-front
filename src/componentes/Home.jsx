import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home">
      <h1>Bienvenido al Administrador de Peliculas</h1>
      <article className="contenedor">
        
       
          <Link className="btn btn-outline-dark" to="/peliculas">
            Mantenimiento Peliculas
          </Link>
          <Link className="btn btn-outline-dark" to="/actores">
            Mantenimiento Actores
          </Link>
        
      </article>
    </section>
  );
};

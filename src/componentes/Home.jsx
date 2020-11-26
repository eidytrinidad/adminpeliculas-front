import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home">
      <article className="contenedor">
        <h1>Bienvenido al Administrador de Peliculas</h1>
        <div className="botones">
          <Link className="btn btn-outline-dark" to="/peliculas">
            Mantenimiento Peliculas
          </Link>
          <Link className="btn btn-outline-dark" to="/actores">
            Mantenimiento Actores
          </Link>
        </div>
      </article>
    </section>
  );
};

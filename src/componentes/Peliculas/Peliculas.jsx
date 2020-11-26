import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StartGetPeliculas, StartGetPeliculasById } from "../../actions/peliculas";
import { Modal } from "../Modal";

export const Peliculas = () => {
  const { peliculas} = useSelector((state) => state.peliculas);
 
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartGetPeliculas());
  }, [dispatch]);
  return (
    <section className="pantalla">
      <article className="contenedor">
        <h2>Seccion Peliculas</h2>
       
         <div className="botonBox">
         <Link 
          className="btn btn-dark" 
          to="/peliculas/agregar">Agregar Pelicula
          </Link>
         </div>
        
        <div className="row">
          <form className="mt-5 col-12 col-md-7 col-lg-8">
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Ingrese el nombre de pelicula para buscar ex:(Batman)"
            />
            <button className="btn btn-primary mt-2">Buscar por Nombre</button>
          </form>
          <form className="mt-5 col-12 col-md-4 col-lg-4">
            <select name="" id="" className="form-control">
              <option value="">Selccionar el Genero</option>
              <option value="accion">Accion</option>
              <option value="aventura">Aventura</option>
              <option value="drama">Comedia</option>
              <option value="suspenso">Suspenso</option>
            </select>
          </form>
        </div>
        <hr />
        <div className="row mt-5">
          {peliculas &&
            peliculas.map((pelicula) => (
              <div 
              className="pelicula" 
              key={pelicula.id}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={()=>dispatch(StartGetPeliculasById(pelicula.id))}
              >
                <div className="imagen">
                  <img src={`img/${pelicula.foto}`} alt="poster" />
                </div>
                <h4>{pelicula.titulo}</h4>
             
              </div>
            ))}
        </div>
        <Modal/>
      </article>
    </section>
  );
};

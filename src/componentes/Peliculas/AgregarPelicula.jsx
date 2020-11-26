import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import {StartCreateMovie} from '../../actions/peliculas'

const initialState = {
  titulo: "",
  genero: "",
  fechadeestreno: "",
  foto: "",
};
export const AgregarPelicula = () => {
  const [formValues, setformValues] = useState(initialState);
  const { titulo, genero, fechadeestreno, foto } = formValues;
  const fileRef = useRef()
  const dispatch = useDispatch()

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const photo=fileRef.current.files[0]
    const imagen = photo.name;
    
    dispatch(StartCreateMovie(imagen,formValues))
  };

  return (
    <section className="agregar">
      <div className="contenedor">
        <h2>Agregar Pelicula</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">  Ingrese el Titulo de la Pelicula</label>
          <input
            placeholder="ejemplo: Batman, Gemini Man...."
            className="form-control"
            onChange={handleInputChange}
            type="text"
            name="titulo"
            value={titulo}
          />
        </div>
        <div className="form-group">
        <label htmlFor="genero">  Ingrese el Genero de la Pelicula</label>
          <input
            placeholder="ejemplo: Accion, Aventura..."
            className="form-control"
            onChange={handleInputChange}
            type="text"
            name="genero"
            value={genero}
          />
        </div>
        <div className="form-group">
        <label htmlFor="fecha">  Ingrese Fecha de Estreno de la Pelicula</label>
          <input
           
            className="form-control"
            onChange={handleInputChange}
            type="date"
            name="fechadeestreno"
            value={fechadeestreno}
          />
        </div>
        <div className="form-group">
        <label htmlFor="foto">  Seleccione Una Foto</label>
          <input
          ref={fileRef}
            className="form-control"
            onChange={handleInputChange}
            type="file"
            name="foto"
            value={foto}
          />
        </div>
        
      <button className="btn btn-dark">Agregar</button>
      </form>
      </div>
    </section>
  );
};

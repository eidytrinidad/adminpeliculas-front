import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { StartDelete, StartUpdateMovie } from "../../actions/peliculas";

const initialState = {
  titulo: "",
  genero: "",
  fechadeestreno: "",
  foto: "",
};
export const EditarPelicula = ({history}) => {
  const [formValues, setformValues] = useState(initialState);
  const { titulo, genero, fechadeestreno, foto } = formValues;
  const [error, setError] = useState(false);
  const fileRef = useRef();
  const dispatch = useDispatch();

  const { id } = useParams();

  const cargar = async () => {
    const resp = await fetch(`http://localhost:4000/peliculas/${id}`);
    const data = await resp.json();
    const pelicula = data[0];

   

    let { ...formValues } = pelicula;
    setformValues({
      ...formValues,
      foto: "",
    });
  };
  useEffect(() => {
    cargar();
  }, [dispatch]);

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleDelete = () => {
    dispatch(StartDelete(id));
  
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const photo = fileRef.current.files[0];
    if (titulo === "") {
        return setError(true);
      }
      if (genero=== "") {
        return setError(true);
      }
      if (photo === undefined) {
        return setError(true);
      }
    const foto = photo.name;
    dispatch(StartUpdateMovie(id, formValues, foto));
  };

  return (
    <section className="agregar ">
      <div className="contenedor">
        <h2>Editar Pelicula</h2>
        <button onClick={handleDelete} className="btn btn-primary">
              Borrar Pelicula
            </button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo"> Ingrese el Titulo de la Pelicula</label>
            <input
            
            placeholder={
                error ? `* Titulo no puede quedar vacio` : "ejemplo: Batman, Gemini Man...."
              }
             
              className="form-control"
              onChange={handleInputChange}
              type="text"
              name="titulo"
              value={titulo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="genero"> Ingrese el Genero de la Pelicula</label>
            <input
             placeholder={
                error ? `* Genero no puede quedar vacio` : "ejemplo: Accion, Aventura..."
              }
            
              className="form-control"
              onChange={handleInputChange}
              type="text"
              name="genero"
              value={genero}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">
              {" "}
              Editar Fecha de Estreno  <small>(Solo si se va ingresar una nueva)</small>
            </label>
            <input
              className="form-control"
              onChange={handleInputChange}
              type="date"
              name="fechadeestreno"
              value={fechadeestreno}
            />
          </div>
          <div className="form-group">
            <label htmlFor="foto"> { error ? "Foto No Puede Quedar Vacia ":"Seleccione Una Foto"}</label>
            <input
              ref={fileRef}
              className="form-control"
              onChange={handleInputChange}
              type="file"
              name="foto"
              value={foto}
            />
          </div>

          <button className="btn btn-dark mb-5">Agregar</button>

         
        </form>
        
      </div>
    </section>
  );
};

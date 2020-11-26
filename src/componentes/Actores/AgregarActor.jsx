import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { StartCreateActors } from "../../actions/actores";

import { StartCreateMovie } from "../../actions/peliculas";

const initialState = {
  nombrecompleto: "",
  fechadenacimiento: "",
  sexo: "",
  foto: "",
};
export const AgregarActor = () => {
  const [formValues, setformValues] = useState(initialState);
  const { nombrecompleto, fechadenacimiento, sexo, foto } = formValues;
  const fileRef = useRef();
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const photo = fileRef.current.files[0];
    const imagen = photo.name;
    console.log(photo.type);
    dispatch(StartCreateActors(imagen, formValues));
  };

  return (
    <section className="agregar">
      <div className="contenedor">
        <h2>Agregar Actor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombrecompleto"> Ingrese el Nombre Completo</label>
            <input
              placeholder="ejemplo: Will Smith, Tom Cruz...."
              className="form-control"
              onChange={handleInputChange}
              type="text"
              name="nombrecompleto"
              value={nombrecompleto}
            />
          </div>
          <div className="form-group">
            <label htmlFor="genero"> Ingrese el Sexo del Actor</label>
            <select
              className="form-control"
              onChange={handleInputChange}
              name="sexo"
              value={sexo}
            >
                <option value=""></option>
                <option value="masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
         
          </div>
          <div className="form-group">
            <label htmlFor="fecha">
             
              Ingrese Fecha Nacimiento
            </label>
            <input
              className="form-control"
              onChange={handleInputChange}
              type="date"
              name="fechadenacimiento"
              value={fechadenacimiento}
            />
          </div>
          <div className="form-group">
            <label htmlFor="foto"> Seleccione Una Foto</label>
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

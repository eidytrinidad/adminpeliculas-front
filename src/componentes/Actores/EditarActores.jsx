import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StartDeleteActor, StartUpdateActor } from "../../actions/actores";



const initialState = {
    nombrecompleto: "",
    fechadenacimiento: "",
    sexo: "",
    foto: "",
  };
export const EditarActores = ({history}) => {
  const [formValues, setformValues] = useState(initialState);
  const { nombrecompleto, fechadenacimiento, sexo, foto } = formValues;

  const [error, setError] = useState(false);
  const fileRef = useRef();
  const dispatch = useDispatch();

  const { id } = useParams();

  const cargar = async () => {
    const resp = await fetch(`http://localhost:4000/actores/${id}`);
    const data = await resp.json();
    const actores = data[0];

    console.log(actores);

    let { ...formValues } = actores;
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
    dispatch(StartDeleteActor(id));
  
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const photo = fileRef.current.files[0];
    if (nombrecompleto === "") {
        return setError(true);
      }
      if (sexo=== "") {
        return setError(true);
      }
      if (photo === undefined) {
        return setError(true);
      }
    const foto = photo.name;
    dispatch(StartUpdateActor(id, formValues, foto));
  };

  return (
    <section className="agregar ">
      <div className="contenedor">
        <h2>Editar Actor</h2>
        <button onClick={handleDelete} className="btn btn-primary">
              Borrar Actor
            </button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombrecompleto"> Ingrese el Nombre Completo</label>
            <input
            
            placeholder={
                error ? `* Nombre no puede quedar vacio` : "ejemplo: Tom Cruz...."
              }
             
              className="form-control"
              onChange={handleInputChange}
              type="text"
              name="nombrecompleto"
              value={nombrecompleto}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sexo"> Ingrese Sexo del Actor</label>
            <input
             placeholder={
                error ? `* Sexo no puede quedar vacio` : "ejemplo: Masculino, Femenino..."
              }
            
              className="form-control"
              onChange={handleInputChange}
              type="text"
              name="sexo"
              value={sexo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">
            
              Editar Fecha de Nacimiento <small>(Solo si se va ingresar una nueva)</small>
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StartGetActores } from "../../actions/actores";
import {ActoresComponent} from "./ActoresComponent";

export const Actores = () => {
  const dispatch = useDispatch();
  const { actores } = useSelector((state) => state.actores);
  const [sexo, setSexo] = useState([]);
  const [nombre, setNombre] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    dispatch(StartGetActores());
  }, []);

  const handleSelect = (e) => {
    const result = actores.filter((actor) => actor.sexo === e.target.value);
    setSexo(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreB = nombre.toLocaleLowerCase();
    const result = actores.filter((actor) =>
      actor.nombrecompleto.toLocaleLowerCase().includes(nombreB)
    );
    setSearch(result);
  };

  return (
    <section className="pantalla">
      <article className="contenedor">
        <h2>Seccion actores</h2>
        <div className="botonBox">
          <Link className="btn btn-dark" to="/actores/agregar">
            Agregar Actor
          </Link>
        </div>
        <div className="row">
          <form
            className="mt-5 col-12 col-md-7 col-lg-8"
            onSubmit={handleSubmit}
          >
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              name="search"
              className="form-control"
              placeholder="Ingrese el nombre del actor para buscar ex:(Tom Cruz)"
            />
            <button className="btn btn-primary mt-2">Buscar por Nombre</button>
          </form>
          <form className="mt-5 col-12 col-md-4 col-lg-4">
            <select
              name="sexo"
              id=""
              className="form-control"
              onChange={handleSelect}
            >
              <option value="">Selccionar el Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </form>
        </div>
        <hr />
        <div className="row mt-5">
          {
           actores&&
           (sexo.length===0)
             ?
             actores.map(actor => (
               <ActoresComponent key={actor.id} data={actor}/>
             ))
             
             :
             sexo.map(sexo => (
              <ActoresComponent key={sexo.id} data={sexo}/>
             ))
          }
        </div>
      </article>
    </section>
  );
};

// {
//   // console.log(sexo.length)
//   actores&&
// (sexo.length===0)
//   ?
//   actores.map(actor => (
//     <div
//     className="pelicula"
//     key={actor.id}
//     data-toggle="modal"
//     data-target="#exampleModal"

//     >
//       <div className="imagen">
//         <img src={`img/${actor.foto}`} alt="foto" />
//       </div>
//       <h4>{actor.nombrecompleto}</h4>

//     </div>
//   ))
//   :
//   sexo.map(sexo => (
//     <div
//     className="pelicula"
//     key={sexo.id}
//     data-toggle="modal"
//     data-target="#exampleModal"

//     >
//       <div className="imagen">
//         <img src={`img/${sexo.foto}`} alt="foto" />
//       </div>
//       <h4>{sexo.nombrecompleto}</h4>

//     </div>
//   ))
// }

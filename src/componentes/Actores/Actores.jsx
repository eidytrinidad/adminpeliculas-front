import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import { actores } from "../../helper/actores";
import { PopupActor } from "./PopupActor";
import {useDispatch, useSelector} from 'react-redux'
import {openModal} from '../../actions/ui'
import { StartGetActores } from "../../actions/actores";
export const Actores = () => {


  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [actoresResult, setaActoresResult] = useState([]);
  const [actor, setActor] = useState([])

  const dispatch = useDispatch()
  const {modal} = useSelector(state => state.ui)
  
  const {actores }= useSelector(state => state.actores)
  
  useEffect(() => {
    dispatch(StartGetActores())
    
  }, [setaActoresResult]);

  useMemo(() => {
    setaActoresResult(actores)
    
  }, [actores])
  
  
  

  const handleNombre = (e) => {
    setNombre(e.target.value);
    const search = e.target.value.toLocaleLowerCase();
    const result = actores.filter((actor) =>
      actor.nombrecompleto.toLocaleLowerCase().includes(search)
    );
    
    setaActoresResult(result);
  };
  const handleSexo = (e) => {
    setSexo(e.target.value);
    setNombre("")
    if (e.target.value==="") {
      setaActoresResult(actores)
     
    }else{
      const result = actores.filter((actor) => actor.sexo === e.target.value);
      setaActoresResult(result);
    }
  };

  

  return (
    <section className="actores">
      <article className="contenedor">
        <h1>Seccion Actores</h1>
        <div className="botonBox">
          <Link className="btn btn-dark" to="/actores/agregar">
            Agregar Actor
          </Link>
        </div>

        <form className="row">
          <div className="form-group mt-5 col-10 col-md-7 col-lg-8">
            <input
              value={nombre}
              onChange={handleNombre}
              type="text"
              name="search"
              className="form-control"
              placeholder="Ingrese el nombre del actor para buscar ex:(Tom Cruz)"
            />
          </div>
          <div className="form-group col-10 col-md-4 col-lg-4 mt-5">
            <select
              name="sexo"
              className="form-control"
              value={sexo}
              onChange={(e) => setNombre(e.target.value)}
              onChange={handleSexo}
            >
              <option value="">Selccionar el Sexo (Mostrar Todos)</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
        </form>

        <div className="grid">
          
          {
           actoresResult!==undefined
           &&        
          actoresResult.map((actor) => (
            <div
              className="actor"
              key={actor.id}
              onClick={() => {
               
                dispatch(openModal())
                setActor(actor)
              }}
            >
              <div className="imagen">
                <img src={`img/${actor.foto}`} alt="foto" />
              </div>
              <div className="texto">
                <h5>{actor.nombrecompleto}</h5>
              </div>
            </div>
          ))
          }
        </div>
      </article>

      {modal && <PopupActor actor={actor}/>}
    </section>
  );
};

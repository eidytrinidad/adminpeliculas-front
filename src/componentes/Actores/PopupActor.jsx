import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/ui";

export const PopupActor = ({ actor }) => {
  const dispatch = useDispatch();
  return (
    <div className="popup" onClick={() => dispatch(closeModal())}>
      <article>
        <div className="row">
          <div className="col-5">
            <img src={`img/${actor.foto}`} alt="foto" className="img-fluid" />
          </div>
          <div className="col-7">
            <h4 className="text-center">{actor.nombrecompleto}</h4>
            <hr />
            
              
              <p><b>Fecha de Nacimiento:</b> {actor.fechadenacimiento}</p>
            
            <p>
              <b>Sexo: </b>
              {actor.sexo.toUpperCase()}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/ui";
import moment from "moment";
import 'moment/locale/es'

export const PopupPelicula = ({ pelicula }) => {
  const dispatch = useDispatch();

  const fecha=moment(pelicula.fechadeestreno).format("MMMM D YYYY");

  return (
    <div className="popup" onClick={() => dispatch(closeModal())}>
      <article>
        <div className="row">
          <div className="col-5">
            <img src={`img/${pelicula.foto}`} alt="foto" className="img-fluid" />
          </div>
          <div className="col-7">
            <h4 className="text-center">{pelicula.titulo}</h4>
            <hr />
            
              
              <p><b>Fecha de Estreno:</b> {fecha}</p>
            
            <p>
              <b>Genero: </b>
              {pelicula.genero}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

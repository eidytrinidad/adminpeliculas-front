import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Modal = () => {
  // const [peliculaModal, setpeliculaModal] = useState([]);
  // const { pelicula } = useSelector((state) => state.peliculas);

  // useEffect(() => {
  //   setpeliculaModal(pelicula);
  // }, [pelicula]);
  // console.log(peliculaModal);
  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"></h5>
          </div>
          <div className="modal-body">...</div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="modal fade" id="exampleModal">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
     
      </h5>
    </div>
    <div className="modal-body">...</div>
  </div>
</div>
</div> */
}

import { types } from "../types/types";
import Swal from 'sweetalert2'

export const StartGetPeliculas = () => {
  return async (dispatch) => {
    const data = await fetch("http://localhost:4000/peliculas");
    const peliculas = await data.json();
    //console.log(peliculas);
    dispatch(getPeliculas(peliculas));
  };
};
const getPeliculas = (peliculas) => ({
  type: types.getAllMovies,
  payload: peliculas,
});


export const StartCreateMovie = (imagen, data) => {
  return async (dispatch) => {
    try {
      data.foto = imagen;
     
      const resp = await fetch('http://localhost:4000/peliculas', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const body = await resp.json();
      if (body.ok===false) {
        
        Swal.fire({
          icon: "error",
          title: body.message,
          showConfirmButton: true,
          
        });
      } else {
        Swal.fire({
          icon: "success",
          title: body.message,
          showConfirmButton: false,
          timer: 1500,
        });
        window.history.back()
        dispatch(createMovie(data));
      }
     

    } catch (error) {
      console.log(error);
    }
  };
};

const createMovie = () => ({
    type: types.createMovie
})


export const StartUpdateMovie = (id,data,foto) => {
  return async (dispatch) => {
    try {
      data.foto = foto;
     
      const resp = await fetch(`http://localhost:4000/peliculas/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
     
      
      dispatch(updateMovie(data));
      Swal.fire({
        icon: "success",
        title: "Pelicula Actualizada con Exito",
        showConfirmButton: false,
        timer: 1500,
      });
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };
};

const updateMovie = () => ({
  type: types.updateMovie
})


export const StartDelete = (id) => {
  return (dispatch) => {
      try {

          Swal.fire({
              title: 'Esta Seguro?',
              text: "Si es borrado esta accion no se puede revertir!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si,Borrar!'
          }).then(async (result) => {
              if (result.isConfirmed) {
                  const resp = await fetch(`http://localhost:4000/peliculas/${id}`, {
                      method: "DELETE"
                  })
                  
                  
                  dispatch(deleteMovie)
                  
                  Swal.fire(
                      'Borrado!',
                      'Se ha borrado satisfactoriamente.',
                      'success'
                  )
                  window.history.back();
              }
          })

      } catch (error) {
          console.log(error)
      }

  }
}

const deleteMovie = () => ({
  type: types.deleteMovie
})
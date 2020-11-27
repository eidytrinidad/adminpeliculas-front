import { types } from "../types/types";
import Swal from "sweetalert2";

export const StartGetActores = () => {
  return async (dispatch) => {
    const data = await fetch("http://localhost:4000/actores");
    const actores = await data.json();

    dispatch(getActores(actores));
  };
};
const getActores = (actores) => ({
  type: types.getAllActors,
  payload: actores,
});

export const StartCreateActors = (imagen, data) => {
  return async (dispatch) => {
    try {
      data.foto = imagen;
      console.log(data);
      const resp = await fetch("http://localhost:4000/actores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const body = await resp.json();

      if (body.ok === false) {
       
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
        });
        window.history.back();
        dispatch(createActors(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const createActors = () => ({
  type: types.createActor,
});

export const StartUpdateActor = (id, data, foto) => {
  return async (dispatch) => {
    try {
      data.foto = foto;

      const resp = await fetch(`http://localhost:4000/actores/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      dispatch(updateActor(data));
      Swal.fire({
        icon: "success",
        title: "Informacion Actualizada con Exito",
        showConfirmButton: false,
        timer: 1500,
      });
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };
};

const updateActor = () => ({
  type: types.updateActor,
});

export const StartDeleteActor = (id) => {
  return (dispatch) => {
    try {
      Swal.fire({
        title: "Esta Seguro?",
        text: "Si es borrado esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si,Borrar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const resp = await fetch(`http://localhost:4000/actores/${id}`, {
            method: "DELETE",
          });

          dispatch(deleteActor());

          Swal.fire("Borrado!", "Se ha borrado satisfactoriamente.", "success");
          window.history.back();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteActor = () => ({
  type: types.deleteActor,
});

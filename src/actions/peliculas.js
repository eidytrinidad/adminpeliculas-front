import { types } from "../types/types";

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

export const StartGetPeliculasById = (id) => {
  return async (dispatch) => {
    const data = await fetch(`http://localhost:4000/peliculas/${id}`);
    const pelicula = await data.json();

    dispatch(getPeliculasById(pelicula));
  };
};
const getPeliculasById = (pelicula) => ({
  type: types.getOneMovie,
  payload: pelicula,
});

export const StartCreateMovie = (imagen, data) => {
  return async (dispatch) => {
    try {
      data.foto = imagen;
      console.log(data);
      const resp = await fetch('http://localhost:4000/peliculas', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const body = await resp.json();
      console.log(body)
      dispatch(createMovie(data));

    } catch (error) {
      console.log(error);
    }
  };
};

const createMovie = () => ({
    type: types.createMovie
})

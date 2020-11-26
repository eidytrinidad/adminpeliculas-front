import { types } from "../types/types";

export const peliculasReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getAllMovies:
      return {
        ...state,
        peliculas: action.payload,
      };
    case types.getOneMovie:
      return {
        ...state,
        pelicula: action.payload,
      };

    default:
      return state;
  }
};

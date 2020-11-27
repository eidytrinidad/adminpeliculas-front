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
      case types.deleteActor:
        return {
          ...state,
       
        };
        case types.createActor:
          return {
            ...state,
           
          };
          case types.updateActor:
            return {
              ...state,
             
            };
      
    default:
      return state;
  }
};

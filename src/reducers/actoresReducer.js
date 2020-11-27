import { types } from "../types/types";

export const actoresReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getAllActors:
      return {
        ...state,
        actores: action.payload,
      };
    case types.createActor:
      return {
        ...state,
        actores: action.payload,
      };
    case types.updateActor:
      return {
        ...state,
      };
    case types.deleteActor:
      return {
        ...state,
      };

    default:
      return state;
  }
};

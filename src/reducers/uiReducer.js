import { types } from "../types/types";

const initial ={
    modal:false
}
export const uiReducer = (state=initial, action) => {
  switch (action.type) {
    case types.openModal:
      return {
          ...state,
          modal:action.payload
      };
    case types.closModal:
      return {
        ...state,
        modal:action.payload
      };

    default:
      return state;
  }
};

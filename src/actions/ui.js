import { types } from "../types/types";


export const openModal = () => ({
  type: types.openModal,
  payload: true,
});
export const closeModal = () => ({
    type: types.closModal,
    payload: false,
  });
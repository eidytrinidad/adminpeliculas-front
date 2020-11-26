import {types} from '../types/types'

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
        const resp = await fetch('http://localhost:4000/actores', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const body = await resp.json();
        console.log(body)
        dispatch(createActors(data));
  
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  const createActors = () => ({
      type: types.createActor
  })
  
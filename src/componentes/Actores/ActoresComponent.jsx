import React from 'react'

export const ActoresComponent = ({data}) => {
    return (
        <div 
              className="pelicula" 
              
              data-toggle="modal"
              data-target="#exampleModal"
             
              >
                <div className="imagen">
                  <img src={`img/${data.foto}`} alt="foto" />
                </div>
                <h4>{data.nombrecompleto}</h4>
             
              </div>
    )
}

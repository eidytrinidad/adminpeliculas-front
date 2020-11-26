import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StartGetPeliculas } from "../../actions/peliculas";
import { openModal } from "../../actions/ui";
import { PopupPelicula } from "./PopupPelicula";
export const Peliculas = () => {
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [peliculasResult, setPeliculasResult] = useState([]);
  const [pelicula, setPelicula] = useState([]);
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);

  const { peliculas } = useSelector((state) => state.peliculas);

  useEffect(() => {
    dispatch(StartGetPeliculas());
  }, [setPeliculasResult]);

  useMemo(() => {
    setPeliculasResult(peliculas);
  }, [peliculas]);

  const handleNombre = (e) => {
    setNombre(e.target.value);
    const search = e.target.value.toLocaleLowerCase();
    const result = peliculas.filter((pelicula) =>
      pelicula.titulo.toLocaleLowerCase().includes(search)
    );

    setPeliculasResult(result);
  };
  const handleGenero = (e) => {
    setGenero(e.target.value);

    setNombre("");
    if (e.target.value === "") {
      setPeliculasResult(peliculas);
    } else {
      const result = peliculas.filter(
        (pelicula) => pelicula.genero === e.target.value
      );
      setPeliculasResult(result);
    }
  };

  return (
    <section className="peliculas">
      <article className="contenedor">
        <h1>Seccion Actores</h1>
        <div className="botonBox">
          <Link className="btn btn-dark" to="/actores/agregar">
            Agregar Pelicula
          </Link>
        </div>

        <form className="row">
          <div className="form-group mt-5 col-10 col-md-7 col-lg-8">
            <input
              value={nombre}
              onChange={handleNombre}
              type="text"
              name="search"
              className="form-control"
              placeholder="Ingrese el Titulo de la Pelicula para buscar ex:(Batman)"
            />
          </div>
          <div className="form-group col-10 col-md-4 col-lg-4 mt-5">
            <select
              name="genero"
              className="form-control"
              value={genero}
              onChange={(e) => setNombre(e.target.value)}
              onChange={handleGenero}
            >
              <option value="">Seleccionar el Genero (Mostrar Todos)</option>

              {peliculas !== undefined &&
                peliculas.map((pelicula) =>(
                 
                <option key={pelicula.id} value={pelicula.genero}>{pelicula.genero}</option>
                 ))}
              {/* <option value="accion">Accion</option>
              <option value="aventura">Aventura</option> */}
            </select>
          </div>
        </form>

        <div className="grid">
          {peliculasResult !== undefined &&
            peliculasResult.map((pelicula) => (
              <div
                className="pelicula"
                key={pelicula.id}
                onClick={() => {
                  dispatch(openModal());
                  setPelicula(pelicula);
                }}
              >
                <div className="imagen">
                  <img src={`img/${pelicula.foto}`} alt="foto" />
                </div>
                <div className="texto">
                  <h5>{pelicula.titulo}</h5>
                </div>
              </div>
            ))}
        </div>
      </article>

      {modal && <PopupPelicula pelicula={pelicula} />}
    </section>
  );
};

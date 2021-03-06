import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../componentes/Home";
import { Menu } from "../componentes/Menu";
import { Actores } from "../componentes/Actores/Actores";
import { Peliculas } from "../componentes/Peliculas/Peliculas";
import { AgregarPelicula } from "../componentes/Peliculas/AgregarPelicula";
import { AgregarActor } from "../componentes/Actores/AgregarActor";
import { EditarPelicula } from "../componentes/Peliculas/EditarPelicula";
import { EditarActores } from "../componentes/Actores/EditarActores";

export const AppRouter = () => {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route exact path="/peliculas" component={Peliculas} />
        <Route exact path="/actores" component={Actores} />
        <Route exact path="/peliculas/agregar" component={AgregarPelicula} />
        <Route exact path="/peliculas/editar/:id" component={EditarPelicula} />
        <Route exact path="/actores/editar/:id" component={EditarActores} />
        <Route exact path="/actores/agregar" component={AgregarActor} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

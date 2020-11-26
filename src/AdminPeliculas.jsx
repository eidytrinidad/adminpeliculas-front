import { Provider } from "react-redux";
import { AppRouter } from "./rutas/AppRouter";
import { store } from "./store/store";

function AdminPeliculas() {
  return (
    <Provider store={store}>
      <AppRouter />
      {/* <h1>Hola</h1> */}
    </Provider>
   
  );
}

export default AdminPeliculas;

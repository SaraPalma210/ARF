import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

import { ListaContactos } from "./componentes/agenda-list.component";
import { EditaContacto } from "./componentes/Editar.component";
import { AddAgenda } from "./componentes/add.component";
import Application from "./componentes/Application";
import { UserContext } from "./providers/UserProvider";


export function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      <header className="App-header">
        <nav className="navbar navbar-expand navbar-dark bg-info">

          <h3 className="p-auto text-white">AGENDA</h3>
          <div className="navbar-nav mx-5">
            <li className="nav-item ml-auto">
              <Link to={"/agenda"} className="nav-link">
                <h5 className="text-white">Contactos</h5>
              </Link>
            </li>
            {
              user ? 
              <li className="nav-item mx-2">
              <Link to={"/add"} className="nav-link">
                <h5 className="text-white">Añadir</h5>
              </Link>
            </li>
            : <li>

            </li>
            }
            
          </div>
          <div className="ml-auto">
            <Application >
            </Application>
          </div>
        </nav>

      </header>
      <main>
        <Switch>
          <Route exact path={["/", "/agenda"]} component={ListaContactos} />
          <Route path="/agenda/:id" component={EditaContacto}></Route>
          <Route path="/add" component={AddAgenda}></Route>
        </Switch>
      </main>
    </Router>


  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagina1 from "./pages/Pagina1";
import Page404 from "./pages/PageNotFound/Page404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pagina1/>
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

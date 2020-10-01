import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { Home } from "./components/Home/Home";
import { AddItems } from "./components/Items/AddItems";
import { DeleteItem } from "./components/Items/DeleteItem";
import { UpdateItem } from "./components/Items/UpdateItem";
function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addItems">
            <AddItems />
          </Route>
          <Route path="/deleteItems">
            <DeleteItem />
          </Route>
          <Route path="/updateItems">
            <UpdateItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

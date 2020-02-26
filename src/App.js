import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/notFound" component={NotFound}></Route>
          <Redirect exact from="/" to="/movies"></Redirect>
          <Redirect to="/notFound"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

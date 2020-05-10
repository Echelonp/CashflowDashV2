import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component
import Dashboard from "./components/dashboard/Dashboard";
import Sidenav from "./components/dashboard/cashFlowSensitivity/Sidenav";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/sidenav" component={Sidenav}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

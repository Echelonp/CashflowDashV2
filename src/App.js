import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component
import Dashboard from "./components/dashboard/Dashboard";
import CashFlowSensitivity from "./components/dashboard/cashFlowSensitivity/CashFlowSensitivity";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/test" component={CashFlowSensitivity}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

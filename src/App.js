import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component
import Dashboard from "./components/dashboard/Dashboard";
// import Navbar from "./components/layout/Navbar";
import DayChart from "./components/dashboard/DayChart";
import Solution from "./components/dashboard/cashFlowSensitivity/Solution";
import CashFlowSensitivityBootsrap from "./components/dashboard/cashFlowSensitivity/CashFlowSensitivityv2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/daychart" component={DayChart}></Route>
          <Route path="/solution" component={Solution}></Route>
          <Route path="/test" component={CashFlowSensitivityBootsrap}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

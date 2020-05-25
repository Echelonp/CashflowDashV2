import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component
import Dashboard from "./components/dashboard/Dashboard";
// import Navbar from "./components/layout/Navbar";
import DayChart from "./components/dashboard/DayChart";
import Solution from "./components/dashboard/cashFlowSensitivity/Solution";
import Table from "./components/dashboard/Table";

const styles = {
  fontFamily: "Kanit",
};

function App() {
  return (
    <BrowserRouter>
      <div className="App" styles={styles}>
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/daychart" component={DayChart}></Route>
          <Route path="/solution" component={Solution}></Route>
          <Route path="/test" component={Table}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import NetCashChart from "./NetCashChart";
// fn
import {
  cashToDatapointsForCombiChart,
  cashBalanceOnlyBase,
} from "../../functions/DashboardFN";

class Dashboard extends Component {
  cashToDatapointForStackedColumn = (cash) => {
    // expect parameter type like list of dictionary  such as cashIncome or cashExpense
    // const cash = this.state.cashIncome;
    let cashData = [];
    for (let i = 0; i < cash.length; i++) {
      let datapoint = [];
      for (let j = 0; j < 12; j++) {
        datapoint.push({
          label: this.state.monthsShort[j],
          y: cash[i]["cash"][this.state.monthsShort[j]],
        });
      }
      cashData.push({
        name: cash[i]["name"],
        datapoints: datapoint,
      });
    }
    return cashData;
  };
  render() {
    // console.log("Props Dash:", this.props);
    // console.log("CashIncome:", this.props.projects.cashIncome);
    // console.log("CashExpense:", this.props.projects.cashExpense);
    const datapointForCombiChart = cashToDatapointsForCombiChart(
      this.props.projects.cashIncome,
      this.props.projects.cashExpense,
      this.props.projects.cashInit,
      this.props.projects.monthsShort
    );
    console.log("OnlyBase", datapointForCombiChart);

    return (
      <div className="dashboard container">
        <NetCashChart
          datapointForCombiChart={datapointForCombiChart}
        ></NetCashChart>
        <p>Dashboard</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MapState", state);
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);

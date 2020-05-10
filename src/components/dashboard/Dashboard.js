import React, { Component } from "react";
import { connect } from "react-redux";
import NetCashChart from "./NetCashChart";
import RevCashChart from "./RevCashChart";
// fn
import {
  cashToDatapointsForCombiChart,
  cashToDatapointForStackedColumn,
} from "../../functions/DashboardFN";

class Dashboard extends Component {
  render() {
    // console.log("Props Dash:", this.props);
    const datapointForCombiChart = cashToDatapointsForCombiChart(
      this.props.projects.cashIncome,
      this.props.projects.cashExpense,
      this.props.projects.cashInit,
      this.props.projects.monthsShort
    );

    const datapointIncomeStackColumn = cashToDatapointForStackedColumn(
      this.props.projects.cashIncome,
      this.props.projects.monthsShort
    );
    const datapointExpenseStackColumn = cashToDatapointForStackedColumn(
      this.props.projects.cashExpense,
      this.props.projects.monthsShort
    );
    console.log("datapointIncomeStackColumn", datapointIncomeStackColumn);
    console.log("datapointExpenseStackColumn", datapointExpenseStackColumn);

    return (
      <div className="dashboard container">
        <NetCashChart
          datapointForCombiChart={datapointForCombiChart}
        ></NetCashChart>
        <RevCashChart
          dataPoints={datapointIncomeStackColumn}
          graph_name={"กระแสเงินสดรับ"}
        ></RevCashChart>
        <RevCashChart
          dataPoints={datapointExpenseStackColumn}
          graph_name={"กระแสเงินสดจ่าย"}
        ></RevCashChart>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log("MapState", state);
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);

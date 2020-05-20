import React, { Component } from "react";
import { connect } from "react-redux";
import NetCashChart from "./NetCashChart2";
import RevCashChart from "./RevCashChart";
import RevCashChartEx from "./RevCashChartEx";
import FinancialHighlight from "./FinancialHighlight";
import CashFlowSensitivity from "./cashFlowSensitivity/CashFlowSensitivity";

// fn
import {
  cashToDatapointsForCombiChart,
  cashToDatapointForStackedColumn,
} from "../../functions/DashboardFN";

class Dashboard extends Component {
  render() {
    // console.log("Props Dash:", this.props);
    const solutionListIncomeSide = this.props.projects.SolutionCheckedList5th.filter(
      (solution) => {
        return solution.revSide === true;
      }
    );
    const solutionListExpenseSide = this.props.projects.SolutionCheckedList5th.filter(
      (solution) => {
        return solution.revSide !== true;
      }
    );
    console.log("solutionListIncomeSide", solutionListIncomeSide);
    console.log("solutionListExpenseSide", solutionListExpenseSide);

    const newCashIncome = this.props.projects.cashIncome
      .concat(this.props.projects.PolicyCheckedList, solutionListIncomeSide)
      .sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
    const newCashExpense = this.props.projects.cashExpense
      .concat(this.props.projects.SolutionCheckedList, solutionListExpenseSide)
      .sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
    // console.log("newCashExpense", newCashExpense);

    const datapointForCombiChart = cashToDatapointsForCombiChart(
      newCashIncome,
      newCashExpense,
      this.props.projects.cashInit,
      this.props.projects.monthsShort
    );

    const datapointIncomeStackColumn = cashToDatapointForStackedColumn(
      newCashIncome,
      this.props.projects.monthsShort
    );
    const datapointExpenseStackColumn = cashToDatapointForStackedColumn(
      newCashExpense,
      this.props.projects.monthsShort
    );
    // console.log("datapointIncomeStackColumn", datapointIncomeStackColumn);
    // console.log("datapointExpenseStackColumn", datapointExpenseStackColumn);

    return (
      <div>
        <div className="row">
          <div className="section col s12 m9">
            <FinancialHighlight></FinancialHighlight>
            <div className="section col s12 m12">
              <NetCashChart
                datapointForCombiChart={datapointForCombiChart}
              ></NetCashChart>
            </div>

            <div className="section col s12 m12 l6">
              <RevCashChart
                dataPoints={datapointIncomeStackColumn}
                graph_name={"กระแสเงินสดรับ"}
              ></RevCashChart>
            </div>

            <div className="section col s12 m12 l6">
              <RevCashChartEx
                dataPoints={datapointExpenseStackColumn}
                graph_name={"กระแสเงินสดจ่าย"}
              ></RevCashChartEx>
            </div>
          </div>
          <div className="section col s12 m3">
            <div className="">
              <CashFlowSensitivity></CashFlowSensitivity>
            </div>
          </div>
        </div>

        {/* <RevCashStackedBarChart></RevCashStackedBarChart> */}
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

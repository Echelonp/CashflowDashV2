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
    const newCashIncome = this.props.projects.cashIncome
      .concat(this.props.projects.PolicyCheckedList)
      .sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
    const datapointForCombiChart = cashToDatapointsForCombiChart(
      newCashIncome,
      this.props.projects.cashExpense,
      this.props.projects.cashInit,
      this.props.projects.monthsShort
    );

    const datapointIncomeStackColumn = cashToDatapointForStackedColumn(
      newCashIncome,
      this.props.projects.monthsShort
    );
    const datapointExpenseStackColumn = cashToDatapointForStackedColumn(
      this.props.projects.cashExpense,
      this.props.projects.monthsShort
    );
    // console.log("datapointIncomeStackColumn", datapointIncomeStackColumn);
    // console.log("datapointExpenseStackColumn", datapointExpenseStackColumn);

    return (
      <div>
        <div className="row">
          <div className="section col s12 m8 l9">
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
          <div className="section col s12 m4 l3">
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

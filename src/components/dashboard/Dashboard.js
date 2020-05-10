import React, { Component } from "react";
import { connect } from "react-redux";
import NetCashChart from "./NetCashChart";
import RevCashChart from "./RevCashChart";
// import RevCashStackedBarChart from "./RevCashStackedBarChart";
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
      <div>
        <div className="row">
          <div className="section col s12 m9">
            <div className="card section col s12 m6">
              <div className="col s12 m6">
                <span className="card-title">เงินคงเหลือปลายงวด</span>
                <p className="right-align">ล้านบาท</p>
                <span className="card-title">3,259</span>
              </div>
              <div className="col s12 m6">
                <div className="card col s12">
                  <div className="col s6">
                    <div className="col s12">Test</div>
                    <div className="col s12">Test</div>
                  </div>
                  <div className="col s6">
                    <div className="col s12">Test</div>
                    <div className="col s12">Test</div>
                  </div>
                </div>
                <div className="card col s12">
                  <div className="col s6">
                    <div className="col s12">Test</div>
                    <div className="col s12">Test</div>
                  </div>
                  <div className="col s6">
                    <div className="col s12">Test</div>
                    <div className="col s12">Test</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card col s12">
                <span>Test</span>
              </div>
              <div className="card col s12">
                <span>Test</span>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card col s12">
                <span>Test</span>
              </div>
              <div className="card col s12">
                <span>Test</span>
              </div>
            </div>
            <div className="section col s12 m12">
              <NetCashChart
                datapointForCombiChart={datapointForCombiChart}
              ></NetCashChart>
            </div>

            <div className="section col s12 m6">
              <RevCashChart
                dataPoints={datapointIncomeStackColumn}
                graph_name={"กระแสเงินสดรับ"}
              ></RevCashChart>
            </div>

            <div className="section col s12 m6">
              <RevCashChart
                dataPoints={datapointExpenseStackColumn}
                graph_name={"กระแสเงินสดจ่าย"}
              ></RevCashChart>
            </div>
          </div>
          <div className="section col s12 m3">
            <p>Test</p>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NetCashChart from "./NetCashChart";
import RevCashChart from "./RevCashChart";
import RevCashChartEx from "./RevCashChartEx";
import DayChart from "./DayChart";
import FinancialHighlight from "./FinancialHighlight";
import HeaderMe from "./Header";
import CashFlowSensitivity from "./cashFlowSensitivity/CashFlowSensitivity";
import Table from "./Table";
import styled from "styled-components";

// fn
import {
  cashToDatapointsForCombiChart,
  cashToDatapointForStackedColumn,
} from "../../functions/DashboardFN";

//CSS
const DashboardCss = styled.div`
  background-color: #f5f5f5;
`;

class Dashboard extends Component {
  render() {
    // console.log("Props Dash:", this.props);
    // console.log("Props Dash:", this.props.projects.cashIncome);
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
    // console.log("solutionListIncomeSide", solutionListIncomeSide);
    // console.log("solutionListExpenseSide", solutionListExpenseSide);

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
    // console.log("datapointForCombiChart", datapointForCombiChart);

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
      <DashboardCss>
        <div className="row">
          <div className="section col s12 m9">
            <HeaderMe></HeaderMe>
            <FinancialHighlight
              data={datapointForCombiChart}
            ></FinancialHighlight>
            {/* Insert TAP */}
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s6 m4">
                    <Link to="#netRev">เงินหมุนเวียนคงเหลือรายเดือน</Link>
                  </li>
                  <li className="tab col s6 m4">
                    <Link to="#daylychart">เงินหมุนเวียนคงเหลือรายวัน</Link>
                  </li>
                  <li className="tab col s6 m4">
                    <Link to="#breakdown">รายละเอียดรายรับ-จ่าย</Link>
                  </li>
                </ul>
              </div>
              {/* 1st Tab */}
              <div className="col s12" id="netRev">
                <NetCashChart
                  datapointForCombiChart={datapointForCombiChart}
                ></NetCashChart>
              </div>
              {/* 2nd Tab */}
              <div className="col s12" id="breakdown">
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

              <div className="col s12" id="daylychart">
                <DayChart></DayChart>
              </div>
              {/* Table */}
              <div className="col s12">
                <div className="row">
                  <div className="col s12 m6">
                    <Table
                      data={newCashIncome}
                      nameChart="เงินรับประจำเดือน"
                    ></Table>
                  </div>
                  <div className="col s12 m6">
                    <Table
                      data={newCashExpense}
                      nameChart="เงินจ่ายประจำเดือน"
                    ></Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CashFlowSensitivity zone */}
          <div className="section col s12 m3">
            <div className="">
              <CashFlowSensitivity></CashFlowSensitivity>
            </div>
          </div>
        </div>
      </DashboardCss>
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

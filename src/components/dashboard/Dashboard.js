import React, { Component } from "react";
import { connect } from "react-redux";
import NetCashChart from "./NetCashChart";

class Dashboard extends Component {
  cashBalance = (cash) => {
    const cashList = cash.map((cashIncome, i) => cashIncome.cash);
    let cashMonthTotal = [];
    const month = Object.keys(cashList[0]);

    for (let i = 0; i < month.length; i++) {
      let cash_col = 0;
      for (let j = 0; j < cashList.length; j++) {
        cash_col = cash_col + cashList[j][month[i]];
      }
      cashMonthTotal.push({
        key: month[i],
        value: cash_col,
      });
    }
    // console.log(cashIncomeMonthTotal);
    return cashMonthTotal;
  };

  cashNetCal = (cash_dic1, cash_dic2, cashInit) => {
    if (cash_dic1.length !== cash_dic2.length) {
      return false;
    }
    let cashNet = [];
    let cash_tmp = 0;
    // console.log(cash_dic1[0]["value"]);

    for (let i = 0; i < cash_dic1.length; i++) {
      if (i === 0) {
        cash_tmp = cash_dic1[i]["value"] - cash_dic2[i]["value"] + cashInit;
        cashNet.push({
          key: cash_dic1[i]["key"],
          value: cash_tmp,
        });
      } else {
        cash_tmp = cash_dic1[i]["value"] - cash_dic2[i]["value"] + cash_tmp;
        cashNet.push({
          key: cash_dic1[i]["key"],
          value: cash_tmp,
        });
      }
    }
    return cashNet;
  };

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

  cashToDatapointsForCombiChart = (
    cashIncome,
    cashExpense,
    cashInit,
    monthsShort
  ) => {
    const cashIncomeMonthTotal = this.cashBalance(cashIncome);
    const cashExpenseMonthTotal = this.cashBalance(cashExpense);
    const cashNetMonthTotal = this.cashNetCal(
      cashIncomeMonthTotal,
      cashExpenseMonthTotal,
      cashInit
    );
    let datapointsCashIncomeMonthTotal = [];
    let datapointsCashExpenseMonthTotal = [];
    let datapointsNetMonthTotal = [];

    for (let i = 0; i < 12; i++) {
      if (i < cashNetMonthTotal.length) {
        datapointsCashIncomeMonthTotal.push({
          label: monthsShort[i],
          y: cashIncomeMonthTotal[i]["value"],
        });
        datapointsCashExpenseMonthTotal.push({
          label: monthsShort[i],
          y: cashExpenseMonthTotal[i]["value"],
        });
        datapointsNetMonthTotal.push({
          label: monthsShort[i],
          y: cashNetMonthTotal[i]["value"],
        });
      } else {
        datapointsCashIncomeMonthTotal.push({
          label: monthsShort[i],
          y: null,
        });
        datapointsCashExpenseMonthTotal.push({
          label: monthsShort[i],
          y: null,
        });
        datapointsNetMonthTotal.push({
          label: monthsShort[i],
          y: null,
        });
      }
    }
    let data = [];
    data.push({
      datapointsCashIncomeMonthTotal: datapointsCashIncomeMonthTotal,
    });
    data.push({
      datapointsCashExpenseMonthTotal: datapointsCashExpenseMonthTotal,
    });
    data.push({
      datapointsNetMonthTotal: datapointsNetMonthTotal,
    });
    return data;
  };

  render() {
    // console.log("Props Dash:", this.props);
    // console.log("CashIncome:", this.props.projects.cashIncome);
    // console.log("CashExpense:", this.props.projects.cashExpense);
    const datapointForCombiChart = this.cashToDatapointsForCombiChart(
      this.props.projects.cashIncome,
      this.props.projects.cashExpense,
      this.props.projects.cashInit,
      this.props.projects.monthsShort
    );
    // console.log("Datapoint", datapointForCombiChart);
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

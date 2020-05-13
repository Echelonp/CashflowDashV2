import React, { Component } from "react";
import { connect } from "react-redux";
import Policy from "./Policy";

class CashFlowSensitivity extends Component {
  policyApply2 = (policyId, checkedValue, n_new) => {
    let CheckedboxTmp = this.state.Checkedbox;
    CheckedboxTmp[policyId] = checkedValue;
    this.setState({
      Checkedbox: CheckedboxTmp,
    });
    // console.log("Checkbox test", this.state.Checkedbox);

    let newCashIncome = this.state.cashIncome;
    // Add new one
    for (let i = 0; i < this.state.policyList.length; i++) {
      let i_key = String(i + 10);
      if (this.state.Checkedbox[i_key]) {
        newCashIncome.push(this.state.policyList[i]);
      } else {
        newCashIncome = newCashIncome.filter((policy) => {
          return policy.id !== i + 10;
        });
      }
    }

    const uniqueNames = Array.from(new Set(newCashIncome));

    console.log("Checkedbox", this.state.Checkedbox);
    this.setState({
      cashIncome: uniqueNames,
      n_init: n_new + 1,
    });
  };
  policyApply = (policyId, checkedValue) => {
    console.log("PolicyApplyClicked", policyId, checkedValue);
  };

  render() {
    console.log("Props : ", this.props.projects.policyList);
    return (
      <div className="card col s12">
        <Policy
          policyList={this.props.projects.policyList}
          policyApply={this.policyApply}
        ></Policy>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("MapState", state);
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(CashFlowSensitivity);

import React, { Component } from "react";
import { connect } from "react-redux";
import Policy from "./Policy";
import SolutionTmp from "./SolutionTmp";
import { Link } from "react-router-dom";
import {
  adjustSliderAction,
  checkedPolicyApplyAction,
} from "../../../store/actions/CashFlowSensitivityActions";

class CashFlowSensitivity extends Component {
  state = {
    checkedIdList: [],
  };

  policyApply = (policyId, checkedValue) => {
    // console.log("PolicyApplyClicked", policyId, checkedValue);

    // Creat list of cheackedBox==true and update it to state
    let checkedIdList = [];
    if (checkedValue) {
      checkedIdList = [...this.state.checkedIdList, policyId];
      this.setState({ checkedIdList });
      // console.log("checkedIdList", checkedIdList);
    } else {
      checkedIdList = this.state.checkedIdList.filter((eachId) => {
        return eachId !== policyId;
      });
      this.setState({ checkedIdList });
      // console.log("checkedIdList", checkedIdList);
    }

    // create list of policy that contain in checkedIdList
    const policyListApply = this.props.projects.policyList.filter((policy) => {
      return checkedIdList.indexOf(policy.id) !== -1;
    });
    // console.log("policyListApply", policyListApply);
    this.props.checkedPolicyApplyAction(policyListApply);
  };

  sliderValue = (newValue, policyId) => {
    console.log(newValue, policyId);
    this.props.adjustSliderAction(newValue, policyId);
  };
  render() {
    // console.log("Props : ", this.props.projects.policyList[0].id);
    return (
      <div className="col s12">
        <ul id="tabs-swipe-demo" className="tabs">
          <li className="tab col s6">
            <Link to="#test-swipe-2">มาตรการ</Link>
          </li>
          <li className="tab col s6">
            <Link to="#test-swipe-3">แนวทางแก้ไข</Link>
          </li>
        </ul>

        <div id="test-swipe-2" className="col s12">
          <Policy
            policyList={this.props.projects.policyList}
            policyApply={this.policyApply}
            sliderValue={this.sliderValue}
          ></Policy>
        </div>
        <div id="test-swipe-3" className="col s12">
          <SolutionTmp></SolutionTmp>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    checkedPolicyApplyAction: (newPolicyList) => {
      dispatch(checkedPolicyApplyAction(newPolicyList));
    },
    adjustSliderAction: (sliderValue, policyId) => {
      dispatch(adjustSliderAction(sliderValue, policyId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CashFlowSensitivity);

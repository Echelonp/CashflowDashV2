import React, { Component } from "react";
import { connect } from "react-redux";
import Policy from "./Policy";
import SolutionTmp from "./SolutionTmp";
import Solution from "./Solution";
import { Link } from "react-router-dom";
import {
  adjustSliderAction,
  checkedPolicyApplyAction,
  checked5thSolutionAction,
  adjustSliderActionSolution,
} from "../../../store/actions/CashFlowSensitivityActions";

class CashFlowSensitivity extends Component {
  state = {
    // This checkedIdList for policy
    checkedIdList: [],
    // List for checked solution
    solutionCheckedIdList: [],
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
  policySliderValue = (newValue, policyId) => {
    console.log(newValue, policyId);
    this.props.adjustSliderAction(newValue, policyId);
  };

  // fn for solution
  solutionApply = (solutionId, chechedValue) => {
    // console.log("solutionApply", solutionId, chechedValue);
    let solutionCheckedList = [];
    if (chechedValue) {
      solutionCheckedList = [...this.state.solutionCheckedIdList, solutionId];
      this.setState({
        solutionCheckedIdList: solutionCheckedList,
      });
    } else {
      solutionCheckedList = this.state.solutionCheckedIdList.filter(
        (eachSolution) => {
          return eachSolution !== solutionId;
        }
      );
      this.setState({
        solutionCheckedIdList: solutionCheckedList,
      });
    }
    // Create list of solutions from solutionCheckedIdList
    const solutionListApply = this.props.projects.solutionList.filter(
      (solution) => {
        return solutionCheckedList.indexOf(solution.id) !== -1;
      }
    );
    // console.log("solutionListApply", solutionListApply);
    this.props.checked5thSolutionAction(solutionListApply);
  };

  solutionSliderValue = (newValue, solutionId) => {
    // console.log(newValue, solutionId);
    this.props.adjustSliderActionSolution(newValue, solutionId);
  };
  componentDidUpdate = () => {
    // console.log("STATE", this.state.solutionCheckedIdList);
  };

  render() {
    console.log("Props : ", this.props);
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
            sliderValue={this.policySliderValue}
          ></Policy>
        </div>
        <div id="test-swipe-3" className="col s12">
          <SolutionTmp
            solutionList={this.props.projects.solutionList}
            solutionApply={this.solutionApply}
            solutionSliderValue={this.solutionSliderValue}
          ></SolutionTmp>
          <div className="card">
            <Solution></Solution>
          </div>
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
    checked5thSolutionAction: (newSolution) => {
      dispatch(checked5thSolutionAction(newSolution));
    },
    adjustSliderActionSolution: (sliderValue, solutionId) => {
      dispatch(adjustSliderActionSolution(sliderValue, solutionId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CashFlowSensitivity);

import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import {
  checkedSolutionAction,
  unCheckedSolutionAction,
} from "../../../store/actions/CashFlowSensitivityActions";

// This component for solution after first 5th solutions
// This solution we can add new value and specify the month for it
class SolutionList extends Component {
  state = {
    checkedSolutionList: [],
    date1: new Date(),
    date2: new Date(),
    solutionAmount1: 0,
    solutionAmount2: 0,
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  handleDatePickleChange = (date) => {
    // console.log("HnadleChange", date.getMonth());
    this.setState({ date1: date });
  };
  handleDatePickleChange2 = (date) => {
    // console.log("HnadleChange", date.getMonth());
    this.setState({ date2: date });
  };

  handleInputChange = (e) => {
    // console.log("State", this.state);
    this.setState({
      [e.target.id.slice(0, 15)]: parseFloat(e.target.value),
    });
  };

  //when we checked this fn is going to call dispatch fn then update state data in Project reducer
  handleChecked = (e) => {
    if (e.target.checked) {
      let dic1 = {
        id: 1,
        namefull: "name",
        name: "name",
        revSide: false,
        baseChart: false,
        breakdownDis: true,
        factorCoporate: 100,
        cash: {
          Jan: 0,
          Feb: 0,
          Mar: 0,
          Apr: 0,
          May: 0,
          Jun: 0,
          Jul: 0,
          Aug: 0,
          Sep: 0,
          Oct: 0,
          Nov: 0,
          Dec: 0,
        },
      };
      dic1.id = this.props.id;
      dic1.name = this.props.name;
      dic1.namefull = this.props.name;
      dic1.revSide = this.props.revSide;
      dic1.cash[this.state.monthsShort[this.state.date1.getMonth()]] +=
        -1 * this.state.solutionAmount1;
      dic1.cash[this.state.monthsShort[this.state.date2.getMonth()]] +=
        -1 * this.state.solutionAmount2;
      this.props.checkedSolutionAction(dic1);
    } else {
      this.props.unCheckedSolutionAction(this.props.id);
      //   console.log(this.props.id);
    }
  };

  componentDidUpdate = () => {
    // console.log("Solution list state", this.state);
  };

  render() {
    // console.log("Solution list", this.props);
    return (
      <li>
        {/* 1st list */}
        <div>
          {/* 1.Header */}
          <div className="col s12 pull-s1">
            <label>
              <input
                type="checkbox"
                id={this.props.id}
                className="filled-in"
                onChange={this.handleChecked}
              ></input>
              <span
                className="grey-text text-darken-3"
                style={{ fontSize: "16px" }}
              >
                {this.props.name}
              </span>
            </label>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="col s2">{/* <span>เพิ่ม</span> */}</div>
              <div className="col s5">
                <span>ชำระในเดือน</span>
              </div>
              <div className="col s5">
                <span>จำนวนเงิน ลบ.</span>
              </div>
            </div>
            {/* 1.1 */}
            <div className="col s12">
              <div className="row">
                <div className="col s2 push-s1">
                  <p>1.</p>
                </div>
                <div className="col s5">
                  <div className="col s12">
                    <DatePicker
                      id={"date1" + this.props.id}
                      selected={this.state.date1}
                      onChange={this.handleDatePickleChange}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                  </div>
                </div>
                <div className="col s5 center">
                  <div className="col s11">
                    <input
                      id={"solutionAmount1" + this.props.id}
                      type="number"
                      className="validate"
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            {/* 1.2 */}
            <div className="col s12">
              <div className="row">
                <div className="col s2 push-s1">
                  <p>2.</p>
                </div>
                <div className="col s5">
                  <div className="col s12">
                    <DatePicker
                      id={"date2" + this.props.id}
                      selected={this.state.date2}
                      onChange={this.handleDatePickleChange2}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                  </div>
                </div>
                <div className="col s5 center">
                  <div className="col s11">
                    <input
                      id="solutionAmount2"
                      type="number"
                      className="validate"
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkedSolutionAction: (newSolution) => {
      dispatch(checkedSolutionAction(newSolution));
    },
    unCheckedSolutionAction: (solutionId) => {
      dispatch(unCheckedSolutionAction(solutionId));
    },
  };
};

export default connect(null, mapDispatchToProps)(SolutionList);

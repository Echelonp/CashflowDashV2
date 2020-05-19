import React, { Component } from "react";
import DatePicker from "react-datepicker";

class SolutionList extends Component {
  state = {
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
  handleChecked = (e) => {
    if (e.target.checked) {
      let dic1 = {
        id: 1,
        namefull: "name",
        name: "name",
        revSide: false,
        baseChart: true,
        breakdownDis: true,
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
      let testStr = "12345";
      console.log(testStr.slice(0, 3));
      //   log zone
      console.log(dic1);
      console.log(this.state.monthsShort[this.state.date1.getMonth()]);
    }
  };
  componentDidUpdate = () => {
    // console.log("State", this.state);
  };

  render() {
    // console.log("Solution list", this.props);
    return (
      <li>
        {/* 1st list */}
        <div>
          {/* 1.Header */}
          <div className="col s12 pull-s2">
            <label>
              <input
                type="checkbox"
                id={this.props.id}
                className="filled-in"
                onChange={this.handleChecked}
              ></input>
              <span>{this.props.name}</span>
            </label>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="col s2">{/* <span>เพิ่ม</span> */}</div>
              <div className="col s5">
                <span>จำนวนเงิน ลบ.</span>
              </div>
              <div className="col s5">
                <span>ชำระในเดือน</span>
              </div>
            </div>
            {/* 1.1 */}
            <div className="col s12">
              <div className="row">
                <div className="col s2">
                  <p>1.</p>
                </div>
                <div className="col s5 center">
                  <div className="col s10">
                    <input
                      id={"solutionAmount1" + this.props.id}
                      type="number"
                      className="validate"
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </div>
                <div className="col s5">
                  <div className="col s10">
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
              </div>
            </div>
            {/* 1.2 */}
            <div className="col s12">
              <div className="row">
                <div className="col s2">
                  <p>2.</p>
                </div>
                <div className="col s5 center">
                  <div className="col s10">
                    <input
                      id="solutionAmount2"
                      type="number"
                      className="validate"
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </div>
                <div className="col s5">
                  <div className="col s10">
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
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default SolutionList;

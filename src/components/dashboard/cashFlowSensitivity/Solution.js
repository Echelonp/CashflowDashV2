import React, { Component } from "react";
import DatePicker from "react-datepicker";

class Solution extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  handleDatePickleChange = (date) => {
    console.log("HnadleChange", date.getMonth());
    this.setState({ startDate: date });
  };

  dateTest = () => {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDatePickleChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
      />
    );
  };
  render() {
    return (
      <div className="row">
        <div className="col s4">
          <p>แนวทางแก้ไข</p>
          <ul className="">
            <li>
              {/* 1st list */}
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="solution1"
                    className="filled-in"
                  ></input>
                  <span>นำจ่ายรายได้แผ่นดิน</span>
                </label>

                <div className="row">
                  {/* 1.Header */}
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
                    <div className="col s2">
                      <span>1.</span>
                    </div>
                    <div className="col s5">
                      <input
                        // placeholder="จำนวนเงิน ลบ."
                        id="returnRevToState"
                        type="number"
                        className="validate"
                      ></input>
                    </div>
                    <div className="col s5">
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDatePickleChange}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                      />
                    </div>
                  </div>
                  {/* 1.2 */}
                  <div className="col s12">
                    <div className="col s2">
                      <span>2.</span>
                    </div>
                    <div className="col s5">
                      <input
                        // placeholder="จำนวนเงิน ลบ."
                        id="returnRevToState"
                        type="number"
                        className="validate"
                      ></input>
                    </div>
                    <div className="col s5">
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDatePickleChange}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Solution;

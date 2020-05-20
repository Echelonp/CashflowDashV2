import React, { Component } from "react";
import SolutionList from "./SolutionList";

class Solution extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  handleDatePickleChange = (date) => {
    console.log("HandleChange", date.getMonth());
    this.setState({ startDate: date });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="col s12 pull-s2">
            <h6> เพิ่มแนวทางแก้ไข</h6>
          </div>

          <ul className="">
            <SolutionList
              name={"นำจ่ายรายได้แผ่นดิน"}
              id={421}
              revSide={false}
            ></SolutionList>
            <SolutionList
              name={"ค่าปรับลงทุนต่ำกว่าแผน"}
              id={422}
              revSide={false}
            ></SolutionList>
            <SolutionList
              name={"ค่าซื้อกระแสไฟฟ้า EGAT"}
              id={423}
              revSide={false}
            ></SolutionList>
          </ul>
        </div>
      </div>
    );
  }
}

export default Solution;

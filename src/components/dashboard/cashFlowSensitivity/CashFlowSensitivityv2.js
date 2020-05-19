import React, { Component } from "react";

class CashFlowSensitivityBootsrap extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h4>การเลื่อนชำระค่าไฟ</h4>
                  </div>
                  <div className="col-12">
                    <h5>ผู้ใช้ไฟฟ้าทั้งหมด</h5>
                  </div>
                  <div className="col-6">
                    <p>เลื่อนชำระเงิน % </p>
                  </div>
                  <div className="col-6">
                    <input type="number"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>Test</p>
      </div>
    );
  }
}
export default CashFlowSensitivityBootsrap;

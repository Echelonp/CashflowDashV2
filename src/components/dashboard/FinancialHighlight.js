import React from "react";

function FinancialHighLight(params) {
  return (
    <div>
      <div className="card section col s12 m6">
        <div className="col s12 m6">
          <span className="card-title">เงินคงเหลือปลายงวด</span>
          <p className="right-align">ล้านบาท</p>
          <span className="card-title">3,259</span>
        </div>
        <div className="col s12 m6">
          <div className="card col s12">
            <div className="col s6">
              <div className="col s12">รวมเงินรับ</div>
              <div className="col s12">42,235</div>
            </div>
            <div className="col s6">
              <div className="col s12">ล้านบาท</div>
              <div className="col s12">+12%</div>
            </div>
          </div>
          <div className="card col s12">
            <div className="col s6">
              <div className="col s12">รวมเงินจ่าย</div>
              <div className="col s12">39,074</div>
            </div>
            <div className="col s6">
              <div className="col s12">ล้านบาท</div>
              <div className="col s12">-8%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m3">
        <div className="card col s12">
          <span>Test1</span>
        </div>
        <div className="card col s12">
          <span>Test2</span>
        </div>
      </div>
      <div className="col s12 m3">
        <div className="card col s12">
          <span>Test3</span>
        </div>
        <div className="card col s12">
          <span>Test4</span>
        </div>
      </div>
    </div>
  );
}

export default FinancialHighLight;

import React from "react";
import styled from "styled-components";

const Ptag = styled.p`
  text-align: left;
  /* display: inline-block; */
  font-size: 18px;
  color: #616161;
`;
const HighlightValue = styled.span`
  font-size: 25px;
  color: #212121;
  /* float: left; */
`;
const UnitValue = styled.span`
  font-size: 14px;
  color: #212121;
  /* float: right; */
`;
const Layout = styled.div`
  color: black;
  /* border: 2px solid grey; */
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 6px 12px;
  /* display: inline-block; */
  border-radius: 10px;
  background-color: #f5f5f5;
`;
const PercentPlus = styled.span`
  font-size: 14px;
  color: #64dd17;
`;
const PercentMinus = styled.span`
  font-size: 14px;
  color: #d32f2f;
`;

function FinancialHighLight(params) {
  return (
    <div>
      <div className="col s12 m3">
        <Layout>
          <Ptag>ยอดคงเหลือ</Ptag>
          <HighlightValue>19,643</HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="material-icons Tiny green">call_made</i>
              <PercentPlus> +12% (0.345 ล้านบาท) </PercentPlus>
            </span>
          </div>
        </Layout>
      </div>

      <div className="col s12 m3">
        <Layout>
          <Ptag>ผลต่าง รับ-จ่าย</Ptag>
          <HighlightValue>10,575</HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="material-icons Tiny red">call_received</i>
              <PercentMinus> -8% (0.345 ล้านบาท) </PercentMinus>
            </span>
          </div>
        </Layout>
      </div>
      <div className="col s12 m3">
        <Layout>
          <Ptag>รวมเงินรับ</Ptag>
          <HighlightValue>55,822</HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="material-icons Tiny green">call_made</i>
              <PercentPlus> +12% (0.345 ล้านบาท) </PercentPlus>
            </span>
          </div>
        </Layout>
      </div>
      <div className="col s12 m3">
        <Layout>
          <Ptag>รวมเงินจ่าย</Ptag>
          <HighlightValue>45,247</HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="material-icons Tiny red">call_made</i>
              <PercentMinus> -12% (0.345 ล้านบาท) </PercentMinus>
            </span>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default FinancialHighLight;

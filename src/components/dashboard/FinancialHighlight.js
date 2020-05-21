import React from "react";
import styled from "styled-components";

const Ptag = styled.p`
  text-align: left;
  /* display: inline-block; */
  font-size: 18px;
  color: #616161;
  margin-bottom: 0px;
  margin-top: 2px;
`;
const HighlightValue = styled.span`
  font-size: 22px;
  color: #212121;
  /* float: left; */
`;
const UnitValue = styled.span`
  font-size: 12px;
  color: #9e9e9e;
  /* float: right; */
`;
const Layout = styled.div`
  color: #0277bd;
  /* border: 2px solid grey; */
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 6px 6px;
  /* display: inline-block; */
  border-radius: 10px;
  background-color: #ffffff;
`;
const PercentPlus = styled.span`
  font-size: 14px;
  color: #64dd17;
`;
const PercentMinus = styled.span`
  font-size: 14px;
  color: #d32f2f;
`;

function FinancialHighLight(props) {
  // console.log(props.data);
  const dateTest = new Date();
  // console.log(
  //   props.data[0]["datapointsCashIncomeMonthTotal"][dateTest.getMonth()]["y"]
  // );
  // console.log(
  //   props.data[1]["datapointsCashExpenseMonthTotal"][dateTest.getMonth()]["y"]
  // );
  // console.log("DateDay", dateTest.getDate() * 2);
  // console.log("DateMonth", dateTest.getMonth());

  // This day
  const cashIncome =
    props.data[0]["datapointsCashIncomeMonthTotal"][dateTest.getMonth()]["y"];
  const cashExpense =
    props.data[1]["datapointsCashExpenseMonthTotal"][dateTest.getMonth()]["y"];
  const cashNet = cashIncome + cashExpense;
  const cashBalance =
    props.data[2]["datapointsNetMonthTotal"][dateTest.getMonth()]["y"];
  const cashInit = cashBalance - cashNet;

  console.log("cashNet", cashNet.toLocaleString());
  // console.log("cashbalance", cashBalance);
  // console.log("cashInit", cashInit);
  // Number((6.688689).toFixed(1));
  // console.log(
  //   "Devision Test",
  //   Number((cashIncome * dateTest.getDate()) / 30).toFixed(1)
  // );

  return (
    <div>
      <div className="col s12 m3">
        <Layout>
          <Ptag>ยอดคงเหลือ</Ptag>
          <HighlightValue>
            {((cashBalance * dateTest.getDate()) / 30).toLocaleString()}
          </HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="tiny material-icons">call_made</i>
              <PercentPlus>+12%(0.345ลบ.)</PercentPlus>
            </span>
          </div>
        </Layout>
      </div>

      <div className="col s12 m3">
        <Layout>
          <Ptag>ผลต่าง รับ-จ่าย</Ptag>
          <HighlightValue>
            {((cashNet * dateTest.getDate()) / 30).toLocaleString()}
          </HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="tiny material-icons">call_received</i>
              <PercentMinus>-8%(0.345ลบ.)</PercentMinus>
            </span>
          </div>
        </Layout>
      </div>
      <div className="col s12 m3">
        <Layout>
          <Ptag>รวมเงินรับ</Ptag>
          <HighlightValue>
            {((cashIncome * dateTest.getDate()) / 30).toLocaleString()}
          </HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="tiny material-icons">call_made</i>
              <PercentPlus>+12%(0.345ลบ.)</PercentPlus>
            </span>
          </div>
        </Layout>
      </div>
      <div className="col s12 m3">
        <Layout>
          <Ptag>รวมเงินจ่าย</Ptag>
          <HighlightValue>
            {((-1 * (cashExpense * dateTest.getDate())) / 30).toLocaleString()}
          </HighlightValue>
          <UnitValue> ล้านบาท</UnitValue>
          <div>
            <span>
              <i className="tiny material-icons">call_received</i>
              <PercentMinus>-12%(0.345ลบ.)</PercentMinus>
            </span>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default FinancialHighLight;

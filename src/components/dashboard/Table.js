import React from "react";
import styled from "styled-components";

//CSS
const TableCss = styled.div`
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 10px;
`;
const TableHeadCss = styled.thead`
  color: #0277bd;
  font-size: 16px;
`;
const ThCss1 = styled.th`
  color: #0277bd;
  font-size: 18px;
`;
const ThCss2 = styled.th`
  color: #0277bd;
  text-align: right;
  font-size: 18px;
`;
const TabledataCss1 = styled.td`
  color: #4a4a4a;
  text-align: left;
  font-size: 16px;
  /* font-weight: 1500; */
`;
const TabledataCss2 = styled.td`
  color: #4a4a4a;
  text-align: right;
  font-size: 18px;
  /* font-weight: 1500; */
`;

const Table = (props) => {
  //   console.log("Table", props);
  const dataIn = props.data.sort((a, b) => {
    if (a.cash["May"] < b.cash["May"]) {
      return 1;
    } else {
      return -1;
    }
  });

  const tableList = dataIn.map((data, i) => {
    return (
      <tr key={data.id}>
        <TabledataCss1>{data.name}</TabledataCss1>
        <TabledataCss2>{data.cash["May"].toLocaleString()}</TabledataCss2>
      </tr>
    );
  });
  return (
    <TableCss>
      <table className="striped responsive-table">
        <TableHeadCss>
          <tr>
            <ThCss1>{props.nameChart + " พ.ค. 2563"}</ThCss1>
            <ThCss2>ล้านบาท</ThCss2>
          </tr>
        </TableHeadCss>
        <tbody>{tableList}</tbody>
      </table>
    </TableCss>
  );
};

export default Table;

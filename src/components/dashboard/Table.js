import React from "react";

const Table = (props) => {
  console.log("Table", props);
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
        <td>{data.name}</td>
        <td>{data.cash["May"]}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="striped responsive-table">
        <thead>
          <tr>
            <th>{props.nameChart + " พ.ค. 2563"}</th>
            <th>หน่วย: ล้านบาท</th>
          </tr>
        </thead>
        <tbody>{tableList}</tbody>
      </table>
    </div>
  );
};

export default Table;

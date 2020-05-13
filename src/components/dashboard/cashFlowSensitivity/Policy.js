import React from "react";

const Policy = (props) => {
  console.log("Policy", props);
  const policyList = props.policyList.map((policy, i) => {
    return (
      <div className="left-align" key={policy.id}>
        <div>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              onChange={(e) => props.policyApply(policy.id, e.target.checked)}
            ></input>
            <span style={{ fontSize: "18px" }}>{policy.namefull}</span>
          </label>
        </div>

        <br></br>
      </div>
    );
  });

  return (
    <div>
      <span style={{ fontSize: "20px" }}>
        <strong>มาตราการ</strong>
      </span>
      {policyList}
    </div>
  );
};

export default Policy;

import React from "react";
import CustomizedSlider from "./Slider";

const Policy = (props) => {
  //   console.log("Policy", props);
  const policyList = props.policyList.map((policy, i) => {
    return (
      <li className="left-align" key={policy.id}>
        <div>
          <span style={{ fontSize: "18px" }}>{policy.namefull}</span>
          <br></br>
          <div>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                onChange={(e) => props.policyApply(policy.id, e.target.checked)}
              ></input>
              <span style={{ fontSize: "18px" }}>ทดสอบ</span>
            </label>
          </div>
          <div>
            <CustomizedSlider policyId={policy.id}></CustomizedSlider>
          </div>
        </div>
        <br></br>
      </li>
    );
  });

  return (
    <div>
      <span style={{ fontSize: "20px" }}>
        <strong>มาตราการ</strong>
      </span>
      <ol>{policyList}</ol>
    </div>
  );
};

export default Policy;

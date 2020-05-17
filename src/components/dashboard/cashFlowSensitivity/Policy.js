import React from "react";
import CustomizedSlider from "./Slider";

const Policy = (props) => {
  // console.log("Policy", props);
  const policyList = props.policyList.map((policy, i) => {
    return (
      <li className="active" key={policy.id}>
        <div className="collapsible-header">
          <div style={{ fontSize: "20px" }}>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                onChange={(e) => props.policyApply(policy.id, e.target.checked)}
              ></input>
              <span
                className="grey-text text-darken-3"
                style={{ fontSize: "23px" }}
              >
                มาตรการที่ {i + 1}
              </span>
            </label>
          </div>
        </div>
        <div className="collapsible-body">
          <span style={{ fontSize: "18px" }}>{policy.namefull}</span>
          <div>
            <CustomizedSlider
              policyId={policy.id}
              sliderValue={props.sliderValue}
            ></CustomizedSlider>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <div className="left-allign">
        <span style={{ fontSize: "30px" }}>
          <strong>มาตรการช่วยเหลือ</strong>
        </span>
      </div>

      <ul className="collapsible">{policyList}</ul>
    </div>
  );
};

export default Policy;

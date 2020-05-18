import React from "react";
import CustomizedSlider from "./Slider";

const Policy = (props) => {
  // console.log("Policy", props);
  const policyList = props.policyList.map((policy, i) => {
    return (
      <li className="active" key={policy.id}>
        <div className="collapsible-header">
          <div className="row">
            <div className="col s10">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={(e) =>
                    props.policyApply(policy.id, e.target.checked)
                  }
                ></input>
                <span
                  className="grey-text text-darken-3"
                  style={{ fontSize: "16px" }}
                >
                  มาตรการที่ {i + 1}
                </span>
              </label>
            </div>
            <div className="col s2 container">
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <span style={{ fontSize: "14px" }}>{policy.namefull}</span>
          <div className="container">
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
      <ul className="collapsible">{policyList}</ul>
    </div>
  );
};

export default Policy;

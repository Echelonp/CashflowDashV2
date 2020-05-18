import React from "react";
import CustomizedSlider from "./Slider";

const SolutionTmp = (props) => {
  console.log("SolutionTmp", props);
  const solutionList = props.solutionList.map((solution, i) => {
    return (
      <li className="active" key={solution.id}>
        <div className="collapsible-header">
          <div className="row">
            <div className="col s10">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={(e) =>
                    props.solutionApply(solution.id, e.target.checked)
                  }
                ></input>
                <span
                  className="grey-text text-darken-3"
                  style={{ fontSize: "16px" }}
                >
                  แนวทางแก้ไขที่ {i + 1}
                </span>
              </label>
            </div>
            <div className="col s2 container">
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <span style={{ fontSize: "14px" }}>{solution.namefull}</span>
          <div className="container">
            <CustomizedSlider
              policyId={solution.id}
              sliderValue={props.solutionSliderValue}
            ></CustomizedSlider>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul className="collapsible">{solutionList}</ul>
    </div>
  );
};

export default SolutionTmp;

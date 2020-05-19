export const checkedPolicyApplyAction = (newPolicyList) => {
  return {
    type: "CHECKED_POLICY",
    newPolicyList: newPolicyList,
  };
};

export const adjustSliderAction = (sliderValue, policyId) => {
  return {
    type: "ADJUST_SLIDER",
    sliderValue: sliderValue,
    policyId: policyId,
  };
};

export const checkedSolutionAction = (newSolution) => {
  return {
    type: "CHECKED_SOLUTION",
    newSolution: newSolution,
  };
};

export const unCheckedSolutionAction = (solutionId) => {
  return {
    type: "UNCHECKED_SOLUTION",
    solutionId: solutionId,
  };
};

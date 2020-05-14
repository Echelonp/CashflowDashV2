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

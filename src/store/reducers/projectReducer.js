const initState = {
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  // PEA rev cash data
  cashInit: 7262,
  cashIncome: [
    {
      id: 101,
      name: "เงินรับรายได้(สนญ.)",
      baseChart: true,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 19937,
        Feb: 18750,
        Mar: 20894,
        Apr: 22326,
        May: 17475,
        Jun: 17170,
        Jul: 22064,
        Aug: 21364,
        Sep: 21364,
        Oct: 22064,
        Nov: 22164,
        Dec: 18764,
      },
    },
    {
      id: 102,
      name: "เงินรับรายได้(กฟฟ.ต่างๆ)",
      breakdownDis: true,
      baseChart: true,
      factorCoporate: 100,
      cash: {
        Jan: 20620,
        Feb: 19482,
        Mar: 19902,
        Apr: 17971,
        May: 15446,
        Jun: 18020,
        Jul: 23404,
        Aug: 23204,
        Sep: 22004,
        Oct: 22104,
        Nov: 20104,
        Dec: 20004,
      },
    },
    {
      id: 103,
      name: "เงินรับจากบัญชี Sinking Fund",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 1500,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 1000,
        Jul: 0,
        Aug: 1000,
        Sep: 1600,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 104,
      name: "เงินกู้ในประเทศ",
      baseChart: true,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 2000,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 10000,
        Jun: 0,
        Jul: 0,
        Aug: 10400,
        Sep: 0,
        Oct: 5000,
        Nov: 5000,
        Dec: 0,
      },
    },
    {
      id: 105,
      name: "เงินชดเชยค่าไฟฟ้า(กกพ.)",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 1250,
        Feb: 1250,
        Mar: 1232,
        Apr: 1232,
        May: 1232,
        Jun: 1232,
        Jul: 1232,
        Aug: 1232,
        Sep: 1232,
        Oct: 1232,
        Nov: 1232,
        Dec: 1232,
      },
    },
    {
      id: 106,
      name: "เงินคืนค่า FT",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 297,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 107,
      name: "เงินฝากประจำ ตราสารหนี้ครบกำหนด",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 1000,
        Mar: 1000,
        Apr: 0,
        May: 0,
        Jun: 1000,
        Jul: 2000,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 108,
      name: "เงินรับคืนจากบัญชีเงินประกัน",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 2295,
        May: 3790,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 109,
      name: "เงินรับอื่นๆ",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 314,
        Feb: 5,
        Mar: 54,
        Apr: 4,
        May: 4,
        Jun: 50,
        Jul: 50,
        Aug: 50,
        Sep: 50,
        Oct: 50,
        Nov: 50,
        Dec: 50,
      },
    },
  ],
  cashExpense: [
    {
      id: 201,
      name: "เงินเดือน ค่าแรง ค่าสวัสดิการ",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 893,
        Feb: 885,
        Mar: 887,
        Apr: 872,
        May: 899,
        Jun: 1220,
        Jul: 889,
        Aug: 898,
        Sep: 905,
        Oct: 1094,
        Nov: 846,
        Dec: 837,
      },
    },
    {
      id: 202,
      name: "ค่าซื้อกระแสไฟฟ้า",
      baseChart: true,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 29023,
        Feb: 32155,
        Mar: 30853,
        Apr: 33820,
        May: 34242,
        Jun: 33000,
        Jul: 32500,
        Aug: 33500,
        Sep: 33600,
        Oct: 33200,
        Nov: 34500,
        Dec: 32000,
      },
    },
    {
      id: 203,
      name: "ค่าซื้อกระแสไฟฟ้า(VSPP)",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 2838,
        Feb: 3439,
        Mar: 3332,
        Apr: 4548,
        May: 4801,
        Jun: 4500,
        Jul: 4400,
        Aug: 4100,
        Sep: 4500,
        Oct: 3000,
        Nov: 4100,
        Dec: 3600,
      },
    },
    {
      id: 204,
      name: "ค่าสินค้าและบริการ",
      baseChart: true,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 4597,
        Feb: 3945,
        Mar: 4724,
        Apr: 3288,
        May: 3541,
        Jun: 3778,
        Jul: 3778,
        Aug: 2678,
        Sep: 3278,
        Oct: 6578,
        Nov: 2878,
        Dec: 10578,
      },
    },
    {
      id: 205,
      name: "ค่าใช้จ่าย กฟฟ.",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 378,
        Feb: 434,
        Mar: 659,
        Apr: 622,
        May: 800,
        Jun: 1100,
        Jul: 800,
        Aug: 700,
        Sep: 900,
        Oct: 2100,
        Nov: 600,
        Dec: 1400,
      },
    },
    {
      id: 206,
      name: "จ่ายชำระหนี้เงินกู้",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 1651,
        Feb: 198,
        Mar: 349,
        Apr: 107,
        May: 330,
        Jun: 1307,
        Jul: 120,
        Aug: 1196,
        Sep: 1953,
        Oct: 107,
        Nov: 333,
        Dec: 281,
      },
    },
    {
      id: 207,
      name: "นำฝากบัญชี Sinking Fund",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 470,
        Feb: 489,
        Mar: 479,
        Apr: 479,
        May: 479,
        Jun: 479,
        Jul: 479,
        Aug: 479,
        Sep: 479,
        Oct: 479,
        Nov: 479,
        Dec: 479,
      },
    },
    {
      id: 208,
      name: "นำฝากเงินประกันการใช้ไฟฟ้า",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 304,
        Feb: 111,
        Mar: 135,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 209,
      name: "นำส่งรายได้แผ่นดิน",
      baseChart: true,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 5070,
        Jul: 0,
        Aug: 0,
        Sep: 4512,
        Oct: 2084,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 210,
      name: "ค่าปรับจากการลงทุนต่ำกว่าแผน",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 1291,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 1432,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 211,
      name: "คืนเงินรายได้ให้ กกพ.",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 543,
        Jun: 626,
        Jul: 626,
        Aug: 626,
        Sep: 626,
        Oct: 625,
        Nov: 625,
        Dec: 625,
      },
    },
    {
      id: 212,
      name: "นำฝากเงินประจำ ตราสารหนี้",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 2000,
        Feb: 1000,
        Mar: 1000,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 213,
      name: "สำรองคืนเงินประกันฯ",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 24,
        Apr: 5024,
        May: 5253,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 214,
      name: "เงินจ่ายอื่นๆ",
      baseChart: true,
      breakdownDis: false,
      factorCoporate: 100,
      cash: {
        Jan: 4,
        Feb: 5,
        Mar: 5,
        Apr: 13,
        May: 5,
        Jun: 15,
        Jul: 15,
        Aug: 15,
        Sep: 15,
        Oct: 15,
        Nov: 15,
        Dec: 15,
      },
    },
  ],
  // Policy and Solution
  policyList: [
    {
      id: 301,
      namefull: "ส่วนลดค่าไฟฟ้า 3% ผู้ใช้ไฟฟ้าทุกประเภท",
      name: "ลดค่าไฟฟ้า 3%",
      baseChart: false,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: -1136,
        May: -1205,
        Jun: -1157,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 302,
      namefull: "ยกเว้นการเก็บค่าไฟฟ้าขั้นต่ำ(Minimun Charge)",
      name: "ยกเว้น Minimun Charge",
      factorCoporate: 100,
      baseChart: false,
      breakdownDis: true,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: -360,
        May: -360,
        Jun: -360,
        Jul: -165,
        Aug: -165,
        Sep: -165,
        Oct: -79,
        Nov: -79,
        Dec: -79,
      },
    },
    {
      id: 303,
      namefull:
        "ผู้ใช้ไฟฟ้าประเภท 1.1.1 ที่ใช้ไฟฟ้าน้อยกว่า 90 หน่วยใช้ไฟฟ้าฟรี",
      name: "ผชฟ.1.1.1<90หน่วย",
      baseChart: false,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: -920,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 304,
      namefull: "ผู้ใช้ไฟฟ้าประเภท 1.1.1 ที่ใช้ไฟฟ้า 0-150 หน่วยใช้ไฟฟ้าฟรี",
      name: "ผชฟ.1.1.1<150หน่วย",
      baseChart: false,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: -2404,
        Jun: -2685,
        Jul: -2869,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 305,
      namefull: "ส่วนลดผู้ใช้ไฟฟ้าประเภท 1.1.2",
      name: "ส่วนลดผู้ใช้ไฟฟ้าประเภท 1.1.2",
      baseChart: false,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: -2346,
        Jun: -3004,
        Jul: -3277,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 306,
      namefull: "ขยายเวลาชำระเงินค่าไฟฟ้าให้ผู้ใช้ไฟฟ้าประเภท 5(6เดือน)",
      name: "ผชฟ.ประเภท5(6เดือน)",
      baseChart: false,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: -1204,
        Jun: -1236,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 1204,
        Dec: 1236,
      },
    },
    {
      id: 307,
      namefull: "ขยายเวลาชำระค่าไฟฟ้าให้ผู้ใช้ไฟฟ้าประเภท 1.1.2(6เดือน)",
      name: "ผชฟ.ประเภท 1.1.2(6เดือน)",
      baseChart: false,
      breakdownDis: true,
      factorCoporate: 100,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: -1773,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 1773,
      },
    },
  ],
  solutionList: [
    {
      id: 401,
      namefull: "เงินสนับสนุนจาก สกพ.",
      name: "เงิน สกพ.",
      factorCoporate: 100,
      revSide: true,
      baseChart: false,
      breakdownDis: true,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 9016,
        Jun: 3858,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 403,
      namefull: "นำส่งรายได้แผ่นดินเท่ากับกำไรจริงของ กฟภ.",
      name: "นำส่งรายได้แผ่นดิน",
      factorCoporate: 100,
      revSide: false,
      baseChart: false,
      breakdownDis: true,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: -4166,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 404,
      namefull: "เลื่อนนำส่งรายได้แผ่นดิน",
      name: "เลื่อนส่งรายได้",
      factorCoporate: 100,
      revSide: false,
      baseChart: false,
      breakdownDis: true,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: -4512,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 405,
      namefull: "เลื่อนชำระค่าซื้อกระแสไฟฟ้ากฟผ.",
      name: "เลื่อนชำระกฟผ.",
      factorCoporate: 100,
      revSide: false,
      baseChart: false,
      breakdownDis: true,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: -2000,
        Jun: -10000,
        Jul: 0,
        Aug: 5000,
        Sep: 4000,
        Oct: 3000,
        Nov: 0,
        Dec: 0,
      },
    },
  ],
  // PolicyChecked
  PolicyCheckedList: [],

  // SolutionChecked
  SolutionCheckedList: [],
  SolutionCheckedList5th: [],
};

const projectReducer = (state = initState, action) => {
  // console.log("State", state.policyList[Action]);
  switch (action.type) {
    case "CHECKED_POLICY":
      // console.log("CHECKED_POLICY", action.newPolicyList);
      return { ...state, PolicyCheckedList: action.newPolicyList };
    case "ADJUST_SLIDER":
      // console.log("ADJUST_SLIDER", action);
      // input => dispatch(adjustSliderAction(sliderValue, policyId));

      const selectedPolicy = state.policyList.filter((policy) => {
        return policy.id === action.policyId;
      });
      const nonSelectedPolicy = state.policyList.filter((policy) => {
        return policy.id !== action.policyId;
      });
      // console.log("nonSelectedPolicy", nonSelectedPolicy);

      selectedPolicy[0].factorCoporate = action.sliderValue;
      let selectedPolicy_tmp = selectedPolicy[0];
      selectedPolicy_tmp.factorCoporate = action.sliderValue;
      // console.log("selectedPolicy_tmp", selectedPolicy_tmp);

      let newPolicy = [].concat(selectedPolicy_tmp);
      newPolicy = newPolicy.concat(nonSelectedPolicy);

      // rearrange neworder
      newPolicy.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
      return {
        ...state,
        policyList: newPolicy,
      };
    case "CHECKED_SOLUTION":
      // console.log("CHECKED_SOLUTION", action);
      const newSolutionCheckedList = [
        ...state.SolutionCheckedList,
        action.newSolution,
      ];
      console.log("CHECKED_SOLUTION", newSolutionCheckedList);
      return { ...state, SolutionCheckedList: newSolutionCheckedList };

    case "UNCHECKED_SOLUTION":
      console.log("UNCHECKED_SOLUTION", action);
      const newUnSolutionCheckedList = state.SolutionCheckedList.filter(
        (solution) => {
          return solution.id !== action.solutionId;
        }
      );
      console.log("UNCHECKED_SOLUTION", newUnSolutionCheckedList);
      return { ...state, SolutionCheckedList: newUnSolutionCheckedList };

    case "CHECKED_5TH_SOLUTION":
      console.log("CHECKED_5TH_SOLUTION", action);
      return { ...state, SolutionCheckedList5th: action.newSolutionList };

    case "ADJUST_SLIDER_SOLUTION":
      console.log("ADJUST_SLIDER_SOLUTION", action);
      const selectedSolution = state.solutionList.filter((solution) => {
        return solution.id === action.solutionId;
      });
      const nonSelectedSolution = state.solutionList.filter((solution) => {
        return solution.id !== action.solutionId;
      });
      // Update value in slelcted solution
      selectedSolution[0].factorCoporate = action.sliderValue;
      let selectedSolution5th_tmp = selectedSolution[0];

      let newSolution5th = [].concat(selectedSolution5th_tmp);
      newSolution5th = newSolution5th.concat(nonSelectedSolution);
      // console.log("newSolution5th", newSolution5th);

      // reorder
      newSolution5th.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });

      return { ...state, solutionList: newSolution5th };
    default:
      return state;
  }
};

export default projectReducer;

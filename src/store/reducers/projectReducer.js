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
      name: "เงินรับรายได้ (สนญ.)",
      baseChart: true,
      breakdownDis: true,
      cash: {
        Jan: 19937,
        Feb: 18750,
        Mar: 20894,
        Apr: 22999,
        May: 21000,
        Jun: 20200,
        Jul: 21000,
        Aug: 20300,
        Sep: 20300,
        Oct: 21000,
        Nov: 21100,
        Dec: 17700,
      },
    },
    {
      id: 102,
      name: "เงินรับรายได้(จาก กฟฟ.ต่างๆ)",
      breakdownDis: true,
      baseChart: true,
      cash: {
        Jan: 20620,
        Feb: 19482,
        Mar: 19902,
        Apr: 23328,
        May: 23540,
        Jun: 21040,
        Jul: 22340,
        Aug: 22140,
        Sep: 20940,
        Oct: 21040,
        Nov: 19040,
        Dec: 18940,
      },
    },
    {
      id: 103,
      name: "เงินรับจากบัญชี Sinking Fund",
      baseChart: true,
      breakdownDis: false,
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
      baseChart: false,
      breakdownDis: false,
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
      baseChart: false,
      breakdownDis: false,
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
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 380,
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
      id: 109,
      name: "เงินรับอื่นๆ",
      baseChart: false,
      breakdownDis: false,
      cash: {
        Jan: 314,
        Feb: 5,
        Mar: 54,
        Apr: 38,
        May: 50,
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
      cash: {
        Jan: 893,
        Feb: 885,
        Mar: 887,
        Apr: 912,
        May: 897,
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
      name: "ค่าซื้อกระแสไฟฟ้า(กฟภ.)",
      baseChart: true,
      breakdownDis: true,
      cash: {
        Jan: 29023,
        Feb: 32155,
        Mar: 30853,
        Apr: 35806,
        May: 34400,
        Jun: 35200,
        Jul: 34200,
        Aug: 34100,
        Sep: 33600,
        Oct: 33200,
        Nov: 34600,
        Dec: 32000,
      },
    },
    {
      id: 203,
      name: "ค่าซื้อกระแสไฟฟ้า (VSPP)",
      baseChart: true,
      breakdownDis: false,
      cash: {
        Jan: 1365,
        Feb: 1356,
        Mar: 1312,
        Apr: 1800,
        May: 1700,
        Jun: 1700,
        Jul: 1600,
        Aug: 1200,
        Sep: 1400,
        Oct: 1800,
        Nov: 1400,
        Dec: 1500,
      },
    },
    {
      id: 204,
      name: "ค่าสินค้าและบริการ",
      baseChart: true,
      breakdownDis: true,
      cash: {
        Jan: 6069,
        Feb: 6027,
        Mar: 6743,
        Apr: 5409,
        May: 6078,
        Jun: 6578,
        Jul: 6578,
        Aug: 5678,
        Sep: 6578,
        Oct: 6578,
        Nov: 5978,
        Dec: 10578,
      },
    },
    {
      id: 205,
      name: "ค่าใช้จ่าย กฟฟ.",
      baseChart: true,
      breakdownDis: false,
      cash: {
        Jan: 378,
        Feb: 434,
        Mar: 659,
        Apr: 400,
        May: 600,
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
        Oct: 2500,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 210,
      name: "ค่าปรับจากการลงทุนต่ำกว่าแผน",
      baseChart: true,
      breakdownDis: false,
      cash: {
        Jan: 1291,
        Feb: 0,
        Mar: 0,
        Apr: 1452,
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
      id: 211,
      name: "คืนเงินรายได้ให้ กกพ.",
      baseChart: true,
      breakdownDis: false,
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 543,
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
      name: "เงินจ่ายอื่นๆ",
      baseChart: true,
      breakdownDis: false,
      cash: {
        Jan: 4,
        Feb: 5,
        Mar: 5,
        Apr: 220,
        May: 220,
        Jun: 220,
        Jul: 220,
        Aug: 220,
        Sep: 220,
        Oct: 220,
        Nov: 220,
        Dec: 220,
      },
    },
  ],
  // Policy and Solution
  policyList: [
    {
      id: 301,
      name: "ขยายเวลาการชำระเงินค่าไฟฟ้าให้ผู้ใช้ไฟฟ้าประเภท 5",
      nameShort: "ขยายเวลาผชฟ.ป5",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: -1220,
        May: -1220,
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
      id: 302,
      name: "ส่วนลดค่าไฟฟ้า 3% ผู้ใช้ไฟฟ้าทุกประเภท",
      nameShort: "ลดค่าไฟฟ้า 3%",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: -1269,
        May: -1348,
        Jun: -1293,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 303,
      name: "ผู้ใช้ไฟฟ้าประเภท 1.1.1 ที่ใช้ไฟฟ้าน้อยกว่า 90 หน่วยใช้ไฟฟ้าฟรี",
      nameShort: "ผชฟ.1.1.1<90หน่วย",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: -985,
        May: -985,
        Jun: -985,
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
      name:
        "ขยายเวลาชำระไฟฟ้าผู้ใช้ไฟฟ้าประเภทบ้านอยู่อาศัยน้อยกว่า 150 หน่วย(6เดือน)",
      nameShort: "ผชฟ.<150หน่วย(6เดือน)",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: -2633,
        May: -2633,
        Jun: -2633,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 305,
      name: "ยกเว้นการเก็บค่าไฟฟ้าขั้นต่ำ(Minimun Charge)",
      nameShort: "ยกเว้น Minimun Charge",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: -500,
        Jun: -500,
        Jul: -500,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 306,
      name: "ขยายเวลาชำระค่าไฟฟ้าให้ผู้ใช้ไฟฟ้าประเภท 5(ชำระ) #1",
      nameShort: "ขยายเวลาผชฟ.ป5(ชำระ)#1",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 203,
        Jun: 203,
        Jul: 203,
        Aug: 203,
        Sep: 203,
        Oct: 203,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 307,
      name: "ขยายเวลาชำระค่าไฟฟ้าให้ผู้ใช้ไฟฟ้าประเภท 5(ชำระ) #2",
      nameShort: "ขยายเวลาผชฟ.ป5(ชำระ)#2",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 203,
        Jul: 203,
        Aug: 203,
        Sep: 203,
        Oct: 203,
        Nov: 203,
        Dec: 0,
      },
    },
    {
      id: 308,
      name: "ผู้ใช้ไฟฟ้ารายย่อยที่ใช้ไฟฟ้ามากกว่า 90 unit (ชำระ) #1",
      nameShort: "ผชฟ.มากกว่า 90unit(ชำระ)#1",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 439,
        Jun: 439,
        Jul: 439,
        Aug: 439,
        Sep: 439,
        Oct: 439,
        Nov: 0,
        Dec: 0,
      },
    },
    {
      id: 309,
      name: "ผู้ใช้ไฟฟ้ารายย่อยที่ใช้ไฟฟ้ามากกว่า 90 unit (ชำระ) #2",
      nameShort: "ผชฟ.มากกว่า 90unit(ชำระ)#2",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 439,
        Jul: 439,
        Aug: 439,
        Sep: 439,
        Oct: 439,
        Nov: 439,
        Dec: 0,
      },
    },
    {
      id: 310,
      name: "ผู้ใช้ไฟฟ้ารายย่อยที่ใช้ไฟฟ้ามากกว่า 90 unit (ชำระ) #3",
      nameShort: "ผชฟ.มากกว่า 90unit(ชำระ)#3",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 439,
        Aug: 439,
        Sep: 439,
        Oct: 439,
        Nov: 439,
        Dec: 439,
      },
    },
  ],
  solutionList: [
    {
      id: 401,
      name: "ผู้ใช้ไฟฟ้าประเภท 5 จ่ายค่าไฟฟ้าค้างชำระ",
      nameShort: "ผชฟ.ป5 จ่ายค่าไฟฟ้า",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 1220,
        Nov: 1220,
        Dec: 0,
      },
    },
    {
      id: 402,
      name:
        "ผู้ใช้ไฟฟ้าประเภท 1.1.1 ที่ใช้ไฟฟ้า > 90หน่วย จ่ายค่าไฟฟ้าค้างชำระ",
      nameShort: "ผชฟ.ป1.1.1 จ่ายค่าไฟฟ้า",
      cash: {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 2633,
        Nov: 2533,
        Dec: 2533,
      },
    },
  ],
  // Checkedbox
  Checkedbox: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  },
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;

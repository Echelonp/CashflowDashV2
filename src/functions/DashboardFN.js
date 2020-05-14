export const cashBalance = (cash) => {
  // console.log("cashBalance", cash);
  const cashList = cash.map((cashIncome, i) => cashIncome.cash);
  // console.log("cashList", cashList);

  const factorCoporateList = cash.map(
    (cashIncome, i) => cashIncome.factorCoporate
  );
  // console.log("factorCoporate", factorCoporateList);

  let cashMonthTotal = [];
  const month = Object.keys(cashList[0]);

  for (let i = 0; i < month.length; i++) {
    let cash_col = 0;
    for (let j = 0; j < cashList.length; j++) {
      cash_col =
        cash_col + (factorCoporateList[j] / 100.0) * cashList[j][month[i]];
    }
    cashMonthTotal.push({
      key: month[i],
      value: cash_col,
    });
  }
  return cashMonthTotal;
};

export const cashNetCal = (cash_dic1, cash_dic2, cashInit) => {
  if (cash_dic1.length !== cash_dic2.length) {
    return false;
  }
  let cashNet = [];
  let cash_tmp = 0;
  // console.log(cash_dic1[0]["value"]);

  for (let i = 0; i < cash_dic1.length; i++) {
    if (i === 0) {
      cash_tmp = cash_dic1[i]["value"] - cash_dic2[i]["value"] + cashInit;
      cashNet.push({
        key: cash_dic1[i]["key"],
        value: cash_tmp,
      });
    } else {
      cash_tmp = cash_dic1[i]["value"] - cash_dic2[i]["value"] + cash_tmp;
      cashNet.push({
        key: cash_dic1[i]["key"],
        value: cash_tmp,
      });
    }
  }
  return cashNet;
};

export const cashToDatapointsForCombiChart = (
  cashIncome,
  cashExpense,
  cashInit,
  monthsShort
) => {
  const cashIncomeMonthTotal = cashBalance(cashIncome);
  const cashExpenseMonthTotal = cashBalance(cashExpense);
  //   console.log("cashExpenseMonthTotal", cashExpenseMonthTotal);
  const cashNetMonthTotal = cashNetCal(
    cashIncomeMonthTotal,
    cashExpenseMonthTotal,
    cashInit
  );

  // cash netOnlyBase
  const cashIncomeOnlyBase = cashIncome.filter((cash) => {
    return cash.baseChart === true;
  });
  const cashExpenseOnlyBase = cashExpense.filter((cash) => {
    return cash.baseChart === true;
  });
  const cashIncomeMonthTotalOnlyBase = cashBalance(cashIncomeOnlyBase);
  const cashExpenseMonthTotalOnlyBase = cashBalance(cashExpenseOnlyBase);

  const cashNetMonthTotalOnlyBase = cashNetCal(
    cashIncomeMonthTotalOnlyBase,
    cashExpenseMonthTotalOnlyBase,
    cashInit
  );

  let datapointsCashIncomeMonthTotal = [];
  let datapointsCashExpenseMonthTotal = [];
  let datapointsNetMonthTotal = [];
  let datapointsNetMonthTotalOnlyBase = [];

  for (let i = 0; i < 12; i++) {
    if (i < cashNetMonthTotal.length) {
      datapointsCashIncomeMonthTotal.push({
        label: monthsShort[i],
        y: cashIncomeMonthTotal[i]["value"],
      });
      datapointsCashExpenseMonthTotal.push({
        label: monthsShort[i],
        y: -1 * cashExpenseMonthTotal[i]["value"],
      });
      datapointsNetMonthTotal.push({
        label: monthsShort[i],
        y: cashNetMonthTotal[i]["value"],
      });
      datapointsNetMonthTotalOnlyBase.push({
        label: monthsShort[i],
        y: cashNetMonthTotalOnlyBase[i]["value"],
      });
    } else {
      datapointsCashIncomeMonthTotal.push({
        label: monthsShort[i],
        y: null,
      });
      datapointsCashExpenseMonthTotal.push({
        label: monthsShort[i],
        y: null,
      });
      datapointsNetMonthTotal.push({
        label: monthsShort[i],
        y: null,
      });
      datapointsNetMonthTotalOnlyBase.push({
        label: monthsShort[i],
        y: null,
      });
    }
  }
  let data = [];
  data.push({
    datapointsCashIncomeMonthTotal: datapointsCashIncomeMonthTotal,
  });
  data.push({
    datapointsCashExpenseMonthTotal: datapointsCashExpenseMonthTotal,
  });
  data.push({
    datapointsNetMonthTotal: datapointsNetMonthTotal,
  });
  data.push({
    datapointsNetMonthTotalOnlyBase: datapointsNetMonthTotalOnlyBase,
  });
  return data;
};

export const cashToDatapointForStackedColumn = (cash, monthsShort) => {
  // expect parameter type like list of dictionary  such as cashIncome or cashExpense
  // const cash = this.state.cashIncome;
  // console.log("cashToDatapointForStackedColumn", cash);
  const cashEach = cash.filter((cashEach) => {
    return cashEach.breakdownDis === true;
  });
  const cashGroup = cash.filter((cashEach) => {
    return cashEach.breakdownDis === false;
  });

  // Do cashEach
  let cashData = [];
  for (let i = 0; i < cashEach.length; i++) {
    let datapoint = [];
    for (let j = 0; j < 12; j++) {
      // console.log("cashEach" + i, cashEach[i].factorCoporate);
      datapoint.push({
        label: monthsShort[j],
        y: Number(
          (
            (cashEach[i].factorCoporate / 100.0) *
            cashEach[i]["cash"][monthsShort[j]]
          ).toFixed(3)
        ),
      });
    }
    cashData.push({
      name: cashEach[i]["name"],
      datapoints: datapoint,
    });
  }
  // console.log("cashData", cashData);

  // Do cashGroup
  if (cashGroup.length === 0) {
    return cashData;
  }
  // console.log("cashGroup", cashGroup);
  const cashGroupSum = cashBalance(cashGroup);
  // console.log("cashGroupSum", cashGroupSum);

  let datapoint_tmp = [];
  for (let i = 0; i < 12; i++) {
    datapoint_tmp.push({
      label: monthsShort[i],
      y: cashGroupSum[i]["value"],
    });
  }
  cashData.push({
    name: "อื่นๆ",
    datapoints: datapoint_tmp,
  });
  //   console.log("cashData", cashData);
  return cashData;
};

export const cashToDatapointForStackedColumn2 = (cash, monthsShort) => {
  // expect parameter type like list of dictionary  such as cashIncome or cashExpense
  // const cash = this.state.cashIncome;
  let cashData = [];
  for (let i = 0; i < cash.length; i++) {
    let datapoint = [];
    for (let j = 0; j < 12; j++) {
      datapoint.push({
        label: monthsShort[j],
        y: cash[i]["cash"][monthsShort[j]],
      });
    }
    cashData.push({
      name: cash[i]["name"],
      datapoints: datapoint,
    });
  }
  return cashData;
};

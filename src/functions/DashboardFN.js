export const cashBalanceOnlyBase = (cashData) => {
  const cash = cashData.filter((eachCash) => {
    return eachCash.baseChart === true;
  });
  const cashList = cash.map((cashIncome, i) => cashIncome.cash);
  let cashMonthTotal = [];
  const month = Object.keys(cashList[0]);

  for (let i = 0; i < month.length; i++) {
    let cash_col = 0;
    for (let j = 0; j < cashList.length; j++) {
      cash_col = cash_col + cashList[j][month[i]];
    }
    cashMonthTotal.push({
      key: month[i],
      value: cash_col,
    });
  }
  // console.log(cashIncomeMonthTotal);
  return cashMonthTotal;
};

export const cashBalance = (cash) => {
  const cashList = cash.map((cashIncome, i) => cashIncome.cash);
  let cashMonthTotal = [];
  const month = Object.keys(cashList[0]);

  for (let i = 0; i < month.length; i++) {
    let cash_col = 0;
    for (let j = 0; j < cashList.length; j++) {
      cash_col = cash_col + cashList[j][month[i]];
    }
    cashMonthTotal.push({
      key: month[i],
      value: cash_col,
    });
  }
  // console.log(cashIncomeMonthTotal);
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
  const cashNetMonthTotal = cashNetCal(
    cashIncomeMonthTotal,
    cashExpenseMonthTotal,
    cashInit
  );
  // cash netOnlyBase
  const cashIncomeMonthTotalOnlyBase = cashBalanceOnlyBase(cashIncome);
  const cashExpenseMonthTotalOnlyBase = cashBalanceOnlyBase(cashExpense);
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

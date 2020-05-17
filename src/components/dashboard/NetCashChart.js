import CanvasJSReact from "../canvasjs-2.3.2/canvasjs.react";
import React, { Component } from "react";

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class NetCashChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
    this.addSymbols = this.addSymbols.bind(this);
  }
  addSymbols(e) {
    // var suffixes = ["", "K", "M", "B"];
    // var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    // if (order > suffixes.length - 1) order = suffixes.length - 1;
    // var suffix = suffixes[order];
    // return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    return CanvasJS.formatNumber(e.value);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  handelClick = () => {
    // console.log(this.props);
    // console.log(this.state.month_no["Jan"]);
  };

  render() {
    const data = this.props.datapointForCombiChart;
    // console.log("Netcash", data);
    const datapoint1 = data[0]["datapointsCashIncomeMonthTotal"];
    const datapoint2 = data[1]["datapointsCashExpenseMonthTotal"];
    const datapoint3 = data[2]["datapointsNetMonthTotal"];
    const datapoint4 = data[3]["datapointsNetMonthTotalOnlyBase"];

    // console.log(datapoint1);
    // console.log(datapoint2);
    // console.log(datapoint3);

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      colorSet: "colorSet1",
      zoomEnabled: true,
      panEnabled: true,
      theme: "Light2",
      title: {
        text: "เงินหมุนเวียนคงเหลือปลายงวดรายเดือน",
        fontFamily: "verdana",
        fontSize: 25,
      },
      axisX: {
        valueFormatString: "MMMM",
      },
      axisY: {
        prefix: "ลบ.",
        labelFormatter: this.addSymbols,
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
        verticalAlign: "top",
      },
      data: [
        {
          type: "column",
          name: "เงินรับรวม",
          showInLegend: true,
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint1,
        },
        {
          type: "column",
          name: "เงินจ่ายรวม",
          showInLegend: true,
          xValueFormatString: "MMMM YYYY",
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint2,
        },
        {
          type: "spline",
          name: "ผลจำลอง CSF",
          markerBorderColor: "white",
          markerBorderThickness: 2,
          showInLegend: true,
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint3,
        },
        {
          type: "spline",
          name: "เงินหมุนเวียนปลายงวด",
          markerBorderColor: "white",
          markerBorderThickness: 2,
          showInLegend: true,
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint4,
        },
      ],
    };
    return (
      <div className="chart">
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}

export default NetCashChart;

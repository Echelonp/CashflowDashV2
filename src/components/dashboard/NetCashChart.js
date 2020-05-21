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
    //console.log(this.props);
    //console.log(this.state.month_no["Jan"]);
  };

  render() {
    const data = this.props.datapointForCombiChart;
    // console.log("Netcash", data);
    const datapoint1 = data[0]["datapointsCashIncomeMonthTotal"];
    const datapoint2 = data[1]["datapointsCashExpenseMonthTotal"];
    const datapoint3 = data[2]["datapointsNetMonthTotal"];
    const datapoint4 = data[3]["datapointsNetMonthTotalOnlyBase"];

    let newDate = new Date();
    let month = newDate.getMonth();

    // console.log(monthColor1);
    // console.log(datapoint1);
    // // console.log(datapoint2);
    // console.log(datapoint3);
    // console.log(datapoint4);

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      colorSet: "colorSet1",
      zoomEnabled: true,
      panEnabled: true,
      theme: "Light2",
      dataPointMaxWidth: 90,
      title: {
        text: "เงินหมุนเวียนคงเหลือปลายงวดรายเดือน",
        fontFamily: "verdana",
        fontSize: 25,
      },
      axisX: {
        valueFormatString: "MMMM",
        labelFontSize: 20,
        labelFontColor: "#1565c0",
        gridDashType: "dot",
        gridThickness: 0.5,
      },
      axisY: {
        prefix: "ลบ.",
        labelFormatter: this.addSymbols,
        stripLines: [
          {
            value: 5000,
            label: "Minimun Cashflow",
            labelFontStyle: "italic",
            labelPlacement: "outside",
            showOnTop: true,
          },
        ],
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
          type: "stackedColumn",
          name: "เงินรับรวม",
          showInLegend: true,
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint1,
        },
        {
          type: "stackedColumn",
          name: "เงินจ่ายรวม",
          showInLegend: true,
          xValueFormatString: "MMMM YYYY",
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint2,
        },
        {
          type: "spline",
          indexLabel: "{y} ลบ.",
          lineThickness: 4,
          color: "#ffbe0d",
          lineDashType: "dash",
          name: "เงินหมุนเวียนปลายงวด",
          markerBorderColor: "white",
          markerBorderThickness: 2,
          showInLegend: true,
          yValueFormatString: "#,##0",
          dataPoints: datapoint4,
        },
        {
          type: "spline",
          lineThickness: 4,
          color: "#692dff",
          name: "ผลจำลอง CSF",
          markerBorderColor: "white",
          markerBorderThickness: 2,
          showInLegend: true,
          yValueFormatString: "MB#,##0",
          dataPoints: datapoint3,
        },
      ],
    };
    // console.log(options);
    return (
      <div className="chart">
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}

// function updateChart() {
// 	var boilerColor, deltaY, yVal;
// 	var dps = chart.options.data[0].dataPoints;
// 	for (var i = 0; i < dps.length; i++) {
// 		deltaY = Math.round(2 + Math.random() *(-2-2));
// 		yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
// 		monthColor1 = datapoint1.x > month ? "#35cdd9" : yVal <= 170 ? "#b9eef2" : null;
// 		dps[i] = {label: "Boiler "+(i+1) , y: yVal, color: boilerColor};
// 	}
// 	chart.options.data[0].dataPoints = dps;
// 	chart.render();
// };
// updateChart();

export default NetCashChart;

import CanvasJSReact from "../canvasjs-2.3.2/canvasjs.react";
import React, { Component } from "react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RevCashStackedBarChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Evening Sales in a Restaurant",
      },
      axisX: {
        valueFormatString: "MMMM",
      },
      axisY: {
        prefix: "$",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "stackedBar",
          name: "Meals",
          showInLegend: "true",
          xValueFormatString: "DD, MMM",
          yValueFormatString: "$#,##0",
          dataPoints: [
            { x: "Jan", y: 56 },
            { x: "Feb", y: 45 },
            { x: "Mar", y: 71 },
          ],
        },
        {
          type: "stackedBar",
          name: "Snacks",
          showInLegend: "true",
          xValueFormatString: "DD, MMM",
          yValueFormatString: "$#,##0",
          dataPoints: [
            { x: "Jan", y: 86 },
            { x: "Feb", y: 95 },
            { x: "Mar", y: 71 },
          ],
        },
        {
          type: "stackedBar",
          name: "Drinks",
          showInLegend: "true",
          xValueFormatString: "DD, MMM",
          yValueFormatString: "$#,##0",
          dataPoints: [
            { x: "test1", y: 48 },
            { x: "test2", y: 45 },
            { x: "test3", y: 41 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default RevCashStackedBarChart;

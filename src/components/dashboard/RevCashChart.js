import CanvasJSReact from "../canvasjs-2.3.2/canvasjs.react";
import React, { Component } from "react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;
class RevCashChart extends Component {
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
  dataTransformForStackcolumn = () => {
    const dataPoints = this.props.dataPoints;
    let data = [];
    for (let i = 0; i < dataPoints.length; i++) {
      data.push({
        type: "stackedColumn",
        name: dataPoints[i]["name"],
        showInLegend: true,
        // yValueFormatString: "B#,###M",
        yValueFormatString: "MB####",
        dataPoints: dataPoints[i]["datapoints"],
      });
    }
    return data;
  };

  render() {
    const data = this.dataTransformForStackcolumn();
    // console.log(this.props);

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: this.props.graph_name,
        fontFamily: "verdana",
      },
      axisY: {
        title: "Million Bath",
        prefix: "MB",
        suffix: "",
      },
      toolTip: {
        shared: true,
        reversed: true,
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: data,
    };
    return (
      <div className="chart">
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default RevCashChart;

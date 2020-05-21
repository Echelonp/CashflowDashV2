import CanvasJSReact from "../canvasjs-2.3.2/canvasjs.react";
import React, { Component } from "react";

// I created this component same as RevCashChart because I need the graph of revIn and revEx
// show in difference color set, so the only different parameter is "colorset"
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
class RevCashChartEx extends Component {
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
      zoomEnabled: true,
      panEnabled: true,
      colorSet: "colorSet2",

      title: {
        text: this.props.graph_name,
        fontFamily: "verdana",
        fontSize: 18,
      },
      axisX: {
        valueFormatString: "MMMM",
        labelFontSize: 18,
        labelFontColor: "#d81b60",
      },
      axisY: {
        // title: "Million Bath",
        prefix: "ลบ.",
        suffix: "",
      },
      toolTip: {
        shared: true,
        reversed: false,
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "center",
        reversed: false,
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
export default RevCashChartEx;

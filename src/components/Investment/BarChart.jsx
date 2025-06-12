import React from "react";
import Chart from "react-google-charts";
const round2Fixed = (value) => {
  return +(Math.round(value + "e+2") + "e-2");
};

const BarChart = ({ portfolioData, listId }) => {
  const PortofolioReturns = portfolioData[listId]["portfolio_returns"];
  const BenchMarkReturns = portfolioData[listId]["benchmark_returns"];

  return (
    <div style={{ paddingTop: ".2em" }}>
      <Chart
  width={"100%"}
  height={"240px"} // slightly increased height
  chartType="ColumnChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      "",
      "LotusDew",
      { role: "annotation", type: "number" },
      "Nifty Smallcap 100",
      { role: "annotation", type: "number" },
    ],
    [
      "3 Months",
      Number(round2Fixed(PortofolioReturns["3_m_trailing"] * 100)),
      Number(round2Fixed(PortofolioReturns["3_m_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["3_m_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["3_m_trailing"] * 100)),
    ],
    [
      "6 Months",
      Number(round2Fixed(PortofolioReturns["6_m_trailing"] * 100)),
      Number(round2Fixed(PortofolioReturns["6_m_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["6_m_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["6_m_trailing"] * 100)),
    ],
    [
      "1 Year",
      Number(round2Fixed(PortofolioReturns["1_y_trailing"] * 100)),
      Number(round2Fixed(PortofolioReturns["1_y_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["1_y_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["1_y_trailing"] * 100)),
    ],
    [
      "5 Year Annualised",
      Number(round2Fixed(PortofolioReturns["5_y_trailing"] * 100)),
      Number(round2Fixed(PortofolioReturns["5_y_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["5_y_trailing"] * 100)),
      Number(round2Fixed(BenchMarkReturns["5_y_trailing"] * 100)),
    ],
  ]}
  options={{
    colors: ["#DB2955", "#605AA5"],
    chart: {
      title: "Portfolio vs Benchmark",
      subtitle: "Trailing Returns",
      titleTextStyle: {
        fontSize: 20,
        bold: true,
        color: "#333",
      },
      subtitleTextStyle: {
        fontSize: 18,
        bold: true,
        color: "#555",
      },
    },
    legend: {
      position: "top",
      textStyle: {
        fontSize: 16,
        bold: true,
        color: "#444",
      },
    },
    hAxis: {
      title: "Time Period",
      titleTextStyle: {
        fontSize: 16,
        bold: true,
        color: "#333",
      },
      textStyle: {
        fontSize: 14,
        bold: true,
        color: "#444",
      },
    },
    vAxis: {
      title: "Returns (%)",
      titleTextStyle: {
        fontSize: 16,
        bold: true,
        color: "#333",
      },
      textStyle: {
        fontSize: 14,
        bold: true,
        color: "#444",
      },
      gridlines: {
        color: "#ccc",
        count: 4,
      },
    },
    annotations: {
      textStyle: {
        fontSize: 16,
        bold: true,
        color: "#222",
      },
    },
    bars: "vertical",
    backgroundColor: "#f9f9f9",
    chartArea: {
      backgroundColor: "#fff",
      left: 60,
      top: 30,
      bottom: 60,
      right: 20,
    },
    tooltip: { trigger: "none" },
    enableInteractivity: false,
  }}
  rootProps={{ "data-testid": "2" }}
/>


    </div>
  );
};

export default BarChart;

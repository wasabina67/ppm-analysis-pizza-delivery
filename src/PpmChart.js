import { Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PpmChart = () => {
  const data = {
    datasets: [
      {
        label: "問題児",
        data: [
          { x: 20, y: 80, label: "Area A" },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "花形",
        data: [
          { x: 80, y: 80, label: "Area b" },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "負け犬",
        data: [
          { x: 20, y: 20, label: "Area C" },
        ],
        backgroundColor: "rgba(201, 203, 207, 0.6)",
      },
      {
        label: "金のなる木",
        data: [
          { x: 80, y: 20, label: "Area D" },
        ],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "ppm-analysis",
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.raw.label || "";
            return `${label}: (${context.raw.x}, ${context.raw.y})`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "市場占有率",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "市場成長率",
        },
      },
    },
    layout: {
      padding: 20,
    },
  };

  return <Scatter data={data} options={options} />;
};

export default PpmChart;

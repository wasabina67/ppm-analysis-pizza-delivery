import { Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PpmChart = () => {
  const data = {
    datasets: [
      {
        label: "Areas",
        data: [
          { x: 20, y: 80, label: "Area A" },
        ],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "a",
        data: [
          { x: 80, y: 80, label: "a" },
        ],
        backgroundColor: "",
      },
      {
        label: "b",
        data: [
          { x: 20, y: 20, label: "b" },
        ],
        backgroundColor: "",
      },
      {
        label: "c",
        data: [
          { x: 80, y: 20, label: "c" },
        ],
        backgroundColor: "",
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

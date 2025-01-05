import { Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PpmChart = () => {
  const data = {
    datasets: [
      {
        label: "問題児",
        data: [
          { x: 25, y: 50, label: "Product A" },
          { x: 30, y: 60, label: "Product B" },
          { x: 20, y: 55, label: "Product C" },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "花形",
        data: [
          { x: 75, y: 50, label: "Product D" },
          { x: 80, y: 65, label: "Product E" },
          { x: 70, y: 60, label: "Product F" },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "負け犬",
        data: [
          { x: 25, y: 50, label: "Product A" },
          { x: 30, y: 60, label: "Product B" },
          { x: 20, y: 55, label: "Product C" },
          { x: 75, y: 50, label: "Product D" },
          { x: 80, y: 65, label: "Product E" },
          { x: 70, y: 60, label: "Product F" },
          { x: 25, y: -50, label: "Product G" },
          { x: 20, y: -60, label: "Product H" },
          { x: 15, y: -55, label: "Product I" },
          { x: 75, y: -50, label: "Product J" },
          { x: 80, y: -60, label: "Product K" },
          { x: 70, y: -55, label: "Product L" },
        ],
        backgroundColor: "rgba(201, 203, 207, 0.6)",
      },
      {
        label: "金のなる木",
        data: [
          { x: 75, y: -50, label: "Product J" },
          { x: 80, y: -60, label: "Product K" },
          { x: 70, y: -55, label: "Product L" },
        ],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "ppm-analysis-pizza-delivery",
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
        min: -100,
        max: 100,
        title: {
          display: true,
          text: "市場成長率",
        },
      },
    },
    elements: {
      point: {
        radius: 10,
        hoverRadius: 15,
      },
    },
    layout: {
      padding: 20,
    },
  };

  return <Scatter data={data} options={options} />;
};

export default PpmChart;

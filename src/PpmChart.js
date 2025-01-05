import { Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PpmChart = () => {
  const data = {
    datasets: [
      {
        label: "負け犬",
        data: [
          { x: 25, y: 50, label: "Area A" },
          { x: 30, y: 60, label: "Area B" },
          { x: 20, y: 55, label: "Area C" },
          { x: 75, y: 50, label: "Area D" },
          { x: 80, y: 65, label: "Area E" },
          { x: 70, y: 60, label: "Area F" },
          { x: 25, y: -50, label: "Area G" },
          { x: 20, y: -60, label: "Area H" },
          { x: 15, y: -55, label: "Area I" },
          { x: 75, y: -50, label: "Area J" },
          { x: 80, y: -60, label: "Area K" },
          { x: 70, y: -55, label: "Area L" },
        ],
        backgroundColor: "rgba(201, 203, 207, 0.6)",
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

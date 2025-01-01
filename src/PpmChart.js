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
          { x: 80, y: 80, label: "Area B" },
          { x: 20, y: 20, label: "Area C" },
          { x: 80, y: 20, label: "Area D" },
        ],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.raw.label || "";
            return `${label}: (${context.raw.x}, ${context.raw.y})`;
          },
        },
      },
    },
  };

  return <Scatter data={data} options={options} />;
};

export default PpmChart;

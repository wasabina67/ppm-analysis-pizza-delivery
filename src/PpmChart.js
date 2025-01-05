import { Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PpmChart = () => {
  const data = {
    datasets: [
      {
        label: "Area",
        data: [
          { x: 2.1, y: 5.0, label: "桜台区" },
          { x: 1.1, y: -20.0, label: "青葉市" },
          { x: 3.8, y: 3.0, label: "光陽区" },
          { x: 3.5, y: 25.0, label: "緑風市" },
          { x: 0.8, y: -3.0, label: "富士見区" },
          { x: 0.6, y: 30.0, label: "星野市" },
          { x: 4.3, y: 4.0, label: "海風区" },
          { x: 1.3, y: -15.0, label: "虹ヶ丘市" },
          { x: 2.4, y: 2.0, label: "銀河区" },
          { x: 1.3, y: 20.0, label: "翠湖市" },
          { x: 3.3, y: -1.0, label: "陽光区" },
          { x: 0.4, y: -25.0, label: "朝日市" },
          { x: 3.1, y: 3.0, label: "月影区" },
          { x: 1.4, y: 15.0, label: "霞ヶ丘市" },
          { x: 1.9, y: -2.0, label: "風雅区" },
          { x: 0.7, y: 35.0, label: "瑞穂市" },
          { x: 2.8, y: 4.0, label: "翠嵐区" },
          { x: 1.2, y: -10.0, label: "煌星市" },
          { x: 3.7, y: 5.0, label: "翠海区" },
          { x: 0.9, y: 25.0, label: "陽炎市" },
          { x: 2.0, y: -2.0, label: "蒼空区" },
          { x: 1.4, y: -20.0, label: "霞光市" },
          { x: 4.6, y: 3.0, label: "煌嵐区" },
          { x: 1.3, y: 30.0, label: "翠月市" },
          { x: 3.1, y: -1.0, label: "陽流区" },
          { x: 1.2, y: -15.0, label: "瑞雲市" },
          { x: 2.7, y: 4.0, label: "星霜区" },
          { x: 1.0, y: 20.0, label: "煌波市" },
          { x: 2.2, y: -2.0, label: "翠光区" },
          { x: 2.4, y: -25.0, label: "陽炎市" },
          { x: 1.2, y: 3.0, label: "星風市" },
          { x: 1.9, y: 10.0, label: "瑞風区" },
          { x: 3.9, y: -2.0, label: "煌陽市" },
          { x: 0.5, y: -20.0, label: "翠陽区" },
          { x: 2.6, y: 4.0, label: "星光市" },
          { x: 1.2, y: -15.0, label: "陽光区" },
          { x: 3.0, y: 3.0, label: "瑞星市" },
          { x: 1.1, y: 25.0, label: "煌風区" },
          { x: 2.1, y: -2.0, label: "翠陽市" },
          { x: 4.6, y: 20.0, label: "星嵐区" },
          { x: 1.2, y: 3.0, label: "陽星市" },
          { x: 1.7, y: -10.0, label: "瑞光区" },
          { x: 4.5, y: 4.0, label: "煌月市" },
          { x: 0.8, y: -20.0, label: "翠風区" },
          { x: 2.4, y: -2.0, label: "星陽市" },
          { x: 2.1, y: 30.0, label: "陽星区" },
          { x: 0.4, y: 25.0, label: "瑞陽市" },
          { x: 0.3, y: -33.3, label: "煌星区" },
          { x: 0.8, y: 25.0, label: "霧峰区" },
          { x: 1.1, y: 20.0, label: "光瀬市" },
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
        max: 5,
        title: {
          display: true,
          text: "市場占有率",
        },
      },
      y: {
        min: -60,
        max: 60,
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

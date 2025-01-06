import { Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PpmChart = () => {
  const data = {
    datasets: [
      {
        label: "Area",
        data: [
          { label: "桜台区", x: 2.1, y: 5.0, amount1: 125000, amount2: 131250 },
          { label: "青葉市", x: 1.1, y: -20.0, amount1: 89000, amount2: 71200 },
          { label: "光陽区", x: 3.8, y: 3.0, amount1: 230000, amount2: 236900 },
          { label: "緑風市", x: 3.5, y: 25.0, amount1: 175000, amount2: 218750 },
          { label: "富士見区", x: 0.8, y: -3.0, amount1: 54000, amount2: 52380 },
          { label: "星野市", x: 0.6, y: 30.0, amount1: 31000, amount2: 40300 },
          { label: "海風区", x: 4.3, y: 4.0, amount1: 260000, amount2: 270400 },
          { label: "虹ヶ丘市", x: 1.3, y: -15.0, amount1: 98000, amount2: 83300 },
          { label: "銀河区", x: 2.4, y: 2.0, amount1: 145000, amount2: 147900 },
          { label: "翠湖市", x: 1.3, y: 20.0, amount1: 67000, amount2: 80400 },
          { label: "陽光区", x: 3.3, y: -1.0, amount1: 210000, amount2: 207900 },
          { label: "朝日市", x: 0.4, y: -25.0, amount1: 34000, amount2: 25500 },
          { label: "月影区", x: 3.1, y: 3.0, amount1: 190000, amount2: 195700 },
          { label: "霞ヶ丘市", x: 1.4, y: 15.0, amount1: 75000, amount2: 86250 },
          { label: "風雅区", x: 1.9, y: -2.0, amount1: 120000, amount2: 117600 },
          { label: "瑞穂市", x: 0.7, y: 35.0, amount1: 30000, amount2: 40500 },
          { label: "翠嵐区", x: 2.8, y: 4.0, amount1: 165000, amount2: 171600 },
          { label: "煌星市", x: 1.2, y: -10.0, amount1: 80000, amount2: 72000 },
          { label: "翠海区", x: 3.7, y: 5.0, amount1: 220000, amount2: 231000 },
          { label: "陽炎市", x: 0.9, y: 25.0, amount1: 45000, amount2: 56250 },
          { label: "蒼空区", x: 2.0, y: -2.0, amount1: 130000, amount2: 127400 },
          { label: "霞光市", x: 1.4, y: -20.0, amount1: 105000, amount2: 84000 },
          { label: "煌嵐区", x: 4.6, y: 3.0, amount1: 280000, amount2: 288400 },
          { label: "翠月市", x: 1.3, y: 30.0, amount1: 60000, amount2: 78000 },
          { label: "陽流区", x: 3.1, y: -1.0, amount1: 195000, amount2: 193050 },
          { label: "瑞雲市", x: 1.2, y: -15.0, amount1: 85000, amount2: 72250 },
          { label: "星霜区", x: 2.7, y: 4.0, amount1: 160000, amount2: 166400 },
          { label: "煌波市", x: 1.0, y: 20.0, amount1: 50000, amount2: 60000 },
          { label: "翠光区", x: 2.2, y: -2.0, amount1: 140000, amount2: 137200 },
          { label: "陽炎市", x: 2.4, y: -25.0, amount1: 200000, amount2: 150000 },
          { label: "星風市", x: 1.2, y: 3.0, amount1: 72000, amount2: 74160 },
          { label: "瑞風区", x: 1.9, y: 10.0, amount1: 110000, amount2: 121000 },
          { label: "煌陽市", x: 3.9, y: -2.0, amount1: 250000, amount2: 245000 },
          { label: "翠陽区", x: 0.5, y: -20.0, amount1: 40000, amount2: 32000 },
          { label: "星光市", x: 2.6, y: 4.0, amount1: 155000, amount2: 161200 },
          { label: "陽光区", x: 1.2, y: -15.0, amount1: 90000, amount2: 76500 },
          { label: "瑞星市", x: 3.0, y: 3.0, amount1: 180000, amount2: 185400 },
          { label: "煌風区", x: 1.1, y: 25.0, amount1: 53000, amount2: 66250 },
          { label: "翠陽市", x: 2.1, y: -2.0, amount1: 135000, amount2: 132300 },
          { label: "星嵐区", x: 4.6, y: 20.0, amount1: 240000, amount2: 288000 },
          { label: "陽星市", x: 1.2, y: 3.0, amount1: 70000, amount2: 72100 },
          { label: "瑞光区", x: 1.7, y: -10.0, amount1: 115000, amount2: 103500 },
          { label: "煌月市", x: 4.5, y: 4.0, amount1: 270000, amount2: 280800 },
          { label: "翠風区", x: 0.8, y: -20.0, amount1: 65000, amount2: 52000 },
          { label: "星陽市", x: 2.4, y: -2.0, amount1: 150000, amount2: 147000 },
          { label: "陽星区", x: 2.1, y: 30.0, amount1: 100000, amount2: 130000 },
          { label: "瑞陽市", x: 0.4, y: 25.0, amount1: 20000, amount2: 25000 },
          { label: "煌星区", x: 0.3, y: -33.3, amount1: 30000, amount2: 20000 },
          { label: "霧峰区", x: 0.8, y: 25.0, amount1: 40000, amount2: 50000 },
          { label: "光瀬市", x: 1.1, y: 20.0, amount1: 55000, amount2: 66000 },
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
            const amount = context.raw.amount2 || "";
            // return `${label}: (${context.raw.x}, ${context.raw.y})`;
            return `${label}: ${amount}`;
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
          text: "Share",
        },
      },
      y: {
        min: -60,
        max: 60,
        title: {
          display: true,
          text: "Growth",
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

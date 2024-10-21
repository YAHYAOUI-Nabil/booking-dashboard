// src/PieChartComponent.js

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieUI = () => {
  const data = {
    labels: ["Company A", "Company B", "Company C"],
    datasets: [
      {
        label: "Market Share",
        data: [40, 25, 35],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Market Share Distribution",
      },
    },
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieUI;

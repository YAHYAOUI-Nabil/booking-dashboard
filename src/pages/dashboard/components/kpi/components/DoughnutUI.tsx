// src/DoughnutChartComponent.js

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutUI = () => {
  const data = {
    labels: ["North America", "Europe", "Asia", "Others"],
    datasets: [
      {
        label: "Sales by Region",
        data: [55, 25, 15, 5],
        backgroundColor: [
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Sales by Region",
      },
    },
  };

  return (
    <div>
      <h2>Doughnut Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutUI;

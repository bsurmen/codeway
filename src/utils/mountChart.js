import Chart from "chart.js";

export const mountChart = (id, date, total, label) => {
  var ctx = document.getElementById(id).getContext("2d");
  var gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(52, 55,103, 1)");
  gradient.addColorStop(1, "rgba(52,55,103,.1)");

  new Chart(document.getElementById(id), {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          label: label,
          data: total,
          backgroundColor: gradient,
          pointBackgroundColor: "#b15fe5",
          pointHoverBackgroundColor: "#b05eea",
          pointHoverRadius: 6,
          spanGaps: true,
          borderColor: "#b15fe5",
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      scales: {
        yAxes: [
          {
            stacked: true,
            type: "linear",
            position: "left",

            tick: { min: -100 },
            gridLines: {
              color: "#352f4d",
              circular: true,
              lineWidth: 3,
              tickMarkLength: 20,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "#352f4d",
              circular: true,
              lineWidth: 3,
              tickMarkLength: 20,
            },
          },
        ],
      },
    },
  });
};

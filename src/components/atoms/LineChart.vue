<template>
  <canvas :id="id" width="500" height="65"></canvas>
</template>
<script>
import Chart from "chart.js";

export default {
  name: "LineChart",
  props: {
    id: { type: String, required: true },
    label: {
      type: String,
    },
    chartData: { type: Array },
    options: {
      type: Object,
    },
  },
  mounted() {
    const dates = this.chartData.map((d) => d.date).reverse();
    const totals = this.chartData.map((d) => d.total).reverse();

    var ctx = document.getElementById(this.id).getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(52, 55,103, 1)");
    gradient.addColorStop(1, "rgba(52,55,103,.1)");

    new Chart(document.getElementById(this.id), {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            lineTension: 0.2,
            label: this.label,
            data: totals,
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
      options: this.options,
    });
  },
};
</script>

<style>
</style>

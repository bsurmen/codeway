<template>
  <main class="home">
    <section class="home__info">
      <info-card
        v-for="data in cardDatas"
        :key="data.cadData"
        :iconColor="data.iconColor"
        :cardName="data.cardName"
        :cardData="data.cardData"
        :subName="data.subName"
        :icon="data.icon"
      />
    </section>
    <section class="home__chart">
      <line-chart
        id="active-users"
        :chartData="positive"
        :options="chartOptions"
        label="Active Users"
      />
    </section>

    <section class="home__chart">
      <line-chart
        id="downloads"
        :chartData="positive"
        :options="chartOptions"
        label="Active Users"
      />
    </section>
  </main>
</template>

<script>
import InfoCard from "../molecules/InfoCard";
import LineChart from "../atoms/LineChart";

// import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      positive: [
        { total: 2053, date: "06-05-2020" },
        { total: 1053, date: "15-09-2020" },
        { total: 2593, date: "20-07-2020" },
        { total: 3053, date: "08-12-2020" },
      ],
      chartOptions: {
        responsive: true,
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
      cardDatas: [
        {
          icon: "fas fa-user",
          iconColor: "--apricot",
          cardName: "Active Users",
          cardData: "1234",
          subName: "Live user count",
        },
        {
          icon: "fas fa-download",
          iconColor: "--purple",
          cardName: "Downloads",
          cardData: "5324",
          subName: "Total install count",
        },
        {
          icon: "far fa-eye",
          iconColor: "--turquois",
          cardName: "Active Users",
          cardData: "17.1 mins",
          subName: "Total view count",
        },
        {
          icon: "fas fa-download",
          iconColor: "--red",
          cardName: "Download",
          cardData: "2423",
          subName: "Total paying user count",
        },
      ],
    };
  },
  components: {
    infoCard: InfoCard,
    lineChart: LineChart,
  },

  async created() {
    // const { data } = await axios.get(
    //   "https://codeway-dummy-rest-api.herokuapp.com/someapp/daily/activeUsers"
    // );
    // const ss = data.payload.data;
    // for (let d in ss) {
    //   const yyyy = d.slice(0, 4);
    //   const mm = d.slice(5, 6);
    //   const dd = d.slice(6, 8);
    //   const today = dd + "-" + mm + "-" + yyyy;
    //   this.positive.push({ total: ss[d], date: today });
    // }
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__info {
    margin: 0 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: 1em;
  }

  &__chart {
    margin: 2em 1em;
  }
}
</style>

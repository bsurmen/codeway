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
        :id="data.id"
      />
    </section>

    <section class="home__chart">
      <div class="home__chart__info">
        <i class="fad fa-chart-bar"></i>
        <h4>Daily Active Users</h4>
      </div>
      <line-chart-active id="active-users" label="Users" />
    </section>

    <section class="home__chart">
      <div class="home__chart__info">
        <i class="fad fa-chart-bar"></i>
        <h4>Daily Installs</h4>
      </div>
      <line-chart id="downloads" label="Installs" />
    </section>
  </main>
</template>

<script>
import InfoCard from "../molecules/InfoCard";
import LineChart from "../atoms/LineChart";
import LineChartActive from "../atoms/LineChartActive";
import { ref, onMounted, computed } from "vue";
// import * as firebase from "firebase/app";
// import "firebase/auth";

// import axios from "axios";

export default {
  name: "Home",
  setup() {
    const activeUsers = ref([]);
    const downloads = ref([]);
    const sessionDuration = ref([]);
    const paidUsers = ref([]);

    const cardDatas = computed(() => [
      {
        icon: "fas fa-user",
        iconColor: "--apricot",
        cardName: "Active Users",
        cardData: Object.values(activeUsers.value)[0],
        subName: "Live user count",
      },
      {
        icon: "fas fa-download",
        iconColor: "--purple",
        cardName: "Downloads",
        cardData: Object.values(downloads.value)[0],
        subName: "Total install count",
      },
      {
        id: "duration",
        icon: "far fa-eye",
        iconColor: "--turquois",
        cardName: "Avg. Session Duration",
        cardData: Object.values(sessionDuration.value)[0],
        subName: "Total view count",
      },
      {
        icon: "fas fa-download",
        iconColor: "--red",
        cardName: "Paid Users",
        cardData: Object.values(paidUsers.value)[0],
        subName: "Total paying user count",
      },
    ]);

    const getInfoCardData = async (url, valueType) => {
      fetch(`https://codeway-dummy-rest-api.herokuapp.com/someapp${url}`)
        .then((res) => res.json())
        .then((data) => {
          valueType.value = data.payload;
        });
    };

    onMounted(() => {
      getInfoCardData("/rt/activeUsers", activeUsers);
      getInfoCardData("/rt/downloads", downloads);
      getInfoCardData("/rt/sessionDuration", sessionDuration);
      getInfoCardData("/rt/paidUsers", paidUsers);
    });

    return {
      activeUsers,
      downloads,
      sessionDuration,
      paidUsers,
      cardDatas,
    };
  },

  components: {
    infoCard: InfoCard,
    lineChart: LineChart,
    lineChartActive: LineChartActive,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1em;

  height: calc(100vh - 65px);

  @include lt-md {
    grid-template-rows: minmax(0, 1fr);
    margin-bottom: 1em;
  }

  &__info {
    margin: 0 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: 1em;

    @include lt-md {
      grid-template-columns: repeat(2, 1fr);
    }
    @include lt-sm {
      grid-template-columns: 1fr;
    }
  }

  &__chart {
    margin: 0 1em;
    background-color: $bunting;
    padding: 1em;
    height: max-content;
    border-radius: 8px;

    @include lt-md {
      padding: 0.5em 0.1em;
    }

    &__info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 0 1.5rem 8px !important;

      h4 {
        font-weight: 300;
        margin: 0;
        margin-left: 0.8em;
        color: $white;
      }

      i {
        color: $fuchsia-pink;
      }
    }
  }
}
</style>

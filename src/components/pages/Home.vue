<template>
  <main class="home">
    <section class="home__info">
      <info-card
        v-for="data in cardData"
        :key="data.cadData"
        :iconColor="data.iconColor"
        :cardName="data.cardName"
        :cardData="data.cardData"
        :subName="data.subName"
        :icon="data.icon"
        :id="data.id"
      />
    </section>

    <app-chart
      v-for="(data, index) in chartData"
      :key="index"
      :title="data.title"
      :label="data.label"
      :url="data.url"
      :id="data.id"
    />
  </main>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "../../services/axios";
import URL from "../../lib/url";

import InfoCard from "../molecules/InfoCard";
import Chart from "../molecules/Chart";

export default {
  name: "Home",
  components: {
    infoCard: InfoCard,
    appChart: Chart,
  },
  setup() {
    const activeUsers = ref([]);
    const downloads = ref([]);
    const avgSessionDuration = ref([]);
    const paidUsers = ref([]);

    const chartData = ref([
      {
        title: "Daily Active Users",
        label: "Users",
        url: URL.chartActiveUsers,
        id: "active-users",
      },
      {
        title: "Daily Installs",
        label: "Installs",
        url: URL.chartDownloads,
        id: "downloads",
      },
    ]);

    const cardData = computed(() => [
      {
        icon: "fas fa-user",
        iconColor: "--apricot",
        cardName: "Active Users",
        cardData: activeUsers.value.activeUsers,
        subName: "Live user count",
      },
      {
        icon: "fas fa-download",
        iconColor: "--purple",
        cardName: "Downloads",
        cardData: downloads.value.downloads,
        subName: "Total install count",
      },
      {
        id: "duration",
        icon: "far fa-eye",
        iconColor: "--turquois",
        cardName: "Avg. Session Duration",
        cardData: avgSessionDuration.value.avgSessionDuration,
        subName: "Total view count",
      },
      {
        icon: "fas fa-download",
        iconColor: "--red",
        cardName: "Paid Users",
        cardData: paidUsers.value.paidUsers,
        subName: "Total paying user count",
      },
    ]);

    const getInfoCardData = async (url, valueType) => {
      const { data } = await axios.get(url);
      valueType.value = data.payload;
    };

    onMounted(() => {
      getInfoCardData(URL.activeUsers, activeUsers);
      getInfoCardData(URL.downloads, downloads);
      getInfoCardData(URL.avgSessionDuration, avgSessionDuration);
      getInfoCardData(URL.paidUsers, paidUsers);
    });

    return {
      activeUsers,
      downloads,
      avgSessionDuration,
      paidUsers,
      cardData,
      chartData,
      URL,
    };
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
}
</style>

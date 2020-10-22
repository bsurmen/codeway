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
    <section class="home__chart"></section>
    <section class="home__chart"></section>
  </main>
</template>

<script>
import InfoCard from "../molecules/InfoCard";

export default {
  name: "Home",
  data() {
    return {
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
    background-color: red;
    min-height: 300px;
    margin: 1em;
    width: calc(100% - 2em);
  }
}
</style>
